import type {
  SelectedNote,
  SelectedNotes,
  ModalState,
} from "../../types/PerfumeLab/PerfumeLab";

export const INITIAL_NOTE_STATE: SelectedNote = {
  id: "",
  krName: "",
  description: "",
  volume: 0,
};

export const INITIAL_NOTES_STATE: SelectedNotes = {
  베이스: { ...INITIAL_NOTE_STATE },
  미들: { ...INITIAL_NOTE_STATE },
  탑: { ...INITIAL_NOTE_STATE },
};

export const INITIAL_MODAL_STATE: ModalState = {
  isOpen: false,
  type: null,
  selectedNote: "",
};
