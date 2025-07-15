import { useState } from 'react';
import { SlArrowLeft } from "react-icons/sl";
import { useNavigate } from 'react-router-dom';
import ScentCard from '../components/common/ScentCard';
import { scentOptions } from '../types/scentOptions';

export default function FilterPage() {
    const navigate = useNavigate();
    const [selectedScents, setSelectedScents] = useState<string[]>([]);

    const handleScentToggle = (id: string) => {
        if (selectedScents.includes(id)) {
            setSelectedScents(selectedScents.filter(s => s !== id));
        } else {
            setSelectedScents([...selectedScents, id]);
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* 헤더 */}
            <header className="flex items-center justify-between px-[16px] pt-[24px] pb-[24px] w-full">
                <button
                    onClick={() => navigate(-1)}
                    className="w-[24px] h-[24px] flex items-center justify-center"
                    aria-label="뒤로가기"
                >
                    <SlArrowLeft className="w-[24px] h-[24px] text-grayscale-900" />
                </button>

                <h2 className="absolute left-1/2 -translate-x-1/2 text-title3 text-grayscale-900">
                    필터
                </h2>

                <div className="w-[24px]" /> {/* 우측 여백 맞추기용 */}
            </header>

            {/* 향수 카테고리 */}
            <div className="px-[16px]">
                <h3 className="text-title3 text-grayscale-900 mb-[16px]">
                    향수 카테고리
                </h3>
                <div className="grid grid-cols-3 gap-[12px]">
                    {scentOptions.map((scent) => (
                        <ScentCard
                            key={scent.id}
                            id={scent.id}
                            svg={scent.svg}
                            description={scent.description}
                            selected={selectedScents.includes(scent.id)}
                            onClick={() => handleScentToggle(scent.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
} 