import React from "react";

interface WelcomeHeaderProps {
  name: string;
  date: string;
}

const WelcomeHeader: React.FC<WelcomeHeaderProps> = ({ name, date }) => {
  return (
    <div className="flex flex-col items-center my-4">
      <div className="text-center text-lg font-semibold leading-tight">
        {name}님,<br />반가워요 퍼퓨봇이에요
      </div>
      <div className="mt-4 bg-gray-300 px-10 py-1 text-sm weigh">
        {date}
      </div>
    </div>
  );
};

export default WelcomeHeader;
