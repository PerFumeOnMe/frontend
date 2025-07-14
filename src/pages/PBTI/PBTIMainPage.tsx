import React from 'react';
import PBTIHeader from '../../components/PBTI/PBTIMain/PBTIHeader';
import PBTIStartButton from '../../components/PBTI/PBTIMain/PBTIStartButton';
import PBTIInfoCard from '../../components/PBTI/PBTIMain/PBTIInfoCard';

const PBTIMainPage: React.FC = () => {
  const infoList = [
    "나만의 성향 기반 향기 스타일을 \n 확인할 수 있어요.",
    "질문 기반 해석 성향 키워드를 \n 확인할 수 있어요.",
    "테스트를 통해 나에게 맞는 향수를 \n 추천 받을 수 있어요.",
    "나에게 어울리는 향기 스타일 원형을 \n 찾을 수 있어요."
  ];

  return (
    <div className="min-w-[375px] w-120 h-screen bg-[#FBFBFB] flex flex-col items-center font-[Pretandard]">
      <PBTIHeader />
      <div className='flex flex-col mt-10 gap-4 w-[90%]'>
        {infoList.map((info, idx) => (
          <div
            key={idx}
            className={`flex ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}
          >
            <PBTIInfoCard info={info}/>
          </div>
        ))}
      </div>
      <PBTIStartButton/>
    </div>
  );
};

export default PBTIMainPage;

