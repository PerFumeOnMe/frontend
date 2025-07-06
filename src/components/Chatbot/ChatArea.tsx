import React, { useEffect, useRef } from "react";
import UserMessage from "./UserMessage";
import BotMessage from "./BotMessage";
import WelcomeHeader from "./WelcomeHeader";
import type { Message } from "../../pages/Chatbot/ChatbotPage";

interface ChatAreaProps {
  messages: Message[];
}

const ChatArea: React.FC<ChatAreaProps> = ({ messages }) => {
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
  }, [messages]);

  return (
    <div
      ref={chatRef}
      className="px-[10px] py-[10px] h-[400px] overflow-y-auto bg-[#ffffff] flex-1"
    >
      <WelcomeHeader name="김성섭" date="2025년 7월 06일" />
      {messages.map((msg, idx) =>
        msg.type === "user" ? (
          <UserMessage key={idx} text={msg.text} />
        ) : (
          <BotMessage key={idx} text={msg.text} />
        )
      )}
    </div>
  );
};

export default ChatArea;
