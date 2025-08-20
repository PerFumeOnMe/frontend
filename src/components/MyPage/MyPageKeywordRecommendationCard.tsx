import React from "react";
import type { ImageKeywordResult } from "../../types/apis/Image-Keyword"; // 경로는 필요에 따라 조정

interface MyPageKeywordRecommendationCardProps {
  data: ImageKeywordResult;
}

const MyPageKeywordRecommendationCard: React.FC<
  MyPageKeywordRecommendationCardProps
> = ({ data }) => {
  return (
    <div className="w-full flex flex-col bg-main-10 py-5 px-6 rounded-lg shadow-xs mb-3">
      <div className="text-body4">이미지 키워드</div>
      <div className="text-body3 font-medium text-grayscale-1000">
        {data.savedName}
      </div>
    </div>
  );
};

export default MyPageKeywordRecommendationCard;
