export default function SignupErrorMessage({ message }: { message: string }) {
  if (!message) return null;
  return <p className="text-caption1 text-error pt-1">{message}</p>;
}
