import { useState } from "react";
import PageHeader from "../common/PageHeader";
import SignupTitle from "./SignupTitle";
import SignupInput from "./SignupInput";
import BottomButton from "../common/BottomButton";
import type { StepNavigationProps } from "../../types/Login/signupTypes";

export default function SignupNameForm({ onNext, onBack }:StepNavigationProps) {
  const [name, setName] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <PageHeader title="회원가입" onBack={onBack} />
      <SignupTitle
        title={"안녕하세요!\n퍼퓨온미에 오신 걸 환영해요."}
        subtitle="로그인에 사용할 이름이 필요해요."
      />
      <div className="flex-1">
        <SignupInput
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름을 입력해주세요!"
        />
      </div>
      
      <BottomButton disabled={!name} onClick={onNext}>
        다음
      </BottomButton>
    </div>
  );
}