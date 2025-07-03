import React, { useState } from 'react';
import Header from '../../components/Chatbot/Header';
import ChatArea from '../../components/Chatbot/ChatArea';
import InputBox from '../../components/Chatbot/InputBox';

// ChatbotPage.tsx
export interface Message {
  type: "user" | "bot";
  text: string;
}


const ChatbotPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { type: "bot", text: "김성섭님, 반가워요 퍼퓨봇이에요" },
    { type: "bot", text: "복잡하게 찾지 말고 한 번에 검색을 통해서 원하는 향수를 찾아보세요..." },
    { type: "user", text: "메니큐어 냄새가 좋던데, 메니큐어 냄새랑 비슷한 향수를 추천해줘." },
    { type: "bot", text: "메니큐어 향을 좋아하는 분들을 위한 향수 추천 요약..." },
  ]);

  const handleSend = (text: string) => {
    setMessages((prev) => [...prev, { type: "user", text }]);
    // 실제 챗봇 응답 로직 추가 필요
  };

  return (
    <div className="max-w-[400px] mx-auto border border-[#eee] rounded bg-white flex flex-col h-[600px]">
      <Header />
      <ChatArea messages={messages} />
      <InputBox onSend={handleSend} />
    </div>
  );
};

export default ChatbotPage;