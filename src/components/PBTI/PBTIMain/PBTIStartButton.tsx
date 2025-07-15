import { Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const PBTIStartButton : React.FC = () => {
    
    const navigate = useNavigate();

    const handleStart = () => {
        navigate('/PBTI/question');
    }
    
    return (
        <button onClick={handleStart} className="w-full px-4 cursor-pointer">
            <div className="
                py-3 mt-15 mb-5 rounded-3xl 
                bg-main-500 text-title3 text-grayscale-200 font-[600]
                transition-colors duration-900 ease-in-out
                hover:bg-[#490189]
            ">
                시작하기
            </div>
        </button>
    );
}

export default PBTIStartButton