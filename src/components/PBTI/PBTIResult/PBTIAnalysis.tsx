type PBTIAnalysisProps = {
  question: string;
  analysis: string;
};

const PBTIAnalysis: React.FC<PBTIAnalysisProps> = ({ question, analysis }) => {
  return (
    <div className="flex flex-col justify-center gap-1 items-center text-center px-1">
      <div className="text-body2 text-grayscale-1000">{question}</div>
      <div className="text-body3 text-grayscale-800">{analysis}</div>
    </div>
  );
};

export default PBTIAnalysis;
