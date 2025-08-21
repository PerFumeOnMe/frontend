import BottomButton from "../common/BottomButton";

export default function OnboardingCompleteModal() {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-[#1C1C1EBF] backdrop-blur-none">
      <div className="w-full max-w-120 min-w-[375px] mx-auto bg-white rounded-t-xl pt-6">
        <p className="text-center text-title2 mb-8">온보딩이 저장되었습니다.</p>
        <BottomButton to="/">퍼퓨온미 시작하기</BottomButton>
      </div>
    </div>
  );
}