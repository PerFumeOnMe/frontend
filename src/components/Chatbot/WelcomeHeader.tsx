import React from "react";

interface WelcomeHeaderProps {
  name: string | null;
  date: string;
}

const WelcomeHeader: React.FC<WelcomeHeaderProps> = ({ name, date }) => {
  return (
    <div className="flex flex-col items-center my-2">
      <div className="text-center text-title2 text-grayscale-900">
        {name}님,<br />반가워요 퍼퓨지니에요.
      </div>
      <div className="mt-1 mb-1 rounded-[20px] bg-[#FBFBFB66] px-2 py-1 tracking-tighter text-[12px] font-[300]">
        {date}
      </div>
    </div>
  );
};

export default WelcomeHeader;
