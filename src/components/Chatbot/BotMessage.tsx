import React from "react";
import RecommendationList from "./RecommendationList";

interface BotMessageProps {
  text: string;
}

const BotMessage: React.FC<BotMessageProps> = ({ text }) => (
  <div className="bot-message flex items-start my-[10px]">
    <span className="bot-icon mr-[8px] text-2xl">🤖</span>
    <span className="inline-block bg-white px-[12px] py-[8px] rounded-[16px] border shadow">
      {text.includes("향수 추천 요약") ? <RecommendationList /> : text}
    </span>
  </div>
);

export default BotMessage;
