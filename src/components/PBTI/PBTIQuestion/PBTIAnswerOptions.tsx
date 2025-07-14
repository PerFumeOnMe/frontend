import React from 'react';

interface AnswerOptionsProps {
  options: string[];
  selectedIdx: number | null;
  onSelect: (idx: number) => void;
}

const PBTIAnswerOptions: React.FC<AnswerOptionsProps> = ({ options, selectedIdx, onSelect }) => {
  return (
    <div className="flex gap-4">
      {options.map((option, idx) => (
        <div
          key={idx}
          className={`flex w-40 h-45 rounded-2xl justify-center text-body3 items-center cursor-pointer transition
            ${selectedIdx === idx ? 'bg-main-500 text-[#FBFBFB]' : 'bg-purple-50 text-grayscale-1000'}
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
