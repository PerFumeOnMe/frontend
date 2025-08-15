import React, { useState, useEffect } from "react";
import { Slider } from "./Slider";
import { useNavigate } from "react-router-dom";
import { usePerfumeLab } from "../../hooks/PerfumeLab/usePerfumeLab";

const VolumeSelectionContent = () => {
  const [topNote, setTopNote] = useState(0);
  const [middleNote, setMiddleNote] = useState(0);
  const [baseNote, setBaseNote] = useState(0);
  const [showToast, setShowToast] = useState(false);

  const navigate = useNavigate();
  const { handleVolumeSelected, handleResultView } = usePerfumeLab();

  // 이벤트 전파 차단 헬퍼
  const stop = (e: React.SyntheticEvent) => e.stopPropagation();

  // 버튼 활성화 조건 체크
  const isButtonEnabled = topNote >= 1 && middleNote >= 1 && baseNote >= 1;

  // 총 용량 계산
  const totalVolume = topNote + middleNote + baseNote;

  // 용량 초과 체크 및 토스트 표시
  useEffect(() => {
    if (totalVolume > 10) {
      setShowToast(true);
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000); // 3초 후 사라짐
      return () => clearTimeout(timer);
    } else {
      // 용량이 10 이하로 돌아오면 토스트 즉시 숨김
      setShowToast(false);
    }
  }, [totalVolume]);

  // 슬라이더 핸들러 – state와 context 둘 다 업데이트
  const handleNoteChange = (type: "top" | "middle" | "base", value: number) => {
    if (type === "top") {
      setTopNote(value);
      handleVolumeSelected("탑", value);
    }
    if (type === "middle") {
      setMiddleNote(value);
      handleVolumeSelected("미들", value);
    }
    if (type === "base") {
      setBaseNote(value);
      handleVolumeSelected("베이스", value);
    }
  };

  // 결과보기 버튼 클릭 시
  const handleSubmit = () => {
    // 용량 초과 체크
    if (totalVolume > 10) {
      setShowToast(true);
      return;
    }

    // Context에 데이터 저장
    handleResultView();
    // 로딩 페이지로 이동
    navigate("/lab/loading");
  };

  // 토스트 컴포넌트
  const Toast = () => (
    <div
      className={`fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50 bg-main-500 text-white text-body4 px-4 py-3 rounded-lg shadow-lg transition-all duration-300 ${
        showToast
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-2 pointer-events-none"
      }`}
    >
      용량은 10ml를 초과할 수 없습니다
    </div>
  );

  return (
    <>
      <Toast />
      <div
        className="bg-white p-2 rounded-lg"
        onPointerDownCapture={stop}
        onTouchStart={stop}
      >
        {/* 안내 텍스트 */}
        <div className="mb-4">
          <p className="text-title3">비율이란 무엇인가요?</p>
          <p className="text-grayscale-700 text-caption1">
            향수의 인상은 각 단계에 담는 향료의 용량 비율에 따라 달라집니다.
            <br />세 가지 노트의 총 용량이 10ml를 초과하지 않도록 설정해 주세요.
          </p>
        </div>

        {/* 슬라이더 영역 */}
        <div className="space-y-6">
          <div className="flex items-center justify-between gap-4 mb-4">
            <h1 className="text-xl font-semibold w-28">Top Note</h1>
            <div className="flex-1">
              <Slider
                koreanLabel="시트러스"
                value={topNote}
                onChange={(v) => handleNoteChange("top", v)}
              />
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 mb-4">
            <h1 className="text-xl font-semibold w-28">Middle Note</h1>
            <div className="flex-1">
              <Slider
                koreanLabel="플로럴"
                value={middleNote}
                onChange={(v) => handleNoteChange("middle", v)}
              />
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 mb-4">
            <h1 className="text-xl font-semibold w-28">Base Note</h1>
            <div className="flex-1">
              <Slider
                koreanLabel="우디"
                value={baseNote}
                onChange={(v) => handleNoteChange("base", v)}
              />
            </div>
          </div>
        </div>

        {/* 확인 버튼 */}
        <button
          className={`w-full py-3 rounded-2xl transition-colors duration-200 ${
            isButtonEnabled && totalVolume <= 10
              ? "bg-main-500 text-grayscale-200 hover:bg-main-600"
              : "bg-grayscale-500 text-grayscale-200 cursor-not-allowed"
          }`}
          onClick={handleSubmit}
          disabled={!isButtonEnabled || totalVolume > 10}
        >
          결과보기
        </button>
      </div>
    </>
  );
};

export default VolumeSelectionContent;
