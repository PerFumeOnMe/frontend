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

    // 약간의 딜레이를 주어 렌더링 완료 후 측정
    const timer = setTimeout(measureHeights, 100);

    // 리사이즈 이벤트에도 대응
    window.addEventListener("resize", measureHeights);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", measureHeights);
    };
  }, [note]); // note가 변경될 때마다 재측정

  const handleCardClick = useCallback(
    (clickedCardId: string) => {
      const cards = transformNoteData();
      const clickedIndex = cards.findIndex((card) => card.id === clickedCardId);

      if (clickedIndex === -1) return;

      // 클릭된 카드의 현재 위치 계산
      const relativePosition = (clickedIndex - activeIndex + 3) % 3;

      if (relativePosition === 2) {
        // 왼쪽 카드 클릭 -> 시계 반대 방향
        setActiveIndex((prev) => (prev + cards.length - 1) % cards.length);
      } else if (relativePosition === 1) {
        // 오른쪽 카드 클릭 -> 시계 방향
        setActiveIndex((prev) => (prev + 1) % cards.length);
      }
      // 중앙 카드 클릭 시에는 아무것도 하지 않음
    },
    [transformNoteData, activeIndex]
  );

  const cards = transformNoteData();

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
          {/* 카드들을 absolute로 배치할 컨테이너 */}
          <div
            className="relative w-55"
            style={{
              transformStyle: "preserve-3d",
              height: `${maxHeight + 40}px`, // 동적 높이 적용
            }}
          >
            {/* 모든 카드를 항상 렌더링하고 transform으로만 위치 변경 */}
            {cards.map((card, index) => {
              // 현재 카드의 위치 계산
              const relativePosition = (index - activeIndex + 3) % 3;
              let position: "left" | "center" | "right";
              let isActive = false;

              if (relativePosition === 2) {
                position = "left"; // 왼쪽
              } else if (relativePosition === 0) {
                position = "center"; // 중앙 (활성)
                isActive = true;
              } else {
                position = "right"; // 오른쪽
              }

              return (
                <div
                  key={card.id}
                  ref={(el) => {
                    if (el) cardRefs.current[index] = el;
                  }}
                  className="absolute top-0 left-0"
                  style={{
                    isolation: position === "center" ? "isolate" : "auto",
                    zIndex: position === "center" ? 50 : 10,
                  }}
                >
                  <NoteCard
                    note={card}
                    isActive={isActive}
                    position={position}
                    onClick={() => handleCardClick(card.id)}
                    maxHeight={maxHeight - 25} // 최대 높이 전달
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
