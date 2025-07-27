import { useState } from 'react';

interface SaveNameModalProps {
    onSubmit: (name: string) => void;
    onClose: () => void;
}

export default function SaveNameModal({ onSubmit, onClose }: SaveNameModalProps) {
    const [name, setName] = useState('');

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-[16px] px-[16px] py-[16px] shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
            <div className="bg-white rounded-[24px]">
                <h3 className="text-title2 text-center text-grayscale-1000 mb-[16px]">향수 이름 입력</h3>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="이름을 입력하세요."
                    className="w-full h-[44px] px-[20px] border border-grayscale-900 rounded-[8px] text-body2 mt-[16px]"
                />
                <button
                    onClick={() => {
                        if (name.trim()) {
                        onSubmit(name);
                        }
                    }}
                    className="w-full h-[48px] bg-main-600 rounded-[16px] text-title3 text-grayscale-200 mt-[32px]"
                >
                    저장
                </button>
            </div>
        </div>
    );
}
