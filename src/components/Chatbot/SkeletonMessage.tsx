// components/Chatbot/SkeletonMessage.tsx
import BotIcon from "../../assets/common/character.png";

const SkeletonMessage = () => (
  <div className="ml-2 mt-2 flex gap-2 items-start">
    {/* 봇 아이콘 스켈레톤 */}
    <div className="flex-shrink-0 w-10 h-10 bg-main-500 rounded-full flex items-center justify-center mr-2 overflow-hidden">
      <img src={BotIcon} alt="bot" className="w-10 h-10 object-cover" />
    </div>
    <div className=" border-1 border-main-500 bg-[#FBFBFB]/40 rounded-2xl px-3 py-2.5 mb-3 max-w-[264px] text-body3 text-gray-800 tracking-tighter">
        <div className="flex py-1 gap-[6px]">
          <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
          <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-150"></span>
          <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-300"></span>
        </div>
    </div>
  </div>
);

export default SkeletonMessage;
