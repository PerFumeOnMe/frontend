import type { UserFavoriteContentDto } from "../../types/apis/User";
import type { Perfume } from "../../types/perfume";
import SkeletonPerfumeCard from "../common/SkeletonPerfumeCard";
import MyPagePerfumeCard from "./MyPagePerfumeCard";

interface Favoroites {
  isLoading : boolean;
  PerfumeList : UserFavoriteContentDto[]
}

const Favorites: React.FC<Favoroites> = ({ isLoading = false, PerfumeList=null}) => {
  console.log("뭐가 들어왔나요",PerfumeList)

  return (
    <div className="grid grid-cols-3 gap-4 w-full pb-7">
      {isLoading
        ? Array.from({ length: 6 }).map((_, idx) => <SkeletonPerfumeCard key={idx} />)
        : PerfumeList?.map((perfume) => <MyPagePerfumeCard key={perfume.id} perfume={perfume} />)}
    </div>
  );
};

export default Favorites;