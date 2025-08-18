import React, { useState } from 'react';
import Header from '../../components/Chatbot/Header';
import ChatArea from '../../components/Chatbot/ChatArea';
import InputBox from '../../components/Chatbot/InputBox';
import PerfumeTagList from '../../components/Chatbot/PerfumeTagList';
import { postChatbot } from '../../apis/Chatbot';
import type { RequestChatbotMessage, ResponseChatbotMessage } from '../../types/apis/Chatbot';

export interface Message {
  type: "user" | "bot";
  text: string;
}

const perfumeTags = [
  "#오늘같은날씨어떤향수뿌릴까?",
  "#비온뒤새벽에나는향같은향수",
  "#향수의역사"
];

const ChatbotPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      text: "복잡하게 찾지 말고 한 번에 검색을 통하여 원하는 향수를 찾아보세요!\n저는 지하주차장 냄새가 은근 괜찮더라구요. 지하주차장 냄새랑 비슷한 향수를 찾곤 합니다 :)  "
    },
  ]);

  const handleSend = async (text: string) => {
    // 유저 메시지 추가
    setMessages((prev) => [...prev, { type: "user", text }]);
    setIsLoading(true);

    try {
      // API 요청
      const body: RequestChatbotMessage = { message: text };
      const response: ResponseChatbotMessage = await postChatbot(body);

      console.log(response.result)

      // 챗봇 응답 메시지 추가
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: response.result } // 응답 필드명은 실제 API 스펙에 맞게 수정
      ]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "죄송합니다. 서버와 연결할 수 없습니다." }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const hasUserMessage = messages.some(msg => msg.type === "user");

  return (
    <div className="min-w-[375px] w-120 min-h-screen h-full bg-main-10 flex flex-col font-[Pretandard]">
      <Header />
      <div className='flex-1 min-h-0'>
        <ChatArea messages={messages} isLoading={isLoading} />
      </div>
      {!hasUserMessage && <PerfumeTagList tags={perfumeTags} />}
      <InputBox onSend={handleSend} />
    </div>
  );
};

export default ChatbotPage;
