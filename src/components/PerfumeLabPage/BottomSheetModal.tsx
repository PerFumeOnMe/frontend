// BottomSheetModal.tsx
import React from "react";

interface BottomSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const BottomSheetModal = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
}: BottomSheetModalProps) => {
  if (!isOpen) return null;

  /** 모든 포인터 이벤트를 캡처 단계에서 차단 */
  const stop = (e: React.PointerEvent | React.MouseEvent | React.TouchEvent) =>
    e.stopPropagation();

  /** 오직 배경을 눌렀을 때만 닫기 */
  const handleBackdrop = (e: React.PointerEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <>
      {/* 배경 오버레이 */}
      <div
        className="fixed inset-0 z-40 bg-black/40"
        onPointerDown={handleBackdrop}
      />

      {/* 모달 컨테이너 — 배경 클릭 이벤트 없이 깨끗하게 */}
      <div className="fixed inset-0 z-50 flex items-end justify-center">
        <div
          className="w-full max-w-[480px] bg-white rounded-t-lg shadow-2xl animate-slide-up"
          onPointerDownCapture={stop} // ★ 핵심: 캡처 단계 차단
        >
          {/* 핸들 */}
          <div className="flex justify-center py-2">
            <div className="w-12 h-1 bg-gray-300 rounded-full" />
          </div>

          {/* 헤더 */}
          <div className="relative flex items-center px-4 py-3">
            <h2 className="flex-1 text-center text-lg font-semibold">
              {title}
            </h2>
            <button
              aria-label="close"
              onClick={onClose}
              className="absolute right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          {/* 본문 */}
          <div className="px-4 py-2 max-h-[60vh] overflow-y-auto">
            {subtitle && (
              <h3 className="mb-4 text-lg font-semibold">{subtitle}</h3>
            )}
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomSheetModal;
