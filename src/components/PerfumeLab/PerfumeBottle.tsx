import React from "react";
import { usePerfumeLab } from "../../contexts/PerfumeLabContext";
import { noteOptions } from "../../types/noteOptions";
import type { Note } from "../../types/note";

interface PerfumeBottleProps {
  perfumeImage: string;
  className?: string;
}

const getNoteImage = (noteType: Note, noteId: string): string | undefined => {
  const note = noteOptions[noteType]?.find((option) => option.id === noteId);
  return note?.img;
};

const PerfumeBottle: React.FC<PerfumeBottleProps> = ({
  perfumeImage,
  className = "",
}) => {
  const { selectedNotes } = usePerfumeLab();

  const hasBaseNote = selectedNotes.베이스?.id;
  const hasMiddleNote = selectedNotes.미들?.id;
  const hasTopNote = selectedNotes.탑?.id;

  return (
    <div className={`relative ${className}`}>
      <div className="relative w-full max-w-[200px] mx-auto">
        <img
          src={perfumeImage}
          className="w-full h-auto object-contain"
          alt="향수 공병"
        />

        <div className="absolute inset-0 flex items-center justify-center z-0">
          <svg
            viewBox="0 0 120 150"
            className="w-[100%] h-[100%]"
            style={{ marginTop: "10%" }}
          >
            <defs>
              <clipPath id="baseClip">
                <path d="M25 115 L32 150 L88 150 L95 115 Z" />
              </clipPath>
              <clipPath id="middleClip">
                <path d="M35 100 L85 100 L95 115 L25 115 Z" />
              </clipPath>
              <clipPath id="topClip">
                <path d="M35 70 L35 100 L85 100 L85 70 L80 55 L40 55 Z" />
              </clipPath>
            </defs>

            {hasBaseNote && (
              <g clipPath="url(#baseClip)">
                <image
                  href={getNoteImage("베이스", hasBaseNote)}
                  x="25"
                  y="110"
                  width="70"
                  height="30"
                  preserveAspectRatio="xMidYMid slice"
                  opacity="0.85"
                />
              </g>
            )}

            {hasMiddleNote && (
              <g clipPath="url(#middleClip)">
                <image
                  href={getNoteImage("미들", hasMiddleNote)}
                  x="30"
                  y="85"
                  width="70"
                  height="30"
                  preserveAspectRatio="xMidYMid slice"
                  opacity="0.85"
                />
              </g>
            )}

            {hasTopNote && (
              <g clipPath="url(#topClip)">
                <image
                  href={getNoteImage("탑", hasTopNote)}
                  x="35"
                  y="55"
                  width="50"
                  height="45"
                  preserveAspectRatio="xMidYMid slice"
                  opacity="0.85"
                />
              </g>
            )}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PerfumeBottle;
