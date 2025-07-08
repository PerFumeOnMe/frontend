import SignupNameForm from "./SignupNameForm";
import SignupIdForm from "./SignupIdForm";
import SignupPasswordForm from "./SignupPasswordForm";
import SignupAgreementForm from "./SignupAgreementForm";
import SignupCompleteModal from "./SignupCompleteModal";


import { useState } from "react";

export default function SignupFlow() {
  const [step, setStep] = useState(0);

  return (
    <main className="w-screen h-screen flex items-center justify-center">
    <section className="w-full w-max-120 w-auto">
      {step === 0 && <SignupNameForm onNext={() => setStep(1)} />}
      {step === 1 && <SignupIdForm onNext={() => setStep(2)} />}
      {step === 2 && <SignupPasswordForm onNext={() => setStep(3)} />}
      {step === 3 && <SignupAgreementForm onNext={() => setStep(4)} />}
      {step === 4 && <SignupCompleteModal />}
    </section>
    </main>
  );
}
