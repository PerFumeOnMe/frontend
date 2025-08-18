import React from "react";
import type { WorkshopSaveDto } from "../../types/apis/Workshop"; // 필요 시 경로 조정

interface MyPageWorkShopRecommendationCardProps {
  data: WorkshopSaveDto;
}

const MyPageWorkShopRecommendationCard: React.FC<MyPageWorkShopRecommendationCardProps> = ({ data }) => {
  return (
    <div className="w-full flex flex-col bg-main-10 py-5 px-6 rounded-lg shadow-sm mb-3">
      <div className="text-body2 text-grayscale-1000">{data.savedName}</div>
      <div className="text-body2 text-grayscale-1000 font-semibold">{data.createdAt.substring(0, 10)}</div>
    </div>
  );
};

export default MyPageWorkShopRecommendationCard;
