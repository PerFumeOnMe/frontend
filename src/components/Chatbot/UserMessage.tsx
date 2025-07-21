import React from "react";
import TextTime from "./TimeText";

interface UserMessageProps {
  text: string;
}

const UserMessage: React.FC<UserMessageProps> = ({ text }) => {
  return (
    <div className="flex justify-end mb-3 mr-3">
      <div className="mr-1 self-end">
        <TextTime time="오후 7:13"/>
      </div>
      <div className="bg-[#6401BB] px-3 py-2 rounded-2xl max-w-[264px] text-[#FBFBFB] tracking-tighter text-[14px] font-[400]">
        {text}
      </div>
    </div>
  );
};

export default UserMessage;
