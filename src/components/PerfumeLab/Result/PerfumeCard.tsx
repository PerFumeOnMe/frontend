import type { PerfumeDetail } from "../../../types/PerfumeLab/PerfumeLabResult";

// 개별 향수 카드 컴포넌트
interface PerfumeCardProps {
  perfume: PerfumeDetail;
}

const PerfumeCard = ({ perfume }: PerfumeCardProps) => {
  return (
    <div className="flex items-center gap-4 w-full">
      {/* 향수 이미지 */}
      <div className="relative">
        <div className="w-21 h-25 bg-[#fffdfd] rounded-lg border border-solid border-[#0000001a] flex items-center justify-center">
          {perfume.imageUrl ? (
            <img
              src={perfume.imageUrl}
              alt={`${perfume.name}`}
              className="w-21 h-25 object-contain"
            />
          ) : (
            <div className="w-21 h-25 bg-gray-200 flex items-center justify-center text-gray-400">
              No Image
            </div>
          )}
        </div>
      </div>

      {/* 향수 정보 */}
      <div className="flex flex-col w-full items-start gap-1">
        <div className="flex justify-between w-full">
          <p className="text-caption1 text-grayscale-800">{perfume.brand}</p>
          <p className="text-body4">{perfume.price}원~</p>
        </div>
        <h3 className="text-body3 font-medium text-left">{perfume.name}</h3>
        <p className="text-caption1 text-grayscale-800 text-left">
          {perfume.description}
        </p>
      </div>
    </div>
  );
};

export default PerfumeCard;
