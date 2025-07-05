import Banner from "../components/MainPage/Banner";
import SearchBar from "../components/MainPage/SearchBar";
import PerfumeGrid from "../components/MainPage/PerfumeGrid";
import type { Perfume } from "../types/perfume";

const MainPage = () => {
    const firstMDChoice: Perfume[] = [
        {
            imageUrl: "https://image.sivillage.com/upload/C00001/goods/org/617/230907006220617.jpg?RS=600&SP=1",
            brand: "LOIVIE",
            name: "오 드 퍼퓸 피오니 앤 화이트 머스크",
            price: 320000,
            isLiked: true
        },
        {
            imageUrl: "https://image.sivillage.com/upload/C00001/goods/org/895/231117007082895.jpg?RS=600&SP=1",
            brand: "LOIVIE",
            name: "오 드 퍼퓸 망고 앤 민트 리브",
            price: 320000,
            isLiked: false
        },
        {
            imageUrl: "https://image.sivillage.com/upload/C00001/goods/org/157/230922006452157.jpg?RS=600&SP=1",
            brand: "LOIVIE",
            name: "오 드 퍼퓸 휘그 앤 시더우드",
            price: 320000,
            isLiked: false
        }
    ];

    const secondMDChoice: Perfume[] = [
        {
            imageUrl: "https://image.sivillage.com/upload/C00001/goods/org/617/230907006220617.jpg?RS=600&SP=1",
            brand: "LOIVIE",
            name: "오 드 퍼퓸 피오니 앤 화이트 머스크",
            price: 320000,
            isLiked: true
        },
        {
            imageUrl: "https://image.sivillage.com/upload/C00001/goods/org/895/231117007082895.jpg?RS=600&SP=1",
            brand: "LOIVIE",
            name: "오 드 퍼퓸 망고 앤 민트 리브",
            price: 320000,
            isLiked: false
        },
        {
            imageUrl: "https://image.sivillage.com/upload/C00001/goods/org/157/230922006452157.jpg?RS=600&SP=1",
            brand: "LOIVIE",
            name: "오 드 퍼퓸 휘그 앤 시더우드",
            price: 320000,
            isLiked: false
        }
    ];

    return (
        <div className="pb-20 bg-white min-h-screen w-full">
            <Banner />
            <SearchBar />
            <PerfumeGrid perfumes={firstMDChoice} />
            <PerfumeGrid perfumes={secondMDChoice} />
        </div>
    );
};

export default MainPage;