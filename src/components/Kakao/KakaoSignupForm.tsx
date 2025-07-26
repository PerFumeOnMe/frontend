import { useState } from "react";
import KakaoHeader from "./KakaoHeader";
import KakaoAgreementSection from "./KakaoAgreementSection";
import KakaoEmailNotice from "./KakaoEmailNotice";
import KakaoTermsList from "./KakaoTermsList";
import KakaoSubmitButton from "./KakaoSubmitButton";

export default function KakaoSignupForm() {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);

  const handleAllCheck = () => {
    setIsAllChecked((prev) => !prev);
  };

  const termsItems = [
    {
      id: 1,
      label: "[필수] 카카오 개인정보 제3자 제공 동의",
      hasLink: true,
    },
    { id: 2, label: "닉네임" },
    { id: 3, label: "계정" },
    { id: 4, label: "전화번호" },
    { id: 5, label: "별명" },
  ];


  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex justify-center w-120 min-w-[375px] mx-auto min-h-screen bg-white">
        <div className="h-screen w-120 min-w-[375px] flex items-center justify-center bg-[#00000066]">
          <div className="bg-white rounded-[20px] w-[calc(100%-20%)] mx-[10%] flex flex-col ">
            <div className="px-5.5">
              <KakaoHeader />
            </div>
            <form className="flex flex-col items-center pt-0.5 w-full">
              <div className="w-full px-5.5">
                <KakaoAgreementSection isAllChecked={isAllChecked} onToggle={handleAllCheck} />
                <KakaoEmailNotice />
                <KakaoTermsList termsItems={termsItems} isAllChecked={isAllChecked} />
              </div>

              <KakaoSubmitButton
                isEnabled={isAllChecked}
                onClick={() => setIsModalActive(true)}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
