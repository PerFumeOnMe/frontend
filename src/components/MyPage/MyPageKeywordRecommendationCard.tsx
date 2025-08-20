import React from "react";
import { useNavigate } from "react-router-dom";
import type { ImageKeywordResult } from "../../types/apis/Image-Keyword"; // 경로는 필요에 따라 조정

interface MyPageKeywordRecommendationCardProps {
  data: ImageKeywordResult;
}

const MyPageKeywordRecommendationCard: React.FC<MyPageKeywordRecommendationCardProps> = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // imageKeywordId를 사용해서 상세 페이지로 이동
    navigate(`/image-keyword/detail/${data.imageKeywordId}`);
  };

  return (
    <div 
      className="w-full flex flex-col bg-main-10 py-5 px-6 rounded-lg shadow-sm mb-3 cursor-pointer hover:bg-main-20 transition-colors"
      onClick={handleClick}
    >
      <div className="text-body2 text-grayscale-1000">{data.savedName}</div>
      <div className="text-body2 text-grayscale-1000 font-semibold">{data.createdAt.substring(0, 10)}</div>
    </div>
  );
};

export default MyPageKeywordRecommendationCard;
