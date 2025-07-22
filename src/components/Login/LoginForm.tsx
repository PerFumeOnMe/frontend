import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginTitle from "./LoginTitle";
import LoginInput from "./LoginInput";
import LoginErrorMessage from "./LoginErrorMessage";
import LoginButton from "./LoginButton";
import Divider from "./Divider";
import SocialLogin from "./SocialLogin";
import SignupGuide from "./SignupGuide";
import LoginBg from "../../assets/Login/LoginBg.png";

export default function LoginForm() {
  const navigate = useNavigate();
  const [inputId, setInputId] = useState<string>("");
  const [inputPassword, setInputPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleLoginSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputId === "UMC" && inputPassword !== "1234") {
      setErrorMessage("비밀번호가 일치하지 않습니다.");
      return;
    }
    setErrorMessage("");
    localStorage.setItem("isLoggedIn", "true");
    navigate("/", { replace: true });
  };

  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <section className="relative w-120 min-w-[375px] min-h-screen   flex flex-col justify-center">
          <img
          src={LoginBg}
          alt="로그인 배경"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-10 w-full px-4 mx-auto my-auto">
          <LoginTitle />
            <form onSubmit={handleLoginSubmit} className="w-full flex flex-col items-center gap-4 pb-4">
              <LoginInput
                type="text"
                placeholder="아이디 입력하기"
                value={inputId}
                onChange={(e) => setInputId(e.target.value)}
              />
              <LoginInput
                type="password"
                placeholder="비밀번호 입력하기"
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
              />
              <LoginErrorMessage message={errorMessage} />
              <LoginButton />
              <Divider />
            </form>

          <SocialLogin />
          <SignupGuide />
        </div>
      </section>
    </main>
  );
}
