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
}: {
  note: CardData;
  isActive: boolean;
  position: "left" | "center" | "right";
  onClick: () => void;
}) => {
  // 3D 회전 스타일 계산
  const getCardStyle = () => {
    const baseTransition =
      "transition-all duration-1000 cubic-bezier(0.4,0,0.2,1) transform-gpu";

    if (isActive) {
      return `z-50 scale-100 rotate-y-0 rotate-0 translate-x-0 translate-y-5 ${baseTransition}`;
    }

    switch (position) {
      case "left":
        return `z-10 scale-100 rotate-16 translate-x-30 translate-y-4 opacity-50 ${baseTransition}`;
      case "right":
        return `z-10 scale-100 -rotate-16 -translate-x-30 translate-y-4 opacity-50 ${baseTransition}`;
      default:
        return `z-20 scale-100 rotate-y-0 rotate-0 translate-x-0 translate-y-0 ${baseTransition}`;
    }
  };

  // 카드 배경 스타일 계산
  const getCardBackground = () => {
    return "bg-white";
  };

  return (
    <div
      className={`
        w-55 h-45 p-5 rounded-lg cursor-pointer
        shadow-[0_2px_10px_-1px_rgba(0,0,0,0.12)]
        hover:shadow-[0_4px_15px_-1px_rgba(0,0,0,0.15)]
        ${getCardStyle()}
        ${getCardBackground()}
      `}
      onClick={onClick}
      style={{
        transformStyle: "preserve-3d",
        backfaceVisibility: "visible",
      }}
    >
      <div className="flex flex-col items-center h-full">
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

        {/* 원료 */}
        <div className="w-full">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <span className="text-body3 text-grayscale-900 font-semibold">
              원료
            </span>
            {note.ingredients.map((ingredient, index) => (
              <span key={index} className="text-body3 text-grayscale-900">
                {ingredient}
              </span>
            ))}
          </div>
        </div>

        {/* 연상단어 */}
        <div className="w-full">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <span className="text-body3 text-grayscale-900 font-semibold">
              연상단어
            </span>
            {note.keywords.map((keyword, index) => (
              <span key={index} className="text-body3 text-grayscale-900">
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* 설명 */}
        <div className="flex-1 flex items-center justify-center text-center">
          <p className="text-caption1 text-grayscale-900 text-center mt-1">
            {note.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
