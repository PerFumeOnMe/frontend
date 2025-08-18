import React, { useRef } from "react";
import RecommendationList from "./RecommendationList";
import BotIcon from "../../assets/common/character.png";
import TextTime from "./TimeText";

interface BotMessageProps {
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

const BotMessage: React.FC<BotMessageProps> = ({ text }) => {
   // 최초 마운트 때만 시간 저장
    const timeRef = useRef<string>(formatKoreanTime(new Date()));

  return (
  <div className="flex items-start ml-2">
    <div className="flex items-center">
      {/* 챗봇 아이콘 */}
      <div className="flex-shrink-0 w-10 h-10 bg-main-500 rounded-full flex items-center justify-center mr-2 overflow-hidden">
        <img src={BotIcon} alt="bot" className="w-10 h-10 object-cover" />
      </div>
    </div>
    <div className="flex">
      {/* 말풍선 */}
      <div className=" border-1 border-main-500 bg-[#FBFBFB]/40 rounded-2xl px-3 py-2.5 mb-3 max-w-[264px] text-body3 text-gray-800 tracking-tighter">
        {text.includes("향수 추천 요약") ? <RecommendationList /> : text}
      </div>
      <div className="mb-3 ml-1 self-end">
        <TextTime time={timeRef.current}/>
      </div>
    </div>
  </div>
  )
};

export default BotMessage;
