import { useEffect, useState } from "react";
import FavoritesAndRecommendations from "../../components/MyPage/FavoritesAndRecommendations";
import MyPageHeader from "../../components/MyPage/MyPageHeader";
import MyPageProfileSection from "../../components/MyPage/MyPageProfileSection";
import { useNavigate } from "react-router-dom";
import type { ResponseUserFavoritesListDto, ResponseUserInfoDto, UserFavoriteContentDto } from "../../types/apis/User";
import { getFavoritesList, getUserInfo } from "../../apis/User";

const MyPage = () => {
    const [userInfo, setUserInfo] = useState<ResponseUserInfoDto | null>(null);
    const [userFavoritesPerfume, setUserFavoritesPerfume] = useState<UserFavoriteContentDto[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate("/mypage/EditScentPreferences");
    };

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const data = await getUserInfo();
                setUserInfo(data);
                console.log(data)
            } catch (error) {
                console.error("유저 정보 조회 실패", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserInfo();
    }, []);

    useEffect(() => {
        const fetchFavoritesPerfumeInfo = async () => {
            try {
                const data = await getFavoritesList({page : 0, size : 6});
                const favoritesPerfumeData = data.result.content
                setUserFavoritesPerfume(favoritesPerfumeData);
                console.log(data)
            } catch (error) {
                console.error("즐겨찾기한 향수 정보를 불러오는 과정에서 오류가 발생했습니다.", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchFavoritesPerfumeInfo();
    }, []);
    
    return(
        <div className="min-h-screen w-full bg-[#F4EEFA] font-[Pretendard]">
            <div className="max-w-120 min-w-[375px] flex flex-col w-full h-full p-4">
                <MyPageHeader />
                <MyPageProfileSection
                    onClickSetting={handleClick}
                    userInfo={userInfo}
                    isLoading={isLoading}
                />
                <FavoritesAndRecommendations
                    isLoading={isLoading}
                    favoritesPerfumeList={userFavoritesPerfume}
                />
            </div>
        </div>
    )
}

export default MyPage;