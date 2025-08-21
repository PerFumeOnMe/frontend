import React from "react";
import { Link } from "react-router-dom";
import type { PbtiListResult } from "../../types/apis/PBTI";

interface MyPagePBTIRecommendationCardProps {
  data: PbtiListResult;
}

const MyPagePBTIRecommendationCard: React.FC<MyPagePBTIRecommendationCardProps> = ({ data }) => {
  // id 필드명 방어코드 (id 또는 pbtiId 지원)
  const pbtiId = data.id

  return (
    <Link to={`/PBTI/detail/${pbtiId}`} className="block">
      <div className="w-full flex flex-col bg-main-10 py-5 px-6 rounded-lg shadow-xs mb-3 hover:shadow-md transition-shadow cursor-pointer">
        <div className="text-body4">PBTI</div>
        <div className="text-body3 font-medium text-grayscale-1000">
          {data.savedName}
        </div>
      </div>
    </Link>
  );
};

export default MyPagePBTIRecommendationCard;
