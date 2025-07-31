import PerfumeBottle from "./PerfumeBottle";
import PerfumeCylinder from "./PerfumeCylinder";

interface PerfumeDisplayProps {
  perfumeImage: string;
  showNoteInfo?: boolean; // 노트 정보 표시 여부
  className?: string;
}

const PerfumeMakingDisplay: React.FC<PerfumeDisplayProps> = ({
  perfumeImage,
}) => {
  return (
    <div className="w-full flex flex-row items-center gap-1">
      {/* 향수 공병 영역 */}
      <PerfumeBottle perfumeImage={perfumeImage} className="flex-3" />
      <PerfumeCylinder className="flex-4" />

      {/* 노트 정보 영역 (선택적) */}
    </div>
  );
};

export default PerfumeMakingDisplay;
