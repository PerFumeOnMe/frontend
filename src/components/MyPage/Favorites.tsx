import { useEffect, useState } from "react";
import type { UserFavoriteContentDto } from "../../types/apis/User";
import SkeletonPerfumeCard from "../common/SkeletonPerfumeCard";
import MyPagePerfumeCard from "./MyPagePerfumeCard";
import { getFavoritesList } from "../../apis/User";

const Favorites: React.FC = () => {
  const [FavoritesPerfumeList, setFavoritesPerfumeList] = useState<UserFavoriteContentDto[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
      const fetchFavoritesPerfumeInfo = async () => {
          try {
              const data = await getFavoritesList({page : 0, size : 6});
              const favoritesPerfumeData = data.result.content
              setFavoritesPerfumeList(favoritesPerfumeData);
              console.log(data)
          } catch (error) {
              console.error("즐겨찾기한 향수 정보를 불러오는 과정에서 오류가 발생했습니다.", error);
          } finally {
              setIsLoading(false);
          }
      };

      fetchFavoritesPerfumeInfo();
  }, []);


  return (
    <div className="grid grid-cols-3 gap-4 w-full pb-7">
      {isLoading
        ? Array.from({ length: 3 }).map((_, idx) => <SkeletonPerfumeCard key={idx} />)
        : FavoritesPerfumeList?.map((perfume) => <MyPagePerfumeCard key={perfume.id} perfume={perfume} />)}
    </div>
  );
};

export default Favorites;