import React from "react";

interface WelcomeHeaderProps {
  name: string;
  date: string;
}

const WelcomeHeader: React.FC<WelcomeHeaderProps> = ({ name, date }) => {
  return (
    <div className="flex flex-col items-center my-2">
      <div className="text-center text-[#343437] text-[20px] font-[600]">
        {name}님,<br />반가워요 퍼퓨봇이에요
      </div>
      <div className="mt-1 mb-3 rounded-[20px] bg-[#FBFBFB66] px-2 py-1 tracking-tighter text-[12px] font-[300]">
        {date}
      </div>
    </div>
  );
};

export default WelcomeHeader;
