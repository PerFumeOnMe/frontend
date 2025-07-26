import React, { useState } from "react";
import MessageSend from "../../assets/Chatbot/MessageSend.png";

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
    <div className="fixed bottom-0 inset-x-0 mx-auto w-full max-w-120 h-20 bg-[#FBFBFB]/90">
      <div className="h-full flex px-[15px] py-4.5">
        <input
          type="text"
          className="w-full border-1 border-main-500 rounded-2xl px-6 py-3 pr-12 text-body3 text-[#343437] placeholder-[#343437] outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="궁금한 내용을 입력해 주세요!"
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="absolute right-9 top-1/2 -translate-y-1/2 transition hover:brightness-110"
          aria-label="전송"
        >
          <img src={MessageSend} alt="send" className="w-[20px] h-[16px]" />
        </button>
      </div>
    </div>
  );
};

export default InputBox;
