import React from "react";
import type { WorkshopSaveDto } from "../../types/apis/Workshop"; // 필요 시 경로 조정
import { useNavigate } from "react-router-dom";

interface MyPageWorkShopRecommendationCardProps {
  data: WorkshopSaveDto;
}

const MyPageWorkShopRecommendationCard: React.FC<
  MyPageWorkShopRecommendationCardProps
> = ({ data }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/lab/result/${data.workshopId}`);
  };

  const formatKoreanYMD = (iso: string) => {
    const [y, m, d] = iso.slice(0, 10).split("-");
    return y && m && d ? `${y}년 ${m}월 ${d}일` : iso;
  };

  const formattedDate = formatKoreanYMD(data.createdAt)

  return (
    <div
      className="w-full flex flex-col bg-main-10 py-4 px-6 mb-3 hover:shadow-md transition-shadow cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="text-body4 text-grayscale-1000 font-[400] pl-[0.7px]">향수 공방</div>
      <div className="flex justify-between">
          <div className="text-body3 text-grayscale-1000 font-[500]">
            {data.savedName}
          </div>
          <div className="text-body4 text-grayscale-1000 font-[500]">
            {formattedDate}
          </div>
        </div>
    </div>
  );
};

export default MyPageWorkShopRecommendationCard;
