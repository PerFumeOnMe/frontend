import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginTitle from "./LoginTitle";
import LoginInput from "./LoginInput";
import LoginErrorMessage from "./LoginErrorMessage";
import LoginButton from "./LoginButton";
import Divider from "./Divider";
import SocialLogin from "./SocialLogin";
import SignupGuide from "./SignupGuide";

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
      <section className="w-full max-w-120 min-h-screen bg-[url('/Login/background.svg')] bg-cover bg-center flex flex-col">
        <LoginTitle />
        <div className="w-full max-w-[384px] mx-auto">
        <form onSubmit={handleLoginSubmit} className="w-full flex flex-col items-center gap-[11px] pb-6">
          <LoginInput
            type="text"
            icon="/Login/id.svg"
            placeholder="아이디"
            value={inputId}
            onChange={(e) => setInputId(e.target.value)}
          />
          <LoginInput
            type="password"
            icon="/Login/pw.svg"
            placeholder="패스워드"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
          />
          <LoginErrorMessage message={errorMessage} />
          <LoginButton />
        </form>

        <Divider />
        <SocialLogin />
        <SignupGuide />
        </div>
      </section>
    </main>
  );
}
