// components/common/ConfirmLeaveModal.tsx
import React from "react";

interface ConfirmLeaveModalProps {
  open: boolean;
  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmLeaveModal: React.FC<ConfirmLeaveModalProps> = ({
  open,
  title = "채팅을 종료할까요?",
  description = "나가면 현재 대화가 사라질 수 있습니다.",
  confirmText = "나가기",
  cancelText = "계속하기",
  onConfirm,
  onCancel,
}) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* dim */}
      <div className="absolute inset-0 bg-black/40" onClick={onCancel} />
      {/* modal */}
      <div className="relative z-10 w-[90%] max-w-sm rounded-2xl bg-white p-5 shadow-xl">
        <div className="text-title4 text-gray-900 mb-1">{title}</div>
        <div className="text-body3 text-gray-700 mb-4 whitespace-pre-line">
          {description}
        </div>
        <div className="flex gap-2">
          <button
            onClick={onCancel}
            className="flex-1 rounded-xl border border-gray-300 py-2 text-gray-700"
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 rounded-xl bg-main-500 py-2 text-white"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmLeaveModal;
