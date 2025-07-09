import { useState } from "react";
import OnboardingLayout from "../../components/Onboarding/OnboardingLayout";
import TopBackButton from "../../components/Onboarding/TopBackButton";
import BottomButton from "../../components/Onboarding/BottomButton";
import OnboardingProgress from "../../components/Onboarding/OnboardingProgress";

const scentOptions = [
  {
    description: "레몬, 오렌지, 감귤류의 상쾌하고 경쾌한 향",
    svg: "/src/assets/Onboarding/citrus.svg",
  },
  {
    description: "막 세탁한 옷이나 깨끗한 살냄새 같은 부드러운 향",
    svg: "/src/assets/Onboarding/musk.svg",
  },
  {
    description: "쌉쌀하면서도 상큼한  감귤류향, 향수의 첫인상 역할",
    svg: "/src/assets/Onboarding/bergamot.svg",
  },
  {
    description: "깊은 숲속 나무 냄새처럼 따뜻하고 묵직한 향",
    svg: "/src/assets/Onboarding/cedarwood.svg",
  },
  {
    description: "살짝 매콤하면서도 은은한 꽃 향이 느껴지는 향",
    svg: "/src/assets/Onboarding/pink_pepper.svg",
  },
  {
    description: "장미꽃을 코앞에서 맡는 듯한 부드럽고 로맨틱한 향",
    svg: "/src/assets/Onboarding/rose.svg",
  },
  {
    description: "젖은 흙이나 이끼처럼 자연스럽고 진한 냄새",
    svg: "/src/assets/Onboarding/patchouli.svg",
  },
  {
    description: "햇빛에 말린 흰 셔츠처럼 깨끗하고 포근한 향",
    svg: "/src/assets/Onboarding/white_musk.svg",
  },
  {
    description: "풀숲이나 뿌리에서 나는 시원하고 거친 냄새",
    svg: "/src/assets/Onboarding/vetiver.svg",
  },
  {
    description: "달달한 과자나 디저트처럼 부드럽고 따뜻한 향",
    svg: "/src/assets/Onboarding/vanilla.svg",
  },
  {
    description: "우유처럼 부드럽고 잔잔한 나무 냄새",
    svg: "/src/assets/Onboarding/sandalwood.svg",
  },
  {
    description: "촛불이나 따뜻한 방안처럼 포근하고 달콤한 냄새",
    svg: "/src/assets/Onboarding/amber.svg",
  },
  {
    description: "밤에 피는 꽃에도 퍼지는 진하고 달콤한 꽃 향기",
    svg: "/src/assets/Onboarding/citrus2.svg",
  },
  {
    description: "톡 쏘는 과즙처럼 시원하고 살짝 쌉쌀한 과일 향",
    svg: "/src/assets/Onboarding/grapefruit.svg",
  },
  {
    description: "가루를 바른 듯한 고운 꽃냄새, 깔끔하고 차분한 느낌",
    svg: "/src/assets/Onboarding/iris.svg",
  },
];



export default function OnboardingStep3({ onPrev }: { onPrev: () => void }) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (svg: string) => {
    if (selected.includes(svg)) {
      setSelected(selected.filter((s) => s !== svg));
    } else if (selected.length < 3) {
      setSelected([...selected, svg]);
    }
  };

  return (
    <OnboardingLayout>
      <div className="w-full ml-[11px] mx-auto pt-[26px]">
        <div className="relative h-[24px]">
          <TopBackButton onClick={onPrev} />
          <div className="absolute inset-0 flex justify-center items-center">
            <OnboardingProgress current={3} />
          </div>
        </div>
      </div>

      <div className="mt-16 px-4 mx-auto">
        <h2 className="text-lg font-semibold">
          선호하는 향을<br />3가지 선택해 주세요.
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          이제 회원님의 향을 찾아드릴게요.
        </p>

        <div className="mt-6 grid grid-cols-3 gap-4">
          {scentOptions.map(({ svg, description}) => (
            <button
              key={svg}
              onClick={() => toggle(svg)}
              className={`w-[112px] h-[124px] rounded-xl overflow-hidden border text-center ${
                selected.includes(svg)
                  ? "border-main-500"
                  : "border-gray-300"
              }`}
            >
              <div className="relative w-full h-[80px]">
                <img
                  src={svg}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white px-1 pt-[2px] h-[44px] flex items-center justify-center text-[11px] text-grayscale-600 leading-[14px]">
                <p className="line-clamp-2">{description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="w-full px-4 mt-6 mb-[24px]">
        <BottomButton
          text="확인"
          onClick={() => window.location.href = "/"}
          disabled={selected.length !== 3}
        />
      </div>
    </OnboardingLayout>
  );
}
