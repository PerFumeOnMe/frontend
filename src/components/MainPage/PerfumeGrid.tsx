import PerfumeCard from './PerfumeCard';
import type { Perfume } from '../../types/perfume';

interface PerfumeGridProps {
    perfumes: Perfume[];
}

const PerfumeGrid = ({perfumes}: PerfumeGridProps) => {
    return (
        <div className="px-[22px] mt-[7px]">
            <h2 className="text-[20px] font-semibold mb-[7px]">MD's Choice</h2>
            <div className="grid grid-cols-3 gap-x-[5px] gap-y-[13px]">
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