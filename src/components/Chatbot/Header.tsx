import React from "react";

const Header: React.FC = () => (
  <header className="flex items-center px-4 py-3 bg-[#fafafa] border-b-gray-300 border-b-1 chatbot-header relative">
    <button className="back-btn text-gray-500 hover:text-gray-700">
      {/* 뒤로가기 아이콘 예시 */}
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10 18l-6-6 6-6" />
      </svg>
    </button>
    <span className="font-bold pr-5 title text-lg mx-auto">퍼퓨봇</span>
  </header>
);

export default Header;
