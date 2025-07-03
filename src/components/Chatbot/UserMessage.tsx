import React from "react";

interface UserMessageProps {
  text: string;
}

const UserMessage: React.FC<UserMessageProps> = ({ text }) => (
  <div className="user-message text-right my-[10px]">
    <span className="inline-block bg-[#e0f7fa] px-[12px] py-[8px] rounded-[16px]">{text}</span>
  </div>
);

export default UserMessage;
