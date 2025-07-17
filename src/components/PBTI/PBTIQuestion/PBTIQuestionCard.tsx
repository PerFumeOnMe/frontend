import React from 'react';
import PBTIProgressBar from './PBTIProgressBar';
import PBTIQuestionText from './PBTIQuestionText';
import PBTIAnswerOptions from './PBTIAnswerOptions';
import { motion, AnimatePresence } from 'framer-motion';

interface QuestionCardProps {
  progress: number;
  question: string;
  options: string[];
  onSelect: (idx: number) => void;
}

const PBTIQuestionCard: React.FC<QuestionCardProps> = ({
  progress,
  question,
  options,
  onSelect
}) => {
  return (
    <div className="flex flex-col w-full bg-white rounded-3xl items-center -mt-10 p-5.5 px-2.5 pb-10 shadow-md">
      <motion.div
        key={progress}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-md"
      >
        <PBTIProgressBar progress={(progress + 1) * 12.5} />
        <PBTIQuestionText text={question} progress={progress} />
        <PBTIAnswerOptions
          options={options}
          progressIdx={progress}
          onSelect={onSelect}
        />
      </motion.div>
    </div>
  );
};

export default PBTIQuestionCard;
