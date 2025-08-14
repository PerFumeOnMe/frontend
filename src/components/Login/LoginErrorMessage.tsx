import type { LoginErrorMessageProps } from "../../types/Login/loginTypes";

export default function LoginErrorMessage({ message }: LoginErrorMessageProps) {
  if (!message) return null;
  return <p className="text-error text-caption1">{message}</p>;
}
