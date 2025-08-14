import DiffusionTag from "./DiffusionTag";

interface scentDiffusionProps {
  activeDiffusion: number;
}

const DiffusionInfo = ({ activeDiffusion }: scentDiffusionProps) => {
  const diffusionLevels = [
    {
      id: 1,
      label: "매우 부드러움",
      description: "온몸 가까이에서만 느껴집니다",
    },
    {
      id: 2,
      label: "부드러움",
      description: "피부 바로 위에서 은은히 퍼집니다",
    },
    { id: 3, label: "보통", description: "바로 옆자리에서 은은히 퍼집니다" },
    { id: 4, label: "강함", description: "복도에서 확실히 퍼집니다" },
    { id: 5, label: "매우 강함", description: "실내 전체에 퍼집니다" },
  ];
  return (
    <div className="w-full">
      <div className="flex flex-col">
        <h1 className="text-title4 mb-4">발향력</h1>
        <div className="flex flex-wrap gap-3 justify-start">
          {diffusionLevels.map((profile) => (
            <DiffusionTag
              key={profile.id}
              label={profile.label}
              description={profile.description}
              isActive={activeDiffusion === profile.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiffusionInfo;
