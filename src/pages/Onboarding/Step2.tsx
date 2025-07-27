import { useState } from "react";
import OnboardingLayout from "../../components/Onboarding/OnboardingLayout";
import BottomButton from "../../components/common/BottomButton";
import OnboardingProgress from "../../components/Onboarding/OnboardingProgress";
import PageHeader from "../../components/common/PageHeader";

export default function OnboardingStep2({ onNext, onPrev }: { onNext: () => void; onPrev: () => void }) {
  const [gender, setGender] = useState<string>("상관없음");
  const [age, setAge] = useState<string>("상관없음");

  const genderOptions = ["여성", "남성"];
  const ageOptions = ["10대", "20대", "30대", "40대"];

  return (
    <OnboardingLayout>
      {/* 상단 영역 */}
    <PageHeader onBack={onPrev} centerSlot={<OnboardingProgress current={2} />} />

      <div className="w-full px-4 mx-auto mt-[22px] flex flex-col items-start gap-6">
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
          <p className={`mt-1 text-body4 w-full text-center ${genderOptions.includes(gender) ? 'text-gray-400' : 'text-main-500 font-semibold'}`}>
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
          <p className={`mt-1 text-body4 w-full text-center ${ageOptions.includes(age) ? 'text-gray-400' : 'text-main-500 font-semibold'}`}>
            상관없음
          </p>
        </div>


      </div>
      <div className="mt-auto w-full">
        <BottomButton disabled={!gender || !age} onClick={onNext}>
          다음
        </BottomButton>
      </div>
    </OnboardingLayout>
  );
}
