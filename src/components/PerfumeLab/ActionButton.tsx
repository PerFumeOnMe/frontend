import React from "react";
import { usePerfumeLab } from "../../contexts/PerfumeLabContext";

const ActionButton: React.FC = () => {
  const {
    allNotesSelected,
    allVolumesSelected,
    handleVolumeSelect,
    handleResultView,
  } = usePerfumeLab();

  return (
    <div className="w-full mt-1">
      {!allNotesSelected ? (
        <button
          className="w-full py-3 rounded-2xl text-grayscale-200 bg-grayscale-500"
          disabled
        >
          용량 설정하기
        </button>
      ) : !allVolumesSelected ? (
        <button
          className="w-full py-3 rounded-2xl bg-main-500 text-grayscale-200"
          onClick={handleVolumeSelect}
        >
          용량 설정하기
        </button>
      ) : (
        <button
          className="w-full py-3 rounded-2xl bg-main-500 text-grayscale-200"
          onClick={handleResultView}
        >
          결과보기
        </button>
      )}
    </div>
  );
};

export default ActionButton;
