import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/AllPerfumePage/SearchBar';
import AllPerfumeHeader from '../components/AllPerfumePage/AllPerfumeHeader';
import type { Perfume } from "../types/perfume";
import PerfumeGrid from '../components/MainPage/PerfumeGrid';
import SelectedFilters from '../components/AllPerfumePage/SelectedFilters';
import { getAllPerfumes } from '../apis/Fragrance';

export default function AllPerfumePage() {
    const navigate = useNavigate();
    const [perfumes, setPerfumes] = useState<Perfume[]>([]);
    const [loading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [page, setPage] = useState(0);
    const [size, setSize] = useState(12);
    const [hasNext, setHasNext] = useState(false);
    const [fetchingNext, setFetchingNext] = useState(false);
    const sentinelRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const fetchPerfumes = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const res = await getAllPerfumes(0, size);
                if (res.isSuccess) {
                    setPerfumes(res.result.content);
                    setHasNext(res.result.hasNext);
                    setPage(1);
                } else {
                    setError(res.message);
                }
            } catch (err) {
                console.error(err);
                setError("향수 목록을 불러오는데 실패했습니다.");
            } finally {
                setIsLoading(false);
            }
        }
        fetchPerfumes();
    }, [size]);

    // 다음 페이지 로드
    const fetchNextPage = useCallback(async () => {
        if (!hasNext || fetchingNext) return;
        try {
            setFetchingNext(true);
            const res = await getAllPerfumes(page, size);
            if (res.isSuccess) {
                setPerfumes(prev => [...prev, ...res.result.content]);
                setHasNext(res.result.hasNext);
                setPage(page + 1);
            } else {
                setHasNext(false);
                setError(res.message);
            }
        } catch (err) {
            console.error(err);
            setHasNext(false);
            setError("향수 목록을 불러오는데 실패했습니다.");
        } finally {
            setFetchingNext(false);
        }
    }, [page, size, hasNext, fetchingNext]);

    // 인터섹션 옵저버
    useEffect(() => {
        if (!sentinelRef.current) return;
        if (!hasNext) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) fetchNextPage();
            },
            {root: null, rootMargin: "200px 0px", threshold: 0}
        );

        observer.observe(sentinelRef.current);
        return () => observer.disconnect();
    }, [fetchNextPage, hasNext]);
    
    const handleFilterClick = () => {
        navigate('/filter');
    };

    const handleSearch = (searchTerm: string) => {
        if (!searchTerm) {
            return;
        }
        // 검색어가 있으면 이름으로 필터링
        const filteredPerfumes = perfumes.filter(perfume => 
            perfume.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            perfume.brand.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        setPerfumes(filteredPerfumes);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* 헤더 */}
            <AllPerfumeHeader onFilterClick={handleFilterClick}/>

            {/* 검색창 */}
            <SearchBar onSearch={handleSearch} />

            {/* 선택된 필터 */}
            <SelectedFilters />

            {/* 향수 목록 또는 메시지 */}
            {loading ? (
                <div className="flex justify-center items-center pt-[120px]">
                    로딩 중...
                </div>
            ) : error ? (
                <div className="flex justify-center items-center pt-[120px] text-body3 text-red-500">
                    {error}
                </div>
            ) : perfumes.length > 0 ? (
                <>
                    <PerfumeGrid perfumes={perfumes} />
                    {hasNext && (
                        <div ref={sentinelRef} className="h-12 flex items-center justify-center">
                            {fetchingNext && <span className="text-sm text-gray-500">불러오는 중…</span>}
                        </div>
                    )}
                </>
                
            ) : (
                <div className="flex justify-center items-center pt-[120px] text-body3 text-grayscale-900">
                    검색 결과에 맞는 향수가 존재하지 않습니다.
                </div>
            )}
        </div>
    );
} 