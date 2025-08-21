import { useState, useEffect, useRef } from 'react';
import searchImage from "../../assets/MainPage/search2.png";

interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
    debounceMs?: number; // 디바운스 지연 시간 (기본값: 500ms)
}

const SearchBar = ({ onSearch, debounceMs = 300 }: SearchBarProps) => {
    const [searchText, setSearchText] = useState('');
    const debounceTimeoutRef = useRef<number | null>(null);

    // 디바운싱된 검색
    useEffect(() => {
        // 이전 타이머 클리어
        if (debounceTimeoutRef.current) {
            window.clearTimeout(debounceTimeoutRef.current);
        }

        // 새 타이머 설정
        debounceTimeoutRef.current = window.setTimeout(() => {
            onSearch(searchText.trim());
        }, debounceMs);

        // 컴포넌트 언마운트 시 타이머 클리어
        return () => {
            if (debounceTimeoutRef.current) {
                window.clearTimeout(debounceTimeoutRef.current);
            }
        };
    }, [searchText, onSearch, debounceMs]);

    const handleSearch = () => {
        // 엔터 키 입력 시 즉시 검색 (디바운스 무시)
        if (debounceTimeoutRef.current) {
            window.clearTimeout(debounceTimeoutRef.current);
        }
        onSearch(searchText.trim());
    };

    return (
        <div className="w-full">
            <div className="px-[16px]">
                <div className="flex items-center w-full h-[44px] px-[16px] bg-white rounded-[8px] border border-grayscale-700">
                    <img 
                        src={searchImage}
                        alt="검색" 
                        className="w-[16px] h-[16px] mr-[8px] color-grayscale-700" 
                    />
                    <input
                        type="text"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                        placeholder="원하시는 향수를 검색해보세요."
                        className="flex-1 text-body3 outline-none placeholder:text-grayscale-700"
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchBar; 