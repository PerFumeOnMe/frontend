import React from "react";

interface PerfumeTagListProps {
  tags: string[];
  onTagClick?: (tag: string) => void; // ✅ 태그 클릭 콜백
  disabled?: boolean;                 // ✅ 로딩 중 비활성화
  className?: string;                 // (옵션) 외부 여백 등 커스터마이즈
}

/**
 * 하단 고정 태그 바
 * - 디자인 유지: 보라색 pill, 흰 글자
 * - UX 추가: 클릭/호버/포커스, 가로 스크롤, 비활성화
 */
const PerfumeTagList: React.FC<PerfumeTagListProps> = ({
  tags,
  onTagClick,
  disabled = false,
  className = "",
}) => {
  return (
    <div
      className={[
        "fixed bottom-0 left-1/2 -translate-x-1/2",
        "w-full max-w-120 min-w-[375px]",
        "px-4 pb-2", // 하단 살짝 여백
        "bg-transparent z-40", // 입력창 위에 떠야 하면 z-지수 조정
        className,
      ].join(" ")}
    >
      {/* 가로 스크롤 컨테이너 */}
      <div
        className={[
          "flex items-center gap-2",
          "overflow-x-auto",
          "whitespace-nowrap",
          "px-1 py-1.5",
        ].join(" ")}
        role="list"
        aria-label="추천 태그"
      >
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            role="listitem"
            onClick={() => !disabled && onTagClick?.(tag)}
            disabled={disabled}
            aria-label={`${tag} 선택`}
            className={[
              "flex items-center",
              "px-3 py-1.5",
              "rounded-xl",
              "bg-main-400 text-[#FBFBFB] text-caption1 tracking-tight",
              "transition-colors",
              disabled
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-main-500 active:bg-main-600 cursor-pointer",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-main-300 focus-visible:ring-offset-2",
              "flex-shrink-0",
            ].join(" ")}
          >
            {/* 해시 아이콘 느낌 (선택) */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="opacity-90"
            >
              <path
                d="M10 3L8 21M16 3L14 21M4 9h18M3 15h18"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
            <span>{tag}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PerfumeTagList;
