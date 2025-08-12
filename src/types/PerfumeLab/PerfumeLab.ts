import type { ResponseWorkshopDto } from "../apis/Workshop";

export type ModalType = "note" | "volume" | null;

export interface SelectedNote {
  id: string;
  krName: string;
  description: string;
  volume: number;
}

export interface SelectedNotes {
  베이스: SelectedNote;
  미들: SelectedNote;
  탑: SelectedNote;
}

export interface ModalState {
  isOpen: boolean;
  type: ModalType;
  selectedNote: string;
}

export interface PerfumeLabState {
  selectedNotes: SelectedNotes;
  completedPerfume: ResponseWorkshopDto["result"] | null;
  modal: ModalState;
  isLoading: boolean;
  error: string | null;
}
