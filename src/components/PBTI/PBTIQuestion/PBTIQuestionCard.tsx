import React from 'react';
import PBTIProgressBar from './PBTIProgressBar';
import PBTIQuestionText from './PBTIQuestionText';
import PBTIAnswerOptions from './PBTIAnswerOptions';

interface QuestionCardProps {
  progress: number;
  question: string;
  options: string[];
  selectedIdx: number | null;
  onSelect: (idx: number) => void;
}

const PBTIQuestionCard: React.FC<QuestionCardProps> = ({
  progress,
  question,
  options,
  selectedIdx,
  onSelect
}) => {
  return (
    <div className="flex flex-col bg-white rounded-3xl items-center -mt-10 p-5.5 px-2.5 pb-10 shadow-md">
      <PBTIProgressBar progress={progress} />
      <PBTIQuestionText text={question} />
      <PBTIAnswerOptions
        options={options}
        selectedIdx={selectedIdx}
        onSelect={onSelect}
      />
    </div>
  );
};

export default PBTIQuestionCard;
