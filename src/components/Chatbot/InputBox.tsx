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
    <div className="input-box flex px-3 py-3 border-t-gray-300 border-t-1 bg-white">
      <input
        type="text"
        className="flex-1 px-3 py-3 border border-[#ccc] rounded-md mr-2 focus:outline-none"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="검색어를 입력해주세요."
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <button
        className="ml-0 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-[8px] font-semibold"
        onClick={handleSend}
      >
        전송
      </button>
    </div>
  );
};

export default InputBox;
