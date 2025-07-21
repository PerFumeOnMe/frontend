import PerfumeBasicInfo from "../components/PerfumeDetail/PerfumeBasicInfo";
import PerfumeDescription from "../components/PerfumeDetail/PerfumeDescription";
import PerfumeDetailHeader from "../components/PerfumeDetail/PerfumeDetailHeader";

const PerfumeDetailPage = () => {
  return (
    <>
      <div className="min-w-[375px] w-120 bg-white flex flex-col items-center gap-7">
        <PerfumeDetailHeader />
        <PerfumeBasicInfo />
        <div className="w-full bg-[#FBFBFB]/20 rounded-3xl border border-white shadow-[0_-10px_10px_-3px_rgba(0,0,0,0.05),0_10px_10px_-3px_rgba(0,0,0,0.05)] p-6">
          <p className="flex justify-center text-body4 text-center text-grayscale-900">
            향수 설명 영역
            <br /> 향수설명
          </p>
        </div>
        <PerfumeDescription />
      </div>
    </>
  );
};

export default PerfumeDetailPage;
