import React, { useEffect, useState } from 'react';
import Header from '../../components/Chatbot/Header';
import ChatArea from '../../components/Chatbot/ChatArea';
import InputBox from '../../components/Chatbot/InputBox';
import PerfumeTagList from '../../components/Chatbot/PerfumeTagList';
import ConfirmLeaveModal from '../../components/Chatbot/ConfirmLeaveModal';
import { useNavigate } from 'react-router-dom';
import { postChatbot } from '../../apis/Chatbot';
import type { RequestChatbotMessage, ResponseChatbotMessage } from '../../types/apis/Chatbot';

export interface Message {
  type: "user" | "bot";
  text: string;
}

const perfumeTags = [
  "오늘같은날씨어떤향수뿌릴까?",
  "비온뒤새벽에나는향같은향수",
  "향수의역사"
];

const ChatbotPage: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [leaveOpen, setLeaveOpen] = useState(false);
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

      //console.log(response.result)

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

  // 헤더의 뒤로가기 버튼 콜백
  const handleBackClick = () => {
    setLeaveOpen(true)
  };

  const confirmLeave = () => {
    setLeaveOpen(false);
    navigate(-1);
  };

  const cancelLeave = () => setLeaveOpen(false);

  const handleTagSend = async (text: string) => {
    if (!text.trim() || isLoading) return; // ✅ 빈 문자열/로딩 중 가드
    setMessages(prev => [...prev, { type: "user", text }]);
    setIsLoading(true);
    try {
      const body: RequestChatbotMessage = { message: text };
      const response: ResponseChatbotMessage = await postChatbot(body);
      setMessages(prev => [...prev, { type: "bot", text: response.result }]);
    } catch (e) {
      setMessages(prev => [...prev, { type: "bot", text: "죄송합니다. 서버와 연결할 수 없습니다." }]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const onBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasUserMessage) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => window.removeEventListener("beforeunload", onBeforeUnload);
  }, [hasUserMessage]);

  return (
    <div className="min-w-[375px] w-120 min-h-screen h-full bg-main-10 flex flex-col font-[Pretandard]">
      <Header onBack={handleBackClick} />
      <div className='flex-1 min-h-0'>
        <ChatArea messages={messages} isLoading={isLoading} />
      </div>
      {!hasUserMessage && (
        <PerfumeTagList
          tags={perfumeTags}
          onTagClick={(tag) => handleTagSend(tag)}   // ✅ 태그 클릭 → 바로 전송
          disabled={isLoading}                    // (선택) 로딩 중 중복 전송 방지
          className='mb-17'
        />
      )}
      <InputBox
        onSend={handleSend}
        onSendBlock={isLoading}  
      />
      
      {/* 확인 모달 */}
      <ConfirmLeaveModal
        open={leaveOpen}
        title="대화를 종료할까요?"
        description="나가면 현재 대화 내용이 사라질 수 있습니다."
        confirmText="나가기"
        cancelText="계속하기"
        onConfirm={confirmLeave}
        onCancel={cancelLeave}
      />
    </div>
  );
};

export default ChatbotPage;
