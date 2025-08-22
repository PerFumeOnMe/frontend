import SignupNameForm from "./SignupNameForm";
import SignupIdForm from "./SignupIdForm";
import SignupPasswordForm from "./SignupPasswordForm";
import SignupAgreementForm from "./SignupAgreementForm";
import SignupCompleteModal from "./SignupCompleteModal";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignupFlow() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

  const [idError, setIdError] = useState(""); 

    const handleIdErrorAndBack = (msg: string) => {
    setIdError(msg);
    // 에러 메시지가 있을 때만 아이디 입력 페이지로 이동
    if (msg.trim()) {
      setStep(1);
    }
  };

  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <section className="min-w-[375px] w-120 mx-auto">
        {step === 0 && (
          <SignupNameForm
            name={name}
            setName={setName}
            onNext={() => setStep(1)}
            onBack={() => navigate("/login")}
          />
        )}
        {step === 1 && (
          <SignupIdForm
            loginId={loginId}
            setLoginId={setLoginId}
            idError={idError}
            setIdError={setIdError}
            onNext={() => setStep(2)}
            onBack={() => setStep(0)}
          />
        )}
        {step === 2 && (
          <SignupPasswordForm
            password={password}
            setPassword={setPassword}
            onNext={() => setStep(3)}
            onBack={() => setStep(1)}
          />
        )}
        {step === 3 && (
          <SignupAgreementForm
            name={name}
            loginId={loginId}
            password={password}
            setIdError={handleIdErrorAndBack}
            onNext={() => setStep(4)}
            onBack={() => setStep(2)}
          />
        )}
        {step === 4 && <SignupCompleteModal />}
      </section>
    </main>
  );
}
