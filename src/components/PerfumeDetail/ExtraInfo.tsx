import CategorySection from "./CategorySection";

interface ExtraInfoProps {
  gender: string;
  locations: string[];
  seasons: string[];
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

  const locationMapping: { [key: string]: string } = {
    일상용: "일상용",
    "출근 / 오피스용": "출근/오피스용",
    "데이트 / 로맨틱용": "데이트/로맨틱",
    "파티 / 야간용": "파티/야간용",
    "무거운 향": "무거운 향",
    "가벼운 향": "가벼운 향",
  };

  const mapLocations = (inputLocations: string[]): string[] => {
    return inputLocations
      .map((location) => locationMapping[location] || location)
      .filter((location) => locationOptions.includes(location));
  };
  const mappedLocations = mapLocations(locations);

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

        {/* 장소 */}
        <div className="col-span-3">
          <CategorySection
            title="장소"
            items={locationOptions}
            activeItems={mappedLocations}
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
