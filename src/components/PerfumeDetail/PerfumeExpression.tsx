import { useDescription } from "../../hooks/usePerfumeDetail";

const PerfumeExpression = () => {
  const { description } = useDescription();

  return (
    <div className="w-full bg-[#FBFBFB]/20 rounded-3xl border border-white shadow-[0_-10px_10px_-3px_rgba(0,0,0,0.05),0_10px_10px_-3px_rgba(0,0,0,0.05)] p-6">
      <p className="flex justify-center text-body4 text-center text-grayscale-900 whitespace-pre-line">
        "{description}"
      </p>
    </div>
  );
};

export default PerfumeExpression;
