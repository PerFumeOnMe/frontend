import React from "react";
import { GoPlus, GoX } from "react-icons/go";
import type { Note } from "../../types/note";
import type { NoteOption } from "../../types/noteOptions";

interface NoteSelectionButtonProps {
  noteType: Note;
  isSelected: boolean;
  selectedValue?: string;
  selectedNoteData?: NoteOption;
  noteOptions: NoteOption[];
  onClick: () => void;
  onRemove?: () => void;
}

const NoteSelectionButton: React.FC<NoteSelectionButtonProps> = ({
  noteType,
  isSelected,
  selectedValue,
  selectedNoteData,
  onClick,
  onRemove,
}) => {
  const handleRemoveClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onRemove) {
      onRemove();
    }
  };

  // 선택된 노트의 표시 정보 가져오기
  const getDisplayInfo = () => {
    if (selectedNoteData) {
      return {
        name: selectedNoteData.krName,
        emotion: selectedNoteData.emotion,
        description: selectedNoteData.description,
        color: selectedNoteData.color,
      };
    }
    return null;
  };

  const displayInfo = getDisplayInfo();

  return (
    <button
      className={`relative flex justify-between items-center rounded-[8px] transition-all duration-200 min-h-[72px] px-4 py-3 ${
        isSelected
          ? "bg-main-10"
          : "border border-main-500 bg-[#FBFBFB]/40 border-main-500"
      }`}
      onClick={onClick}
    >
      <div className="flex items-center gap-2 flex-1">
        {isSelected && displayInfo ? (
          <div className="flex items-center gap-2 flex-1">
            <div className="flex flex-col items-start flex-1">
              {/* 첫 번째 줄: 노트 정보 */}
              <div className="text-body3 text-grayscale-1000 font-medium">
                <span>
                  {noteType} {displayInfo.emotion}{" "}
                </span>
                <span
                  style={{ color: displayInfo.color }}
                  className="font-semibold"
                >
                  {selectedValue} ({displayInfo.name})
                </span>
              </div>

              {/* 두 번째 줄: 설명 */}
              <span className="text-body3 text-grayscale-1000 mt-1">
                {displayInfo.description}
              </span>
            </div>
          </div>
        ) : (
          <span className="text-body3 text-grayscale-800">
            {noteType} 노트 선택하기
          </span>
        )}
      </div>

      {isSelected && onRemove ? (
        <GoX
          size={24}
          className="text-grayscale-400 flex-shrink-0"
          onClick={handleRemoveClick}
        />
      ) : (
        <GoPlus size={24} className="text-main-500 flex-shrink-0" />
      )}
    </button>
  );
};

export default NoteSelectionButton;
