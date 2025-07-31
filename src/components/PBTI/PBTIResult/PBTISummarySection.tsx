interface PerfumeSummary {
  summary: string;
}

const PBTISummarySection: React.FC<PerfumeSummary> = ({ summary }) => (
  <div className="w-full flex flex-col bg-white rounded-2xl p-5 shadow mb-6 text-center">
    <h2 className="text-title3 font-bold mb-1">성격 한 줄 요약</h2>
    <div className="flex flex-col justify-center gap-0.5 items-center tracking-tighter">
      <div className="text-body3">“{summary}”</div>
      <div className="text-caption1">{summary}</div>
    </div>
  </div>
);

export default PBTISummarySection;
