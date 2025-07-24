import React, { useState } from 'react';
import PBTISaveModal from '../../components/PBTI/PBTIResult/PBTISaveModal';
import PBTIResultHeader from '../../components/PBTI/PBTIResult/PBTIResultHeader';
import PBTIAnalysisSection from '../../components/PBTI/PBTIResult/PBTIAnalysisSection';
import PBTIPerfumeStyleSection from '../../components/PBTI/PBTIResult/PBTIPerfumeStyleSection';
import PBTIPerfumeTypeSection from '../../components/PBTI/PBTIResult/PBTIPerfumeTypeSection';
import PBTISummarySection from '../../components/PBTI/PBTIResult/PBTISummarySection';
import PBTIRecommendedPerfumesSection from '../../components/PBTI/PBTIResult/PBTIRecommendedPerfumesSection';
import PBTIActionButtons from '../../components/PBTI/PBTIResult/PBTIActionButtons';

const PBTIResultPage: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState<1 | 2>(1);
  const [perfumeName, setPerfumeName] = useState("");

  const handleSaveClick = () => setModalOpen(true);
  const handleSaveConfirm = () => setModalStep(2);
  const handleCloseModal = () => {
    setModalOpen(false);
    setModalStep(1);
    setPerfumeName("");
  };

  return (
    <div className="min-w-[375px] h-full p-3 bg-[#F4EEFA] flex flex-col items-center font-[Pretendard]">
      <PBTIResultHeader />
      <PBTIAnalysisSection />
      <PBTIPerfumeStyleSection />
      <PBTIPerfumeTypeSection />
      <PBTISummarySection />
      <PBTIRecommendedPerfumesSection />
      <PBTIActionButtons onSaveClick={handleSaveClick} />

      {/* 모달 분리 */}
      <PBTISaveModal
        isOpen={isModalOpen}
        step={modalStep}
        perfumeName={perfumeName}
        onChange={setPerfumeName}
        onSave={handleSaveConfirm}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default PBTIResultPage;
