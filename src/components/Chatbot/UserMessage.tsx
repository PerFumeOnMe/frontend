import React, { useRef } from "react";
import TextTime from "./TimeText";

interface UserMessageProps {
  text: string;
}

function formatKoreanTime(date: Date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "오후" : "오전";
  const h = hours % 12 === 0 ? 12 : hours % 12;
  const m = minutes.toString().padStart(2, "0");
  return `${ampm} ${h}:${m}`;
}

const UserMessage: React.FC<UserMessageProps> = ({ text }) => {
 // 최초 마운트 때만 시간 저장
  const timeRef = useRef<string>(formatKoreanTime(new Date()));

  return (
    <div className="flex justify-end mb-3 mr-3">
      <div className="mr-1 self-end">
        <TextTime time={timeRef.current}/>
      </div>
      <div
        className="bg-main-500 px-3 py-2 rounded-2xl max-w-[264px]
        text-[#FBFBFB] text-body3 tracking-tighter">
        {text}
      </div>
    </div>
  );
};

export default UserMessage;
