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
          className={`flex-1 p-4 rounded-2xl text-center cursor-pointer transition
            ${selectedIdx === idx ? 'bg-purple-600 text-white' : 'bg-purple-50 text-black'}
          `}
          onClick={() => onSelect(idx)}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

export default PBTIAnswerOptions;
