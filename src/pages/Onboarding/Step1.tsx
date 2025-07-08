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

      {/* 정렬된 프로필 + 닉네임 입력 라인 */}
      <div className="w-[361px] mx-auto">
        <h2 className="text-title2 text-grayscale-1000 mb-2">반가워요 회원님 :)</h2>
        <p className="text-sm text-gray-500 mb-8">퍼퓨온미에서 사용하실 닉네임과 사진을 정해주세요.</p>

        <div className="flex items-center gap-4">
          {/* 프로필 원 */}
          <div className="relative">
            <div className="w-[72px] h-[72px] rounded-full bg-gray-200" />
            <button className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-main-500 text-white text-sm flex items-center justify-center">
              +
            </button>
          </div>

          {/* 닉네임 입력 */}
          <div className="flex-1">
            <div className="text-sm font-semibold">닉네임</div>
            <input
              className="w-full border-b border-gray-400 text-sm placeholder-gray-400 outline-none mt-1"
              placeholder="닉네임을 입력해주세요!"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </div>
        </div>
        <BottomButton text="다음" onClick={onNext} disabled={!nickname.trim()} />
      </div>
    </OnboardingLayout>
  );
}