import React from "react";

interface PerfumeTagListProps {
  tags: string[];
}

const PerfumeTagList = ({ tags }: PerfumeTagListProps) => (
  <div className="fixed w-120 h-7 bottom-0 mb-20 px-3 flex justify-between">
    {tags.map((tag, index) => (
      <span
        key={index}
        className="inline-flex items-center bg-gray-200 px-1 py-1 rounded-xl text-gray-800 font-bold text-[11px]"
      >
        {tag}
      </span>
    ))}
  </div>
);

export default PerfumeTagList;
