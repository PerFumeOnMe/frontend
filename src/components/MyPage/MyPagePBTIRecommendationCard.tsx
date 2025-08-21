import React from "react";
import { Link } from "react-router-dom";
import type { PbtiListResult } from "../../types/apis/PBTI";

interface MyPagePBTIRecommendationCardProps {
  data: PbtiListResult;
}

const MyPagePBTIRecommendationCard: React.FC<MyPagePBTIRecommendationCardProps> = ({ data }) => {
  // id 필드명 방어코드 (id 또는 pbtiId 지원)
  const pbtiId = data.id

  const formatKoreanYMD = (iso: string) => {
    const [y, m, d] = iso.slice(0, 10).split("-");
    return y && m && d ? `${y}년 ${m}월 ${d}일` : iso;
  };

  const formattedDate = formatKoreanYMD(data.createdAt)

  return (
    <Link to={`/PBTI/detail/${pbtiId}`} className="block">
      <div className="w-full flex flex-col bg-main-10 py-4 px-6 mb-3 hover:shadow-md transition-shadow cursor-pointer">
        <div className="text-body4 text-grayscale-1000 font-[400] pl-[0.7px]">PBTI</div>
        <div className="flex justify-between">
          <div className="text-body3 text-grayscale-1000 font-[500]">
            {data.savedName}
          </div>
          <div className="text-body4 text-grayscale-1000 font-[500]">
            {formattedDate}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MyPagePBTIRecommendationCard;
