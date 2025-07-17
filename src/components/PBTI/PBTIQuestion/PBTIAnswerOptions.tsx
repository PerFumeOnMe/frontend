import React from 'react';

interface AnswerOptionsProps {
  options: string[];
  progressIdx: number | null;
  onSelect: (idx: number) => void;
}

const PBTIAnswerOptions: React.FC<AnswerOptionsProps> = ({ options, progressIdx, onSelect }) => {
  return (
    <div className="flex justify-center gap-4">
      {options.map((option, idx) => (
        <div
          key={idx}
          className={`
            flex w-40 h-45 rounded-2xl justify-center items-center cursor-pointer
            text-body3 transition-colors duration-700
            bg-purple-50 text-grayscale-1000
            hover:bg-[#6401BB] hover:text-[#FBFBFB]
          `}
          onClick={() => onSelect(idx)}
        >
          <div className='w-35 h-15.8 px-1.5 text-center'>
            {option}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PBTIAnswerOptions;
