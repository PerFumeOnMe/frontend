import type { Note } from "../../types/note";
import { usePerfumeLab } from "../../contexts/PerfumeLabContext";

interface NoteOption {
  id: string;
  description: string;
  img: string;
  krName: string;
}

interface NoteSelectionContentProps {
  selectedNote: Note;
  onNoteSelected: (noteType: Note, selectedValue: string) => void;
  noteOptions: Record<Note, NoteOption[]>;
}

const NoteSelectionContent = ({
  selectedNote,
  onNoteSelected,
  noteOptions,
}: NoteSelectionContentProps) => {
  const { selectedNotes } = usePerfumeLab(); // context에서 선택된 노트들 가져오기

  const handleOptionSelect = (optionId: string) => {
    onNoteSelected(selectedNote, optionId);
  };

  // 현재 선택된 노트의 옵션들 가져오기
  const currentOptions = noteOptions[selectedNote] || [];

  // context에서 현재 선택된 값 가져오기
  const selectedValue = selectedNotes[selectedNote]?.id;

  const getSubtitle = () => {
    switch (selectedNote) {
      case "베이스":
        return (
          <>
            베이스 노트는 향수의 여운입니다. 시간이 흐를수록 은은하게 퍼지며,{" "}
            <br />
            향기의 정체성과 기억을 조용히 각인시킵니다.
          </>
        );
      case "미들":
        return (
          <>
            미들 노트는 향수의 중심이 되는 향이에요. <br /> 탑 노트가 사라진 후
            퍼지며, 향의 분위기와 성격을 결정하죠.
          </>
        );
      case "탑":
        return (
          <>
            탑 노트는 향수를 뿌리자마자 퍼지는 첫인상의 향이에요. <br />
            가볍고 상쾌하며 순간적으로 '와! 좋다'는 느낌을 줘요.
          </>
        );
      default:
        return "";
    }
  };

  return (
    <>
      <p className="text-title3">{selectedNote} 노트란?</p>
      <p className="text-gray-700 text-caption1 mb-4">{getSubtitle()}</p>

      {/* 향수 노트 그리드 (온보딩 Step3의 ScentCard 스타일 적용) */}
      <div className="grid grid-cols-3 gap-3">
        {currentOptions.map((option) => {
          const isSelected = selectedValue === option.id;

          return (
            <button
              key={option.id}
              onClick={() => handleOptionSelect(option.id)}
              className={`w-full block rounded-[8px] overflow-hidden border text-caption2 text-center transition-colors duration-150 ${
                isSelected
                  ? "border-main-500 text-main-500"
                  : "border-grayscale-500 text-grayscale-900 hover:border-main-500 hover:text-main-500" // 기본 상태
              }`}
            >
              <div className="relative w-full h-20">
                <img
                  src={option.img}
                  alt={option.id}
                  className="w-full h-full object-cover block"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <span className="text-white text-body3">
                    {option.id}
                    <br />({option.krName})
                  </span>
                </div>
              </div>
              <div className="bg-white px-1 py-2 h-9 flex items-center justify-center text-caption2">
                <p className="line-clamp-2">{option.description}</p>
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default NoteSelectionContent;
