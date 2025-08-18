import React from "react";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return(
    <header className="sticky top-0 w-full z-50 flex items-center px-4 py-3 bg-[#F8F0FF]">
      <button 
        className="back-btn hover:text-gray-700 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        {/* 뒤로가기 아이콘 */}
        <svg width="12" height="23" viewBox="0 0 12 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9982 21.2507L10.6049 22.6667L0.383567 12.28C0.137568 12.0263 0 11.6867 0 11.3333C0 10.9799 0.137568 10.6404 0.383567 10.3867L10.6049 0L11.9982 1.41733L2.2409 11.3333L11.9982 21.2507Z" fill="#343437"/>
        </svg>
      </button>
      <span className="pr-5 text-grayscale-900 text-title3 mx-auto">퍼퓨지니</span>
    </header>
  );
}

export default Header;
