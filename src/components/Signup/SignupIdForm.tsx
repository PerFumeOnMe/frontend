import { useEffect, useState } from "react";
import PageHeader from "../common/PageHeader";
import SignupTitle from "./SignupTitle";
import SignupInput from "./SignupInput";
import SignupErrorMessage from "./SignupErrorMessage";
import BottomButton from "../common/BottomButton";
import type { SignupIdFormProps } from "../../types/Login/signupTypes";

interface ExtendedSignupIdFormProps extends SignupIdFormProps {
  idError: string;
  setIdError: (msg: string) => void;
}

export default function SignupIdForm({
  loginId,
  setLoginId,
  idError,
  setIdError,
  onNext,
  onBack,
}: ExtendedSignupIdFormProps) {
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const formatValid = /^[a-z0-9_]{1,16}$/.test(loginId);

    if (loginId === "") {
      setError("");
      setIsValid(false);
    } else if (!formatValid) {
      setError("올바른 아이디를 입력해주세요.");
      setIsValid(false);
    } else {
      setError("");
      setIsValid(true);
    }
  }, [loginId]);

  //서버에서 온 중복 에러가 있으면 버튼 비활성화
  useEffect(() => {
    if (idError) setIsValid(false);
  }, [idError]);

  const handleNext = () => {
    if (isValid && !idError) {
      onNext();
    }
  };

  const composedError = error || idError;
  const isButtonDisabled = !isValid || !!composedError;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <PageHeader title="회원가입" onBack={onBack} />
      <SignupTitle
        title={"퍼퓨온미에서 사용할\n아이디가 필요해요."}
        subtitle="영어(소문자), 숫자로 17글자 이내로 작성해주세요."
      />
      <div className="flex-1">
        <SignupInput
          value={loginId}
          onChange={(e) => {
            setLoginId(e.target.value);
            setIdError(""); //입력 바꾸면 서버 에러 초기화
          }}
          placeholder="아이디를 입력해주세요!"
        />
        <SignupErrorMessage message={composedError} />
      </div>

      <BottomButton disabled={isButtonDisabled} onClick={handleNext}>
        다음
      </BottomButton>
    </div>
  );
}
