import React from "react";

interface PerfumeTagListProps {
  tags: string[];
}

const PerfumeTagList = ({ tags }: PerfumeTagListProps) => (
  <div className="fixed bottom-0 mb-23 px-4 flex gap-1 bg-transparent">
    {tags.map((tag, index) => (
      <span
        key={index}
        className="flex flex-shrink-0 items-center rounded-xl p-2 px-2.5 tracking-tight bg-[#8001EE] text-[#FBFBFB] font-[300] text-[12px]"
      >
        {tag}
      </span>
    ))}
  </div>
);

export default PerfumeTagList;
