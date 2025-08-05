import { useParams } from "react-router-dom";
import { getFragranceDetail } from "../apis/Fragrance";
import PerfumeBasicInfo from "../components/PerfumeDetail/PerfumeBasicInfo";
import PerfumeDescription from "../components/PerfumeDetail/PerfumeDescription";
import PerfumeDetailHeader from "../components/PerfumeDetail/PerfumeDetailHeader";
import PerfumeDetailNavbar from "../components/PerfumeDetail/PerfumeDetailNavbar";
import { useEffect } from "react";
import { PerfumeDetailProvider } from "../context/PerfumeDetailContext";
import PerfumeExpression from "../components/PerfumeDetail/PerfumeExpression";

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
    <PerfumeDetailProvider fragranceId={Number(id)}>
      <div className="min-w-[375px] w-120 h-screen bg-white flex justify-center">
        <div className="pb-20 w-full">
          <div className="flex flex-col items-center gap-7">
            <PerfumeDetailHeader />
            <PerfumeBasicInfo />
            <PerfumeExpression />
            <PerfumeDescription />
            <PerfumeDetailNavbar />
          </div>
        </div>
      </div>
    </PerfumeDetailProvider>
  );
};

export default PerfumeDetailPage;
