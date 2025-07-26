import { useState } from "react";

const FavoritesAndRecommendations: React.FC = () => {
  const [favOrRecommend, setFavOrRecommend] = useState(true);

  return (
    <div className="flex flex-col mt-5">
      <div>
        <div className="flex mb-3">
          {/* 즐겨찾기 버튼 */}
          <button onClick={() => setFavOrRecommend(true)}>
            <div
              className={`text-title4 p-2 border-b-2 text-center ${
                favOrRecommend
                  ? "text-main-500 border-main-500"
                  : "text-grayscale-600 border-grayscale-300"
              }`}
            >
              즐겨찾기
            </div>
          </button>

          {/* 추천 결과 버튼 */}
          <button onClick={() => setFavOrRecommend(false)}>
            <div
              className={`text-title4 p-2 border-b-2 text-center ${
                !favOrRecommend
                  ? "text-main-500 border-main-500"
                  : "text-grayscale-600 border-grayscale-300"
              }`}
            >
              추천결과
            </div>
          </button>
        </div>

        {/* 선택된 항목에 따른 콘텐츠 표시 */}
        <div className="flex flex-1">
          {favOrRecommend ? "즐겨찾기" : "추천 결과"}
        </div>
      </div>
    </div>
  );
};

export default FavoritesAndRecommendations;
