type Props = {
  message: string;
};

export default function LoginErrorMessage({ message }: Props) {
  if (!message) return null;
  return <p className="text-error text-caption1">{message}</p>;
}
