import { useRef } from "react";
import OnboardingLayout from "../../components/Onboarding/OnboardingLayout";
import BottomButton from "../../components/common/BottomButton";
import OnboardingProgress from "../../components/Onboarding/OnboardingProgress";
import PageHeader from "../../components/common/PageHeader";
import { FiPlus } from "react-icons/fi";

export default function OnboardingStep1({
  onNext,
  nickname,
  setNickname,
  imageURL,
  setImageURL,
}: {
  onNext: () => void;
  nickname: string;
  setNickname: (v: string) => void;
  imageURL: string | null;
  setImageURL: (v: string | null) => void;
}) {
  const fileRef = useRef<HTMLInputElement | null>(null);

  const handlePick = () => fileRef.current?.click();
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    // 업로드 미연동
    const url = URL.createObjectURL(f);
    setImageURL(url);
  };

  return (
    <OnboardingLayout>
      <PageHeader centerSlot={<OnboardingProgress current={1} />} />

      <div className="w-full px-4 mx-auto mt-5.5">
        <h2 className="text-title2 text-grayscale-1000 ">반가워요 회원님 :)</h2>
        <p className="text-grayscale-600 text-body3 mb-8">
          퍼퓨온미에서 사용하실 닉네임과<br />사진을 정해주세요.
        </p>

        <div className="flex items-center gap-4 mb-10">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-grayscale-300 overflow-hidden">
              {imageURL && <img src={imageURL} alt="profile" className="w-full h-full object-cover" />}
            </div>
            <button
              type="button"
              onClick={handlePick}
              className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-main-500 text-white text-sm flex items-center justify-center"
            >
              <FiPlus className="w-4 h-4" />
            </button>
            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />
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

      <div className="mt-auto w-full">
        <BottomButton disabled={!nickname.trim()} onClick={onNext}>
          다음
        </BottomButton>
      </div>
    </OnboardingLayout>
  );
}
