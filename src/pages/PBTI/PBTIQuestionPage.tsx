import React, { useState } from 'react';
import PerfumeOnMeCharacter from '../../assets/PBTI/character.png'
import PBTIQuestionCard from '../../components/PBTI/PBTIQuestion/PBTIQuestionCard';

const PBTIQuestionPage: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  return (
    <div className="min-w-[375px] w-120 h-full bg-[#FBFBFB] flex flex-col items-center font-[Pretandard]">
      <img src={PerfumeOnMeCharacter} />
      <div className="px-6 pt-4">
        <PBTIQuestionCard
          progress={20}
          question={`Q1.\n아침에 양치질을 마친 뒤,\n거울 앞에서 향수를 뿌리는 당신의 방식은?`}
          options={[
            "칫솔을 씻어두고 바로 한 번 톡, 얼굴과 목에 은은히 스며들게 한다.",
            "수건으로 입가만 닦고 난 뒤 손목에 소량만 콕콕 찍어 마무리한다."
          ]}
          selectedIdx={selectedIdx}
          onSelect={setSelectedIdx}
        />
      </div>
    </div>
  );
};

export default PBTIQuestionPage;
