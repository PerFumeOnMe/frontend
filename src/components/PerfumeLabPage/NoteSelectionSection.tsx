import React from "react";
import NoteSelectionButton from "./NoteSelectionButton";
import { noteOptions } from "../../types/noteOptions";
import type { Note } from "../../types/note";

interface SelectedNotes {
  베이스: { id: string; description: string };
  미들: { id: string; description: string };
  탑: { id: string; description: string };
}

interface NoteSelectionSectionProps {
  selectedNotes: SelectedNotes;
  onNoteSelect: (note: Note) => void;
  onNoteRemove: (noteType: Note) => void;
  onReset: () => void;
}

const NoteSelectionSection: React.FC<NoteSelectionSectionProps> = ({
  selectedNotes,
  onNoteSelect,
  onNoteRemove,
  onReset,
}) => {
  const noteTypes: Note[] = ["베이스", "미들", "탑"];

  return (
    <div className="flex flex-col flex-1">
      <div className="flex justify-between items-center">
        <h3 className="text-title3">내가 선택한 계열</h3>
        <button
          className="border px-3 py-1 rounded-full text-body3 text-grayscale-700"
          onClick={onReset}
        >
          초기화
        </button>
      </div>

      <div className="flex flex-col gap-2 py-4 flex-1">
        {noteTypes.map((noteType) => (
          <NoteSelectionButton
            key={noteType}
            noteType={noteType}
            isSelected={!!selectedNotes[noteType].id}
            selectedValue={selectedNotes[noteType].id}
            selectedNoteData={
              selectedNotes[noteType].id
                ? noteOptions[noteType].find(
                    (note) => note.id === selectedNotes[noteType].id
                  )
                : undefined
            }
            noteOptions={noteOptions[noteType]}
            onClick={() => onNoteSelect(noteType)}
            onRemove={() => onNoteRemove(noteType)}
          />
        ))}
      </div>
    </div>
  );
};

export default NoteSelectionSection;
