import React from 'react';

interface ProgressBarProps {
  progress: number; // 0 ~ 100
}

const PBTIProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden mt-4 mb-6">
      <div
        className="h-full bg-purple-600 transition-all duration-300"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default PBTIProgressBar;
