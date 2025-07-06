import React from "react";

interface UserMessageProps {
  text: string;
}

const UserMessage: React.FC<UserMessageProps> = ({ text }) => {
  return (
    <div className="flex justify-end mt-2 mr-3">
      <div className="bg-[#AFAFAF] p-3 rounded-xs max-w-xs">
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
};

export default UserMessage;
