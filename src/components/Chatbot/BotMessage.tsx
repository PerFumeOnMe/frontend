import React from "react";
import RecommendationList from "./RecommendationList";

interface BotMessageProps {
  text: string;
}

const BotMessage: React.FC<BotMessageProps> = ({ text }) => (
  <div className="flex flex-col items-start ml-1 mb-2">
    <div className="flex items-center">
        {/* 챗봇 아이콘 */}
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#e0e7ef] flex items-center justify-center mr-2 mt-1">
            <span className="text-lg">🤖</span>
        </div>
        <div className="font-bold">
            퍼퓨봇
        </div>
    </div>
    {/* 말풍선 */}
    <div className="bg-white ml-7 border border-[#eee] rounded-2xl px-4 py-3 shadow-sm max-w-[75%] text-sm text-gray-800 whitespace-pre-line">
      {text.includes("향수 추천 요약") ? <RecommendationList /> : text}
    </div>
  </div>
);

export default BotMessage;
