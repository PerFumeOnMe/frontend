import { useEffect, useState } from "react";
import PageHeader from "../common/PageHeader";
import SignupTitle from "./SignupTitle";
import SignupInput from "./SignupInput";
import SignupErrorMessage from "./SignupErrorMessage";
import BottomButton from "../common/BottomButton";

export default function SignupPasswordForm({ onNext, onBack }: { onNext: () => void; onBack: () => void; }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [errorType, setErrorType] = useState<"format" | "match" | "">("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const formatValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/.test(password);

    if (!password && !confirmPassword) {
      setError("");
      setErrorType("");
      setIsValid(false);
    } else if (!formatValid) {
      setError("글자수를 확인해주세요.");
      setErrorType("format");
      setIsValid(false);
    } else if (password !== confirmPassword) {
      setError("동일하지 않은 비밀번호입니다.");
      setErrorType("match");
      setIsValid(false);
    } else {
      setError("");
      setErrorType("");
      setIsValid(true);
    }
  }, [password, confirmPassword]);

  const handleNext = () => {
    if (isValid) {
      onNext();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <PageHeader title="회원가입" onBack={onBack} />
      <SignupTitle
        title={"퍼퓨온미에서 사용할\n비밀번호를 입력해주세요."}
        subtitle="8-20자로 입력해주세요."
      />
      <div className="flex-1 flex flex-col gap-8">
        <div>
          <SignupInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력해주세요!"
          />
          {errorType === "format" && <SignupErrorMessage message={error} />}
        </div>
        <div>
          <SignupInput
            type="text"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="비밀번호를 다시 한 번 입력해주세요!"
          />
          {errorType === "match" && <SignupErrorMessage message={error} />}
        </div>
      </div>

      <BottomButton disabled={!isValid} onClick={handleNext}>
        다음
      </BottomButton>
    </div>
  );
}