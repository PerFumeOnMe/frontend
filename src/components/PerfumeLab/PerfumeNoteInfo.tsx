import React from "react";
import { usePerfumeLab } from "../../hooks/PerfumeLab/usePerfumeLab";

interface PerfumeNoteInfoProps {
  className?: string;
}

const PerfumeNoteInfo: React.FC<PerfumeNoteInfoProps> = ({
  className = "",
}) => {
  const { selectedNotes } = usePerfumeLab();

  return (
    <div className={`flex flex-col justify-center gap-4 ${className}`}>
      {selectedNotes.탑.id && (
        <div className="text-center">
          <h4 className="text-title4 text-main-500 mb-2">탑 노트</h4>
          <p className="text-body3 text-grayscale-700">{selectedNotes.탑.id}</p>
        </div>
      )}

      {selectedNotes.미들.id && (
        <div className="text-center">
          <h4 className="text-title4 text-main-500 mb-2">미들 노트</h4>
          <p className="text-body3 text-grayscale-700">
            {selectedNotes.미들.id}
          </p>
        </div>
      )}

      {selectedNotes.베이스.id && (
        <div className="text-center">
          <h4 className="text-title4 text-main-500 mb-2">베이스 노트</h4>
          <p className="text-body3 text-grayscale-700">
            {selectedNotes.베이스.id}
          </p>
        </div>
      )}

      {!selectedNotes.베이스.id &&
        !selectedNotes.미들.id &&
        !selectedNotes.탑.id && (
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
