import SkeletonPerfumeCard from './SkeletonPerfumeCard';

interface SkeletonPerfumeGridProps {
    count?: number;
    keyPrefix?: string;
}

const SkeletonPerfumeGrid = ({ count = 6, keyPrefix = "skeleton" }: SkeletonPerfumeGridProps) => {
    return (
        <div className="px-[16px] mt-[8px]">
            <div className="grid grid-cols-3 gap-x-[12px] gap-y-[12px]">
                {Array.from({ length: count }).map((_, index) => (
                    <SkeletonPerfumeCard key={`${keyPrefix}-${index}`} />
                ))}
            </div>
        </div>
    );
};

export default SkeletonPerfumeGrid;
