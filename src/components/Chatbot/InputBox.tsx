import React, { useState } from "react";
import MessageSend from "../../assets/Chatbot/MessageSend.png";

interface InputBoxProps {
  onSend: (text: string) => void;
  onSendBlock: boolean
}

const InputBox: React.FC<InputBoxProps> = ({ onSend, onSendBlock }) => {
  const [input, setInput] = useState<string>("");

  const handleSend = () => {
    if (onSendBlock) return; // ✅ 막혀있으면 전송 X
    const text = input.trim();
    if (!text) return;
    onSend(text);
    setInput("");
  };

  return (
    <div className="sticky bottom-0 w-full max-w-120 h-20 bg-[#FBFBFB]/90">
      <div className="h-full flex px-[15px] py-4 relative">
        <input
          type="text"
          className="w-full border rounded-2xl px-6 py-3 pr-12 text-body3 text-[#343437] placeholder:text-[#343437] outline-none border-main-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="궁금한 내용을 입력해 주세요!"
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
        />
        <button
          onClick={handleSend}
          className="absolute right-9 top-1/2 -translate-y-1/2 transition hover:brightness-110 disabled:opacity-30"
          aria-label="전송"
          disabled={!input.trim() || onSendBlock}
        >
          <img src={MessageSend} alt="send" className="w-[22px] h-[18px]" />
        </button>
      </div>
    </div>
  );
};

export default InputBox;
