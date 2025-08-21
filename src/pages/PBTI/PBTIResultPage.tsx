import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import PBTISaveModal from '../../components/PBTI/PBTIResult/PBTISaveModal';
import PBTIResultHeader from '../../components/PBTI/PBTIResult/PBTIResultHeader';
import PBTIAnalysisSection from '../../components/PBTI/PBTIResult/PBTIAnalysisSection';
import PBTIPerfumeStyleSection from '../../components/PBTI/PBTIResult/PBTIPerfumeStyleSection';
import PBTIPerfumeTypeSection from '../../components/PBTI/PBTIResult/PBTIPerfumeTypeSection';
import PBTISummarySection from '../../components/PBTI/PBTIResult/PBTISummarySection';
import PBTIRecommendedPerfumesSection from '../../components/PBTI/PBTIResult/PBTIRecommendedPerfumesSection';
import PBTIActionButtons from '../../components/PBTI/PBTIResult/PBTIActionButtons';
import PBTIResultLineRecommendation from '../../components/PBTI/PBTIResult/PBTIResultLineRecommendation';

const PBTIResultPage: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState<1 | 2>(1);
  const [perfumeName, setPerfumeName] = useState("");
  const location = useLocation();
  const { answers, result } = location.state || {};

  const recommendation = result.recommendation;
  const perfumeRecommends = result.perfumeRecommend;
  const keywords = result.keywords;
  const perfumeStyle = result.perfumeStyle;
  const scentPoint = result.scentPoint;
  const summary = result.summary;

  const navigate = useNavigate();

  const handleSaveClick = () => setModalOpen(true);
  const handleSaveConfirm = () => {
    setModalStep(2);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
    setModalStep(1);
    setPerfumeName("");
  };
  const handleGoHome = () => {
    setModalOpen(false);
    setModalStep(1);
    setPerfumeName("");
    navigate("/");
  }

  // ✅ 홈으로 이동하기 
  const handleGoHomeClick = async () => {
    navigate("/");
  };

  return (
    <div className="min-w-[375px] min-h-screen p-3 pb-22 bg-[#F4EEFA] flex flex-col items-center font-[Pretendard]">
      <PBTIResultHeader />
      <PBTIResultLineRecommendation LineRecommendation={recommendation} />
      <PBTIAnalysisSection keywordArrayData={keywords} />
      <PBTIPerfumeStyleSection description={perfumeStyle.description} notes={perfumeStyle.notes} />
      <PBTIPerfumeTypeSection data={scentPoint} />
      <PBTISummarySection summary={summary} />
      <PBTIRecommendedPerfumesSection perfumeRecommends={perfumeRecommends} />

      {/* 버튼 */}
      <PBTIActionButtons onSaveClick={handleSaveClick} onGoHome={handleGoHomeClick} />

      {/* 모달 */}
      <PBTISaveModal
        isOpen={isModalOpen}
        step={modalStep}
        perfumeName={perfumeName}
        onChange={setPerfumeName}
        onSave={handleSaveConfirm}
        onClose={handleCloseModal}
        onHome={handleGoHome}
      />
    </div>
  );
};

export default PBTIResultPage;
