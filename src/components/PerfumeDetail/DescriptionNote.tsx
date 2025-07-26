import { useState, useCallback } from "react";
import NoteCard from "./NoteCard";
import type { PerfumeDetail } from "../../types/perfume";

// 목업 데이터 (실제 API 데이터 구조와 동일)
const MOCK_PERFUME_DATA: PerfumeDetail = {
  id: 1,
  brand: "로이비 (LOIVIE)",
  name: "오 드 퍼퓸 피오니 앤 화이트 머스크",
  priceList: [{ mlcount: 50, price: 109000 }],
  keyword: "새하얀 이불,흰 비누,햇볕에 말린 수건",
  description:
    "기분 좋게 바스락 거리는 \n흰 셔츠를 입고 나선 \n바쁜 아침 도시의 거리 \n\n모던한 아름다움으로 \n자신감 넘치는 오늘의 나",
  note: {
    top: {
      ingredients: ["카시스", "자몽"],
      keywords: "포도잼, 검은베리주스",
      description:
        "아침 식빵에 바른 포도잼과 \n냉장고에서 꺼낸 진한 검은베리주스에서 풍기는 \n달콤한 과일 향",
    },
    middle: {
      ingredients: ["피오니", "불가리안 로즈"],
      keywords: "생화다발, 면원피스",
      description:
        "꽃집에서 막 꺼낸 생화다발과 \n햇빛에 말린 면원피스에서 풍기는 \n자연스러운 꽃내음",
    },
    base: {
      ingredients: ["화이트 머스크", "붓꽃"],
      keywords: "섬유유연제, 빨래바구니",
      description:
        "갓 세탁한 옷을 꺼낸 빨래바구니 속, \n섬유유연제 냄새가 은은하게 퍼지는 \n순간의 향",
    },
  },
  fragnanceType: {
    lastingPower: "4~6시간",
    diffusionRange: 4,
    diffusionPower: "강함",
  },
  gender: "여성용",
  locations: ["데이트 / 로맨틱용"],
  seasons: ["봄"],
  homePageUrl:
    "https://www.sivillage.com/goods/initDetailGoods.siv?goods_no=2306807079",
  imageURL:
    "https://image.sivillage.com/upload/C00001/goods/org/617/230907006220617.jpg?RS=600&SP=1",
  liked: false,
};

interface CardData {
  id: string;
  title: string;
  ingredients: string[];
  keywords: string[];
  description: string;
}

const DescriptionNote = ({
  perfumeData = MOCK_PERFUME_DATA,
  initialActiveIndex = 1, // TOP을 기본값으로
}: {
  perfumeData?: PerfumeDetail;
  initialActiveIndex?: number;
}) => {
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  const transformNoteData = useCallback((): CardData[] => {
    if (!perfumeData?.note) {
      return [];
    }

    const { note } = perfumeData;

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
  }, [perfumeData]);

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
