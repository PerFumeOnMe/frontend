import { useState } from "react";
import SignupHeader from "./SignupHeader";
import SignupTitle from "./SignupTitle";
import SignupInput from "./SignupInput";
import SignupErrorMessage from "./SignupErrorMessage";
import SignupButton from "./SignupButton";

export default function SignupPasswordForm({ onNext }: { onNext: () => void }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [errorType, setErrorType] = useState<"format" | "match" | "">("");

const validate = () => {
  const formatValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/.test(password);

  if (!formatValid) {
    setError("글자수를 확인해주세요.");
    setErrorType("format");
    return false;
  }

  if (password !== confirmPassword) {
    setError("동일하지 않은 비밀번호입니다.");
    setErrorType("match");
    return false;
  }

  setError("");
  setErrorType("");
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
      <SignupTitle
        title={"퍼퓨온미에서 사용할\n비밀번호를 입력해주세요."}
        subtitle="8-20자로 입력해주세요."
      />
      <div className="flex-1">
      <SignupInput
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="비밀번호를 입력해주세요!"
      />
      {errorType === "format" && <SignupErrorMessage message={error} />}

      <SignupInput
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="비밀번호를 다시 한 번 입력해주세요!"
      />
      {errorType === "match" && <SignupErrorMessage message={error} />}
      </div>
      <SignupButton disabled={!password} onClick={handleNext}>
        다음
      </SignupButton>
    </div>
  );
}