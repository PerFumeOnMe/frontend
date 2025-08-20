import React, { useEffect, useLayoutEffect, useRef } from "react";
import UserMessage from "./UserMessage";
import BotMessage from "./BotMessage";
import WelcomeHeader from "./WelcomeHeader";
import type { Message } from "../../pages/Chatbot/ChatbotPage";
import SkeletonMessage from "./SkeletonMessage";
import { useAuth } from '../../context/AuthContext';

interface ChatAreaProps {
  messages: Message[];
  isLoading: boolean;
}

const ChatArea: React.FC<ChatAreaProps> = ({ messages, isLoading }) => {
  const { name } = useAuth();
  const today = new Date();
  const formattedDate = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, "0")}.${String(today.getDate()).padStart(2, "0")}`;

  // 👉 전체 페이지(window) 맨 아래로 이동
  const scrollToPageBottom = (behavior: ScrollBehavior = "smooth") => {
    const el = document.scrollingElement || document.documentElement;
    window.scrollTo({ top: el.scrollHeight, behavior });
  };

  // 최초 진입 시
  useEffect(() => {
    scrollToPageBottom("auto");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 메시지/로딩 변동 시 (DOM 페인트 직후)
  useLayoutEffect(() => {
    scrollToPageBottom("smooth");
  }, [messages, isLoading]);

  // 이미지 로딩 시 높이 변할 때도 맞춰주기
  useEffect(() => {
    const imgs = Array.from(document.querySelectorAll("img"));
    const onLoad = () => scrollToPageBottom("auto");
    imgs.forEach(img => img.addEventListener("load", onLoad));
    return () => imgs.forEach(img => img.removeEventListener("load", onLoad));
  }, [messages]);

  return (
    <div className="px-3 py-1 bg-main-10">
      <WelcomeHeader name={name} date={formattedDate} />

      {messages.map((msg, idx) =>
        msg.type === "user" ? (
          <UserMessage key={idx} text={msg.text} />
        ) : (
          <BotMessage key={idx} text={msg.text} />
        )
      )}

      {isLoading && <SkeletonMessage />}
    </div>
  );
};

export default ChatArea;
