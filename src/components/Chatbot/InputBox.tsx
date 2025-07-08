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
    <div className="fixed bottom-0 inset-x-0 mx-auto w-full max-w-120 h-20 bg-white">
      <div className="h-full flex p-3">
        <input
          type="text"
          className="w-full border border-gray-300 rounded-md px-3 py-3 pr-10 text-sm outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="검색어를 입력해주세요."
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="absolute right-7 top-1/2 -translate-y-1/2 transition hover:brightness-110"
          aria-label="전송"
        >
          <img src={MessageSend} alt="send" className="w-[22px] h-[22px]" />
        </button>
      </div>
    </div>
  );
};

export default InputBox;
