import React from "react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  onBack?: () => void;           // ✅ 부모에서 모달 열기 등 커스텀 동작을 넘겨줄 수 있음
  className?: string;            // (선택) 필요 시 추가 클래스
  rightSlot?: React.ReactNode;   // (선택) 우측 영역에 액션 넣고 싶을 때
}

const Header: React.FC<HeaderProps> = ({ onBack, className = "", rightSlot }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) return onBack(); // ✅ 부모 제어 우선 (모달 표시 등)
    navigate(-1);                // ✅ 기본 동작: 히스토리 뒤로
  };

  return (
    <header className={`sticky top-0 w-full z-50 flex items-center px-4 py-3 bg-[#F8F0FF] ${className}`}>
      <button
        className="back-btn hover:text-gray-700 cursor-pointer"
        aria-label="뒤로가기"
        onClick={handleBack}
      >
        {/* 뒤로가기 아이콘 */}
        <svg width="12" height="23" viewBox="0 0 12 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.9982 21.2507L10.6049 22.6667L0.383567 12.28C0.137568 12.0263 0 11.6867 0 11.3333C0 10.9799 0.137568 10.6404 0.383567 10.3867L10.6049 0L11.9982 1.41733L2.2409 11.3333L11.9982 21.2507Z"
            fill="#343437"
          />
        </svg>
      </button>

      <span className="pl-2 text-grayscale-900 text-title3 mx-auto">퍼퓨지니</span>

      {/* 우측 여백 유지용 또는 슬롯 */}
      <div className="min-w-[24px]">{rightSlot}</div>
    </header>
  );
};

export default Header;
