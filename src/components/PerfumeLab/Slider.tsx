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
    </div>

    <div className="relative">
      <input
        type="range"
        min={0}
        max={8}
        step={1}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none slider-custom"
        style={{
          background: `linear-gradient(to right, #6401BB 0%, #6401BB ${
            (value / 8) * 100
          }%, #d9d9d9 ${(value / 8) * 100}%, #d9d9d9 100%)`,
        }}
      />

      {/* 눈금 */}
      <div className="flex justify-between text-xs text-gray-400 mt-1 pointer-events-none">
        {Array.from({ length: 9 }, (_, i) => (
          <span key={i} className="w-[12.5%] text-center">
            {i}
          </span>
        ))}
      </div>
    </div>

    <style>{`
      .slider-custom::-webkit-slider-thumb {
        appearance: none;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: white;
        cursor: pointer;
        border: 2px solid #6401bb;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      }
    `}</style>
  </div>
);
