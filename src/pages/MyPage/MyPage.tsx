import { useEffect, useState } from "react";
import FavoritesAndRecommendations from "../../components/MyPage/FavoritesAndRecommendations";
import MyPageHeader from "../../components/MyPage/MyPageHeader";
import MyPageProfileSection from "../../components/MyPage/MyPageProfileSection";
import { useNavigate } from "react-router-dom";
import type { ResponseUserInfoDto } from "../../types/apis/User";
import { getUserInfo } from "../../apis/User";

const MyPage = () => {
    const [userInfo, setUserInfo] = useState<ResponseUserInfoDto | null>(null);
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
                />
            </div>
        </div>
    )
}

export default MyPage;