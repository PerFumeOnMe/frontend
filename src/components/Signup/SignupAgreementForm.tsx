import { useState } from "react";
import PageHeader from "../common/PageHeader";
import SignupTitle from "./SignupTitle";
import SignupButton from "./SignupButton";
import SignupAgreement from "./SignupAgreement";
import SignupCompleteModal from "./SignupCompleteModal";

export default function SignupAgreementForm({  onNext, onBack  }: { onNext: () => void ; onBack: () => void }) {
  const [isAgreed, setIsAgreed] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = () => {
    if (isAgreed) {
      setIsModalOpen(true);
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

      <SignupButton disabled={!isAgreed} onClick={handleSubmit}>
        회원가입하기
      </SignupButton>
      
        {isModalOpen && <SignupCompleteModal />}
    </div>

  );
}
