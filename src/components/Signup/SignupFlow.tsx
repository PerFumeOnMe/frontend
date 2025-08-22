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
  const [idErrorType, setIdErrorType] = useState(""); 

  const handleIdErrorAndBack = (
    msg: string,
    errorType: "name" | "id" | "password" | "unknown" | ""

  ) => {
    setIdError(msg);
    setIdErrorType(errorType)
    
    if (!msg.trim()) return; // 빈 메시지는 무시

    switch (errorType) {
      case "name":
        setStep(0);
        break;

      // "id" 또는 "loginId" 모두 아이디 단계로 이동
      case "id":
        setStep(1);
        break;

      // 비밀번호 관련은 모두 비밀번호 단계
      case "password":
        setStep(2);
        break;

      // Unknown
      case "unknown":
        setStep(0);
        break;

      // 그 외에는 현재 단계 유지 (필요시 원하는 기본 동작으로 변경 가능)
      default:
        break;
    }
  };

  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <section className="min-w-[375px] w-120 mx-auto">
        {step === 0 && (
          <SignupNameForm
            name={name}
            setName={setName}
            idError={idError}
            setIdError={setIdError}
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
