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

type ModalType = "note" | "volume" | null;

interface SelectedNote {
  id: string;
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

// 백엔드로 보낼 데이터 형식
interface PerfumeData {
  topNote: string;
  topNoteVolume: number;
  middleNote: string;
  middleNoteVolume: number;
  baseNote: string;
  baseNoteVolume: number;
}

interface CompletedPerfume extends PerfumeData {
  id?: string;
  name?: string;
  createdAt?: string;
}

interface PerfumeLabContextType {
  // States
  selectedNotes: SelectedNotes;
  completedPerfume: CompletedPerfume | null;
  modal: ModalState;

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
  handleResultView: () => void;

  // Data transformation
  getPerfumeDataForAPI: () => PerfumeData;
  setCompletedPerfume: (perfume: CompletedPerfume) => void;
}

const INITIAL_NOTE_STATE: SelectedNote = {
  id: "",
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

interface PerfumeLabProviderProps {
  children: ReactNode;
}

export const PerfumeLabProvider = ({ children }: PerfumeLabProviderProps) => {
  const [selectedNotes, setSelectedNotes] =
    useState<SelectedNotes>(INITIAL_NOTES_STATE);
  const [completedPerfume, setCompletedPerfume] =
    useState<CompletedPerfume | null>(null);
  const [modal, setModal] = useState<ModalState>(INITIAL_MODAL_STATE);

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
    if (modal.type === "note") {
      return `${modal.selectedNote} 노트 선택`;
    }
    if (modal.type === "volume") {
      return "용량 설정하기";
    }
    return "";
  }, [modal.type, modal.selectedNote]);

  // 백엔드 형식으로 데이터 변환
  const getPerfumeDataForAPI = useCallback((): PerfumeData => {
    return {
      topNote: selectedNotes.탑.id,
      topNoteVolume: selectedNotes.탑.volume,
      middleNote: selectedNotes.미들.id,
      middleNoteVolume: selectedNotes.미들.volume,
      baseNote: selectedNotes.베이스.id,
      baseNoteVolume: selectedNotes.베이스.volume,
    };
  }, [selectedNotes]);

  // Actions
  const handleNoteSelect = useCallback((note: Note) => {
    setModal({
      isOpen: true,
      type: "note",
      selectedNote: note,
    });
  }, []);

  const handleVolumeSelect = useCallback(() => {
    setModal({
      isOpen: true,
      type: "volume",
      selectedNote: "",
    });
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
      [noteType]: {
        ...prev[noteType],
        volume,
      },
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
  }, []);

  const handleResultView = useCallback(() => {
    if (!allNotesSelected || !allVolumesSelected) {
      alert("모든 노트와 용량을 선택해주세요.");
      return;
    }

    // 완성된 향수 정보를 상태에 저장 (결과 페이지에서 사용)
    const perfumeData = getPerfumeDataForAPI();
    const completed: CompletedPerfume = {
      ...perfumeData,
      // 나중에 API 연결시 사용할 필드들
      // id: result.id,
      // name: result.name,
      // createdAt: result.createdAt,
    };

    setCompletedPerfume(completed);

    console.log("결과 페이지로 전달될 데이터:", completed);
  }, [allNotesSelected, allVolumesSelected, getPerfumeDataForAPI]);

  const contextValue = useMemo(
    () => ({
      // States
      selectedNotes,
      completedPerfume,
      modal,

      // Computed values
      allNotesSelected,
      allVolumesSelected,
      modalTitle,

      // Actions
      handleNoteSelect,
      handleVolumeSelect,
      handleModalClose,
      handleNoteSelected,
      handleVolumeSelected,
      handleNoteRemove,
      handleReset,
      handleResultView,

      // Data transformation
      getPerfumeDataForAPI,
      setCompletedPerfume,
    }),
    [
      selectedNotes,
      completedPerfume,
      modal,
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
