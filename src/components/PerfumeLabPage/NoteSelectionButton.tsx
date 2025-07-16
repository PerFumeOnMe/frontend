import React from "react";
import { GoPlus, GoX } from "react-icons/go";

interface NoteSelectionButtonProps {
  noteType: string;
  isSelected: boolean;
  selectedValue?: string;
  onClick: () => void;
  onRemove?: () => void;
}

const NoteSelectionButton = ({
  noteType,
  isSelected,
  selectedValue,
  onClick,
  onRemove,
}: NoteSelectionButtonProps) => {
  const handleRemoveClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // 버튼 클릭 이벤트 전파 방지
    if (onRemove) {
      onRemove();
    }
  };

  return (
    <button
      className={`relative flex justify-between items-center border rounded-[8px] transition-all duration-200 ${
        isSelected
          ? "px-4 py-2 border-main-500 bg-white/60"
          : "px-4 py-6 border-main-500 bg-[#FBFBFB]/40 border-main-500"
      }`}
      onClick={onClick}
    >
      <span className="text-body3 text-grayscale-800">
        {isSelected ? `${selectedValue}` : `${noteType} 노트 선택하기`}
      </span>

      {/* 선택되지 않았을 때는 +, 선택되었을 때는 x */}
      {isSelected && onRemove ? (
        <GoX size={24} className="text-main-500" onClick={handleRemoveClick} />
      ) : (
        <GoPlus size={24} className="text-main-500" />
      )}
    </button>
  );
};

export default NoteSelectionButton;
