import type { PerfumeDetail } from "../../../types/PerfumeLab/PerfumeLabResult";
import PerfumeCard from "./PerfumeCard";

interface ContentBoxProps {
  title: string;
  content?: string;
  caption?: string;
  perfumes?: PerfumeDetail[];
}

const ContentBox = ({ title, content, caption, perfumes }: ContentBoxProps) => {
  const isPerfumeBox = perfumes && perfumes.length > 0;
  const formatContent = (text: string) => {
    return text.replace(/\\n/g, "\n");
  };

  return (
    <div className="w-full bg-[#FBFBFB]/30 rounded-3xl p-5 text-center border border-white shadow-[0_-10px_10px_-3px_rgba(0,0,0,0.02),0_10px_10px_-3px_rgba(0,0,0,0.02)]">
      <h2 className="text-title3 mb-2 whitespace-pre-line">{title}</h2>
      {content && (
        <p className="text-body3 text-grayscale-900 whitespace-pre-line">
          {formatContent(content)}
        </p>
      )}
      {caption && (
        <p className="text-caption1 mt-2 whitespace-pre-line">
          {formatContent(caption)}
        </p>
      )}
      {isPerfumeBox && (
        <div className="flex flex-col gap-6 mt-5">
          {perfumes.map((perfume, index) => (
            <PerfumeCard
              key={`${perfume.brand}-${perfume.name}-${index}`}
              perfume={perfume}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ContentBox;
