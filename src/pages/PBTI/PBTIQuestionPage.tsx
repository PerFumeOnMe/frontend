import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PBTILOGO from '../../assets/PBTI/PBTILOGO.gif';
import PBTIQuestionCard from '../../components/PBTI/PBTIQuestion/PBTIQuestionCard';
import { PBTIQuestions, type PBTIQuestionType } from "../../constants/PBTI/questions";

const questions: PBTIQuestionType[] = PBTIQuestions;

const PBTIQuestionPage: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleSelect = async (optionIdx: number) => {
    if (isSubmitting) return; // 중복 제출 막기

    const updatedAnswers = [...answers, optionIdx];
    setAnswers(updatedAnswers);

    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
      return;
    }

    // 마지막 질문 완료 ->> 로딩으로 이동
    setIsSubmitting(true);
    console.log(updatedAnswers)

    //다음 테스트에서 tip 새로 뽑기 위해 초기화
    sessionStorage.removeItem("pbti_visibleTips");
    navigate('/PBTI/loading', {
      state: { answers: updatedAnswers },
    });
  };

  const currentQuestion = questions[currentIdx];

  return (
    <div className="min-w-[375px] min-h-screen bg-[#F4EEFA] flex flex-col items-center font-[Pretendard] overflow-hidden">
      <img src={PBTILOGO} className="w-[376px] h-[360px] -mt-16" />

      <div className="w-full flex justify-center px-4">
        <AnimatePresence mode="wait">
          <PBTIQuestionCard
            progress={currentIdx}
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
