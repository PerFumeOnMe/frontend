import FavoritesAndRecommendations from "../../components/MyPage/FavoritesAndRecommendations";
import MyPageHeader from "../../components/MyPage/MyPageHeader";
import MyPageProfileSection from "../../components/MyPage/MyPageProfileSection";

const MyPage = () => {
    
    return(
        <div className="max-w-120 m-w-[375px] w-full h-[5000px] bg-[#F4EEFA] p-4 font-[Pretendard]">
            <MyPageHeader/>
            <MyPageProfileSection/>
            <FavoritesAndRecommendations/>
        </div>
    )
}

export default MyPage;