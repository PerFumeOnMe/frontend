import { useNavigate } from 'react-router-dom';
import returnShape from '../../../assets/Login/ReturnShape.png';

interface KeywordResultHeaderProps {
    title: string;
    onBack?: () => void;
    backPath?: string;
    className?: string;
}

export default function KeywordResultHeader({ title, onBack, backPath, className = '' }: KeywordResultHeaderProps) {
    const navigate = useNavigate();

    const handleBack = () => {
        if (onBack) {
            onBack();
        } else if (backPath) {
            navigate(backPath);
        } else {
            navigate(-1);
        }
    };

    return (
        <div className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-white/10 backdrop-blur-sm ${className}`}>
            <button
                onClick={handleBack}
                className="flex items-center justify-center w-8 h-8"
            >
                <img src={returnShape} alt="뒤로가기" className="w-3 h-5" />
            </button>
            <h2 className="text-title3 text-grayscale-900">
                {title}
            </h2>
            <div className="w-8 h-8" /> {/* 균형을 위한 빈 공간 */}
        </div>
    );
}
