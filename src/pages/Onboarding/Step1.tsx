import { useState } from "react";
import OnboardingLayout from "../../components/Onboarding/OnboardingLayout";
import TopBackButton from "../../components/Onboarding/TopBackButton";
import BottomButton from "../../components/Onboarding/BottomButton";
import OnboardingProgress from "../../components/Onboarding/OnboardingProgress";

export default function OnboardingStep1({ onNext }: { onNext: () => void }) {
  const [nickname, setNickname] = useState("");

  return (
    <OnboardingLayout>
      <TopBackButton onClick={() => history.back()} />
      <OnboardingProgress current={1} />
      <div className="mt-20 w-[361px] mx-auto">
        <h2 className="text-title2 text-grayscale-1000">반가워요 회원님 :)</h2>
        <p className="text-sm text-gray-500 mt-2">퍼퓨온미에서 사용하실 닉네임과 사진을 정해주세요.</p>
        <div className="w-[72px] h-[72px] rounded-full bg-gray-200 mx-auto mt-8" />
        <input
          className="mt-6 border-b border-gray-400 w-full text-center py-2 outline-none"
          placeholder="닉네임을 입력해주세요!"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <BottomButton text="다음" onClick={onNext} disabled={!nickname.trim()} />
      </div>
      
    </OnboardingLayout>
  );
}
