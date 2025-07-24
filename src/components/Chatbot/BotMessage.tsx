import React from "react";
import RecommendationList from "./RecommendationList";
import BotIcon from "../../assets/common/character.png";
import TextTime from "./TimeText";

interface BotMessageProps {
  text: string;
}

const BotMessage: React.FC<BotMessageProps> = ({ text }) => (
  <div className="flex items-start ml-2">
    <div className="flex items-center">
      {/* 챗봇 아이콘 */}
      <div className="flex-shrink-0 w-10 h-10 bg-main-500 rounded-full flex items-center justify-center mr-2 overflow-hidden">
        <img src={BotIcon} alt="bot" className="w-[29px] h-[29px] object-cover" />
      </div>
    </div>
    <div className="flex">
      {/* 말풍선 */}
      <div className=" border-1 border-[#6401BB] bg-[#FBFBFB66] rounded-2xl px-3 py-2.5 mb-3 max-w-[264px] text-[14px] font-[400] tracking-tighter text-gray-800  ">
        {text.includes("향수 추천 요약") ? <RecommendationList /> : text}
      </div>
      <div className="mb-3 ml-1 self-end">
        <TextTime time="오후 7:13"/>
      </div>
    </div>
  </div>
);

export default BotMessage;
