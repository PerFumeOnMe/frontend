import OnboardingLayout from "../../components/Onboarding/OnboardingLayout";
import BottomButton from "../../components/common/BottomButton";
import OnboardingProgress from "../../components/Onboarding/OnboardingProgress";
import PageHeader from "../../components/common/PageHeader";

export default function OnboardingStep2({
  onNext,
  onPrev,
  genderKo,
  setGenderKo,
  ageKo,
  setAgeKo,
}: {
  onNext: () => void;
  onPrev: () => void;
  genderKo: "여성" | "남성" | "상관없음";
  setGenderKo: (v: "여성" | "남성" | "상관없음") => void;
  ageKo: "10대" | "20대" | "30대" | "40대" | "상관없음";
  setAgeKo: (v: "10대" | "20대" | "30대" | "40대" | "상관없음") => void;
}) {
  const genderOptions = ["여성", "남성"] as const;
  const ageOptions = ["10대", "20대", "30대", "40대"] as const;

  return (
    <OnboardingLayout>
      <PageHeader onBack={onPrev} centerSlot={<OnboardingProgress current={2} />} />

      <div className="w-full px-4 mx-auto mt-[22px] flex flex-col items-start gap-6">
        <div>
          <h2 className="text-title2 text-grayscale-1000">
            퍼퓨온미는 정보를 통해<br />더욱 정밀하게 추천하고 있어요.
          </h2>
          <p className="text-body3 text-grayscale-600 mt-2">성별과 연령대를 입력해주세요.</p>
        </div>

        {/* 성별 */}
        <div className="w-full">
          <label className="block text-sm font-semibold mb-2">성별</label>
          <div className="flex gap-4">
            {genderOptions.map((g) => (
              <button
                key={g}
                onClick={() => setGenderKo(g)}
                className={`flex-1 py-2 rounded-full border text-sm ${
                  genderKo === g ? "bg-main-500 text-white border-main-500" : "bg-white text-black border-gray-300"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setGenderKo("상관없음")}
            className={`mt-1 block w-full text-center text-body4 ${
              genderOptions.includes(genderKo as any) ? "text-gray-400" : "text-main-500 font-semibold"
            }`}
          >
            상관없음
          </button>
        </div>

        {/* 연령대 */}
        <div className="w-full">
          <label className="block text-sm font-semibold mb-2">연령대</label>
          <div className="grid grid-cols-2 gap-3">
            {ageOptions.map((a) => (
              <button
                key={a}
                onClick={() => setAgeKo(a)}
                className={`py-2 rounded-full border text-sm ${
                  ageKo === a ? "bg-main-500 text-white border-main-500" : "bg-white text-black border-gray-300"
                }`}
              >
                {a}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setAgeKo("상관없음")}
            className={`mt-1 block w-full text-center text-body4 ${
              ageOptions.includes(ageKo as any) ? "text-gray-400" : "text-main-500 font-semibold"
            }`}
          >
            상관없음
          </button>
        </div>
      </div>

      <div className="mt-auto w-full">
        <BottomButton onClick={onNext}>다음</BottomButton>
      </div>
    </OnboardingLayout>
  );
}
