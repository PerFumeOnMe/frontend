export type LoginInputProps = {
  type: string;
  icon?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type LoginErrorMessageProps = {
  message: string;
};