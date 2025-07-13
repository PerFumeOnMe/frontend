import { useState } from "react";
import OnboardingStep1 from "./Step1";
import OnboardingStep2 from "./Step2";
import OnboardingStep3 from "./Step3";

export default function OnboardingRouter() {
  const [step, setStep] = useState(1);

  const next = () => setStep((prev) => Math.min(prev + 1, 3));
  const prev = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <>
      {step === 1 && <OnboardingStep1 onNext={next}/>}
      {step === 2 && <OnboardingStep2 onNext={next} onPrev={prev} />}
      {step === 3 && <OnboardingStep3 onPrev={prev} />}
    </>
  );
}
