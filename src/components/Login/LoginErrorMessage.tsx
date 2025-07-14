type Props = {
  message: string;
};

export default function LoginErrorMessage({ message }: Props) {
  if (!message) return null;
  return <p className="flex items-center text-red-600 text-xs">{message}</p>;
}
