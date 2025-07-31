import Cylinder from "../../assets/PerfumeLab/cylinder.png";
import type { Note } from "../../types/note";
import { noteOptions } from "../../types/noteOptions";
import CylinderEmpty from "../../assets/PerfumeLab/cylinder_empty.png";

const CylinderItem = ({
  noteType,
  koreanNoteType,
  isSelected,
  noteId,
}: {
  noteType: string;
  koreanNoteType: Note;
  isSelected: boolean;
  noteId?: string;
}) => {
  const getNoteImage = (noteType: Note, noteId: string): string | undefined => {
    const note = noteOptions[noteType]?.find((option) => option.id === noteId);
    return note?.img;
  };

  const noteImage = noteId ? getNoteImage(koreanNoteType, noteId) : undefined;

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`relative transition-transform duration-500 ease-in-out ${
          isSelected ? "transform -translate-y-8" : ""
        }`}
      >
        {/* 인디케이터 */}
        <div
          className={`w-12 h-12 rounded-full border-1 border-white text-white text-caption2 flex items-center justify-center transition-all duration-300 mb-3 ${
            isSelected ? "bg-[#6401BB]/40" : "bg-[#FBFBFB]/20"
          }`}
        >
          {noteType}
        </div>

        {/* 실린더 */}
        <div className="relative">
          <img
            src={Cylinder}
            alt={`${noteType} Cylinder`}
            className="w-12 object-cover"
          />

          <div className="absolute left-2 right-2 bottom-0">
            {/* 빈 실린더 배경 */}
            <img
              src={CylinderEmpty}
              alt="empty"
              className="w-full h-full object-cover"
            />

            {/* 노트 이미지 오버레이 */}
            {isSelected && noteImage && (
              <img
                src={noteImage}
                alt={noteId}
                className="absolute inset-0 w-full h-full object-cover opacity-80 rounded-b-full"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CylinderItem;
