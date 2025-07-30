import { useState } from "react";
import PageHeader from "../common/PageHeader";
import SignupTitle from "./SignupTitle";
import BottomButton from "../common/BottomButton";
import SignupAgreement from "./SignupAgreement";
import SignupCompleteModal from "./SignupCompleteModal";
import type { SignupAgreementFormProps } from "../../types/Login/signupTypes";
import { postSignup } from "../../apis/User";
import type { RequestSignupDto } from "../../types/apis/User";

export default function SignupAgreementForm({
  name,
  loginId,
  password,
  setIdError, 
  onNext,
  onBack,
}: SignupAgreementFormProps & { setIdError: (msg: string) => void }) {
  const [isAgreed, setIsAgreed] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async () => {
    if (!isAgreed) return;

    const requestBody: RequestSignupDto = { name, loginId, password };

    try {
      const res = await postSignup(requestBody);
      console.log("회원가입 성공:", res);
      setIdError(""); 
      setIsModalOpen(true);
    } catch (err: any) {
      const code = err?.response?.data?.code;
      const result = err?.response?.data?.result;

      if (code === "MEMBER4001") {
        setIdError("중복된 아이디입니다.");
      } else if (code === "COMMON400") {
        setIdError(result?.loginId || "");
      } else {
      console.error("회원가입 예외 오류:", err);
    }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white relative z-0">
      <PageHeader title="회원가입" onBack={onBack} />
      <SignupTitle
        title={"약관에 동의하시면\n퍼퓨온미에 가입할 수 있어요."}
        subtitle={"마지막 단계예요"}
      />
      <div className="flex-1">
        <SignupAgreement
          isAgreed={isAgreed}
          setIsAgreed={setIsAgreed}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
        />
      </div>

      <BottomButton disabled={!isAgreed} onClick={handleSubmit}>
        회원가입하기
      </BottomButton>

      {isModalOpen && <SignupCompleteModal />}
    </div>
  );
}
