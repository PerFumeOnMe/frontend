import { useState } from "react";
import SignupHeader from "./SignupHeader";
import SignupTitle from "./SignupTitle";
import SignupInput from "./SignupInput";
import SignupErrorMessage from "./SignupErrorMessage";
import SignupButton from "./SignupButton";


export default function SignupIdForm({ onNext }: { onNext: () => void }) {
  const [inputId, setInputId] = useState("");
  const [error, setError] = useState("");
  // 중복된 아이디 목록
  const takenIds = ["umcuser", "perfume01", "test_id"]; 

 const validate = () => {
    const formatValid = /^[a-z_]{5,16}$/.test(inputId);
    if (!formatValid) {
      setError("올바른 아이디를 입력해주세요.");
      return false;
    }

    if (takenIds.includes(inputId)) {
      setError("중복된 아이디입니다.");
      return false;
    }

    setError("");
    return true;
  };

  const handleNext = () => {
    if (validate()) {
     onNext();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SignupHeader />
       <div className="w-full max-w-[432px] mx-auto mt-8">
      <SignupTitle
        title={"퍼퓨온미에서 사용할\n아이디가 필요해요."}
        subtitle="영어랑 소문자로만 작성해 주세요."
      />
      <div className="flex-1">
        <SignupInput
          value={inputId}
          onChange={(e) => setInputId(e.target.value)}
          placeholder="아이디를 입력해주세요!"
        />
        <SignupErrorMessage message={error} />
        </div>
      <div className="absolute bottom-1">
      <SignupButton disabled={!inputId} onClick={handleNext}>
        다음
      </SignupButton>
      </div>
    </div>
    </div>
  );
}
