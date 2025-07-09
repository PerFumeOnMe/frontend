interface ImageKeywordModalProps {
    onClose: () => void;
    onConfirm: () => void;
}

export default function ImageKeywordModal({ onClose, onConfirm }: ImageKeywordModalProps) {
    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="min-w-[361px] w-[361px] h-[180px] bg-white rounded-[16px] p-[24px] flex flex-col items-center justify-center">
                <h2 className="text-body2 text-grayscale-900 text-center mb-[24px]">
                    홈화면으로 돌아가시겠습니까?<br/>현재까지 선택된 내용은 저장되지 않습니다.
                </h2>
                <div className="flex gap-[12px] w-full">
                    <button
                        onClick={onClose}
                        className="flex-1 h-[44px] rounded-[16px] border border-main-500 text-main-500 text-body1"
                    >
                        홈으로
                    </button>
                    <button
                        onClick={onConfirm}
                        className="flex-1 h-[44px] rounded-[16px] bg-main-500 text-white text-body1"
                    >
                        계속하기
                    </button>
                </div>
            </div>
        </div>
    );
} 