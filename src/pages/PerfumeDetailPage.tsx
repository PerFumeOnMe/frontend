import { useParams } from "react-router-dom";
import { getFragranceDetail } from "../apis/Fragrance";
import PerfumeBasicInfo from "../components/PerfumeDetail/PerfumeBasicInfo";
import PerfumeDescription from "../components/PerfumeDetail/PerfumeDescription";
import PerfumeDetailHeader from "../components/PerfumeDetail/PerfumeDetailHeader";
import PerfumeDetailNavbar from "../components/PerfumeDetail/PerfumeDetailNavbar";
import { useEffect } from "react";

const PerfumeDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;

      const response = await getFragranceDetail(Number(id));
      console.log("향수 상세 데이터:", response);
    };

    fetchData();
  }, [id]);

  return (
    <div className="min-w-[375px] w-120 h-screen bg-white flex justify-center">
      <div className="pb-20 w-full">
        <div className="flex flex-col items-center gap-7">
          <PerfumeDetailHeader />
          <PerfumeBasicInfo />
          <div className="w-full bg-[#FBFBFB]/20 rounded-3xl border border-white shadow-[0_-10px_10px_-3px_rgba(0,0,0,0.05),0_10px_10px_-3px_rgba(0,0,0,0.05)] p-6">
            <p className="flex justify-center text-body4 text-center text-grayscale-900">
              향수 설명 영역
              <br /> 향수설명
            </p>
          </div>
          <PerfumeDescription />
          <PerfumeDetailNavbar />
        </div>
      </div>
    </div>
  );
};

export default PerfumeDetailPage;
