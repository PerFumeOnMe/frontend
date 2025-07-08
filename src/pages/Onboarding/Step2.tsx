import { useState } from "react";
import OnboardingLayout from "../../components/Onboarding/OnboardingLayout";
import TopBackButton from "../../components/Onboarding/TopBackButton";
import BottomButton from "../../components/Onboarding/BottomButton";
import OnboardingProgress from "../../components/Onboarding/OnboardingProgress";

export default function OnboardingStep2({ onNext, onPrev }: { onNext: () => void; onPrev: () => void }) {
  const [gender, setGender] = useState<string>("상관없음");
  const [age, setAge] = useState<string>("상관없음");

  const genderOptions = ["여성", "남성"];
  const ageOptions = ["10대", "20대", "30대", "40대"];

  return (
    <OnboardingLayout>
      <TopBackButton onClick={onPrev} />
      <OnboardingProgress current={2} />
      <div className="mt-20 w-[316px] mx-auto flex flex-col items-start gap-6">
        <div>
          <h2 className="text-title2 text-grayscale-1000">퍼퓨온미는 정보를 통해<br />더욱 정밀하게 추천하고 있어요.</h2>
          <p className="text-body3 text-grayscale-600 mt-2">성별과 연령대를 입력해주세요.</p>
        </div>

        {/* 성별 */}
        <div className="w-full">
          <label className="block text-sm font-semibold mb-2">성별</label>
          <div className="flex gap-4">
            {genderOptions.map((g) => (
              <button
                key={g}
                onClick={() => setGender(g)}
                className={`flex-1 py-2 rounded-full border text-sm ${gender === g ? "bg-main-500 text-white border-main-500" : "bg-white text-black border-gray-300"}`}
              >
                {g}
              </button>
            ))}
          </div>
          <p className={`mt-1 text-xs ${genderOptions.includes(gender) ? 'text-gray-400' : 'text-main-500 font-semibold'}`}>
            상관없음
          </p>
        </div>

        {/* 연령대 */}
        <div className="w-full">
          <label className="block text-sm font-semibold mb-2">연령대</label>
          <div className="grid grid-cols-2 gap-3">
            {ageOptions.map((a) => (
              <button
                key={a}
                onClick={() => setAge(a)}
                className={`py-2 rounded-full border text-sm ${age === a ? "bg-main-500 text-white border-main-500" : "bg-white text-black border-gray-300"}`}
              >
                {a}
              </button>
            ))}
          </div>
          <p className={`mt-1 text-xs ${ageOptions.includes(age) ? 'text-gray-400' : 'text-main-500 font-semibold'}`}>
            상관없음
          </p>
        </div>

        <div className="w-full pt-4">
          <BottomButton text="다음" onClick={onNext} disabled={!gender || !age} />
        </div>
      </div>
    </OnboardingLayout>
  );
}
