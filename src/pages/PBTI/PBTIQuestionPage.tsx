import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PerfumeOnMeCharacter from '../../assets/common/character.png';
import PBTIQuestionCard from '../../components/PBTI/PBTIQuestion/PBTIQuestionCard';
import { PBTIQuestions, type PBTIQuestionType } from "../../constants/PBTI/questions";
import { postPBTIResult } from '../../apis/PBTI';
import type { RequestPbtiQuestion } from '../../types/apis/PBTI';

const questions: PBTIQuestionType[] = PBTIQuestions;

const PBTIQuestionPage: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleSelect = async (optionIdx: number) => {
    const updatedAnswers = [...answers, optionIdx];
    setAnswers(updatedAnswers);

    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      // 마지막 질문 완료 - API 전송
      console.log(updatedAnswers)
      setIsSubmitting(true);
      
      try {
        // API 요청 body 구성
        const requestBody: RequestPbtiQuestion = {
            qOne: updatedAnswers[0].toString(),
            qTwo: updatedAnswers[1].toString(),
            qThree: updatedAnswers[2].toString(),
            qFour: updatedAnswers[3].toString(),
            qFive: updatedAnswers[4].toString(),
            qSix: updatedAnswers[5].toString(),
            qSeven: updatedAnswers[6].toString(),
            qEight: updatedAnswers[7].toString(),
        };

        const result = await postPBTIResult(requestBody);

        console.log("조회 결과", result)
        
        // 결과와 함께 결과 페이지로 이동
        navigate('/PBTI/result', { 
          state: { 
            answers: updatedAnswers,
            result: result 
          } 
        });
      } catch (error) {
        console.error('PBTI 제출 실패:', error);
        alert('결과 처리 중 오류가 발생했습니다. 다시 시도해주세요.');
        setIsSubmitting(false);
      }
    }
  };

  const currentQuestion = questions[currentIdx];

  return (
    <div className="min-w-[375px] h-screen -mb-20 bg-[#F4EEFA] flex flex-col items-center font-[Pretendard] overflow-hidden">
      <img src={PerfumeOnMeCharacter} className="w-[238px] h-[238px] mt-16" />

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

      {/* 로딩 상태 표시 */}
      {isSubmitting && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex flex-col items-center gap-3">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-main-500"></div>
              <p className="text-body3 text-grayscale-800">결과를 분석하고 있어요...</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PBTIQuestionPage;