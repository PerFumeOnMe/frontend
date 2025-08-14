import React from "react";
import type { WorkShopMyPerfume } from "../../types/apis/Workshop"; // 필요 시 경로 조정

interface MyPageWorkShopRecommendationCardProps {
  data: WorkShopMyPerfume;
}

const MyPageWorkShopRecommendationCard: React.FC<MyPageWorkShopRecommendationCardProps> = ({ data }) => {
  return (
    <div className="flex w-full items-center bg-main-10 p-3 rounded-lg shadow-sm mb-3">
            <img src={data.imageUrl} className="w-24 h-24 aspect-square rounded-xl object-cover mr-4" />
        <div className="w-full flex flex-col">
            <div className="text-body3 text-grayscale-1000 mb-1">{data.brand}</div>
            <div className="text-body2 text-grayscale-1000 font-semibold">{data.name}</div>
        </div>
    </div>
  );
};

export default MyPageWorkShopRecommendationCard;
