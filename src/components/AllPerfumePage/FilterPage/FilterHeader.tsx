import { SlArrowLeft } from "react-icons/sl";

interface FilterHeaderProps {
    title: string;
    onBack: () => void;
}

export default function FilterHeader({ title, onBack }: FilterHeaderProps) {
    return (
        <header className="flex items-center h-[51px] px-[11px] bg-white relative pt-[24px]">
            <button
                onClick={onBack}
                className="w-[24px] h-[24px] flex items-center justify-center"
                aria-label="뒤로가기"
            >
                <SlArrowLeft className="w-[24px] h-[24px] text-grayscale-900" />
            </button>
            <h1 className="absolute left-1/2 -translate-x-1/2 text-title3 text-grayscale-900">
                {title}
            </h1>
        </header>
    );
} 