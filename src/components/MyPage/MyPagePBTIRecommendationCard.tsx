import React from "react";
import type { PbtiListResult } from "../../types/apis/PBTI"; // 경로는 상황에 맞게 조정

interface MyPagePBTIRecommendationCardProps {
  data: PbtiListResult;
}

const MyPagePBTIRecommendationCard: React.FC<MyPagePBTIRecommendationCardProps> = ({ data }) => {
  return (
    <div className="w-full flex flex-col bg-main-10 py-5 px-6 rounded-lg shadow-sm mb-3">
      <div className="text-body2 text-grayscale-1000">{data.savedName}</div>
      <div className="text-body2 text-grayscale-1000 font-semibold">{data.createdAt.substring(0, 10)}</div>
    </div>
  );
};

export default MyPagePBTIRecommendationCard;
