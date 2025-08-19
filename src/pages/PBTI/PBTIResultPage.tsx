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

// ✅ react-hot-toast + 커스텀 디자인용 아이콘
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineExclamation } from "react-icons/ai";

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
  const handleSaveConfirm = () => setModalStep(2);
  const handleCloseModal = () => {
    setModalOpen(false);
    setModalStep(1);
    setPerfumeName("");
    navigate("/");
  };

  // ⭐ 커스텀 토스트 (디자인 동일, 메시지만 변경)
  const showCopiedToast = () =>
    toast.custom(
      (t) => (
        <div className="fixed bottom-20 w-full pointer-events-none">
          <div
            className={`${t.visible ? "animate-enter" : "animate-leave"} mx-auto w-full max-w-[448px] bg-grayscale-1000-f2 text-white rounded-2xl py-4 px-5 flex items-center shadow-lg pointer-events-auto`}
          >
            <div className="flex items-center justify-center gap-3 w-full">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white flex items-center justify-center">
                <AiOutlineExclamation className="w-4 h-4 text-grayscale-1000-f2" />
              </div>
              <span className="text-center text-body3">링크가 복사되었습니다.</span>
            </div>
          </div>
        </div>
      ),
      { duration: 1500 }
    );

  // ✅ 공유하기: 현재 URL을 클립보드에 복사 + 커스텀 토스트
  const handleShareClick = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      showCopiedToast();
    } catch (err) {
      console.error("URL 복사 실패", err);
      toast.error("복사에 실패했습니다 😢");
    }
  };

  return (
    <div className="min-w-[375px] m-h-screen p-3 pb-22 bg-[#F4EEFA] flex flex-col items-center font-[Pretendard]">
      <PBTIResultHeader />
      <PBTIResultLineRecommendation LineRecommendation={recommendation} />
      <PBTIAnalysisSection keywordArrayData={keywords} />
      <PBTIPerfumeStyleSection description={perfumeStyle.description} notes={perfumeStyle.notes} />
      <PBTIPerfumeTypeSection data={scentPoint} />
      <PBTISummarySection summary={summary} />
      <PBTIRecommendedPerfumesSection perfumeRecommends={perfumeRecommends} />

      {/* 버튼 */}
      <PBTIActionButtons onSaveClick={handleSaveClick} onShareClick={handleShareClick} />

      {/* 모달 */}
      <PBTISaveModal
        isOpen={isModalOpen}
        step={modalStep}
        perfumeName={perfumeName}
        onChange={setPerfumeName}
        onSave={handleSaveConfirm}
        onClose={handleCloseModal}
      />

      {/* ✅ Toaster (앱 전역에 이미 있다면 중복 배치하지 말 것) */}
      <Toaster position="bottom-center" />
    </div>
  );
};

export default PBTIResultPage;
