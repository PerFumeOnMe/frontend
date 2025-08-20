import React from 'react';
import PBTIHeader from '../../components/PBTI/PBTIMain/PBTIHeader';
import PBTIStartButton from '../../components/PBTI/PBTIMain/PBTIStartButton';
import PBTIInfoCard from '../../components/PBTI/PBTIMain/PBTIInfoCard';
import PBTILOGO from '../../assets/PBTI/PBTILOGO.gif';

const PBTIMainPage: React.FC = () => {
  const infoList = [
    "나만의 성향 기반 향기 스타일을 \n 확인할 수 있어요.",
    "질문 기반 해석 성향 키워드를 \n 확인할 수 있어요.",
    "테스트를 통해 나에게 맞는 향수를 \n 추천 받을 수 있어요.",
    "나에게 어울리는 향기 스타일 원형을 \n 찾을 수 있어요."
  ];

  return (
    <div className="min-w-[375px] w-full h-screen -mb-20 bg-[#F4EEFA] flex flex-col items-center font-[Pretendard]">
      <img src={PBTILOGO} className="fixed top-0 w-[375px] h-[375px] -mt-20 z-0" />
      <PBTIHeader />
      <div className="flex flex-col mt-10 gap-5 w-[90%] h-fit relative">
        {infoList.map((info, idx) => (
          <PBTIInfoCard 
            key={idx}
            info={info}
            direction={idx % 2 === 0 ? 'left' : 'right'}
            delay={200 + idx * 1000}
            position={idx % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </div>
      <PBTIStartButton/>
    </div>
  );
};

export default PBTIMainPage;
