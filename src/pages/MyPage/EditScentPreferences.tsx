import { useEffect, useState } from "react";
import OnboardingLayout from "../../components/Onboarding/OnboardingLayout";
import BottomButton from "../../components/common/BottomButton";
import ScentCard from "../../components/common/ScentCard"; 
import { scentOptions } from "../../types/scentOptions";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineExclamation } from "react-icons/ai";
import GoBackIcon from "../../assets/MyPage/GoBackArrowButton.svg"
import { patchUserNotes } from "../../apis/User";
import { useNavigate } from "react-router-dom";

export default function EditScentPreferences() {
  const [selected, setSelected] = useState<number[]>([]);
  const navigate = useNavigate();
  const toggle = (id: number) => {
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

  const handlePatchButton = async () => {
    try {
      const noteCategoryId = selected
      const ok = await patchUserNotes({ noteCategoryId : noteCategoryId });
      if (ok) {
        toast.success("선호 향이 저장되었습니다.");
        navigate("/mypage");
      } else {
        toast.error("저장에 실패했습니다. 다시 시도해 주세요.");
      
      }
    } catch (e) {
      toast.error("저장 중 오류가 발생했습니다.");
      console.error(e);
    }
  };

  useEffect(() => {
    console.log(selected)
  },[selected])

  return (
    <OnboardingLayout>
      <div className="font-[Pretandard] pb-16">
        <Toaster position="bottom-center" />
  
        <div className="w-full px-4 mx-auto mt-[22px]">
          <div className="flex flex-col items-center relative">
            <div className="flex justify-center items-center">
              <button onClick={() => (window.location.href = "/mypage")} className="hover: cursor-pointer">
                <img src={GoBackIcon} className="absolute top-0 left-0 pl-2" />
              </button>
              <div className="text-title3 text-grayscale-1000 ">
                선호하는 향 수정
              </div>
            </div>
            <div className="text-grayscale-1000 text-title3 mt-3 ">
              선호하는 향을 3가지 선택해 주세요.
            </div>
          </div>
  
          <div className="mt-6 mb-6 grid grid-cols-3 gap-x-3 gap-y-4">
            {scentOptions.map(({ id, name, png, description }) => (
              <ScentCard
                key={id}
                id={name}
                png={png}
                description={description}
                selected={selected.includes(id)}
                onClick={() => toggle(id)}
              />
            ))}
          </div>
        </div>
  
        <div className="pb-3 w-full">
          <BottomButton
            disabled={selected.length !== 3}
            onClick={handlePatchButton}
          >
            수정하기
          </BottomButton>
        </div>
      </div>
    </OnboardingLayout>
  );
}