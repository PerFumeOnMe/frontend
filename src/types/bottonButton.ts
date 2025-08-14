export type ButtonProps = {
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  to?: string;
};