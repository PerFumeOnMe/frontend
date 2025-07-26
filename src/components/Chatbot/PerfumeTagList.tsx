import React from "react";

interface PerfumeTagListProps {
  tags: string[];
}

const PerfumeTagList = ({ tags }: PerfumeTagListProps) => (
  <div className="fixed max-w-120 min-w-[375px] bottom-0 mb-23 px-4 flex w-[100%] justify-between gap-1 bg-transparent">
    {tags.map((tag, index) => (
      <span
        key={index}
        className="flex flex-shrink-0 items-center rounded-xl p-2 px-2.5 tracking-tight bg-main-400 text-caption1 text-[#FBFBFB]"
      >
        {tag}
      </span>
    ))}
  </div>
);

export default PerfumeTagList;
