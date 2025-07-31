import React from "react";
import { usePerfumeLab } from "../../contexts/PerfumeLabContext";
import NoteSelectionButton from "./NoteSelectionButton";
import { noteOptions } from "../../types/noteOptions";
import type { Note } from "../../types/note";

const NoteSelectionSection: React.FC = () => {
  const { selectedNotes, handleNoteSelect, handleNoteRemove, handleReset } =
    usePerfumeLab();

  const noteTypes: Note[] = ["베이스", "미들", "탑"];

  return (
    <div className="flex flex-col flex-1">
      <div className="flex justify-between items-center">
        <h3 className="text-title3">내가 선택한 계열</h3>
        <button
          className="border px-3 py-1 rounded-full text-body3 text-grayscale-700"
          onClick={handleReset}
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
            onClick={() => handleNoteSelect(noteType)}
            onRemove={() => handleNoteRemove(noteType)}
          />
        ))}
      </div>
    </div>
  );
};

export default NoteSelectionSection;
