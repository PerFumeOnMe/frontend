import PBTIAnalysis from './PBTIAnalysis';

const analysisData = [
  {
    question: "버스 출발 2분 전 미리 분사",
    analysis: "계획형(J) – 준비된 스타일, 일관성과 조화를 중요시함"
  },
  {
    question: "커피 내리는 중간에 즉흥 터치업",
    analysis: "감각형(S) – 실제의 감각 자극에 민감, 순간의 기분을 살리는 향 선호"
  },
  {
    question: "TV 광고 직후 확실히 분사",
    analysis: "외향형(E) – 향기를 통해 긍정적 인상을 남기고 싶어함"
  },
  {
    question: "설거지 시작 전 공간 전체 분사",
    analysis: "전통적 안정형 – 실패 없는 클래식 스타일과 견고한 밸런스를 중시"
  }
];

interface keywordInterface {
  keyword : string,
  keywordDescription : string,
}

interface PBTIAnalysisSectionProps {
  keywordArray: keywordInterface[];
}

const PBTIAnalysisSection: React.FC<PBTIAnalysisSectionProps> = (keywordArray) => (
  <div className="w-full flex flex-col justify-center items-center bg-[#FBFBFB] rounded-2xl p-5 shadow mb-6">
    <h2 className="text-title4 text-[18px] font-[600] mb-2">이렇게 해석했어요.</h2>
    <div className="flex flex-col justify-center items-center gap-2 w-full">
      {keywordArray.map((item, index) => (
        <PBTIAnalysis key={index} question={item.question} analysis={item.analysis} />
      ))}
    </div>
  </div>
);

export default PBTIAnalysisSection;
