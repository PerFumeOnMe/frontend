import React from "react";
import { usePerfumeLab } from "../../hooks/PerfumeLab/usePerfumeLab";
import { noteOptions } from "../../types/noteOptions";
import type { Note } from "../../types/note";
import BaseMask from "../../assets/PerfumeLab/masks/base_mask.png";
import MiddleMask from "../../assets/PerfumeLab/masks/middle_mask.png";
import TopMask from "../../assets/PerfumeLab/masks/top_mask.png";

interface PerfumeBottleProps {
  perfumeImage: string;
  className?: string;
}

const getNoteImage = (noteType: Note, noteId: string): string | undefined => {
  const note = noteOptions[noteType]?.find(
    (option) => option.id === noteId || option.krName === noteId
  );
  return note?.img;
};

const PerfumeBottle: React.FC<PerfumeBottleProps> = ({
  perfumeImage,
  className = "",
}) => {
  const { selectedNotes, completedPerfume } = usePerfumeLab();

  // completedPerfume이 있으면 API 데이터 사용, 없으면 selectedNotes 사용
  const hasBaseNote = completedPerfume?.baseNote || selectedNotes.베이스?.id;
  const hasMiddleNote = completedPerfume?.middleNote || selectedNotes.미들?.id;
  const hasTopNote = completedPerfume?.topNote || selectedNotes.탑?.id;

  return (
    <div className={`relative ${className}`}>
      <div className="relative w-full mx-auto">
        {/* 향수병 이미지 */}
        <img
          src={perfumeImage}
          className="w-full h-auto object-contain relative z-10"
          alt="향수 공병"
        />

        {/* 노트 레이어들 */}
        <div className="absolute inset-0 flex flex-col justify-center">
          {/* 베이스 노트 - 하단에 위치 */}
          {hasBaseNote && (
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${getNoteImage("베이스", hasBaseNote)})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                WebkitMask: `url(${BaseMask}) no-repeat center bottom/93%`,
                mask: `url(${BaseMask}) no-repeat center bottom/93%`,
                bottom: "3%",
                top: "40%",
              }}
            />
          )}

          {/* 미들 노트 - 중간에 위치 */}
          {hasMiddleNote && (
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${getNoteImage("미들", hasMiddleNote)})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                WebkitMask: `url(${MiddleMask}) no-repeat center/96%`,
                mask: `url(${MiddleMask}) no-repeat center/96%`,
                top: "43%",
                bottom: "4%",
              }}
            />
          )}

          {/* 탑 노트 - 상단에 위치 */}
          {hasTopNote && (
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${getNoteImage("탑", hasTopNote)})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                WebkitMask: `url(${TopMask}) no-repeat center top/79%`,
                mask: `url(${TopMask}) no-repeat center top/79%`,
                top: "44%",
                bottom: "20%",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PerfumeBottle;
