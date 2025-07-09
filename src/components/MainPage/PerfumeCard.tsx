import { useState } from "react";
import type { Perfume } from "../../types/perfume";
import heartFilledImage from "../../assets/MainPage/heart_filled.png";
import heartEmptyImage from "../../assets/MainPage/heart_empty.png";

interface PerfumeCardProps {
    perfume: Perfume;
}

const PerfumeCard = ({ perfume }: PerfumeCardProps) => {
    const { imageUrl, brand, name, price, isLiked: initialIsLiked } = perfume;
    const [isLiked, setIsLiked] = useState(initialIsLiked);
    
    const handleLikeClick = (e: React.MouseEvent) => {
        e.preventDefault(); // 버블링 방지
        setIsLiked(prev => !prev);
    };

    return (
        <div className="flex flex-col">
            <div className="relative mb-[9px]">
                <img 
                    src={imageUrl} 
                    alt={name} 
                    className="w-full aspect-square bg-grayscale-200 rounded-[16px] object-cover border border-grayscale-300"
                />
                <button 
                    onClick={handleLikeClick}
                    className="absolute bottom-[9px] right-[8px]"
                >
                    <img 
                        src={isLiked ? heartFilledImage : heartEmptyImage}
                        alt="좋아요"
                        className="w-[20px] h-[20px]"
                    />
                </button>
            </div>
            <p className="text-caption2 text-grayscale-800 mb-[-2]">{brand}</p>
            <p className="text-[14px] font-medium mb-[-2]">{name}</p>
            <p className="text-body4 font-bold">{price.toLocaleString()}원~</p>
        </div>
    );
};

export default PerfumeCard; 