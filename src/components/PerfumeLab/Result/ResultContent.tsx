import PerfumeDisplay from "./PerfumeResultDisplay";
import ContentBox from "./ContentBox";
import perfumeImage from "../../../assets/PerfumeLab/perfume.png";
import { usePerfumeLab } from "../../../hooks/PerfumeLab/usePerfumeLab";
import { useEffect } from "react";

const ResultContent = () => {
  const { completedPerfume } = usePerfumeLab();

  useEffect(() => {
    if (completedPerfume) {
      console.log("Completed Perfume:", completedPerfume);
    }
  }, [completedPerfume]);

  return (
    <div className="w-full gap-6 flex flex-col items-center">
      <div className="w-full  bg-[#FBFBFB]/30 rounded-3xl p-5 text-center border border-white shadow-[0_-10px_10px_-3px_rgba(0,0,0,0.02),0_10px_10px_-3px_rgba(0,0,0,0.02)]">
        <PerfumeDisplay perfumeImage={perfumeImage} />
      </div>

      <ContentBox
        title="🖼️ 시각적 키워드 요약"
        content={completedPerfume?.keywordSummary}
      />
      <ContentBox
        title="🪄 향기의 첫인상"
        content={completedPerfume?.firstImpression}
      />
      <ContentBox
        title="🌸 중심을 잡는 향"
        content={completedPerfume?.centerImpression}
      />
      <ContentBox
        title="🌲 마지막에 남는 잔향"
        content={completedPerfume?.lastImpression}
      />
      <ContentBox
        title="🧠 향기로 해석한 당신의 향"
        content={completedPerfume?.tendency}
        caption={completedPerfume?.remembered}
      />
      <ContentBox
        title="🎁 당신에게 어울리는 향수 추천"
        perfumes={completedPerfume?.recommendedFragranceJson || []}
      />
    </div>
  );
};

export default ResultContent;
