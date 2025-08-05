import React from "react";
import { usePerfumeLab } from "../../context/PerfumeLabContext";
import PerfumeRack from "../../assets/PerfumeLab/rack.png";
import CylinderItem from "./CylinderItem";

interface PerfumeCylinderProps {
  className?: string;
}

const PerfumeCylinder: React.FC<PerfumeCylinderProps> = ({
  className = "",
}) => {
  const { selectedNotes } = usePerfumeLab();

  const hasBaseNote = Boolean(selectedNotes.베이스?.id);
  const hasMiddleNote = Boolean(selectedNotes.미들?.id);
  const hasTopNote = Boolean(selectedNotes.탑?.id);

  return (
    <div className={`relative w-full h-50 ${className}`}>
      {/* 랙 이미지 */}
      <img
        src={PerfumeRack}
        alt="Perfume Rack"
        className="absolute bottom-0 left-0 w-full h-20 z-10 object-cover"
      />

      {/* 실린더들 */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center">
        <div className="flex flex-row gap-3">
          <CylinderItem
            noteType="Base"
            koreanNoteType="베이스"
            isSelected={hasBaseNote}
            noteId={selectedNotes.베이스?.id}
          />
          <CylinderItem
            noteType="Middle"
            koreanNoteType="미들"
            isSelected={hasMiddleNote}
            noteId={selectedNotes.미들?.id}
          />
          <CylinderItem
            noteType="Top"
            koreanNoteType="탑"
            isSelected={hasTopNote}
            noteId={selectedNotes.탑?.id}
          />
        </div>
      </div>
    </div>
  );
};

export default PerfumeCylinder;
