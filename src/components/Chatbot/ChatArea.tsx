import React, { useEffect, useRef } from "react";
import UserMessage from "./UserMessage";
import BotMessage from "./BotMessage";
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
      className="chat-area px-[10px] py-[10px] h-[500px] overflow-y-auto bg-[#f5f5f5] flex-1"
    >
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