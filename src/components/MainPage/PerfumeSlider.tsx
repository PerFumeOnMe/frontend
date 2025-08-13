import type { MyPerfume } from "../../types/apis/Fragrance";
import type { Perfume } from "../../types/perfume";

interface PerfumeSliderProps {
    perfumes: MyPerfume[];
    currentIndex: number;
}

export default function PerfumeSlider({ perfumes, currentIndex }: PerfumeSliderProps) {
    const getVisiblePerfumes = () => {
        const centerIndex = currentIndex;
        const leftIndex = (currentIndex - 1 + perfumes.length) % perfumes.length;
        const rightIndex = (currentIndex + 1) % perfumes.length;
        
        return [
            perfumes[leftIndex],
            perfumes[centerIndex],
            perfumes[rightIndex]
        ];
    };

    return (
        <div className="mt-[16px] relative">
            <div className="overflow-hidden flex justify-center">
                <div className="flex items-center">
                    {getVisiblePerfumes().map((perfume, index) => {
                        const isCenter = index === 1;
                        return (
                            <div 
                                key={index} 
                                className={`
                                    min-w-[196px] h-[194px] p-[16px] rounded-[24px] transition-all duration-700
                                    ${isCenter 
                                        ? 'bg-[rgba(0,0,0,0.1)] border border-[rgba(0,0,0,0.2)] z-20 scale-100' 
                                        : 'bg-[rgba(0,0,0,0.15)] border border-[rgba(0,0,0,0.25)] z-10 scale-90'
                                    }
                                    -ml-[40px] first:ml-0
                                `}
                                style={{
                                    transform: `
                                        ${isCenter ? 'rotateY(0deg) translateX(0)' : index === 0 
                                            ? 'rotateY(30deg) translateX(-10%)' 
                                            : 'rotateY(-30deg) translateX(10%)'
                                        }
                                    `,
                                    opacity: isCenter ? 1 : 0.5,
                                    transition: 'all 0.7s ease-in-out',
                                    transformOrigin: index === 0 ? 'right center' : 'left center',
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
                    })}
                </div>
            </div>
        </div>
    );
} 