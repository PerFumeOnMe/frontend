import { useState } from "react";
import OnboardingStep1 from "./Step1";
import OnboardingStep2 from "./Step2";
import OnboardingStep3 from "./Step3";

export default function OnboardingRouter() {
  const [step, setStep] = useState(1);

  const [nickname, setNickname] = useState("");
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [genderKo, setGenderKo] = useState<"여성" | "남성" | "상관없음">("상관없음");
  const [ageKo, setAgeKo] = useState<"10대" | "20대" | "30대" | "40대" | "상관없음">("상관없음");
  const [selectedNotesDesc, setSelectedNotesDesc] = useState<string[]>([]);

  const next = () => setStep((p) => Math.min(p + 1, 3));
  const prev = () => setStep((p) => Math.max(p - 1, 1));

  return (
    <>
      {step === 1 && (
        <OnboardingStep1
          nickname={nickname}
          setNickname={setNickname}
          imageURL={imageURL}
          setImageURL={setImageURL}
          onNext={next}
        />
      )}
      {step === 2 && (
        <OnboardingStep2
          genderKo={genderKo}
          setGenderKo={setGenderKo}
          ageKo={ageKo}
          setAgeKo={setAgeKo}
          onNext={next}
          onPrev={prev}
        />
      )}
      {step === 3 && (
        <OnboardingStep3
          onPrev={prev}
          nickname={nickname}
          imageURL={imageURL}
          genderKo={genderKo}
          ageKo={ageKo}
          selectedNotesDesc={selectedNotesDesc}
          setSelectedNotesDesc={setSelectedNotesDesc}
        />
      )}
    </>
  );
}
