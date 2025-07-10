import React, { useState } from 'react';
import PBTIHeader from '../../components/PBTI/PBTIHeader';

const PBTIMainPage: React.FC = () => {

  return (
    <div className="min-w-[375px] w-120 h-full bg-[#F8F0FF] flex flex-col items-center font-[Pretandard]">
      <PBTIHeader/>
      <div className='w-[80%] border-1 border-[#65656C]'></div>
    </div>
  );
};

export default PBTIMainPage;