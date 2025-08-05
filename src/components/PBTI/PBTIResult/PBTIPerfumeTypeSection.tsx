import { FaHeart } from "react-icons/fa";

const perfumeTypeData = [
  { type: "시트러스", level: 6 },
  { type: "우디", level: 3 },
  { type: "허브", level: 3 },
  { type: "머스크", level: 2 },
  { type: "플로럴", level: 1 },
];

interface perfumePoint {
  category : string;
  point : number;
}

interface PerfumeTypeSectionProps {
  data: perfumePoint[];
}

const PBTIPerfumeTypeSection: React.FC<PerfumeTypeSectionProps> = ({ data }) => (
  <div className="w-full flex flex-col bg-[#FBFBFB] justify-center items-center rounded-2xl p-5 shadow mb-6">
    <h2 className="text-[18px] text-grayscale-1000 text-title3 font-semibold mb-2">🧭 당신에게 어울리는 향기 스타일 원형</h2>

    <div className="flex h-full justify-center gap-6">
      {/* Type 열 */}
      <div className="flex flex-col text-grayscale-900 items-center gap-1">
        {data.map((item, index) => (
          <div key={index} className="text-body3 font-medium">
            {item.category}
          </div>
        ))}
      </div>

      {/* Level 열 */}
      <div className="flex flex-col text-grayscale-800 justify-around items-center">
        {data.map((item, index) => (
          <div key={index} className="flex gap-1 text-body2">
            {Array.from({ length: item.point }).map((_, idx) => (
              <span key={idx}><FaHeart /></span>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default PBTIPerfumeTypeSection;
