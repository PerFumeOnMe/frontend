import { useCallback } from "react";
import type { Note } from "../../types/note";
import { noteOptions } from "../../types/noteOptions";
import { postWorkshopPreview } from "../../apis/Workshop";
import type {
  RequestWorkshopDto,
  ResponseWorkshopDto,
} from "../../types/apis/Workshop";
import type {
  SelectedNotes,
  ModalState,
} from "../../types/PerfumeLab/PerfumeLab";
import {
  INITIAL_NOTE_STATE,
  INITIAL_MODAL_STATE,
  INITIAL_NOTES_STATE,
} from "../../constants/PerfumeLab/PerfumeLab";

interface UsePerfumeLabActionsProps {
  selectedNotes: SelectedNotes;
  setSelectedNotes: React.Dispatch<React.SetStateAction<SelectedNotes>>;
  setModal: React.Dispatch<React.SetStateAction<ModalState>>;
  setCompletedPerfume: React.Dispatch<
    React.SetStateAction<ResponseWorkshopDto["result"] | null>
  >;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  allNotesSelected: boolean;
  allVolumesSelected: boolean;
}

export const usePerfumeLabActions = ({
  selectedNotes,
  setSelectedNotes,
  setModal,
  setCompletedPerfume,
  setIsLoading,
  setError,
  allNotesSelected,
  allVolumesSelected,
}: UsePerfumeLabActionsProps) => {
  const getPerfumeDataForAPI = useCallback(
    (): RequestWorkshopDto => ({
      topNote: selectedNotes.탑.krName,
      topNoteVolume: selectedNotes.탑.volume,
      middleNote: selectedNotes.미들.krName,
      middleNoteVolume: selectedNotes.미들.volume,
      baseNote: selectedNotes.베이스.krName,
      baseNoteVolume: selectedNotes.베이스.volume,
    }),
    [selectedNotes]
  );

  const handleNoteSelect = useCallback(
    (note: Note) => {
      setModal({ isOpen: true, type: "note", selectedNote: note });
    },
    [setModal]
  );

  const handleVolumeSelect = useCallback(() => {
    setModal({ isOpen: true, type: "volume", selectedNote: "" });
  }, [setModal]);

  const handleModalClose = useCallback(() => {
    setModal(INITIAL_MODAL_STATE);
  }, [setModal]);

  const handleNoteSelected = useCallback(
    (noteType: Note, selectedValue: string) => {
      const selectedNoteData = noteOptions[noteType].find(
        (note) => note.id === selectedValue
      );

      if (selectedNoteData) {
        setSelectedNotes((prev) => ({
          ...prev,
          [noteType]: {
            ...prev[noteType],
            id: selectedNoteData.id,
            krName: selectedNoteData.krName,
            description: selectedNoteData.description,
          },
        }));
      }
      setModal(INITIAL_MODAL_STATE);
    },
    [setSelectedNotes, setModal]
  );

  const handleVolumeSelected = useCallback(
    (noteType: Note, volume: number) => {
      setSelectedNotes((prev) => ({
        ...prev,
        [noteType]: { ...prev[noteType], volume },
      }));
    },
    [setSelectedNotes]
  );

  const handleNoteRemove = useCallback(
    (noteType: Note) => {
      setSelectedNotes((prev) => ({
        ...prev,
        [noteType]: { ...INITIAL_NOTE_STATE },
      }));
    },
    [setSelectedNotes]
  );

  const handleReset = useCallback(() => {
    setSelectedNotes(INITIAL_NOTES_STATE);
    setCompletedPerfume(null);
    setError(null);
  }, [setSelectedNotes, setCompletedPerfume, setError]);

  const handleResultView = useCallback(async () => {
    if (!allNotesSelected || !allVolumesSelected) {
      alert("모든 노트와 용량을 선택해주세요.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await postWorkshopPreview(getPerfumeDataForAPI());

      if (response.isSuccess) {
        setCompletedPerfume(response.result);
      } else {
        setError(response.message || "향수 정보를 가져오는데 실패했습니다.");
      }
    } catch (err) {
      console.error("API 호출 실패:", err);
      setError("향수 정보를 가져오는데 실패했습니다. 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  }, [
    allNotesSelected,
    allVolumesSelected,
    getPerfumeDataForAPI,
    setIsLoading,
    setError,
    setCompletedPerfume,
  ]);

  return {
    handleNoteSelect,
    handleVolumeSelect,
    handleModalClose,
    handleNoteSelected,
    handleVolumeSelected,
    handleNoteRemove,
    handleReset,
    handleResultView,
    getPerfumeDataForAPI,
  };
};
