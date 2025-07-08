export default function SignupErrorMessage({ message }: { message: string }) {
  if (!message) return null;
  return <p className="text-xs text-red-500 px-6 pt-1">{message}</p>;
}
