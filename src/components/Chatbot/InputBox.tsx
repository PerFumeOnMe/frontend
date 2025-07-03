import React, { useState } from "react";

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
    <div className="input-box flex px-[10px] py-[10px] bg-[#fafafa] border-t">
      <input
        type="text"
        className="flex-1 px-[8px] py-[8px] border border-[#ccc] rounded-[8px] mr-[8px] focus:outline-none"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="검색어를 입력해주세요."
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <button
        className="ml-[8px] px-[8px] py-[8px] bg-indigo-500 hover:bg-indigo-600 text-white rounded-[8px] font-semibold"
        onClick={handleSend}
      >
        전송
      </button>
    </div>
  );
};

export default InputBox;
