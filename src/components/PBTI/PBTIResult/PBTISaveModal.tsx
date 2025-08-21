import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { postSavePBTI } from "../../../apis/PBTI";

type PBTISaveModalProps = {
  isOpen: boolean;
  step: 1 | 2;
  perfumeName: string;
  onChange: (value: string) => void;
  onSave: () => void;
  onClose: () => void;
  onHome: () => void;
};

const modalVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: "100%", opacity: 0 },
};

const PBTISaveModal: React.FC<PBTISaveModalProps> = ({
  isOpen,
  step,
  perfumeName,
  onChange,
  onSave,
  onClose,
  onHome
}) => {
  const handleSaveButton = async () => {
    try {
      const res = await postSavePBTI({ savedName: perfumeName });
      console.log("저장에 성공했습니다.", res);
    } catch (error) {
      console.log("PBTI 결과 저장중 오류가 발생했습니다.", error);
    } finally {
      onSave();
    }
  };

  // ESC 로 닫기 (선택)
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/[var(--bg-opacity)] [--bg-opacity:50%] flex items-end justify-center z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}                 // ← 오버레이 클릭 시 닫기
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            className="bg-white max-w-120 min-w-[375px] w-full mb-15 rounded-t-2xl p-4 text-center"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}  // ← 내부 클릭은 전파 막기
          >
            {step === 1 ? (
              <>
                <h3 className="text-title2 font-semibold mb-3 py-1">
                  향수 이름 입력
                </h3>
                <input
                  type="text"
                  value={perfumeName}
                  onChange={(e) => onChange(e.target.value)}
                  placeholder="향수 이름을 입력해주세요."
                  className="w-full border border-gray-300 rounded-md px-3 py-3 mb-4 text-md"
                />
                <button
                  className={`w-full py-3 mb-3 rounded-2xl font-semibold 
                    ${perfumeName.trim()
                      ? "bg-main-500 text-white cursor-pointer"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  onClick={handleSaveButton}
                  disabled={!perfumeName.trim()}   // ✅ 비활성화 조건
                >
                  저장하기
                </button>
              </>
            ) : (
              <>
                <p className="text-title2 font-semibold py-2 mb-4">
                  완료되었습니다.
                </p>
                <button
                  className="w-full bg-main-500 text-white py-3 mb-3 rounded-2xl font-semibold"
                  onClick={onHome}
                >
                  홈으로
                </button>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PBTISaveModal;
