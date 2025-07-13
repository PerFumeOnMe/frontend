type ScentCardProps = {
  svg: string;
  description: string;
  selected: boolean;
  onClick: () => void;
};

export default function ScentCard({ svg, description, selected, onClick }: ScentCardProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-[8px] overflow-hidden border text-caption2 text-center transition-colors duration-150 ${
        selected ? "border-main-500 text-main-500" : "border-grayscale-500 text-grayscale-900"
      }`}
    >
      <div className="relative w-full h-[80px]">
        <img src={svg} className="w-full h-full object-cover" />
      </div>
      <div className="bg-white px-1 pt-[2px] h-[44px] flex items-center justify-center text-[11px] leading-[14px]">
        <p className="line-clamp-2">{description}</p>
      </div>
    </button>
  );
}