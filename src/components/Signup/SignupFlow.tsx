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

  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <section className="min-w-[375px] w-120 mx-auto">
      {step === 0 && <SignupNameForm onNext={() => setStep(1)} onBack={() => navigate("/login")}/>}
      {step === 1 && <SignupIdForm onNext={() => setStep(2)} onBack={() => setStep(0)} />}
      {step === 2 && <SignupPasswordForm onNext={() => setStep(3)} onBack={() => setStep(1)} />}
      {step === 3 && <SignupAgreementForm onNext={() => setStep(4)} onBack={() => setStep(2)}/>}
      {step === 4 && <SignupCompleteModal />}
      </section>
    </main>
  );
}
