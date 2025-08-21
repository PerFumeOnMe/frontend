import { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { useAuth } from "../../context/AuthContext";
import LogoutConfirmModal from "./LogoutConfirmModal";

const MyPageHeader = () => {
  const { logout } = useAuth();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleLogoutClick = () => {
    setModalOpen(true);
  };

  const handleConfirm = async () => {
    await logout(); // AuthContext의 logout 실행
    setModalOpen(false);
    window.location.reload();
  };

  return (
    <div className="relative flex items-center py-1">
      {/* 가운데 텍스트 */}
      <div className="absolute left-1/2 transform -translate-x-1/2 text-title3">
        마이페이지
      </div>

      {/* 우측 아이콘 */}
      <FiLogOut
        className="ml-auto w-5 h-5 cursor-pointer"
        onClick={handleLogoutClick}
      />

      {/* 로그아웃 확인 모달 */}
      <LogoutConfirmModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export default MyPageHeader;
