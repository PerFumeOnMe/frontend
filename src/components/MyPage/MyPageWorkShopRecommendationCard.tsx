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

  return (
    <div
      className="w-full flex flex-col bg-main-10 py-5 px-6 rounded-lg shadow-xs mb-3"
      onClick={handleCardClick}
    >
      <div className="text-body4">향수 공방</div>
      <div className="text-body3 font-medium text-grayscale-1000">
        {data.savedName}
      </div>
    </div>
  );
};

export default MyPageWorkShopRecommendationCard;
