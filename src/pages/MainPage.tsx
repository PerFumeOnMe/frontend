import { Link } from "react-router-dom";

const MainPage = () => {
    return (
        <div>
            <div>메인페이지</div>
            <Link to="/Chatbot">
                챗봇으로 이동
            </Link>
        </div>
    );
};

export default MainPage;
