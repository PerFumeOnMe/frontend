import React, { useState } from "react";
import { Slider } from "./Slider";
import { useNavigate } from "react-router-dom";

const VolumeSelectionContent = () => {
  const [topNote, setTopNote] = useState(0);
  const [middleNote, setMiddleNote] = useState(0);
  const [baseNote, setBaseNote] = useState(0);

  const navigate = useNavigate();

  // 이벤트 전파 차단 헬퍼
  const stop = (e: React.SyntheticEvent) => e.stopPropagation();

  // 슬라이더 핸들러 – state만 수정
  const handleNoteChange = (type: "top" | "middle" | "base", value: number) => {
    if (type === "top") setTopNote(value);
    if (type === "middle") setMiddleNote(value);
    if (type === "base") setBaseNote(value);
  };

  return (
    <div
      className="bg-white p-2 rounded-lg"
      onPointerDownCapture={stop}
      onTouchStart={stop}
    >
      {/* 안내 텍스트 */}
      <div className="mb-4">
        <p className="text-gray-600 text-lg font-semibold">
          비율이란 무엇인가요?
        </p>
        <p className="text-gray-500 text-xs mt-1">
          향수의 인상은 각 단계에 담는 향료의 용량 비율에 따라 달라집니다.
          <br />세 가지 노트의 총 용량이 10ml를 초과하지 않도록 설정해 주세요.
        </p>
      </div>

      {/* 슬라이더 영역 */}
      {/* 추후에 실린더 입력값의 총합이 10을 넘으면 결과를 보지 못하도록 수정할 것! */}
      <div className="space-y-6">
        <div className="flex items-center justify-between gap-4 mb-4">
          <h1 className="text-xl font-semibold w-28 text-right">Top Note</h1>
          <div className="flex-1">
            <Slider
              koreanLabel="시트러스"
              value={topNote}
              onChange={(v) => handleNoteChange("top", v)}
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 mb-4">
          <h1 className="text-xl font-semibold w-28 text-right">Middle Note</h1>
          <div className="flex-1">
            <Slider
              koreanLabel="플로럴"
              value={middleNote}
              onChange={(v) => handleNoteChange("middle", v)}
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 mb-4">
          <h1 className="text-xl font-semibold w-28 text-right">Base Note</h1>
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
        className="w-full bg-gray-800 text-white py-3 rounded font-medium hover:bg-gray-700 transition-colors"
        onClick={() => navigate("/lab/loading")}
      >
        결과보기
      </button>
    </div>
  );
};

export default VolumeSelectionContent;
