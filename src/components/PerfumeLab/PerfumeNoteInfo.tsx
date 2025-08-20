import React from "react";
import { usePerfumeLab } from "../../hooks/PerfumeLab/usePerfumeLab";

interface PerfumeNoteInfoProps {
  className?: string;
}

const PerfumeNoteInfo: React.FC<PerfumeNoteInfoProps> = ({
  className = "",
}) => {
  const { selectedNotes, completedPerfume } = usePerfumeLab();

  // completedPerfume이 있으면 API 데이터 사용, 없으면 selectedNotes 사용
  const topNote = completedPerfume?.topNote || selectedNotes.탑?.id;
  const middleNote = completedPerfume?.middleNote || selectedNotes.미들?.id;
  const baseNote = completedPerfume?.baseNote || selectedNotes.베이스?.id;

  return (
    <div className={`flex flex-col justify-center gap-4 ${className}`}>
      {topNote && (
        <div className="text-center">
          <h4 className="text-title4 text-main-500 mb-2">탑 노트</h4>
          <p className="text-body3 text-grayscale-700">{topNote}</p>
        </div>
      )}

      {middleNote && (
        <div className="text-center">
          <h4 className="text-title4 text-main-500 mb-2">미들 노트</h4>
          <p className="text-body3 text-grayscale-700">{middleNote}</p>
        </div>
      )}

      {baseNote && (
        <div className="text-center">
          <h4 className="text-title4 text-main-500 mb-2">베이스 노트</h4>
          <p className="text-body3 text-grayscale-700">{baseNote}</p>
        </div>
      )}

      {!baseNote && !middleNote && !topNote && (
        <div className="text-center text-grayscale-500">
          <p className="text-body3">
            노트를 선택하여
            <br />
            향수를 만들어보세요
          </p>
        </div>
      )}
    </div>
  );
};

export default PerfumeNoteInfo;
