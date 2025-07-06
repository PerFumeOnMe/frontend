import React from "react";
import RecommendationList from "./RecommendationList";
import BotIcon from "../../../public/Chatbot/PerfumeBot.png"; // 경로에 맞게 수정

interface BotMessageProps {
  text: string;
}

const BotMessage: React.FC<BotMessageProps> = ({ text }) => (
  <div className="flex flex-col items-start ml-1">
    <div className="flex items-center">
      {/* 챗봇 아이콘 */}
      <div className="flex-shrink-0 w-10 h-10 bg-[#D0D0D0] rounded-full flex items-center justify-center mr-2 mt-1 overflow-hidden">
        <img src={BotIcon} alt="bot" className="w-[29px] h-[29px] object-cover" />
      </div>
      <div className="font-bold text-gray-800">퍼퓨봇</div>
    </div>
    {/* 말풍선 */}
    <div className="bg-[#E6E6E6] ml-10 rounded-xs px-4 py-3 mb-2 max-w-[80%] text-sm text-gray-800 whitespace-pre-line">
      {text.includes("향수 추천 요약") ? <RecommendationList /> : text}
    </div>
  </div>
);

export default BotMessage;
