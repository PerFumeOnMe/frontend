import { useEffect, useState } from "react";
import { getUserInfo, getFavoritesList } from "../../apis/User";
import { postPBTIDetailResult, getPBTIList } from "../../apis/PBTI";
import { axiosInstance } from "../../apis/axios"; 
import type {
  ResponseUserInfoDto,
  ResponseUserFavoritesListDto,
} from "../../types/apis/User";
import type { ResponsePbtiResultDetail, PbtiListResult } from "../../types/apis/PBTI";

interface MyPageData {
  userName: string;
  preferredNotes: string[];
  favoritePerfumes: any[]; // 필요한 필드 타입으로 대체 가능
  pbtiResult: ResponsePbtiResultDetail | null;
}

export const useUserMyPageData = () => {
  const [data, setData] = useState<MyPageData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMyPageData = async () => {
      try {
        setIsLoading(true);

        // 1. 유저 정보 조회
        const userInfo: ResponseUserInfoDto = await getUserInfo();
        const userProfileImageURL = userInfo.result.imageUrl;
        const userName = userInfo.result.nickName;
        const preferredNotes = userInfo.result.preferredNotes;

        // 2. 즐겨찾기 향수 목록 조회 (ID 기반)
        const favorites: ResponseUserFavoritesListDto = await getFavoritesList({});

        const fragranceDetails = await Promise.all(
          favorites.fragranceIds.map((id) =>
            axiosInstance.get(`/fragrances/${id}`).then((res) => res.data)
          )
        );

        // 3. 추천 결과 (가장 최근 PBTI)
        const pbtiList: PbtiListResult[] = await getPBTIList();
        let pbtiResult: ResponsePbtiResultDetail | null = null;
        if (pbtiList.length > 0) {
          pbtiResult = await postPBTIDetailResult({ pbtiId: pbtiList[0].id });
        }

        // 최종 데이터 조립
        setData({
          userName,
          preferredNotes,
          favoritePerfumes: fragranceDetails,
          pbtiResult,
        });
      } catch (err: any) {
        console.error("마이페이지 데이터 로딩 실패:", err);
        setError(err.message || "알 수 없는 에러");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMyPageData();
  }, []);

  return { data, isLoading, error };
};
