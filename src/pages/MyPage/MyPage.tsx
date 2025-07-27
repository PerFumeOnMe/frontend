import FavoritesAndRecommendations from "../../components/MyPage/FavoritesAndRecommendations";
import MyPageHeader from "../../components/MyPage/MyPageHeader";
import MyPageProfileSection from "../../components/MyPage/MyPageProfileSection";

const MyPage = () => {
    
    return(
        <div className="min-h-screen w-full bg-[#F4EEFA] font-[Pretendard]">
            <div className="max-w-120 min-w-[375px] flex flex-col w-full h-full p-4">
                <MyPageHeader />
                <MyPageProfileSection />
                <FavoritesAndRecommendations />
            </div>
        </div>
    )
}

export default MyPage;