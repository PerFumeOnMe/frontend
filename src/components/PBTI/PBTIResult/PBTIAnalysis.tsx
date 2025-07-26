type PBTIAnalysisProps = {
  question: string;
  analysis: string;
};

const PBTIAnalysis: React.FC<PBTIAnalysisProps> = ({ question, analysis }) => {
  return (
    <div className="flex flex-col justify-center gap-1 items-center">
      <div className="text-body3">{question}</div>
      <div className="text-body4 text-gray-700">{analysis}</div>
    </div>
  );
};

export default PBTIAnalysis;
