import React from 'react';
import PBTIResultHeader from '../../components/PBTI/PBTIResult/PBTIResultHeader';
import PBTIAnalysisSection from '../../components/PBTI/PBTIResult/PBTIAnalysisSection';
import PBTIPerfumeStyleSection from '../../components/PBTI/PBTIResult/PBTIPerfumeStyleSection';
import PBTIPerfumeTypeSection from '../../components/PBTI/PBTIResult/PBTIPerfumeTypeSection';
import PBTISummarySection from '../../components/PBTI/PBTIResult/PBTISummarySection';
import PBTIRecommendedPerfumesSection from '../../components/PBTI/PBTIResult/PBTIRecommendedPerfumesSection';
import PBTIActionButtons from '../../components/PBTI/PBTIResult/PBTIActionButtons';

const PBTIResultPage : React.FC = () => {

    return (
    <div className="min-w-[375px] h-full p-3 bg-[#F4EEFA] flex flex-col items-center font-[Pretandard]">
      <PBTIResultHeader />
      <PBTIAnalysisSection />
      <PBTIPerfumeStyleSection />
      <PBTIPerfumeTypeSection />
      <PBTISummarySection />
      <PBTIRecommendedPerfumesSection />
      <PBTIActionButtons />
    </div>
  );
}

export default PBTIResultPage;