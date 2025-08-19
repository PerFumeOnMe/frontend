import type { PerfumeRecommendDto } from "../../../types/apis/PBTI";
import PBTIRecommendedPerfume from "./PBTIRecommendedPerfume";

interface PBTIRecommendedPerfumesSectionProps {
  perfumeRecommends: PerfumeRecommendDto[];
}

const PBTIRecommendedPerfumesSection = ({
  perfumeRecommends,
}: PBTIRecommendedPerfumesSectionProps) => (
  <div className="w-full h-full flex flex-col bg-white rounded-2xl p-5 shadow mb-6">
    <div className="text-title3 font-semibold mb-4">🛍 이런 향수가 잘 어울려요</div>
    <div className="flex flex-col space-y-4">
      {perfumeRecommends.map((perfume) => (
        <PBTIRecommendedPerfume key={perfume.name} {...perfume} />
      ))}
    </div>
  </div>
);

export default PBTIRecommendedPerfumesSection;
