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
    <div className="bg-white rounded-3xl p-6 shadow-lg">
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
