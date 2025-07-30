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