import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import SignupHeader from "./SignupHeader";
import SignupField from "./SignupField";
import SignupAgreement from "./SignupAgreement";
import SignupSubmitButton from "./SignupSubmitButton";
import SignupModal from "./SignupModal";

export default function SignupForm() {
  const [inputName, setInputName] = useState("");
  const [inputId, setInputId] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputConfirmPassword, setInputConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isFormValid =
    inputName.trim() !== "" &&
    inputId.trim() !== "" &&
    inputPassword.trim() !== "" &&
    inputPassword === inputConfirmPassword &&
    isAgreed;

  const handleSignupSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputPassword !== inputConfirmPassword) {
      setErrorMessage("비밀번호가 일치하지 않습니다.");
    } else {
      setErrorMessage("");
    }
  };

  return (
    <main className="w-screan h-screan flex items-center justify-center">
      <section className="w-[480px] min-w-[480px] min-h-screen bg-white flex flex-col justify-between">
        <SignupHeader />

        <form onSubmit={handleSignupSubmit} className="flex flex-col gap-[11px] mt-[56px] w-full max-w-[372px] mx-auto">
          <SignupField label="이름" placeholder="홍길동" value={inputName} onChange={setInputName} />
          <SignupField label="아이디" placeholder="UMC123" value={inputId} onChange={setInputId} />
          <SignupField label="비밀번호" type="password" placeholder="비밀번호" value={inputPassword} onChange={setInputPassword} />
          <SignupField label="비밀번호 확인" type="password" placeholder="비밀번호" value={inputConfirmPassword} onChange={setInputConfirmPassword} />
          {errorMessage && <div className="flex items-center text-red-600 text-xs">{errorMessage}</div>}
          <SignupAgreement
            isAgreed={isAgreed}
            setIsAgreed={setIsAgreed}
            isDropdownOpen={isDropdownOpen}
            setIsDropdownOpen={setIsDropdownOpen}
          />
        </form>

        <footer className="mt-auto pt-10">
          <SignupSubmitButton disabled={!isFormValid} onClick={() => setIsModalOpen(true)} />
        </footer>

        {isModalOpen && <SignupModal />}
      </section>
    </main>
  );
}  
