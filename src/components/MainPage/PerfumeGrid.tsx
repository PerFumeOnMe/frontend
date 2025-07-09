import PerfumeCard from './PerfumeCard';
import type { Perfume } from '../../types/perfume';

interface PerfumeGridProps {
    perfumes: Perfume[];
}

const PerfumeGrid = ({perfumes}: PerfumeGridProps) => {
    return (
        <div className="px-[24px] mt-[8px]">
            <div className="grid grid-cols-3 gap-x-[12px] gap-y-[12px]">
                {perfumes.map((perfume, index) => (
                    <PerfumeCard 
                        key={index}
                        perfume={perfume}
                    />
                ))}
            </div>
        </div>
    );
};

export default PerfumeGrid; 