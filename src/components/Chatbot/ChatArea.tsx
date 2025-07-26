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
      className="px-1 py-1 overflow-y-auto pb-1 bg-main-10 flex-1"
    >
      <WelcomeHeader name="김성섭" date="2025.07.06" />
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
