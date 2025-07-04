import React from "react";

interface UserMessageProps {
  text: string;
}

const UserMessage: React.FC<UserMessageProps> = ({ text }) => (
  <div className="flex justify-end mt-3 mr-3">
    <div className="bg-[#e0f7fa] rounded-2xl rounded-br-sm px-4 py-3 shadow-sm max-w-[75%] text-sm text-gray-900 whitespace-pre-line">
      {text}
    </div>
  </div>
);

export default UserMessage;
