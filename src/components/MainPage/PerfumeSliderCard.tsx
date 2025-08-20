import type { MyPerfume } from "../../types/apis/Fragrance";

interface PerfumeSliderCardProps {
    perfume: MyPerfume;
    index: number;
    currentIndex: number;
    totalPerfumes: number;
}

export default function PerfumeSliderCard({ perfume, index, currentIndex, totalPerfumes }: PerfumeSliderCardProps) {
    // Determine the position of the card relative to the current index.
    const isCenter = index === currentIndex;
    const isLeft = index === (currentIndex - 1 + totalPerfumes) % totalPerfumes;
    const isRight = index === (currentIndex + 1) % totalPerfumes;
    
    // Based on the position, apply different transform styles.
    let cardTransform = '';
    if (isCenter) {
        cardTransform = 'rotateY(0deg) scale(1.1) translateX(0px)';
    } else if (isLeft) {
        cardTransform = 'rotateY(30deg) scale(0.9) translateX(-160px)';
    } else if (isRight) {
        cardTransform = 'rotateY(-30deg) scale(0.9) translateX(160px)';
    }

    return (
        <div 
            className={`
                min-w-[196px] h-[194px] p-[16px] rounded-[24px] transition-all duration-700 ease-in-out
                ${isCenter ? 'z-20' : 'z-10'}
                ${isLeft || isRight ? 'absolute' : ''}
            `}
            style={{
                // Apply the calculated transform and set the origin for rotation.
                transform: cardTransform,
                transformOrigin: 'center center',
                opacity: isCenter ? 1 : 0.5,
                backdropFilter: 'blur(2px)',
                background: isCenter 
                    ? 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.1) 100%)' 
                    : 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.15) 100%)',
                boxShadow: isCenter 
                    ? '0 8px 32px rgba(0,0,0,0.2), inset 0 2px 4px rgba(255,255,255,0.1)' 
                    : '0 4px 16px rgba(0,0,0,0.15), inset 0 1px 2px rgba(255,255,255,0.05)'
            }}
        >
            <div className="relative h-full flex flex-col justify-between items-center">
                <img 
                    src={perfume.imageUrl} 
                    alt={perfume.name}
                    className={`
                        w-[112px] h-[120px] object-contain mx-auto transition-all duration-700 rounded-[16px]
                        ${isCenter ? 'opacity-100' : 'opacity-50'}
                    `}
                />
                <div className={isCenter ? 'opacity-100 w-[112px]' : 'opacity-50 w-[112px]'}>
                    <p className="text-caption2 text-white pt-[8px]">{perfume.brand}</p>
                    <p className="mt-[4px] text-body3 text-white pb-[15px] truncate">{perfume.name}</p>
                </div>
            </div>
        </div>
    );
}
