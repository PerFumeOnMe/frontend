export type KakaoAgreementSectionProps = {
  isAllChecked: boolean;
  onToggle: () => void;
};

export type KakaoSubmitButtonProps = {
  isEnabled: boolean;
  onClick: () => void;
};

export type TermsItem = {
  id: number;
  label: string;
  hasLink?: boolean;
};

export type KakaoTermsListProps = {
  termsItems: TermsItem[];
  isAllChecked: boolean;
  onToggle: () => void;
};