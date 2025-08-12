import FavoritesAndRecommendations from "../../components/MyPage/FavoritesAndRecommendations";
import MyPageHeader from "../../components/MyPage/MyPageHeader";
import MyPageProfileSection from "../../components/MyPage/MyPageProfileSection";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate("/mypage/EditScentPreferences");
    };
    
    return(
        <div className="min-h-screen w-full bg-[#F4EEFA] font-[Pretendard] pb-16">
            <div className="max-w-120 min-w-[375px] flex flex-col w-full h-full p-4">
                <MyPageHeader />
                <MyPageProfileSection
                    onClickSetting={handleClick}
                />
                <FavoritesAndRecommendations/>
            </div>
        </div>
    )
}

export default MyPage;