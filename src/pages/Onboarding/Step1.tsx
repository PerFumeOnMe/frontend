import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import OnboardingLayout from "../../components/Onboarding/OnboardingLayout";
import TopBackButton from "../../components/Onboarding/TopBackButton";
import BottomButton from "../../components/Onboarding/BottomButton";
import OnboardingProgress from "../../components/Onboarding/OnboardingProgress";

export default function OnboardingStep1({ onNext}: { onNext: () => void }) {
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  return (
    <OnboardingLayout>
      {/* 상단 영역 */}
      <div className="w-full ml-3 mx-auto pt-7">
        <div className="relative h-[24px]">
          <TopBackButton  onClick={() => navigate(-1)} />
          <div className="absolute inset-0 flex justify-center items-center">
            <OnboardingProgress current={1} />
          </div>
        </div>
      </div>

        {/* 타이틀 */}
      <div className="w-full px-4 mx-auto mt-5.5">
        <h2 className="text-title2 text-grayscale-1000 ">반가워요 회원님 :)</h2>
        <p className="text-grayscale-600 text-body3 mb-8">
            퍼퓨온미에서 사용하실 닉네임과<br />사진을 정해주세요.
        </p>

        {/* 입력 UI  + 수정부터 시작*/}
        <div className="flex items-center gap-4 mb-10">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-grayscale-300" />
            <button className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-main-500 text-white text-sm flex items-center justify-center">
              +
            </button>
          </div>

          <div className="flex-1">
            <div className="text-grayscale-1000 text-title3">닉네임</div>
            <input
              className="w-full border-b border-gray-400 text-body3 placeholder-gray-400 outline-none mt-1"
              placeholder="닉네임을 입력해주세요!"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </div>
        </div>
      </div>


      {/* 하단 버튼 */}
    <BottomButton text="다음" onClick={onNext} disabled={!nickname.trim()} />

    </OnboardingLayout>
  );
}
