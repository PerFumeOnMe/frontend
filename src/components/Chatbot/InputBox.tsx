import React, { useState } from "react";
import MessageSend from "../../../public/Chatbot/MessageSend.png"; // 상대경로에 맞게 수정

interface InputBoxProps {
  onSend: (text: string) => void;
}

const InputBox: React.FC<InputBoxProps> = ({ onSend }) => {
  const [input, setInput] = useState<string>("");

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput("");
    }
  };

  return (
    <div className="w-full px-4 py-3 bg-white">
      <div className="relative">
        <input
          type="text"
          className="w-full border border-gray-300 rounded-md px-4 py-3 pr-10 text-sm outline-none focus:ring-2 focus:ring-purple-200 transition"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="검색어를 입력해주세요."
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="absolute right-3 top-1/2 -translate-y-1/2 transition hover:brightness-110"
          aria-label="전송"
        >
          <img src={MessageSend} alt="send" className="w-[19px] h-[19px]" />
        </button>
      </div>
    </div>
  );
};

export default InputBox;
