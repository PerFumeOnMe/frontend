export interface SignupInputProps {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SignupErrorMessageProps {
  message: string;
}

export interface SignupTitleProps {
  title: string;
  subtitle?: string;
}

export interface StepNavigationProps {
  onNext: () => void;
  onBack: () => void;
}

export interface SignupAgreementProps {
  isAgreed: boolean;
  setIsAgreed: (val: boolean) => void;
  isDropdownOpen: boolean;
  setIsDropdownOpen: (val: boolean) => void;

}

export interface SignupNameFormProps extends StepNavigationProps {
  name: string;
  setName: (val: string) => void;
  idError: string;
  setIdError: (msg: string) => void;
}

export interface SignupIdFormProps extends StepNavigationProps {
  loginId: string;
  setLoginId: (val: string) => void;
}

export interface SignupPasswordFormProps extends StepNavigationProps {
  password: string;
  setPassword: (val: string) => void;
}

export interface SignupAgreementFormProps extends StepNavigationProps {
  name: string;
  loginId: string;
  password: string;
}