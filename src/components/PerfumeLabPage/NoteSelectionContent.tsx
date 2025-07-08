import type { Note } from "../../types/note";

interface NoteSelectionContentProps {
  selectedNote: Note;
  onNoteSelected: (noteType: Note, selectedValue: string) => void;
}

const NoteSelectionContent = ({
  selectedNote,
  onNoteSelected,
}: NoteSelectionContentProps) => {
  // 각 노트 타입별 옵션들
  const noteOptions: { [key: string]: string[] } = {
    베이스: ["시트러스", "플로럴", "우디", "머스크", "바닐라", "앰버"],
    미들: ["로즈", "라벤더", "베르가못", "페퍼민트", "재스민", "일랑일랑"],
    탑: ["레몬", "오렌지", "자몽", "유칼립투스", "페퍼", "핑크페퍼"],
  };

  const handleOptionSelect = (option: string) => {
    onNoteSelected(selectedNote, option);
  };

  // 현재 선택된 노트의 옵션들 가져오기
  const currentOptions = noteOptions[selectedNote] || [];

  const getSubtitle = () => {
    switch (selectedNote) {
      case "베이스":
        return "베이스 노트는 향수의 여운입니다. 시간이 흐를수록 은은하게 퍼지며, 향기의 정체성과 기억을 조용히 각인시킵니다.";
      case "미들":
        return "미들 노트는 향수의 중심이 되는 향이에요. 탑 노트가 사라진 후 퍼지며, 향의 분위기와 성격을 결정하죠.";
      case "탑":
        return "탑 노트는 향수의 첫인상입니다. 처음 뿌렸을 때 가장 먼저 느껴지는 향입니다.";
      default:
        return "";
    }
  };

  return (
    <>
      <p className="text-gray-600 text-xs mb-4">{getSubtitle()}</p>

      {/* 향수 노트 그리드 */}
      <div className="grid grid-cols-3 gap-3">
        {currentOptions.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionSelect(option)}
            className="bg-gray-100 hover:bg-gray-200 rounded-lg aspect-square flex items-center justify-center text-gray-700 text-sm font-medium transition-colors"
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
};

export default NoteSelectionContent;
