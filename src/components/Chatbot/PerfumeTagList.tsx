import React from "react";

interface PerfumeTagListProps {
  tags: string[];
}

const PerfumeTagList = ({ tags }: PerfumeTagListProps) => (
  <div className="flex w-[480px] flex-nowrap justify-center gap-x-2">
    {tags.map((tag, index) => (
      <span
        key={index}
        className="inline-flex items-center bg-gray-200 px-2 py-2 rounded-xl text-gray-800 whitespace-nowrap text-[10px]"
      >
        {tag}
      </span>
    ))}
  </div>
);

export default PerfumeTagList;
