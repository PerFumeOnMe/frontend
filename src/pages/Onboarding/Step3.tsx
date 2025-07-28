import { useState } from "react";
import OnboardingLayout from "../../components/Onboarding/OnboardingLayout";
import BottomButton from "../../components/common/BottomButton";
import OnboardingProgress from "../../components/Onboarding/OnboardingProgress";
import ScentCard from "../../components/common/ScentCard"; 
import { scentOptions } from "../../types/scentOptions";
import PageHeader from "../../components/common/PageHeader";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineExclamation } from "react-icons/ai";

export default function OnboardingStep3({ onPrev }: { onPrev: () => void }) {
  const [selected, setSelected] = useState<string[]>([]);
  const toggle = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((s) => s !== id));
    } else if (selected.length < 3) {
      setSelected([...selected, id]);
    } else {
    toast.custom((t) => (
      <div className="fixed bottom-20 w-full">
        <div
          className={`${t.visible ? "animate-enter" : "animate-leave"} mx-auto w-full max-w-[448px] bg-grayscale-1000-f2 text-white rounded-2xl py-4 px-5 flex items-center`}
        >
          <div className="flex items-center justify-center gap-3 w-full">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white flex items-center justify-center">
              <AiOutlineExclamation className="w-4 h-4 text-grayscale-1000-f2" />
            </div>
            <span className="text-center text-body3">
              선호하는 향은 3개까지만 설정이 가능합니다.
            </span>
          </div>
        </div>
      </div>
    ));
    }
  };

  return (
    <OnboardingLayout>
      <Toaster position="bottom-center" />
      <PageHeader onBack={onPrev} centerSlot={<OnboardingProgress current={3} />} />

      <div className="w-full px-4 mx-auto mt-[22px]">
        <h2 className="text-title2 text-grayscale-1000 ">
          선호하는 향을<br />3가지 선택해 주세요.
        </h2>
        <p className="text-grayscale-600 text-body3 mt-2 ">
          이제 회원님의 향을 찾아드릴게요.
        </p>

        <div className="mt-6 mb-6 grid grid-cols-3 gap-x-3 gap-y-4">
          {scentOptions.map(({ id, png, description }) => (
            <ScentCard
              key={id}
              id={id}
              png={png}
              description={description}
              selected={selected.includes(id)}
              onClick={() => toggle(id)}
            />
          ))}
        </div>
      </div>

      <div className="mt-auto w-full">
        <BottomButton
          disabled={selected.length !== 3}
          onClick={() => (window.location.href = "/Main")}
        >
          확인
        </BottomButton>
      </div>
    </OnboardingLayout>
  );
}