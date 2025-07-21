import DescriptionNote from "./DescriptionNote";
import DiffusionInfo from "./diffusionInfo";
import LastingInfo from "./LastingInfo";

const PerfumeDescription = () => {
  return (
    <div className="w-full h-full flex flex-col gap-12 bg-[#FBFBFB]/20 border border-white shadow-[0_-10px_10px_-3px_rgba(0,0,0,0.05),0_10px_10px_-3px_rgba(0,0,0,0.05)] pt-5 pb-5 pl-10 pr-10">
      <div className=" flex flex-col justify-center items-center gap-2">
        <div className="flex flex-col items-center gap-1 mb-6">
          <h1 className="text-title3">향수 정보</h1>
          <p className="text-body3 text-grayscale-900">
            퍼퓨온미가 쉽게 설명해 줄게요.
          </p>
        </div>
        {/* 전체적인 퍼블리실 끝나고 애니메이션 구현 */}
        <DescriptionNote />
      </div>
      <LastingInfo lastingData="1~2시간" />
      <DiffusionInfo activeDiffusion={3} />
    </div>
  );
};

export default PerfumeDescription;
