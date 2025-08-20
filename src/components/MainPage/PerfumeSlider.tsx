import type { MyPerfume } from "../../types/apis/Fragrance";
import PerfumeSliderCard from "./PerfumeSliderCard";

interface PerfumeSliderProps {
    perfumes: MyPerfume[];
    currentIndex: number;
}

export default function PerfumeSlider({ perfumes, currentIndex }: PerfumeSliderProps) {
    return (
        <div className="mt-[6px] relative overflow-hidden h-[230px] w-full flex justify-center">
            <div 
                className="flex items-center h-full"
                style={{
                    perspective: '1000px',
                    position: 'relative'
                }}
            >
                {/* Render all cards but manage their visibility and position with CSS. */}
                {perfumes.map((perfume, index) => {
                    // Logic to achieve the 1-2-3 -> 2-3-1 -> 3-1-2 -> 1-2-3 rotation.
                    // We only render 3 cards at a time to simplify the layout and ensure clean transitions.
                    let shouldRender = false;
                    if (index === currentIndex) {
                        shouldRender = true; // center
                    } else if (index === (currentIndex - 1 + perfumes.length) % perfumes.length) {
                        shouldRender = true; // left
                    } else if (index === (currentIndex + 1) % perfumes.length) {
                        shouldRender = true; // right
                    }

                    if (!shouldRender) {
                        return null; // Don't render cards that are not in the current view.
                    }

                    return (
                        <PerfumeSliderCard
                            key={`${perfume.name}-${index}`}
                            perfume={perfume}
                            index={index}
                            currentIndex={currentIndex}
                            totalPerfumes={perfumes.length}
                        />
                    );
                })}
            </div>
        </div>
    );
} 