import React from "react";
import type { PbtiListResult } from "../../types/apis/PBTI"; // 경로는 상황에 맞게 조정

interface MyPagePBTIRecommendationCardProps {
  data: PbtiListResult;
}

const MyPagePBTIRecommendationCard: React.FC<MyPagePBTIRecommendationCardProps> = ({ data }) => {
  return (
    <div className="w-full flex flex-col bg-main-10 py-5 px-6 rounded-lg shadow-sm mb-3">
      <div className="text-body4 text-grayscale-1000 mb-1">PBTI: {data.savedName}</div>
      <div className="text-body3 text-grayscale-1000 font-semibold">{data.createdAt}</div>
    </div>
  );
};

export default MyPagePBTIRecommendationCard;
