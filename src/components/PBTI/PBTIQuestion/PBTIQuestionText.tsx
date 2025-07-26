import React from 'react';

interface QuestionTextProps {
  text: string;
  progress: number;
}

const PBTIQuestionText: React.FC<QuestionTextProps> = ({ text, progress }) => {
  return (
    <div className="flex flex-col gap-2 text-center mb-6">
      <div className='text-display1 text-main-500'>Q{progress + 1}.</div>
      <div className="text-title3 text-grayscale-800 whitespace-pre-line">
        {text}
      </div>
    </div>
  );
};

export default PBTIQuestionText;
