import { useEffect, useState } from "react";
import MyPageWorkShopRecommendationCard from "./MyPageWorkShopRecommendationCard";
import SkeletonRecommendationCard from "./SkeletonRecommendationCard";
import { getPBTIList } from "../../apis/PBTI";
import { getMyPageWorkShopList } from "../../apis/Workshop";
import { getImageKeywordMyPerfumeList } from "../../apis/Image-Keyword";
import type { WorkShopMyPerfume, WorkshopSaveDto } from "../../types/apis/Workshop";
import type { ImageKeywordResult } from "../../types/apis/Image-Keyword";
import type { PbtiListResult } from "../../types/apis/PBTI";
import MyPageKeywordRecommendationCard from "./MyPageKeywordRecommendationCard";
import MyPagePBTIRecommendationCard from "./MyPagePBTIRecommendationCard";

interface RecommendationsResultSectionProps {
  option: string;
}

const RecommendationsResultSection: React.FC<RecommendationsResultSectionProps> = ({ option }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [perfumeLab, setPerfumeLab] = useState<WorkshopSaveDto[]>([]);
  const [keywordPerfume, setKeywordPerfume] = useState<ImageKeywordResult[]>([]);
  const [PBTIPerfume, setPBTIPerfume] = useState<PbtiListResult[]>([]);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [labRes, keywordRes, pbtiRes] = await Promise.all([
          getMyPageWorkShopList(),
          getImageKeywordMyPerfumeList(),
          getPBTIList(),
        ]);

        console.log("💡API raw 응답 확인");
        console.log("labRes:", labRes);
        console.log("keywordRes:", keywordRes);
        console.log("pbtiRes:", pbtiRes);

        setPerfumeLab(labRes);
        setKeywordPerfume(keywordRes);
        setPBTIPerfume(pbtiRes);

      } catch (error) {
        console.error("데이터를 불러오는 중 오류 발생:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllData();
  }, []);

  const renderCards = () => {
    if (option === "향수공방") {
      return perfumeLab.map((item, idx) => (
        <MyPageWorkShopRecommendationCard key={`lab-${idx}`} data={item} />
      ));
    } else if (option === "키워드") {
      return keywordPerfume.map((item, idx) => (
        <MyPageKeywordRecommendationCard key={`keyword-${idx}`} data={item} />
      ));
    } else if (option === "PBTI") {
      return PBTIPerfume.map((item, idx) => (
        <MyPagePBTIRecommendationCard key={`pbti-ke${idx}`} data={item} />
      ));
    } else {
      return <div>유효하지 않은 추천 옵션입니다.</div>;
    }
  };

  return (
    <div className="flex flex-col w-full">
      {isLoading
        ? Array.from({ length: 3 }).map((_, idx) => <SkeletonRecommendationCard key={idx} />)
        : renderCards()}
    </div>
  );
};

export default RecommendationsResultSection;
