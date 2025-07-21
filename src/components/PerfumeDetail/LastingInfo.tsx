interface LastingInfoProps {
  lastingData: string;
}

const LastingInfo = ({ lastingData }: LastingInfoProps) => {
  const timeLabels = [
    "0시간",
    "0.5~1시간",
    "1~2시간",
    "2~4시간",
    "4~6시간",
    "6~8시간",
  ];

  // 조단한테 설명 받아서 새로 작성
  const descriptions = [
    "이 향수는 거의 지속되지 않습니다",
    "이 향수는 0.5~1시간 정도 지속되는 오드코롱입니다",
    "이 향수는 1~2시간 정도 지속되는 오드코롱입니다",
    "이 향수는 2~4시간 정도 지속되는 오드투왈렛입니다",
    "이 향수는 4~6시간까지 향이 지속되는 오드퍼퓸입니다",
    "이 향수는 6~8시간 이상 지속되는 퍼퓸입니다",
  ];

  // API에서 받은 텍스트로 level 찾기
  const level = timeLabels.findIndex((label) => label === lastingData);
  const finalLevel = level !== -1 ? level : 4;

  const progressPercentage = (finalLevel / (timeLabels.length - 1)) * 100;

  return (
    <div className="w-full">
      <div className="flex flex-col">
        <h1 className="text-title4 mb-4">지속력</h1>

        {/* Progress Bar */}
        <div className="relative w-full h-2 bg-grayscale-300 rounded-full mb-4">
          <div
            className="absolute top-0 left-0 h-full bg-main-500 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        {/* 시간 라벨들 */}
        <div className="flex justify-between text-caption2 text-grayscale-700 mb-4 px-1">
          {timeLabels.map((label, index) => (
            <span
              key={index}
              className={`${
                index === level ? "font-medium text-main-500" : ""
              }`}
            >
              {label}
            </span>
          ))}
        </div>

        {/* 설명 텍스트 */}
        <p className="text-center text-body4">{descriptions[level]}</p>
      </div>
    </div>
  );
};

export default LastingInfo;
