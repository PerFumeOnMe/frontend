import MyPageRecommendationCard from "./MyPageRecommendationCard";


const RecommendationsResultSection : React.FC = () => {
    
    
    return (
        <div className="flex flex-col w-full">
            <MyPageRecommendationCard/>
            <MyPageRecommendationCard/>
            <MyPageRecommendationCard/>
        </div>
    );
}

export default RecommendationsResultSection;