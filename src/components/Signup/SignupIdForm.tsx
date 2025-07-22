import { useEffect, useState } from "react";
import PageHeader from "../common/PageHeader";
import SignupTitle from "./SignupTitle";
import SignupInput from "./SignupInput";
import SignupErrorMessage from "./SignupErrorMessage";
import SignupButton from "./SignupButton";

export default function SignupIdForm({ onNext, onBack  }: { onNext: () => void ; onBack: () => void }) {
  const [inputId, setInputId] = useState("");
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);

  const takenIds = ["umcuser", "perfume01", "testid"];

  useEffect(() => {
    const formatValid = /^[a-z_]{5,16}$/.test(inputId);

    if (inputId === "") {
      setError("");
      setIsValid(false);
    } else if (!formatValid) {
      setError("올바른 아이디를 입력해주세요.");
      setIsValid(false);
    } else if (takenIds.includes(inputId)) {
      setError("중복된 아이디입니다.");
      setIsValid(false);
    } else {
      setError("");
      setIsValid(true);
    }
  }, [inputId]);

  const handleNext = () => {
    if (isValid) {
      onNext();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <PageHeader title="회원가입" onBack={onBack} />
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

      <SignupButton disabled={!isValid} onClick={handleNext}>
        다음
      </SignupButton>
    </div>
  );
}
