import { useState, useCallback, useRef, useEffect } from "react";
import NoteCard from "./NoteCard";
import type { PerfumeDetail } from "../../types/perfume";
import { usePerfumeNotes } from "../../hooks/usePerfumeDetail";

interface CardData {
  id: string;
  title: string;
  ingredients: string[];
  keywords: string[];
  description: string;
}

const DescriptionNote = ({
  initialActiveIndex = 1, // TOP을 기본값으로
}: {
  perfumeData?: PerfumeDetail;
  initialActiveIndex?: number;
}) => {
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
  const [maxHeight, setMaxHeight] = useState(180);
  const [rotation, setRotation] = useState(0); // 회전 각도 상태 추가
  const [isAnimating, setIsAnimating] = useState(false);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const { note } = usePerfumeNotes();

  const transformNoteData = useCallback((): CardData[] => {
    if (!note) {
      return [];
    }

    return [
      {
        id: "base",
        title: "BASE",
        ingredients: note.base.ingredients,
        keywords: note.base.keywords.split(", "),
        description: note.base.description,
      },
      {
        id: "top",
        title: "TOP",
        ingredients: note.top.ingredients,
        keywords: note.top.keywords.split(", "),
        description: note.top.description,
      },
      {
        id: "middle",
        title: "MIDDLE",
        ingredients: note.middle.ingredients,
        keywords: note.middle.keywords.split(", "),
        description: note.middle.description,
      },
    ];
  }, [note]);

  useEffect(() => {
    const measureHeights = () => {
      const heights = cardRefs.current
        .filter((ref) => ref)
        .map((ref) => ref.scrollHeight);

      if (heights.length > 0) {
        const max = Math.max(...heights, 180);
        setMaxHeight(max);
      }
    };

    const timer = setTimeout(measureHeights, 100);
    window.addEventListener("resize", measureHeights);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", measureHeights);
    };
  }, [note]);

  const handleCardClick = useCallback(
    (clickedCardId: string) => {
      if (isAnimating) return;

      const cards = transformNoteData();
      const clickedIndex = cards.findIndex((card) => card.id === clickedCardId);

      if (clickedIndex === -1) return;

      // 현재 클릭된 카드의 위치 확인
      const cardPos = getCardPosition(clickedIndex);

      if (cardPos.position === "left") {
        // 왼쪽 카드 클릭 -> 시계 반대 방향 회전
        setIsAnimating(true);
        setRotation((prev) => prev + 120);
        setActiveIndex((prev) => (prev + cards.length - 1) % cards.length);
      } else if (cardPos.position === "right") {
        // 오른쪽 카드 클릭 -> 시계 방향 회전
        setIsAnimating(true);
        setRotation((prev) => prev - 120);
        setActiveIndex((prev) => (prev + 1) % cards.length);
      }
      // 중앙 카드 클릭 시에는 아무것도 하지 않음

      if (cardPos.position !== "center") {
        setTimeout(() => {
          setIsAnimating(false);
        }, 1200);
      }
    },
    [transformNoteData, rotation, isAnimating]
  );

  const cards = transformNoteData();

  // 각 카드의 위치를 계산하는 함수
  const getCardPosition = (cardIndex: number) => {
    // 각 카드는 원형으로 120도씩 떨어져 있음
    const baseAngle = cardIndex * 120; // 0, 120, 240도
    const currentAngle = baseAngle + rotation; // 현재 회전각도 적용
    const angleInRadians = (currentAngle * Math.PI) / 180;

    // 원형 배치를 위한 계산
    const radius = 160;
    const x = Math.sin(angleInRadians) * radius;
    const z = Math.cos(angleInRadians) * radius;

    // 현재 활성 카드 판단 (가장 앞에 있는 카드)
    const normalizedAngle = ((currentAngle % 360) + 360) % 360;
    const isCenter = normalizedAngle < 60 || normalizedAngle > 300;
    const isRight = normalizedAngle >= 60 && normalizedAngle < 180;
    const isLeft = normalizedAngle >= 180 && normalizedAngle <= 300;

    let position: "left" | "center" | "right" = "center";
    if (isLeft) position = "left";
    else if (isRight) position = "right";

    return {
      x,
      z,
      position,
      isActive: isCenter,
      angle: normalizedAngle,
    };
  };

  return (
    <div className="w-full">
      {/* 헤더 */}
      <div className="flex flex-col">
        <h1 className="text-title4">노트</h1>
        <p className="text-caption1 text-grayscale-700">
          향수에서 각 원료의 향을 설명하는 말이에요.
        </p>
      </div>

      {/* 3D 카드 컨테이너 */}
      <div className="mt-8 -mx-8 flex justify-center items-center overflow-hidden">
        <div
          className="relative w-full flex items-center justify-center"
          style={{ perspective: "1200px" }}
        >
          <div
            className="relative w-55"
            style={{
              transformStyle: "preserve-3d",
              height: `${maxHeight + 60}px`,
              top: "25px",
            }}
          >
            {/* 각 카드를 원형으로 배치 */}
            {cards.map((card, cardIndex) => {
              const cardPos = getCardPosition(cardIndex);

              return (
                <div
                  key={card.id}
                  ref={(el) => {
                    if (el) cardRefs.current[cardIndex] = el;
                  }}
                  className="absolute top-0 left-1/2"
                  style={{
                    transform: `
                      translateX(-50%) 
                      translateX(${cardPos.x}px) 
                      translateZ(${cardPos.z}px)
                      ${
                        cardPos.position === "left"
                          ? "rotateY(15deg) rotateZ(-20deg)"
                          : ""
                      }
                      ${
                        cardPos.position === "right"
                          ? "rotateY(-15deg) rotateZ(20deg)"
                          : ""
                      }
                      ${
                        cardPos.position === "center"
                          ? "rotateY(0deg) rotateZ(0deg)"
                          : ""
                      }
                    `,
                    transformStyle: "preserve-3d",
                    transition: "all 1000ms cubic-bezier(0.4,0,0.2,1)",
                    zIndex: cardPos.isActive ? 50 : 10,
                    opacity: cardPos.isActive ? 1 : 0.5,
                  }}
                >
                  <NoteCard
                    note={card}
                    isActive={cardPos.isActive}
                    position={cardPos.position}
                    onClick={() => handleCardClick(card.id)}
                    maxHeight={maxHeight + 10}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionNote;
