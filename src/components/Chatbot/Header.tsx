import React from "react";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return(
    <header className="flex items-center px-4 py-3 bg-[#F8F0FF]">
      <button 
        className="back-btn text-[18px] text-[#343437] font-semibold hover:text-gray-700 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        {/* 뒤로가기 아이콘 */}
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10 18l-6-6 6-6" />
        </svg>
      </button>
      <span className="pr-8 text-[#343437] text-[18px] font-[600] mx-auto">퍼퓨봇</span>
    </header>
  );
}

export default Header;
