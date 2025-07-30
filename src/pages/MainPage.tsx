import { useEffect, useState } from "react";
import Banner from "../components/MainPage/Banner";
import PerfumeGrid from "../components/MainPage/PerfumeGrid";
import type { Perfume } from "../types/perfume";
import { getMdChoice, getTrending } from "../apis/Fragrance";
import ChatBotButton from '../components/MainPage/ChatBotButton';
import { useAuth } from "../context/AuthContext";

const MainPage = () => {
    const { accessToken } = useAuth();
    
    const [MdChoice, setMdChoice] = useState<Perfume[]>([]);
    const [userName, setUserName] = useState<string>("");
    const [nickName, setNickName] = useState<string>("");
    const [trending, setTrending] = useState<Perfume[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getMdChoice();
                setMdChoice(data.result.content);
                setUserName(data.result.name);
                setNickName(data.result.nickname);
                const trendingData = await getTrending();
                setTrending(trendingData.result);
            } catch (error) {
                console.error('Failed to fetch:', error);
            }
        };
        fetchData();
    }, [accessToken]);

    return (
        <div className="min-h-screen bg-white font-[Pretendard] pb-[80px]">
            <Banner userName={userName} />
            <div className="relative -mt-[16px] rounded-t-[16px] bg-white pt-[16px]">
                <h2 className="text-title3 mb-[7px] px-[16px]">{userName}님이 좋아할만한 향수</h2>
                <PerfumeGrid perfumes={MdChoice} />
                <h2 className="text-title3 mb-[7px] pt-[32px] px-[16px]">요즘 뜨는 향수</h2>
                <PerfumeGrid perfumes={trending} />
            </div>
            <ChatBotButton />
        </div>
    );
};

export default MainPage;
