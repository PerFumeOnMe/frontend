import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ScentCard from '../components/common/ScentCard';
import { scentOptions } from '../types/scentOptions';
import FilterHeader from '../components/AllPerfumePage/FilterPage/FilterHeader';
import Button from '../components/ImageKeyword/Button';
import DetailFilter from '../components/AllPerfumePage/FilterPage/DetailFilter';
import type { FilterParams } from '../types/filter';

export default function FilterPage() {
    const navigate = useNavigate();
    const [step, setStep] = useState<'category' | 'detail'>('category');
    const [selectedScent, setSelectedScent] = useState<string>('');
    const [filters, setFilters] = useState<Partial<FilterParams>>({
        page: 0,
        size: 10
    });

    const handleScentToggle = (id: string, noteCategoryId: number) => {
        setSelectedScent(selectedScent === id ? '' : id);
        setFilters(prev => ({
            ...prev,
            noteCategoryId: selectedScent === id ? undefined : noteCategoryId
        }));
    };

    const handleNext = () => {
        if (step === 'category') {
            setStep('detail');
        } else {
            // API 요청 파라미터 구성
            const requestParams = {
                ...filters
            };

            // 필터가 선택되었는지 확인
            const hasSelectedFilters = Object.entries(requestParams).some(([key, value]) => 
                key !== 'page' && key !== 'size' && value !== undefined
            );

            // 필터가 없으면 기본 페이지로, 있으면 필터와 함께 이동
            if (!hasSelectedFilters) {
                navigate('/all-perfume');
            } else {
                // API 요청 URL 생성
                const queryParams = new URLSearchParams();
                Object.entries(requestParams).forEach(([key, value]) => {
                    if (value !== undefined) {
                        queryParams.append(key, value.toString());
                    }
                });

                // API 호출 URL 콘솔에 출력
                console.log('API Request URL:', `/fragrances/filter?${queryParams.toString()}`);

                // 모든 향수 페이지로 이동하면서 필터 파라미터 전달
                navigate(`/all-perfume?${queryParams.toString()}`);
            }
        }
    };

    const handleBack = () => {
        if (step === 'detail') {
            setStep('category');
        } else {
            navigate(-1);
        }
    };

    const handleFilterSelect = (key: keyof FilterParams, value: any) => {
        setFilters(prev => ({
            ...prev,
            [key]: value
        }));
    };

    return (
        <div className="relative min-h-screen bg-white pb-[96px] min-w-[375px]">
            <FilterHeader 
                title={step === 'category' ? "향수 카테고리 선택" : "세부 설정 선택"}
                onBack={handleBack}
            />

            {step === 'category' ? (
                <div className="px-[16px] pt-[24px]">
                    <h3 className="text-title2 text-grayscale-900 mb-[16px]">
                        원하시는 계열을 골라주세요.
                    </h3>
                    <div className="grid grid-cols-3 gap-[12px]">
                        {scentOptions.map((scent) => (
                            <ScentCard
                                key={scent.id}
                                id={scent.id}
                                png={scent.png}
                                description={scent.description}
                                selected={selectedScent === scent.id}
                                onClick={() => handleScentToggle(scent.id, scent.noteCategoryId)}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <DetailFilter
                    selectedFilters={filters}
                    onFilterSelect={handleFilterSelect}
                />
            )}
            <Button
                    isLastStep={step === 'detail'}
                    isStepComplete={true}
                    onNext={handleNext}
                    onSubmit={handleNext}
            />
        </div>
    );
} 