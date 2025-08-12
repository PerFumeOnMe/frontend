import { useMemo } from "react";
import type {
  SelectedNotes,
  ModalState,
} from "../../types/PerfumeLab/PerfumeLab";

interface UsePerfumeLabComputedProps {
  selectedNotes: SelectedNotes;
  modal: ModalState;
}

export const usePerfumeLabComputed = ({
  selectedNotes,
  modal,
}: UsePerfumeLabComputedProps) => {
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

  return {
    allNotesSelected,
    allVolumesSelected,
    modalTitle,
  };
};
