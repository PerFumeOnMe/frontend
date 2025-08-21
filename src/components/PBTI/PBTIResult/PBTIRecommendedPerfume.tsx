import type { PerfumeRecommendDto } from "../../../types/apis/PBTI";

const PBTIRecommendedPerfume = ({
  perfumeImageUrl,
  brand,
  name,
  description,
}: PerfumeRecommendDto) => {
  return (
    <div className="w-full h-full flex tracking-tighter">
      {/* 이미지 파트 */}
      <div className="relative w-21 h-25 flex-shrink-0">
        <img
          src={perfumeImageUrl}
          alt={name}
          className="w-full h-full object-cover rounded-2xl shadow bg-amber-300"
        />
      </div>

      {/* 텍스트 파트 */}
      <div className="flex flex-col w-full justify-start ml-4">
        {/* 브랜드명 */}
        <div className="flex w-full justify-between items-center text-caption1 text-gray-800">
          <span>{brand}</span>
        </div>

        {/* 제품명 */}
        <div className="text-body3 font-medium text-gray-1000 mb-2">{name}</div>

        {/* 설명 */}
        <div className="text-[12px] text-caption3 text-gray-800 mb-1">
          {description}
        </div>
      </div>
    </div>
  );
};

export default PBTIRecommendedPerfume;
