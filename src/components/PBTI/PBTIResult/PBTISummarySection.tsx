interface PerfumeSummary {
  summary: string;
}

const PBTISummarySection: React.FC<PerfumeSummary> = ({ summary }) => (
  <div className="w-full flex flex-col bg-white rounded-2xl p-5 shadow mb-6 text-center">
    <div className="text-title3 font-bold mb-2">🧠 성격 한 줄 요약</div>
    <div className="flex flex-col justify-center gap-0.5 items-center tracking-tighter">
      <div className="text-body3 text-grayscale-1000 text-center px-8">“{summary}”</div>
      <div className="text-caption1 text-grayscale-800 text-center px-8">{summary}</div>
    </div>
  </div>
);

export default PBTISummarySection;
