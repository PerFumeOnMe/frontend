import React from "react";
import PerfumeBottle from "../PerfumeBottle";
import PerfumeNoteInfo from "../PerfumeNoteInfo";

interface PerfumeDisplayProps {
  perfumeImage: string;
  showNoteInfo?: boolean; // 노트 정보 표시 여부
  className?: string;
}

const PerfumeDisplay: React.FC<PerfumeDisplayProps> = ({
  perfumeImage,
  showNoteInfo = true,
  className = "",
}) => {
  return (
    <div className={`w-full flex flex-row items-center ${className}`}>
      {/* 향수 공병 영역 */}
      <PerfumeBottle perfumeImage={perfumeImage} className="flex-1" />

      {/* 노트 정보 영역 (선택적) */}
      {showNoteInfo && <PerfumeNoteInfo className="flex-1" />}
    </div>
  );
};

export default PerfumeDisplay;
