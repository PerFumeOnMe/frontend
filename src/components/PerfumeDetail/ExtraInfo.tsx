import CategorySection from "./CategorySection";

interface ExtraInfoProps {
  gender: string; // "여성용", "남성용", "남녀공용" 등
  locations: string[]; // ["일상용", "파티/야간용", "출근/오피스용"] 등 - 장소 관련 모든 데이터
  seasons: string[]; // ["봄", "여름"] 등
}

const ExtraInfo = ({ gender, locations, seasons }: ExtraInfoProps) => {
  const genderOptions = ["여성용", "남성용", "남녀공용"];

  const locationOptions = [
    "일상용",
    "출근/오피스용",
    "데이트/로맨틱",
    "파티/야간용",
    "무거운 향",
    "가벼운 향",
  ];

  const seasonOptions = ["봄", "여름", "가을", "겨울"];

  return (
    <div className="w-full">
      <div className="grid grid-cols-5 gap-3">
        {/* 성별 */}
        <div className="col-span-1">
          <CategorySection
            title="성별"
            items={genderOptions}
            activeItems={[gender]}
          />
        </div>

        {/* 장소 (통합) */}
        <div className="col-span-3">
          <CategorySection
            title="장소"
            items={locationOptions}
            activeItems={locations}
            isGrid={true}
          />
        </div>

        {/* 계절 */}
        <div className="col-span-1">
          <CategorySection
            title="계절"
            items={seasonOptions}
            activeItems={seasons}
          />
        </div>
      </div>
    </div>
  );
};

export default ExtraInfo;
