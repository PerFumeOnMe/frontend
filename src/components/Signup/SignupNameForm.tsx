import PageHeader from "../common/PageHeader";
import SignupTitle from "./SignupTitle";
import SignupInput from "./SignupInput";
import BottomButton from "../common/BottomButton";
import type { SignupNameFormProps } from "../../types/Login/signupTypes";
import SignupErrorMessage from "./SignupErrorMessage";

export default function SignupNameForm({
  name,
  setName,
  idError,
  setIdError,
  onNext,
  onBack,
}: SignupNameFormProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;

    // 영어 또는 숫자 포함 여부 검사
    if (/[a-zA-Z0-9]/.test(raw)) {
      setIdError("영어와 숫자는 입력할 수 없습니다.");
      return; // 아예 반영하지 않음
    }

    setName(raw);

    if (raw.trim() === "") {
      setIdError("이름을 입력해주세요.");
    } else {
      setIdError("");
    }
  };

  const handleNext = () => {
    if (!name.trim()) {
      setIdError("이름을 입력해주세요.");
      return;
    }

    // 최종 검사: 영어 또는 숫자 포함 여부
    if (/[a-zA-Z0-9]/.test(name)) {
      setIdError("영어와 숫자는 입력할 수 없습니다.");
      return;
    }

    setIdError("");
    onNext();
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <PageHeader title="회원가입" onBack={onBack} />
      <SignupTitle
        title={"안녕하세요!\n퍼퓨온미에 오신 걸 환영해요."}
        subtitle={
          "퍼퓨온미에서 사용할 이름이 필요해요.\n공백 없이 1자 이상 입력해주세요."
        }
      />
      <div className="flex-1">
        <SignupInput
          value={name}
          onChange={handleChange}
          placeholder="이름을 입력해주세요!"
        />
        <SignupErrorMessage message={idError} />
      </div>

      <BottomButton disabled={!name.trim()} onClick={handleNext}>
        다음
      </BottomButton>
    </div>
  );
}