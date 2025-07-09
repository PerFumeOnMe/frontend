import { useState } from "react";
import OnboardingLayout from "../../components/Onboarding/OnboardingLayout";
import TopBackButton from "../../components/Onboarding/TopBackButton";
import BottomButton from "../../components/Onboarding/BottomButton";
import OnboardingProgress from "../../components/Onboarding/OnboardingProgress";


const scentOptions = [
  "Citrus", "Musk", "Bergamot", "Cedarwood", "Pink Pepper", "Rose",
  "Patchouli", "White Musk", "Vetiver", "Vanilla", "Sandalwood", "Amber",
  "Green Tea", "Grapefruit", "Iris",
];

export default function OnboardingStep3({ onPrev }: { onPrev: () => void }) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (scent: string) => {
    if (selected.includes(scent)) {
      setSelected(selected.filter((s) => s !== scent));
    } else if (selected.length < 3) {
      setSelected([...selected, scent]);
    }
  };

  return (
    <OnboardingLayout>
      {/* 상단 영역 */}
      <div className="w-full ml-[11px] mx-auto pt-[26px]">
        <div className="relative h-[24px]">
          <TopBackButton onClick={onPrev}/>
          <div className="absolute inset-0 flex justify-center items-center">
            <OnboardingProgress current={3} />
          </div>
        </div>
      </div>
      <div className="mt-16 px-4 mx-auto">
        <h2 className="text-lg font-semibold">선호하는 향을<br />3가지 선택해 주세요.</h2>
        <p className="text-sm text-gray-500 mt-2">이제 회원님의 향을 찾아드릴게요.</p>

        <div className="mt-6 grid grid-cols-3 gap-2">
          {scentOptions.map((scent) => (
            <button
              key={scent}
              onClick={() => toggle(scent)}
              className={`h-[80px] rounded-md border text-sm ${selected.includes(scent) ? "bg-primary text-black border-main-500" : "bg-white border-gray-300"}`}
            >
              {scent}
            </button>
          ))}
        </div>
      

      </div>  
      <div className="w-full px-4">
        <BottomButton text="확인" onClick={() => window.location.href = '/'} disabled={selected.length !== 3} />
      </div>
    </OnboardingLayout>
  );
}
