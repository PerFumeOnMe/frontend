export const Slider = ({
  koreanLabel,
  value,
  onChange,
}: {
  koreanLabel: string;
  value: number;
  onChange: (v: number) => void;
}) => (
  <div className="mb-4" onMouseDown={stop} onTouchStart={stop}>
    <div className="flex justify-between items-center mb-3">
      <span className="text-sm text-gray-500">{koreanLabel}</span>
      <div className="bg-gray-800 text-white px-2 py-1 rounded text-sm font-medium">
        {value}
      </div>
    </div>

    <div className="relative">
      <input
        type="range"
        min={0}
        max={10}
        step={1}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none"
        style={{
          background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${
            value * 10
          }%, #e5e7eb ${value * 10}%, #e5e7eb 100%)`,
        }}
      />

      {/* 눈금 */}
      <div className="flex justify-between text-xs text-gray-400 mt-1 pointer-events-none">
        {Array.from({ length: 11 }, (_, i) => (
          <span key={i} className="w-[9.09%] text-center">
            {i === 0 ? (
              <>
                <p>
                  |<br />0
                </p>
              </>
            ) : i === 10 ? (
              <>
                <p>
                  |<br />
                  10
                </p>
              </>
            ) : i === 5 ? (
              <span className="text-base">￨</span>
            ) : (
              "|"
            )}
          </span>
        ))}
      </div>
    </div>
  </div>
);
