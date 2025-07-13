import React from 'react';

interface QuestionTextProps {
  text: string;
}

const PBTIQuestionText: React.FC<QuestionTextProps> = ({ text }) => {
  return (
    <h2 className="text-center text-lg font-bold text-gray-800 mb-6 whitespace-pre-line">
      {text}
    </h2>
  );
};

export default PBTIQuestionText;
