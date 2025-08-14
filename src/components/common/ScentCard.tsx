import type { ScentCardProps } from "../../types/scent";

export default function ScentCard({ id, png, description, selected, onClick }: ScentCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full aspect-[112/124] block rounded-[11px] overflow-hidden border text-caption2 text-center transition-colors duration-150 ${
        selected ? "border-main-500 text-main-500" : "border-grayscale-500 text-grayscale-900"
      }`}
    >
      <div className="relative w-full h-[65%]">
        <img src={png} alt={id} className="w-full h-full object-cover block" />
      </div>
      <div className="bg-white px-1 py-2 h-[36%] flex items-center justify-center text-caption2">
        <p className="line-clamp-2">{description}</p>
      </div>
    </button>
  );
}