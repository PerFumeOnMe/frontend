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

  const formatKoreanYMD = (iso: string) => {
    const [y, m, d] = iso.slice(0, 10).split("-");
    return y && m && d ? `${y}년 ${m}월 ${d}일` : iso;
  };

  const formattedDate = formatKoreanYMD(data.createdAt)

  return (
    <div 
      className="w-full flex flex-col bg-main-10 py-4 px-6 mb-3 hover:shadow-md transition-shadow cursor-pointer"
      onClick={handleClick}
    >
      <div className="text-body4 text-grayscale-1000 font-[400] pl-[0.7px]">키워드</div>
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

export default MyPageKeywordRecommendationCard;
