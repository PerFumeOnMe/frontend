import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ResultContent from "../../components/PerfumeLabPage/Result/ResultContent";
import ResultButton from "../../components/ImageKeyword/Result/ResultButton";
import SaveNameModal from "../../components/ImageKeyword/Result/SaveNameModal";
import SaveCompleteModal from "../../components/ImageKeyword/Result/SaveCompleteModal";

const LabResultPage = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  const [perfumeName, setPerfumeName] = useState("");
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

      {/* 하단 버튼들 */}
      <div className="flex justify-center gap-4 w-full">
        <ResultButton label="저장하기" onClick={() => setShowModal(true)} />
        <ResultButton label="홈으로" onClick={() => navigate("/")} />
      </div>
      {showModal && (
        <SaveNameModal
          onClose={() => setShowModal(false)}
          onSubmit={(name) => {
            setPerfumeName(name);
            setShowModal(false);
            setShowCompleteModal(true);
          }}
        />
      )}

      {showCompleteModal && (
        <SaveCompleteModal
          onConfirm={() => {
            setShowCompleteModal(false);
            navigate("/");
          }}
        />
      )}
    </div>
  );
};

export default LabResultPage;
