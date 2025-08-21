import { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchBar from '../components/AllPerfumePage/SearchBar';
import AllPerfumeHeader from '../components/AllPerfumePage/AllPerfumeHeader';
import type { Perfume } from "../types/perfume";
import PerfumeGrid from '../components/MainPage/PerfumeGrid';
import SelectedFilters from '../components/AllPerfumePage/SelectedFilters';
import { getAllPerfumes, getFilteredPerfumes, searchPerfumes } from '../apis/Fragrance';
import SkeletonPerfumeGrid from '../components/common/SkeletonPerfumeGrid';

export default function AllPerfumePage() {
    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    
    const [perfumes, setPerfumes] = useState<Perfume[]>([]);
    const [loading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // 무한스크롤
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(12);
    const [hasNext, setHasNext] = useState(false);
    const [fetchingNext, setFetchingNext] = useState(false);
    const sentinelRef = useRef<HTMLDivElement | null>(null);

    // 검색
    const [keyword, setKeyword] = useState("");

    // URL에 필터 있는지 판단
    const hasFilterParams = (() => {
        const keys = ['noteCategoryId', 'gender', 'fragranceType', 'situationId', 'seasonId', 'priceMin', 'priceMax'];
        return keys.some(k => {
            const v = params.get(k);
            return v !== null && v !== '';
        })
    })();

    // URL -> FilterParams 변환
    const buildFilterParams = (p: number) => {
        const n = (k: string) => {
            const v = params.get(k);
            if (v === null || v === '') return undefined;
            const num = Number(v);
            return Number.isFinite(num) ? num : undefined;
        };
        const s = (k: string) => {
            const v = params.get(k);
            return v && v.length ? v : undefined;
        };

        return {
            noteCategoryId: n('noteCategoryId'),
            gender: s('gender') as 'MALE' | 'FEMALE' | 'NEUTRAL',
            fragranceType: s('fragranceType') as 'PERFUME' | 'EAU_DE_PERFUME' | 'EAU_DE_TOILETTE' | 'EAU_DE_COLOGNE' | 'SHOWER_COLOGNE',
            situationId: n('situationId'),
            seasonId: n('seasonId'),
            priceMin: n('priceMin'),
            priceMax: n('priceMax'),
            page: p,
            size,
        };
    };

    // 공용 로더
    const loadPage = useCallback(async (p: number, append: boolean) => {
        setError(null);
        const q = keyword.trim();
        const isSearch = q.length >= 2;
        const isFilter = !isSearch && hasFilterParams;

        const res = isSearch
            ? await searchPerfumes(q, p, size)
            : isFilter
                ? await getFilteredPerfumes(buildFilterParams(p))
                : await getAllPerfumes(p, size);

        if (res.isSuccess) {
            const content = res.result.content ?? [];
            setPerfumes(prev => (append ? [...prev, ...content] : content));
            setHasNext(res.result.hasNext);
            setPage(p + 1);
        } else {
            setHasNext(false);
            setError(res.message);
        }
    }, [keyword, size, location.search]);

    // 초기 로드 & keyword 변경 시 첫 페이지부터 재조회
    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                setPerfumes([]);
                setPage(0);
                await loadPage(0, false);
            } catch (err) {
                console.error(err);
                setError("향수 목록을 불러오는데 실패했습니다.");
            } finally {
                setIsLoading(false);
            }
        })();
    }, [keyword, loadPage, location.search]);

    // 다음 페이지 로드
    const fetchNextPage = useCallback(async () => {
        if (!hasNext || fetchingNext) return;
        try {
            setFetchingNext(true);
            await loadPage(page, true);
        } catch (err) {
            console.error(err);
            setHasNext(false);
            setError("향수 목록을 불러오는데 실패했습니다.");
        } finally {
            setFetchingNext(false);
        }
    }, [page, hasNext, fetchingNext, loadPage]);

    // 인터섹션 옵저버
    useEffect(() => {
        if (!sentinelRef.current || !hasNext) return;
        const observer = new IntersectionObserver(
            (entries) => entries[0].isIntersecting && fetchNextPage(),
            {root: null, rootMargin: "200px 0px", threshold: 0}
        );

        observer.observe(sentinelRef.current);
        return () => observer.disconnect();
    }, [fetchNextPage, hasNext]);
    
    const handleFilterClick = () => navigate('/filter');

    const handleSearch = useCallback((term: string) => {
        setKeyword(term);
    }, []);

    const isSearch = keyword.trim().length >= 2;
    const isEmpty = isSearch && perfumes.length === 0;

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
                <SkeletonPerfumeGrid count={12} keyPrefix="initial-skeleton" />
            ) : error ? (
                <div className="flex justify-center items-center pt-[120px] text-body3 text-red-500">
                    {error}
                </div>
            ) : perfumes.length > 0 ? (
                <>
                    <PerfumeGrid perfumes={perfumes} />
                    {hasNext && (
                        <div ref={sentinelRef} className="h-12 flex items-center justify-center">
                            {fetchingNext && (
                                <SkeletonPerfumeGrid count={3} keyPrefix="loading-skeleton" />
                            )}
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