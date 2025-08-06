import { useState, useCallback } from "react";
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
            className="relative w-55 h-55"
            style={{ transformStyle: "preserve-3d" }}
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
                  className="absolute top-0 left-0"
                  style={{
                    isolation: position === "center" ? "isolate" : "auto",
                    zIndex: position === "center" ? 50 : 10,
                  }}
                >
                  {/* 내용이 카드 사이즈를 넘어갈 경우를 대비한 디자인 수정은 추후에 진행 예정 */}
                  <NoteCard
                    note={card}
                    isActive={isActive}
                    position={position}
                    onClick={() => handleCardClick(card.id)}
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
