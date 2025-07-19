import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/AllPerfumePage/SearchBar';
import AllPerfumeHeader from '../components/AllPerfumePage/AllPerfumeHeader';
import type { Perfume } from "../types/perfume";
import PerfumeGrid from '../components/MainPage/PerfumeGrid';

// 임시데이터
const secondMDChoice: Perfume[] = [
    {
        id: 1,
        imageUrl: "https://image.sivillage.com/upload/C00001/goods/org/617/230907006220617.jpg?RS=600&SP=1",
        brand: "로이비 (LOIVIE)",
        name: "오 드 퍼퓸 피오니 앤 화이트 머스크",
        price: 109000,
        isLiked: false
    },
    {
        id: 2,
        imageUrl: "https://image.sivillage.com/upload/C00001/goods/org/895/231117007082895.jpg?RS=600&SP=1",
        brand: "로이비 (LOIVIE)",
        name: "오 드 퍼퓸 망고 앤 민트 리브",
        price: 109000,
        isLiked: false
    },
    {
        id: 3,
        imageUrl: "https://image.sivillage.com/upload/C00001/goods/org/157/230922006452157.jpg?RS=600&SP=1",
        brand: "로이비 (LOIVIE)",
        name: "오 드 퍼퓸 휘그 앤 시더우드",
        price: 109000,
        isLiked: false
    },
    {
        id: 4,
        imageUrl: "https://image.sivillage.com/upload/C00001/goods/org/737/230522005192737.jpg?RS=600&SP=1",
        brand: "로이비 (LOIVIE)",
        name: "오 드 퍼퓸 베르가못 앤 화이트 로즈",
        price: 109000,
        isLiked: false
    },
    {
        id: 5,
        imageUrl: "https://image.sivillage.com/upload/C00001/goods/org/814/230907006175814.jpg?RS=600&SP=1",
        brand: "로이비 (LOIVIE)",
        name: "오 드 퍼퓸 로터스 앤 인센스",
        price: 109000,
        isLiked: false
    },
    {
        id: 6,
        imageUrl: "https://image.sivillage.com/upload/C00001/s3/goods/org/716/240604019552716.jpg?RS=600&SP=1",
        brand: "로이비 (LOIVIE)",
        name: "오 드 퍼퓸 타임 앤 모스",
        price: 109000,
        isLiked: false
    },
    {
        id: 7,
        imageUrl: "https://image.sivillage.com/upload/C00001/goods/org/739/230522005192739.jpg?RS=600&SP=1",
        brand: "로이비 (LOIVIE)",
        name: "오 드 퍼퓸 클로브 앤 바닐라",
        price: 109000,
        isLiked: false
    },
    {
        id: 8,
        imageUrl: "https://image.sivillage.com/upload/C00001/s3/goods/org/850/250522083980850.jpg?RS=600&SP=1",
        brand: "딥티크 (DIPTYQUE)",
        name: "오 드 퍼퓸 플레르 드 뽀",
        price: 289000,
        isLiked: false
    },
    {
        id: 9,
        imageUrl: "https://image.sivillage.com/upload/C00001/s3/goods/org/242/250522083981242.jpg?RS=600&SP=1",
        brand: "딥티크 (DIPTYQUE)",
        name: "오 드 뚜왈렛 오 데 썽",
        price: 183000,
        isLiked: false
    },
    {
        id: 10,
        imageUrl: "https://image.sivillage.com/upload/C00001/s3/goods/org/847/250522083980847.jpg?RS=600&SP=1",
        brand: "딥티크 (DIPTYQUE)",
        name: "오 드 퍼퓸 오르페옹",
        price: 289000,
        isLiked: false
    }
];

export default function AllPerfumePage() {
    const navigate = useNavigate();
    const [perfumes, setPerfumes] = useState<Perfume[]>(secondMDChoice);

    const handleFilterClick = () => {
        navigate('/filter');
    };

    const handleSearch = (searchTerm: string) => {
        if (!searchTerm) {
            // 검색어가 없으면 전체 목록 표시
            setPerfumes(secondMDChoice);
            return;
        }

        // 검색어가 있으면 이름으로 필터링
        const filteredPerfumes = secondMDChoice.filter(perfume => 
            perfume.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            perfume.brand.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        // 검색 파라미터 콘솔에 출력
        console.log('Search Parameters:', {
            name: searchTerm,
            page: 0,
            size: 10
        });

        setPerfumes(filteredPerfumes);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* 헤더 */}
            <AllPerfumeHeader onFilterClick={handleFilterClick}/>

            {/* 검색창 */}
            <SearchBar onSearch={handleSearch} />

            {/* 향수 목록 */}
            <PerfumeGrid perfumes={perfumes} />
        </div>
    );
} 