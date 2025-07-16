import BottomSheetModal from "../../components/PerfumeLabPage/BottomSheetModal";
import NoteSelectionButton from "../../components/PerfumeLabPage/NoteSelectionButton";
import NoteSelectionContent from "../../components/PerfumeLabPage/NoteSelectionContent";
import VolumeSelectionContent from "../../components/PerfumeLabPage/VolumeSelectionContent";
import { useState } from "react";
import type { Note } from "../../types/note";
import perfumeImage from "../../assets/PerfumeLab/perfume.png";
import Header from "../../components/PerfumeLabPage/Header";

type ModalType = "note" | "volume" | null;

const PerfumLabPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [selectedNote, setSelectedNote] = useState("");
  const [selectedVolume, setSelectedVolume] = useState("");
  const [selectedNotes, setSelectedNotes] = useState({
    베이스: "",
    미들: "",
    탑: "",
  });

  const handleNoteSelect = (note: Note) => {
    setSelectedNote(note);
    setModalType("note");
    setIsModalOpen(true);
  };

  const handleVolumeSelect = () => {
    setModalType("volume");
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setModalType(null);
    setSelectedNote("");
  };

  const handleNoteSelected = (noteType: Note, selectedValue: string) => {
    setSelectedNotes((prev) => ({
      ...prev,
      [noteType]: selectedValue,
    }));
    setIsModalOpen(false);
    setModalType(null);
    setSelectedNote("");
  };

  const handleNoteRemove = (noteType: Note) => {
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

  const handleReset = () => {
    setSelectedNotes({
      베이스: "",
      미들: "",
      탑: "",
    });
    setSelectedVolume("");
  };

  // 모든 노트가 선택되었는지 확인
  const allNotesSelected =
    selectedNotes.베이스 && selectedNotes.미들 && selectedNotes.탑;

  // 모달 제목과 내용 결정
  const getModalTitle = () => {
    if (modalType === "note") {
      return `${selectedNote} 노트 선택`;
    } else if (modalType === "volume") {
      return "용량 설정하기";
    }
    return "";
  };

  return (
    <div className="min-w-[375px] w-120 bg-gradient-to-b from-[#F4EEFA] to-[#FBFBFB] flex flex-col items-center">
      {/* 헤더 */}
      <Header />

      {/* 메인 콘텐츠 */}
      <div className="w-full flex-1 flex flex-col px-4 gap-[40px]">
        {/* 인트로 텍스트 */}
        <div className="w-full flex flex-col gap-1">
          <h1 className="text-title3 text-grayscale-1000">
            이미지와 맞는 향수를 만들어봅시다.
          </h1>
          <p className="text-caption1 text-grayscale-700">
            향수를 노트로 나누는 건, 시간이 지날수록 향이 변해가는 <br />{" "}
            이야기를 담기 위해서예요.
          </p>
        </div>

        {/* 향수 */}
        <div className="flex flex-row">
          {/* 이미지 영역 */}
          <div className="flex-1">
            <img
              src={perfumeImage}
              className="w-full h-auto object-contain"
              alt="향수 공병"
            />
          </div>

          {/* 콘텐츠 영역 */}
          <div className="flex-1">탑 노트</div>
        </div>

        {/* 내가 선택한 계열 */}
        <div className="flex flex-col flex-1">
          <div className="flex justify-between items-center">
            <h3 className="px-4 text-title3">내가 선택한 계열</h3>
            <button
              className="border px-3 py-1 rounded-full text-body3 mx-4 text-grayscale-700"
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

          {/* 하단 버튼 */}
          <div className="mt-auto px-4 py-4">
            {!allNotesSelected ? (
              // 모든 노트가 선택되지 않은 경우 - 비활성화된 결과보기 버튼
              <button
                className="w-full py-4 border rounded border-gray-300 text-gray-400"
                disabled
              >
                결과보기
              </button>
            ) : !selectedVolume ? (
              // 모든 노트는 선택되었지만 용량이 선택되지 않은 경우 - 용량 설정하기 버튼
              <button
                className="w-full py-4 border rounded bg-black text-white border-black hover:bg-gray-800"
                onClick={handleVolumeSelect}
              >
                용량 설정하기
              </button>
            ) : (
              // 모든 선택이 완료된 경우 - 활성화된 결과보기 버튼
              <button
                className="w-full py-4 border rounded bg-black text-white border-black hover:bg-gray-800"
                onClick={() => console.log("결과 페이지로 이동")}
              >
                결과보기
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 범용 BottomSheetModal */}
      <BottomSheetModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title={getModalTitle()}
      >
        {modalType === "note" && (
          <NoteSelectionContent
            selectedNote={selectedNote as Note}
            onNoteSelected={handleNoteSelected}
          />
        )}
        {modalType === "volume" && <VolumeSelectionContent />}
      </BottomSheetModal>
    </div>
  );
};

export default PerfumLabPage;
