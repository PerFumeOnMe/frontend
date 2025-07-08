import React, { useState } from 'react';
import Header from '../../components/Chatbot/Header';
import ChatArea from '../../components/Chatbot/ChatArea';
import InputBox from '../../components/Chatbot/InputBox';
import PerfumeTagList from '../../components/Chatbot/PerfumeTagList';

// ChatbotPage.tsx
export interface Message {
  type: "user" | "bot";
  text: string;
}

const perfumeTags = [
  "#오늘같은 날씨 어떤 향수 뿌릴까?",
  "#비온 뒤 새벽에 나는 향 같은 향수",
  "#향수의 역사"
];

const ChatbotPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { type: "bot", text: "복잡하게 찾지 말고 한 번에 검색을 통하여 원하는 향수를 찾아보세요!\n저는 지하주차장 냄새가 은근 괜찮더라구요. 지하주차장 냄새랑 비슷한 향수를 찾곤 합니다 :)  " },
    { type: "user", text: "메니큐어 냄새가 좋던데, 메니큐어 냄새랑 비슷한 향수를 추천해줘." },
    { type: "bot", text: "메니큐어 향을 좋아하는 분들을 위한 향수 추천 요약..." },
  ]);

  const handleSend = (text: string) => {
    setMessages((prev) => [...prev, { type: "user", text }]);
    // 실제 챗봇 응답 로직 추가 필요
  };

  return (
    <div className="min-w-[375px] w-120 h-full bg-white flex flex-col">
      <div className='pb-28'>
        <Header />
        <ChatArea messages={messages} />
      </div>
      <PerfumeTagList tags={perfumeTags} />
      <InputBox onSend={handleSend} />
    </div>
  );
};

export default ChatbotPage;