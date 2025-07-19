import { noteOptions } from "../../types/noteOptions";
import type { Note } from "../../types/note";

interface SelectedNotes {
  베이스: { id: string; description: string };
  미들: { id: string; description: string };
  탑: { id: string; description: string };
}

interface PerfumeDisplayProps {
  selectedNotes: SelectedNotes;
  perfumeImage: string;
}

// noteOptions에서 이미지 정보를 가져오는 헬퍼 함수
const getNoteImage = (noteType: Note, noteId: string): string | undefined => {
  const note = noteOptions[noteType]?.find((option) => option.id === noteId);
  return note?.img;
};

const PerfumeDisplay: React.FC<PerfumeDisplayProps> = ({
  selectedNotes,
  perfumeImage,
}) => {
  const hasBaseNote = selectedNotes.베이스?.id;
  const hasMiddleNote = selectedNotes.미들?.id;
  const hasTopNote = selectedNotes.탑?.id;

  return (
    <div className="flex flex-row items-center">
      {/* 향수 공병 영역 */}
      <div className="flex-1 relative">
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

      {/* 콘텐츠 영역 */}
      <div className="flex-1 flex flex-col justify-center gap-4">
        {selectedNotes.탑.id && (
          <div className="text-center">
            <h4 className="text-body3 text-main-500 mb-2">탑 노트</h4>
            <p className="text-caption2 text-grayscale-700">
              {selectedNotes.탑.id}
            </p>
          </div>
        )}

        {selectedNotes.미들.id && (
          <div className="text-center">
            <h4 className="text-body3 text-main-500 mb-2">미들 노트</h4>
            <p className="text-caption2 text-grayscale-700">
              {selectedNotes.미들.id}
            </p>
          </div>
        )}

        {selectedNotes.베이스.id && (
          <div className="text-center">
            <h4 className="text-body3 text-main-500 mb-2">베이스 노트</h4>
            <p className="text-caption2 text-grayscale-700">
              {selectedNotes.베이스.id}
            </p>
          </div>
        )}

        {!selectedNotes.베이스.id &&
          !selectedNotes.미들.id &&
          !selectedNotes.탑.id && (
            <div className="text-center text-grayscale-500">
              <p className="text-caption2">
                노트를 선택하여
                <br />
                향수를 만들어보세요
              </p>
            </div>
          )}
      </div>
    </div>
  );
};

export default PerfumeDisplay;
