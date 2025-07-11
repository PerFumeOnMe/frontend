import React, { useState } from 'react';
import PBTIHeader from '../../components/PBTI/PBTIHeader';
import PBTIStartButton from '../../components/PBTI/PBTIStartButton';

const PBTIMainPage: React.FC = () => {

  return (
    <div className="min-w-[375px] w-120 h-full bg-[#F8F0FF] flex flex-col items-center font-[Pretandard]">
      <PBTIHeader/>
      <div className='w-[88%] border-1 border-[#65656C]'></div>
      <PBTIStartButton/>
    </div>
  );
};

export default PBTIMainPage;