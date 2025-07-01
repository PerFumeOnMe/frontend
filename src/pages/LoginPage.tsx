// LoginPage.jsx
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    navigate("/", { replace: true });
  };

  return (
    <div>
      <h1>로그인 페이지</h1>
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
}

export default LoginPage;
