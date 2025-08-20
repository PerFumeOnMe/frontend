interface CardData {
  id: string;
  title: string;
  ingredients: string[];
  keywords: string[];
  description: string;
}

const NoteCard = ({
  note,
  isActive,
  position,
  onClick,
  maxHeight,
}: {
  note: CardData;
  isActive: boolean;
  position: "left" | "center" | "right";
  onClick: () => void;
  maxHeight: number;
}) => {
  // 기존 디자인 유지 - 위치별 스타일
  const getCardStyle = () => {
    if (isActive) {
      return "scale-100";
    }

    switch (position) {
      case "left":
        return "scale-100";
      case "right":
        return "scale-100";
      default:
        return "scale-100";
    }
  };

  return (
    <div
      className={`
        w-55 p-5 rounded-lg cursor-pointer
        shadow-[0_2px_10px_-1px_rgba(0,0,0,0.12)]
        hover:shadow-[0_4px_15px_-1px_rgba(0,0,0,0.15)]
        bg-white
        ${getCardStyle()}
      `}
      onClick={onClick}
      style={{
        height: `${maxHeight}px`,
        transformStyle: "preserve-3d",
      }}
    >
      <div className="flex flex-col items-center justify-center h-min">
        {/* 제목과 구분선 */}
        <div className="w-full text-center mb-3">
          <h3
            className={`
            w-full border-b border-grayscale-400 pb-2.5 text-body3 text-center
            transition-colors duration-300
          `}
          >
            {note.title}
          </h3>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center gap-2">
          <div className="w-full">
            <div className="flex items-start justify-center flex-wrap">
              <span className="text-body3 text-grayscale-900 font-semibold mr-3 flex-shrink-0">
                원료
              </span>
              {note.ingredients.map((ingredient, index) => (
                <span
                  key={index}
                  className="text-body3 text-grayscale-900 mr-1"
                >
                  {ingredient}
                </span>
              ))}
            </div>
          </div>

          {/* 연상단어 */}
          <div className="w-full">
            <div className="flex items-start justify-center flex-wrap">
              <span className="text-body3 text-grayscale-900 font-semibold mr-3 flex-shrink-0">
                연상단어
              </span>
              {note.keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="text-body3 text-grayscale-900 mr-1"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* 설명 */}
          <div className="flex items-center justify-center text-center">
            <p className="text-caption1 text-grayscale-900 text-center mt-1">
              {note.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
