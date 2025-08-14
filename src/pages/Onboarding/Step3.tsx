import { useState } from "react";
import OnboardingLayout from "../../components/Onboarding/OnboardingLayout";
import BottomButton from "../../components/common/BottomButton";
import OnboardingProgress from "../../components/Onboarding/OnboardingProgress";
import ScentCard from "../../components/common/ScentCard";
import { scentOptions } from "../../types/scentOptions";
import PageHeader from "../../components/common/PageHeader";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineExclamation } from "react-icons/ai";
import { postOnboarding } from "../../apis/onboarding";

const GENDER_MAP = { 여성: "FEMALE", 남성: "MALE", 상관없음: "NONE" } as const;
const AGE_MAP = {
  "10대": "TEENAGER",
  "20대": "TWENTIES",
  "30대": "THIRTIES",
  "40대": "FORTIES",
  상관없음: "NONE",
} as const;

export default function OnboardingStep3({
  onPrev,
  nickname,
  imageURL,
  genderKo,
  ageKo,
}: {
  onPrev: () => void;
  nickname: string;
  imageURL: string | null;
  genderKo: "여성" | "남성" | "상관없음";
  ageKo: "10대" | "20대" | "30대" | "40대" | "상관없음";
}) {
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
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } mx-auto w-full max-w-[448px] bg-grayscale-1000-f2 text-white rounded-2xl py-4 px-5 flex items-center`}
          >
            <div className="flex items-center justify-center gap-3 w-full">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white flex items-center justify-center">
                <AiOutlineExclamation className="w-4 h-4 text-grayscale-1000-f2" />
              </div>
              <span className="text-center text-body3">선호하는 향은 3개까지만 설정이 가능합니다.</span>
            </div>
          </div>
        </div>
      ));
    }
  };

const handleSubmit = async () => {
  const noteIds = selected
    .map((id) => scentOptions.find((opt) => opt.id === id)?.noteCategoryId)
    .filter((n): n is number => typeof n === "number");

  if (noteIds.length !== 3) {
    const unknown = selected.filter(
      (id) => scentOptions.find((opt) => opt.id === id)?.noteCategoryId === undefined
    );
    alert(`다음 노트 ID가 누락되었습니다: ${unknown.join(", ")}. 매핑 등록 후 다시 시도해주세요.`);
    return;
  }

    const body = {
      nickname,
      imageURL, // 업로드 미연동이면 null/빈문자열 가능
      gender: GENDER_MAP[genderKo],
      age: AGE_MAP[ageKo],
      noteCategoryId: noteIds,
    } as const;

    try {
      const data = await postOnboarding(body); 
      if (data?.isSuccess) {
        alert("온보딩 저장 완료!");
        window.location.href = "/Main";
      } else {
        toast.error(`${data?.code} - ${data?.message}`);
      }
    } catch (e: any) {
      toast.error("요청 중 오류가 발생했습니다.");
      if (e?.response?.data) {
        console.group("Error Response");
        console.log(JSON.stringify(e.response.data, null, 2));
        console.groupEnd();
      }
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
        <p className="text-grayscale-600 text-body3 mt-2 ">이제 회원님의 향을 찾아드릴게요.</p>

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
        <BottomButton disabled={selected.length !== 3} onClick={handleSubmit}>
          확인
        </BottomButton>
      </div>
    </OnboardingLayout>
  );
}
