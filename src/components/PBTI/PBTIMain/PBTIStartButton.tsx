import { Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const PBTIStartButton : React.FC = () => {
    
    const navigate = useNavigate();

    const handleStart = () => {
        navigate('/PBTI/question');
    }
    
    return (
        <button onClick={handleStart}>
            <div className="w-80 py-3 mt-15 mb-5 rounded-3xl bg-main-500 text-title3 text-grayscale-200 font-[600]">
                시작하기
            </div>
        </button>
    );
}

export default PBTIStartButton