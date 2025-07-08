import React from "react";
import TextTime from "./TextTime";

interface UserMessageProps {
  text: string;
}

const UserMessage: React.FC<UserMessageProps> = ({ text }) => {
  return (
    <div className="flex justify-end mt-2 mr-3">
      <div className="mr-1 self-end">
        <TextTime time="오후 7:13"/>
      </div>
      <div className="bg-[#AFAFAF] px-4 py-3 rounded-[5px] max-w-[70%] text-[#000000E5] text-[12px] font-[400]">
        {text}
      </div>
    </div>
  );
};

export default UserMessage;
