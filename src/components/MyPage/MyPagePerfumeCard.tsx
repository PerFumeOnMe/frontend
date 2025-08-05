import { useState } from "react";
import type { Perfume } from "../../types/perfume";
import heartFilledImage from "../../assets/MainPage/heart_filled.png";
import heartEmptyImage from "../../assets/MainPage/heart_empty.png";

interface PerfumeCardProps {
    perfume: Perfume;
}

const MyPagePerfumeCard = ({ perfume }: PerfumeCardProps) => {
    const { brand, id, imageUrl, liked, minPrice, name  } = perfume;
    const [isLiked, setIsLiked] = useState(liked);
    
    const handleLikeClick = (e: React.MouseEvent) => {
        e.preventDefault(); // 버블링 방지
        setIsLiked(prev => !prev);
    };

    return (
        <div className="flex flex-col">
            <div className="mb-[9px]">
                <img 
                    src={imageUrl} 
                    alt={name} 
                    className="w-full aspect-[14/15] bg-grayscale-200 rounded-[8px] object-cover border border-[1px] border-grayscale-200"
                />
            </div>
            <p className="text-caption2 text-grayscale-800 mb-1">{brand}</p>
            <p className="text-body3 text-grayscale-1000 mb-1">{name}</p>
            <p className="text-body4 text-grayscale-900">{minPrice.toLocaleString()}원~</p>
        </div>
    );
};

export default MyPagePerfumeCard; 