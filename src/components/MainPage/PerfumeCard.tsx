import type { Perfume } from "../../types/perfume";

interface PerfumeCardProps {
    perfume: Perfume;
}

const PerfumeCard = ({ perfume }: PerfumeCardProps) => {
    const { imageUrl, brand, name, price, isLiked } = perfume;
    
    return (
        <div className="flex flex-col">
            <div className="relative mb-2">
                <img 
                    src={imageUrl} 
                    alt={name} 
                    className="w-full aspect-square rounded-[5px] object-cover border border-[#E6E6E6]"
                />
                <button className="absolute bottom-[12px] right-[11px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
                    <img 
                        src={isLiked ? "/MainPage/heart_filled.png" : "/MainPage/heart_empty.png"}
                        alt="좋아요"
                        className="w-[19px] h-[16px]"
                    />
                </button>
            </div>
            <p className="text-[12px] text-[#666666] mb-[4px]">{brand}</p>
            <p className="text-[14px] font-medium mb-[4px]">{name}</p>
            <p className="text-[15px] font-bold">{price.toLocaleString()}원</p>
        </div>
    );
};

export default PerfumeCard; 