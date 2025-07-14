import { Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const PBTIStartButton : React.FC = () => {
    
    const navigate = useNavigate();

    const handleStart = () => {
        navigate('/PBTI/question');
    }
    
    return (
        <button onClick={handleStart}>
            <div className="w-110 py-4 mt-5 mb-5 rounded-3xl bg-main-500 text-[#E7E7E9] text-[18px] font-[600]">
                PBTI 시작하기
            </div>
        </button>
    );
}

export default PBTIStartButton