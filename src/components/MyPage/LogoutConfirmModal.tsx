import React from "react";

interface LogoutConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const LogoutConfirmModal: React.FC<LogoutConfirmModalProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
        onClick={onClose} // 🔹 배경 클릭 시 닫힘
    >
      <div className="bg-white rounded-xl p-6 w-72 text-center shadow-lg">
        <h2 className="text-lg font-semibold mb-4">로그아웃 하시겠습니까?</h2>
        <div className="flex justify-center gap-4">
          <button
            className="w-20 py-2 rounded-lg bg-grayscale-500 text-white"
            onClick={onClose}
          >
            아니오
          </button>
          <button
            className="w-20 py-2 rounded-lg bg-main-500 text-white"
            onClick={onConfirm}
          >
            예
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutConfirmModal;
