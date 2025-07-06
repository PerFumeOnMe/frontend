import { SlArrowLeft } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import BottomSheetModal from "../components/PerfumeLabPage/BottomSheetModal";
import NoteSelectionButton from "../components/PerfumeLabPage/NoteSelectionButton";
import { useState } from "react";

const PerfumLabPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState("");
  const [selectedNotes, setSelectedNotes] = useState({
    베이스: "",
    미들: "",
    탑: "",
  });

  const handleNoteSelect = (note: string) => {
    setSelectedNote(note);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedNote("");
  };

  const handleNoteSelected = (noteType: string, selectedValue: string) => {
    setSelectedNotes((prev) => ({
      ...prev,
      [noteType]: selectedValue,
    }));
    setIsModalOpen(false);
    setSelectedNote("");
  };

  const handleReset = () => {
    setSelectedNotes({
      베이스: "",
      미들: "",
      탑: "",
    });
  };

  const handleNoteRemove = (noteType: string) => {
    setSelectedNotes((prev) => {
      const newNotes = { ...prev };

      // 선택된 노트 제거
      newNotes[noteType] = "";

      // 하위 노트들도 함께 제거 (계층 구조 유지)
      if (noteType === "베이스") {
        newNotes.미들 = "";
        newNotes.탑 = "";
      } else if (noteType === "미들") {
        newNotes.탑 = "";
      }

      return newNotes;
    });
  };

  return (
    <div className="min-w-[480px] bg-[#F4ECE6] flex flex-col items-center">
      {/* 헤더 */}
      <div className="w-full h-16 relative flex items-center border-b border-gray-300">
        <button
          onClick={() => navigate("/")}
          className="absolute left-4 top-1/2 -translate-y-1/2"
        >
          <SlArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-xl text-center w-full">향수공방</h1>
      </div>
      {/* 메인 콘텐츠 */}
      <div className="w-full flex-1 flex flex-col">
        {/* 인트로 텍스트 */}
        <div className="w-full px-4 py-4 flex flex-col gap-1">
          <h1 className="text-xl">이미지와 맞는 향수를 만들어봅시다.</h1>
          <p className="text-xs text-gray-500">
            향수를 노트로 나누는 건, 시간이 지날수록 향이 변해가는 이야기를 담기
            위해서예요.
          </p>
        </div>
        {/* 향수 */}
        <div className="flex items-start justify-center">
          <div className="w-full py-4 flex flex-row">
            <div className="flex-[2] px-10 py-35 text-center border-dashed border-1 border-black">
              향수 공병
            </div>
            <div className="flex-[3] px-10 py-35 text-center border-dashed border-1 border-black">
              실린더 칸
            </div>
          </div>
        </div>

        {/* 내가 선택한 계열 */}
        <div className="flex flex-col flex-1">
          <div className="flex justify-between items-center">
            <h3 className="px-4 text-xl">내가 선택한 계열</h3>
            <button
              className="border px-3 py-1 rounded-full text-xs mx-4"
              onClick={handleReset}
            >
              초기화
            </button>
          </div>
          {/* 노트 선택 칸 */}
          <div className="flex flex-col gap-2 px-4 py-4 flex-1">
            {/* 베이스 노트 - 항상 표시 */}
            <NoteSelectionButton
              noteType="베이스"
              isSelected={!!selectedNotes.베이스}
              selectedValue={selectedNotes.베이스}
              onClick={() => handleNoteSelect("베이스")}
              onRemove={() => handleNoteRemove("베이스")}
            />

            {/* 미들 노트 - 베이스가 선택된 후에만 표시 */}
            {selectedNotes.베이스 && (
              <NoteSelectionButton
                noteType="미들"
                isSelected={!!selectedNotes.미들}
                selectedValue={selectedNotes.미들}
                onClick={() => handleNoteSelect("미들")}
                onRemove={() => handleNoteRemove("미들")}
              />
            )}

            {/* 탑 노트 - 미들이 선택된 후에만 표시 */}
            {selectedNotes.미들 && (
              <NoteSelectionButton
                noteType="탑"
                isSelected={!!selectedNotes.탑}
                selectedValue={selectedNotes.탑}
                onClick={() => handleNoteSelect("탑")}
                onRemove={() => handleNoteRemove("탑")}
              />
            )}
          </div>

          {/* 결과보기 버튼 */}
          <div className="mt-auto px-4 py-4">
            <button
              className={`w-full py-4 border rounded ${
                selectedNotes.베이스 && selectedNotes.미들 && selectedNotes.탑
                  ? "bg-black text-white border-black hover:bg-gray-800"
                  : "border-gray-300 text-gray-400"
              }`}
              disabled={
                !selectedNotes.베이스 ||
                !selectedNotes.미들 ||
                !selectedNotes.탑
              }
            >
              결과보기
            </button>
          </div>
        </div>
      </div>
      <BottomSheetModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        selectedNote={selectedNote}
        onNoteSelected={handleNoteSelected}
      />
    </div>
  );
};

export default PerfumLabPage;
