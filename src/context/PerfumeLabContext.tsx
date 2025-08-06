import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";
import type { ReactNode } from "react";
import type { Note } from "../types/note";
import { noteOptions } from "../types/noteOptions";
import { postWorkshopPreview } from "../apis/Workshop";
import type {
  RequestWorkshopDto,
  ResponseWorkshopDto,
} from "../types/apis/Workshop";

type ModalType = "note" | "volume" | null;

interface SelectedNote {
  id: string;
  krName: string;
  description: string;
  volume: number;
}

interface SelectedNotes {
  베이스: SelectedNote;
  미들: SelectedNote;
  탑: SelectedNote;
}

interface ModalState {
  isOpen: boolean;
  type: ModalType;
  selectedNote: string;
}

interface PerfumeLabContextType {
  // States
  selectedNotes: SelectedNotes;
  completedPerfume: ResponseWorkshopDto["result"] | null;
  modal: ModalState;
  isLoading: boolean;
  error: string | null;

  // Computed values
  allNotesSelected: boolean;
  allVolumesSelected: boolean;
  modalTitle: string;

  // Actions
  handleNoteSelect: (note: Note) => void;
  handleVolumeSelect: () => void;
  handleModalClose: () => void;
  handleNoteSelected: (noteType: Note, selectedValue: string) => void;
  handleVolumeSelected: (noteType: Note, volume: number) => void;
  handleNoteRemove: (noteType: Note) => void;
  handleReset: () => void;
  handleResultView: () => Promise<void>;

  // Data transformation
  getPerfumeDataForAPI: () => RequestWorkshopDto;
}

const INITIAL_NOTE_STATE: SelectedNote = {
  id: "",
  krName: "",
  description: "",
  volume: 0,
};

const INITIAL_NOTES_STATE: SelectedNotes = {
  베이스: INITIAL_NOTE_STATE,
  미들: INITIAL_NOTE_STATE,
  탑: INITIAL_NOTE_STATE,
};

const INITIAL_MODAL_STATE: ModalState = {
  isOpen: false,
  type: null,
  selectedNote: "",
};

const PerfumeLabContext = createContext<PerfumeLabContextType | undefined>(
  undefined
);

export const usePerfumeLab = () => {
  const context = useContext(PerfumeLabContext);
  if (!context) {
    throw new Error("usePerfumeLab must be used within a PerfumeLabProvider");
  }
  return context;
};

export const PerfumeLabProvider = ({ children }: { children: ReactNode }) => {
  const [selectedNotes, setSelectedNotes] =
    useState<SelectedNotes>(INITIAL_NOTES_STATE);
  const [completedPerfume, setCompletedPerfume] = useState<
    ResponseWorkshopDto["result"] | null
  >(null);
  const [modal, setModal] = useState<ModalState>(INITIAL_MODAL_STATE);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Computed values
  const allNotesSelected = useMemo(
    () =>
      Boolean(
        selectedNotes.베이스.id && selectedNotes.미들.id && selectedNotes.탑.id
      ),
    [selectedNotes]
  );

  const allVolumesSelected = useMemo(
    () =>
      Boolean(
        selectedNotes.베이스.volume > 0 &&
          selectedNotes.미들.volume > 0 &&
          selectedNotes.탑.volume > 0
      ),
    [selectedNotes]
  );

  const modalTitle = useMemo(() => {
    if (modal.type === "note") return `${modal.selectedNote} 노트 선택`;
    if (modal.type === "volume") return "용량 설정하기";
    return "";
  }, [modal.type, modal.selectedNote]);

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

  // Actions
  const handleNoteSelect = useCallback((note: Note) => {
    setModal({ isOpen: true, type: "note", selectedNote: note });
  }, []);

  const handleVolumeSelect = useCallback(() => {
    setModal({ isOpen: true, type: "volume", selectedNote: "" });
  }, []);

  const handleModalClose = useCallback(() => {
    setModal(INITIAL_MODAL_STATE);
  }, []);

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
    []
  );

  const handleVolumeSelected = useCallback((noteType: Note, volume: number) => {
    setSelectedNotes((prev) => ({
      ...prev,
      [noteType]: { ...prev[noteType], volume },
    }));
  }, []);

  const handleNoteRemove = useCallback((noteType: Note) => {
    setSelectedNotes((prev) => ({
      ...prev,
      [noteType]: INITIAL_NOTE_STATE,
    }));
  }, []);

  const handleReset = useCallback(() => {
    setSelectedNotes(INITIAL_NOTES_STATE);
    setCompletedPerfume(null);
    setError(null);
  }, []);

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
  }, [allNotesSelected, allVolumesSelected, getPerfumeDataForAPI]);

  const contextValue = useMemo(
    () => ({
      selectedNotes,
      completedPerfume,
      modal,
      isLoading,
      error,
      allNotesSelected,
      allVolumesSelected,
      modalTitle,
      handleNoteSelect,
      handleVolumeSelect,
      handleModalClose,
      handleNoteSelected,
      handleVolumeSelected,
      handleNoteRemove,
      handleReset,
      handleResultView,
      getPerfumeDataForAPI,
    }),
    [
      selectedNotes,
      completedPerfume,
      modal,
      isLoading,
      error,
      allNotesSelected,
      allVolumesSelected,
      modalTitle,
      handleNoteSelect,
      handleVolumeSelect,
      handleModalClose,
      handleNoteSelected,
      handleVolumeSelected,
      handleNoteRemove,
      handleReset,
      handleResultView,
      getPerfumeDataForAPI,
    ]
  );

  return (
    <PerfumeLabContext.Provider value={contextValue}>
      {children}
    </PerfumeLabContext.Provider>
  );
};
