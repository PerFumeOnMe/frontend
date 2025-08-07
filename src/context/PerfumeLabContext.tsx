import { createContext, useState, useMemo, type ReactNode } from "react";
import type {
  ResponseWorkshopDto,
  RequestWorkshopDto,
} from "../types/apis/Workshop";
import type { SelectedNotes, ModalState } from "../types/PerfumeLab/PerfumeLab";
import {
  INITIAL_NOTES_STATE,
  INITIAL_MODAL_STATE,
} from "../constants/PerfumeLab/PerfumeLab";
import { usePerfumeLabActions } from "../hooks/PerfumeLab/usePerfumeLabActions";
import { usePerfumeLabComputed } from "../hooks/PerfumeLab/usePerfumeLabComputed";
import type { Note } from "../types/note";

export interface PerfumeLabContextType {
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
  getPerfumeDataForAPI: () => RequestWorkshopDto;
}

export const PerfumeLab = createContext<PerfumeLabContextType | undefined>(
  undefined
);

const PerfumeLabProvider = ({ children }: { children: ReactNode }) => {
  // State management
  const [selectedNotes, setSelectedNotes] =
    useState<SelectedNotes>(INITIAL_NOTES_STATE);
  const [completedPerfume, setCompletedPerfume] = useState<
    ResponseWorkshopDto["result"] | null
  >(null);
  const [modal, setModal] = useState<ModalState>(INITIAL_MODAL_STATE);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Computed values
  const computed = usePerfumeLabComputed({ selectedNotes, modal });

  // Actions
  const actions = usePerfumeLabActions({
    selectedNotes,
    setSelectedNotes,
    setModal,
    setCompletedPerfume,
    setIsLoading,
    setError,
    allNotesSelected: computed.allNotesSelected,
    allVolumesSelected: computed.allVolumesSelected,
  });

  // Context value
  const contextValue = useMemo(
    () => ({
      // States
      selectedNotes,
      completedPerfume,
      modal,
      isLoading,
      error,

      // Computed values
      ...computed,

      // Actions
      ...actions,
    }),
    [
      selectedNotes,
      completedPerfume,
      modal,
      isLoading,
      error,
      computed,
      actions,
    ]
  );

  return (
    <PerfumeLab.Provider value={contextValue}>{children}</PerfumeLab.Provider>
  );
};

export default PerfumeLabProvider;
