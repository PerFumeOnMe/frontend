import React from "react";

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
      className={`relative flex justify-center items-center py-6 border-1 rounded transition-all duration-200 ${
        isSelected
          ? "border-[#FAFAFA] bg-white/60"
          : "border-[#FAFAFA] bg-white/40 hover:bg-white/60"
      }`}
      onClick={onClick}
    >
      <span>
        {isSelected ? `${selectedValue}` : `+ ${noteType} 노트 선택하기`}
      </span>

      {/* X 버튼 - 선택된 상태일 때만 표시 */}
      {isSelected && onRemove && (
        <button
          onClick={handleRemoveClick}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full text-sm flex items-center justify-center transition-colors"
        >
          ✕
        </button>
      )}
    </button>
  );
};

export default NoteSelectionButton;
