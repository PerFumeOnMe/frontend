import { useEffect, useState } from "react";
import Banner from "../components/MainPage/Banner";
import PerfumeGrid from "../components/MainPage/PerfumeGrid";
import type { Perfume } from "../types/perfume";
import { getFragranceDetail, getMdChoice, getMyPerfumes } from "../apis/Fragrance";
import ChatBotButton from '../components/MainPage/ChatBotButton';
import { useAuth } from "../context/AuthContext";
import { TRENDING_IDS } from "../constants/Trending/trending";
import type { MyPerfume, ResponseFragranceDetailDto } from "../types/apis/Fragrance";
import SkeletonPerfumeGrid from "../components/common/SkeletonPerfumeGrid";

const MainPage = () => {
    const { accessToken } = useAuth();
    
    const [MdChoice, setMdChoice] = useState<Perfume[]>([]);
    const [userName, setUserName] = useState<string>("");
    const [nickName, setNickName] = useState<string>("");
    const [trending, setTrending] = useState<Perfume[]>([]);
    const [trendError, setTrendError] = useState<string | null>(null);
    const [exists, setExists] = useState<boolean | undefined>(undefined);
    const [myPerfumes, setMyPerfumes] = useState<MyPerfume[]>([]);
    
    // 로딩 상태 추가
    const [mdChoiceLoading, setMdChoiceLoading] = useState(true);
    const [trendingLoading, setTrendingLoading] = useState(true);

    // 나만의 향수 데이터 가져오기
    useEffect(() => {
        const fetchMyPerfumes = async () => {
            try {
                const data = await getMyPerfumes();
                console.log('My Perfumes API Response:', data);
                if (data.isSuccess) {
                    setExists(data.result.exists);
                    setMyPerfumes(data.result.myPerfumeList);
                }
            } catch (error) {
                console.error('Failed to fetch my perfumes:', error);
                setExists(false);
            }
        };
        fetchMyPerfumes();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setMdChoiceLoading(true);
                const data = await getMdChoice();
                setMdChoice(data.result.content);
                setUserName(data.result.name);
                setNickName(data.result.nickname);
            } catch (error) {
                console.error('Failed to fetch:', error);
            } finally {
                setMdChoiceLoading(false);
            }
        };
        fetchData();
    }, [accessToken]);

    // 트렌딩 상세로 채우기
    useEffect(() => { let cancelled = false; 
        (async () => {
            try {
                    setTrendingLoading(true);
                    setTrendError(null);

                    const settled = await Promise.allSettled(
                        TRENDING_IDS.map(id => getFragranceDetail(id))
                    );

                    const items: Perfume[] = settled
                        .filter((result): result is PromiseFulfilledResult<ResponseFragranceDetailDto> => 
                            result.status === 'fulfilled' && result.value.isSuccess
                        )
                        .map(result => {
                            const s = result.value.result;
                            return {
                                id: s.id,
                                brand: s.brand,
                                name: s.name,
                                minPrice: s.priceList[0].price,
                                imageUrl: s.imageURL,
                                liked: !!s.liked,
                            };
                        });

                    if (!cancelled) setTrending(items);
                } catch (e) {
                    console.error("Failed to load trending details:", e);
                    if (!cancelled) setTrendError("트렌딩을 불러오지 못했습니다.");
                } finally {
                    if (!cancelled) setTrendingLoading(false);
                }
            })();

            return () => { cancelled = true; };
        }, [accessToken]);

    return (
        <div className="min-h-screen bg-white font-[Pretendard] pb-[80px]">
            <Banner 
                userName={userName} 
                exists={exists || false}
                myPerfumes={myPerfumes}
            />
            <div className="relative -mt-[16px] rounded-t-[16px] bg-white pt-[16px]">
                <h2 className="text-title3 mb-[7px] px-[16px]">{userName}님이 좋아할만한 향수</h2>
                {mdChoiceLoading ? (
                    <SkeletonPerfumeGrid count={6} keyPrefix="md-skeleton" />
                ) : (
                    <PerfumeGrid perfumes={MdChoice} />
                )}
                
                <h2 className="text-title3 mb-[7px] pt-[32px] px-[16px]">요즘 뜨는 향수</h2>
                {trendingLoading ? (
                    <SkeletonPerfumeGrid count={6} keyPrefix="trending-skeleton" />
                ) : (
                    <PerfumeGrid perfumes={trending} />
                )}
            </div>
            <ChatBotButton />
        </div>
    );
};

export default MainPage;
