import React from 'react';

interface ProgressBarProps {
  progress: number; // 0 ~ 100
}

const PBTIProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="h-2.5 bg-[#D9D9D9] rounded-full overflow-hidden mb-6">
      <div
        className="h-full rounded-full bg-main-500 transition-all duration-300"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default PBTIProgressBar;
