import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PerfumeOnMeCharacter from '../../assets/common/character.png';
import PBTIQuestionCard from '../../components/PBTI/PBTIQuestion/PBTIQuestionCard';
import { PBTIQuestions, type PBTIQuestionType } from "../../constants/PBTI/questions"

const questions : PBTIQuestionType[] = PBTIQuestions;

const PBTIQuestionPage: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const navigate = useNavigate();

  const handleSelect = (optionIdx: number) => {
    const updatedAnswers = [...answers, optionIdx];
    setAnswers(updatedAnswers);

    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      // 결과 페이지로 이동
      console.log('제출 완료', updatedAnswers);
      navigate('/PBTI/result')
    }
  };

  const currentQuestion = questions[currentIdx];

  return (
    <div className="min-w-[375px] h-screen -mb-20 bg-[#F4EEFA] flex flex-col items-center font-[Pretendard] overflow-hidden">
      <img src={PerfumeOnMeCharacter} className="w-[238px] h-[238px] mt-16" />

      {/* AnimatePresence로 감싸고 key를 변경해서 애니메이션 */}
      <div className="w-full flex justify-center px-4">
        <AnimatePresence mode="wait">
          <PBTIQuestionCard
            progress={(currentIdx)}
            question={currentQuestion.question}
            options={currentQuestion.options}
            onSelect={handleSelect}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PBTIQuestionPage;
