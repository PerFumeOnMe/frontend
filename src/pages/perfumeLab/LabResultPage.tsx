import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ResultContent from "../../components/PerfumeLab/Result/ResultContent";
import ResultButton from "../../components/ImageKeyword/Result/ResultButton";
import SaveNameModal from "../../components/ImageKeyword/Result/SaveNameModal";
import SaveCompleteModal from "../../components/ImageKeyword/Result/SaveCompleteModal";
import { getWorkshopDetail, postWorkshopSave } from "../../apis/Workshop";
import { usePerfumeLab } from "../../hooks/PerfumeLab/usePerfumeLab";

const LabResultPage = () => {
  const navigate = useNavigate();
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const { completedPerfume, setCompletedPerfume } = usePerfumeLab();
  const { workshopId } = useParams<{ workshopId?: string }>();

  useEffect(() => {
    const loadWorkshopDetail = async () => {
      if (!workshopId) {
        console.log("workshopId가 없음, 새로운 결과로 처리");
        return;
      }

      try {
        console.log("API 호출 시작:", workshopId);

        const response = await getWorkshopDetail(workshopId);
        console.log("API 응답:", response);

        if (response.isSuccess && response.result) {
          console.log("데이터 설정:", response.result);
          setCompletedPerfume(response.result);
        } else {
          console.error("API 응답 실패:", response);
        }
      } catch (error) {
        console.error("API 호출 에러:", error);
      }
    };

    loadWorkshopDetail();
  }, [workshopId, setCompletedPerfume]);

  const handleSave = async (savedName: string) => {
    try {
      setIsSaving(true);
      const response = await postWorkshopSave({ savedName });

      if (response.isSuccess) {
        setShowSaveModal(false);
        setShowCompleteModal(true);
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.error("Failed to save result:", error);
      alert("저장에 실패했습니다.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleComplete = () => {
    setShowCompleteModal(false);
    navigate("/");
  };

  // ✅ 데이터 확인용 로그
  console.log("렌더링 시 completedPerfume:", completedPerfume);

  return (
    <div
      className="min-h-screen bg-[#F8F0FF] px-5 py-6 flex flex-col items-center gap-6
    w-full min-w-[375px] max-w-[480px] bg-cover bg-center overflow-y-auto"
    >
      {/* 헤더 */}
      <header>
        <h1 className="text-title1 text-black text-center mb-2">
          당신만의 향기는?
        </h1>
        <p className="text-body3 text-grayscale-700">
          당신만의 향을 퍼퓨온미를 통해 담아 보세요.
        </p>
      </header>

      {/* 결과 요약 */}
      <ResultContent />

      {/* 하단 버튼들 - 저장된 워크샵인 경우 저장 버튼 숨김 */}
      <div className="flex justify-center gap-4 w-full">
        {!workshopId && (
          <ResultButton
            label="저장하기"
            onClick={() => setShowSaveModal(true)}
            disabled={isSaving}
          />
        )}
        <ResultButton
          label="홈으로"
          onClick={() => navigate("/")}
          disabled={false}
        />
      </div>

      {showSaveModal && (
        <SaveNameModal
          onSubmit={handleSave}
          onClose={() => setShowSaveModal(false)}
        />
      )}

      {showCompleteModal && <SaveCompleteModal onConfirm={handleComplete} />}
    </div>
  );
};

export default LabResultPage;
