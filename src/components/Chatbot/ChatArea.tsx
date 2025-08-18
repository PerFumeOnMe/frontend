import React, { useEffect, useRef } from "react";
import UserMessage from "./UserMessage";
import BotMessage from "./BotMessage";
import WelcomeHeader from "./WelcomeHeader";
import type { Message } from "../../pages/Chatbot/ChatbotPage";
import SkeletonMessage from "./SkeletonMessage";

interface ChatAreaProps {
  messages: Message[];
  isLoading: boolean; // 👈 로딩 여부 전달받기
}


const ChatArea: React.FC<ChatAreaProps> = ({ messages, isLoading }) => {
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
  }, [messages]);

  return (
    <div
      ref={chatRef}
      className="px-3 py-1 overflow-y-auto pb-1 bg-main-10 flex-1"
    >
      <WelcomeHeader name="김성섭" date="2025.07.06" />
      {messages.map((msg, idx) =>
        msg.type === "user" ? (
          <UserMessage key={idx} text={msg.text} />
        ) : (
          <BotMessage key={idx} text={msg.text} />
        )
      )}
      {isLoading && <SkeletonMessage />} {/* 👈 스켈레톤 메시지 표시 */}
    </div>
  );
};

export default ChatArea;
