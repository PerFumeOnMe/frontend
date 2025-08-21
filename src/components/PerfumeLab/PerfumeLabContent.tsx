import { usePerfumeLab } from "../../hooks/PerfumeLab/usePerfumeLab";
import BottomSheetModal from "./BottomSheetModal";
import NoteSelectionContent from "./NoteSelectionContent";
import VolumeSelectionContent from "./VolumeSelectionContent";
import Header from "./Header";
import type { Note } from "../../types/note";
import { noteOptions } from "../../types/noteOptions";
import perfumeImage from "../../assets/PerfumeLab/perfume.png";
import NoteSelectionSection from "./NoteSelectionSection";
import ActionButton from "./ActionButton";
import bgImage from "../../assets/PerfumeLab/PerfumeLabBgImage.png";
import PerfumeMakingDisplay from "./PerfumeMakingDisplay";

const PerfumeLabContent = () => {
  const { modal, modalTitle, handleModalClose, handleNoteSelected } =
    usePerfumeLab();

  return (
    <div
      className="min-w-[375px] w-120 bg-white flex flex-col min-h-screen relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        minHeight: "100vh", // fallback
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/45 via-transparent to-white/20"></div>

      <Header />

      <div className="w-full flex-1 flex flex-col px-4 gap-10 pb-[400px]">
        {/* 인트로 텍스트 */}
        <div className="w-full flex flex-col gap-1">
          <h1 className="text-title3 text-grayscale-200">
            이미지와 맞는 향수를 만들어봅시다.
          </h1>
          <p className="text-caption1 text-grayscale-300">
            향수를 노트로 나누는 건, 시간이 지날수록 향이 변해가는 이야기를{" "}
            <br /> 담기 위해서예요.
          </p>
        </div>

        {/* 향수 디스플레이 */}
        <PerfumeMakingDisplay perfumeImage={perfumeImage} />
      </div>

      {/* 하단 카드 영역 - 고정 위치 */}
      <div className="fixed bottom-0 left-0 right-0 z-10 flex justify-center">
        <div className="w-120 max-w-[480px] bg-white rounded-t-[20px] px-4 py-6">
          <div className="flex flex-1 flex-col h-full justify-between">
            {/* 노트 선택 섹션 */}
            <NoteSelectionSection />

            {/* 액션 버튼 */}
            <ActionButton />
          </div>
        </div>
      </div>

      <BottomSheetModal
        isOpen={modal.isOpen}
        onClose={handleModalClose}
        title={modalTitle}
      >
        {modal.type === "note" && (
          <NoteSelectionContent
            selectedNote={modal.selectedNote as Note}
            onNoteSelected={handleNoteSelected}
            noteOptions={noteOptions}
          />
        )}
        {modal.type === "volume" && <VolumeSelectionContent />}
      </BottomSheetModal>
    </div>
  );
};

export default PerfumeLabContent;
