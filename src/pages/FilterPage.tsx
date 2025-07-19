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

    const handleScentToggle = (id: string) => {
        setSelectedScent(selectedScent === id ? '' : id);
    };

    const handleNext = () => {
        if (step === 'category') {
            setFilters(prev => ({
                ...prev,
                noteCategoryId: selectedScent ? Number(selectedScent) : undefined
            }));
            setStep('detail');
        } else {
            // API 요청 파라미터 구성
            const requestParams: Partial<FilterParams> = {
                ...filters,
                noteCategoryId: selectedScent ? Number(selectedScent) : undefined
            };

            // 값이 undefined인 필드 제거
            Object.keys(requestParams).forEach(key => {
                if (requestParams[key as keyof FilterParams] === undefined) {
                    delete requestParams[key as keyof FilterParams];
                }
            });

            // 콘솔에 요청 파라미터 출력
            console.log('Request Parameters:', requestParams);
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

    // 카테고리와 세부 설정을 포함하여 최소 1개 이상 선택되었는지 확인
    const hasAnySelection = () => {
        if (selectedScent !== '') return true;
        
        const checkFields: (keyof FilterParams)[] = ['fragranceType', 'gender', 'situationId', 'seasonId', 'priceMin'];
        return checkFields.some(field => filters[field] !== undefined);
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
                                svg={scent.svg}
                                description={scent.description}
                                selected={selectedScent === scent.id}
                                onClick={() => handleScentToggle(scent.id)}
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

            <div className="fixed bottom-0 left-0 right-0 min-w-[375px]">
                <Button
                    isLastStep={step === 'detail'}
                    isStepComplete={step === 'category' ? true : hasAnySelection()}
                    onNext={handleNext}
                    onSubmit={handleNext}
                />
            </div>
        </div>
    );
} 