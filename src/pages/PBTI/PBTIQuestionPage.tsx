<<<<<<< HEAD
import React from 'react';
import PBTIHeader from '../../components/PBTI/PBTIHeader';
import PBTIStartButton from '../../components/PBTI/PBTIStartButton';
import PBTIInfoCard from '../../components/PBTI/PBTIInfoCard';

const PBTIQuestionPage: React.FC = () => {
  const infoList = [
    "질문 기반 해석 성향 키워드",
    "성향 기반 향기 스타일",
    "나에게 맞는 향수"
  ];

  return (
    <div className="min-w-[375px] w-120 h-full bg-[#FBFBFB] flex flex-col items-center font-[Pretandard]">
      <PBTIHeader />
      <div className='w-[88%] border-1 border-[#65656C]'></div>
      <div className='mt-6 text-[18px] text-grayscale-900 font-[600]'>
        PBTI를 통해 확인할 수 있어요.
      </div>
      <div className='flex w-full justify-center m-6 gap-5'>
        {infoList.map((info, idx) => (
          <PBTIInfoCard key={idx} info={info} />
        ))}
      </div>
      <PBTIStartButton />
=======
import React, { useState } from 'react';

const PBTIQuestionPage: React.FC = () => {

  return (
    <div className="min-w-[375px] w-120 h-full bg-[#F8F0FF] flex flex-col font-[Pretandard]">
      
>>>>>>> b68a60e (:sparkles: PBTI 페이지  작업 시작 Header와 StartButton 작업중)
    </div>
  );
};

<<<<<<< HEAD
export default PBTIQuestionPage;
=======
export default PBTIQuestionPage;
>>>>>>> b68a60e (:sparkles: PBTI 페이지  작업 시작 Header와 StartButton 작업중)
