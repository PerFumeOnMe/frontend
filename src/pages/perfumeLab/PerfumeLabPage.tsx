import BottomSheetModal from "../../components/PerfumeLabPage/BottomSheetModal";
import NoteSelectionContent from "../../components/PerfumeLabPage/NoteSelectionContent";
import VolumeSelectionContent from "../../components/PerfumeLabPage/VolumeSelectionContent";
import { useState } from "react";
import type { Note } from "../../types/note";
import { noteOptions } from "../../types/noteOptions";
import perfumeImage from "../../assets/PerfumeLab/perfume.png";
import Header from "../../components/PerfumeLabPage/Header";
import PerfumeDisplay from "../../components/PerfumeLabPage/PerfumeDisplay";
import NoteSelectionSection from "../../components/PerfumeLabPage/NoteSelectionSection";
import ActionButton from "../../components/PerfumeLabPage/ActionButton";

type ModalType = "note" | "volume" | null;

interface SelectedNotes {
  베이스: { id: string; description: string };
  미들: { id: string; description: string };
  탑: { id: string; description: string };
}

const PerfumLabPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [selectedNote, setSelectedNote] = useState<string>("");
  const [selectedVolume, setSelectedVolume] = useState<string>("");
  const [selectedNotes, setSelectedNotes] = useState<SelectedNotes>({
    베이스: { id: "", description: "" },
    미들: { id: "", description: "" },
    탑: { id: "", description: "" },
  });

  const handleNoteSelect = (note: Note): void => {
    setSelectedNote(note);
    setModalType("note");
    setIsModalOpen(true);
  };

  const handleVolumeSelect = (): void => {
    setModalType("volume");
    setIsModalOpen(true);
  };

  const handleModalClose = (): void => {
    setIsModalOpen(false);
    setModalType(null);
    setSelectedNote("");
  };

  const handleNoteSelected = (noteType: Note, selectedValue: string): void => {
    const selectedNoteData = noteOptions[noteType].find(
      (note) => note.id === selectedValue
    );

    if (selectedNoteData) {
      setSelectedNotes((prev) => ({
        ...prev,
        [noteType]: {
          id: selectedNoteData.id,
          description: selectedNoteData.description,
        },
      }));
    }

    setIsModalOpen(false);
    setModalType(null);
    setSelectedNote("");
  };

  const handleNoteRemove = (noteType: Note): void => {
    setSelectedNotes((prev) => ({
      ...prev,
      [noteType]: { id: "", description: "" },
    }));
  };

  const handleReset = (): void => {
    setSelectedNotes({
      베이스: { id: "", description: "" },
      미들: { id: "", description: "" },
      탑: { id: "", description: "" },
    });
    setSelectedVolume("");
  };

  const allNotesSelected: boolean =
    selectedNotes.베이스.id && selectedNotes.미들.id && selectedNotes.탑.id;

  const getModalTitle = (): string => {
    if (modalType === "note") {
      return `${selectedNote} 노트 선택`;
    } else if (modalType === "volume") {
      return "용량 설정하기";
    }
    return "";
  };

  return (
    <div className="min-w-[375px] w-120 bg-gradient-to-b from-[#F4EEFA] to-[#FBFBFB] flex flex-col items-center">
      <Header />

      <div className="w-full flex-1 flex flex-col px-4 gap-10">
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

        {/* 향수 디스플레이 */}
        <PerfumeDisplay
          selectedNotes={selectedNotes}
          perfumeImage={perfumeImage}
        />

        <div>
          {/* 노트 선택 섹션 */}
          <NoteSelectionSection
            selectedNotes={selectedNotes}
            onNoteSelect={handleNoteSelect}
            onNoteRemove={handleNoteRemove}
            onReset={handleReset}
          />

          {/* 액션 버튼 */}
          <ActionButton
            allNotesSelected={allNotesSelected}
            selectedVolume={selectedVolume}
            onVolumeSelect={handleVolumeSelect}
            onResultView={() => console.log("결과 페이지로 이동")}
          />
        </div>
      </div>

      <BottomSheetModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title={getModalTitle()}
      >
        {modalType === "note" && (
          <NoteSelectionContent
            selectedNote={selectedNote as Note}
            onNoteSelected={handleNoteSelected}
            noteOptions={noteOptions}
          />
        )}
        {modalType === "volume" && <VolumeSelectionContent />}
      </BottomSheetModal>
    </div>
  );
};

export default PerfumLabPage;
