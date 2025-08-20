// PerfumeSliderSkeleton.tsx
export default function PerfumeSliderSkeleton() {
  return (
    <div
      className="mt-[6px] relative overflow-hidden h-[210px] w-full flex justify-center"
      aria-busy="true"
      aria-live="polite"
    >
      <div
        className="flex items-center h-full relative"
        style={{ perspective: "1000px" }}
      >
        {/* Left (작게, 살짝 회전) */}
        <div
          className="absolute left-1/2 -translate-x-[110%] top-1/2 -translate-y-1/2
                     w-[140px] h-[200px] rounded-2xl bg-white/5 backdrop-blur-sm
                     border border-white/10 shadow-sm rotate-[-6deg] scale-[0.9]
                     overflow-hidden animate-pulse"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="h-[65%] bg-gray-300/30" />
          <div className="p-3 space-y-2">
            <div className="h-3 w-3/5 bg-gray-300/30 rounded" />
            <div className="h-3 w-4/5 bg-gray-300/20 rounded" />
          </div>
        </div>

        {/* Center (크게, 정면) */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2
                     w-[160px] h-[220px] rounded-2xl bg-white/10 backdrop-blur
                     border border-white/15 shadow-md scale-[1]
                     overflow-hidden animate-pulse"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="h-[68%] bg-gray-300/40" />
          <div className="p-3 space-y-2">
            <div className="h-3 w-2/3 bg-gray-300/40 rounded" />
            <div className="h-3 w-4/5 bg-gray-300/30 rounded" />
          </div>
        </div>

        {/* Right (작게, 반대쪽 회전) */}
        <div
          className="absolute left-1/2 translate-x-[10%] top-1/2 -translate-y-1/2
                     w-[140px] h-[200px] rounded-2xl bg-white/5 backdrop-blur-sm
                     border border-white/10 shadow-sm rotate-[6deg] scale-[0.9]
                     overflow-hidden animate-pulse"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="h-[65%] bg-gray-300/30" />
          <div className="p-3 space-y-2">
            <div className="h-3 w-1/2 bg-gray-300/30 rounded" />
            <div className="h-3 w-3/4 bg-gray-300/20 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
