import { useNavigate } from 'react-router-dom';
import chatBotIcon from '../../assets/mainPage/chat_bot.png';

export default function ChatBotButton() {
    const navigate = useNavigate();

    return (
        <div className="fixed left-1/2 -translate-x-1/2 w-full max-w-[480px] bottom-[180px] pointer-events-none">
            <div className="absolute right-[16px] flex flex-col items-end gap-[8px]">
                <div className="relative bg-main-10 rounded-[16px] px-[7px] py-[6px] shadow-lg pointer-events-auto">
                    <p className="text-body4 text-grayscale-1000">퍼퓨지니에게 물어보세요!</p>
                    <div 
                        className="absolute bottom-[-7px] right-[16px] w-0 h-0 border-l-[8px] border-l-transparent border-t-[7px] border-t-main-10 border-r-[8px] border-r-transparent"
                        style={{ filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.1))' }}
                    />
                </div>
                <button
                    onClick={() => navigate('/Chatbot')}
                    className="w-[40px] h-[40px] rounded-full shadow-lg z-50 pointer-events-auto mt-[8px]"
                >
                    <img 
                        src={chatBotIcon} 
                        alt="챗봇" 
                        className="w-full h-full object-cover"
                    />
                </button>
            </div>
        </div>
    );
} 