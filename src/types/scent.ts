export type Scent = {
  id: string;
  description: string;
  svg: string;
};

export type ScentCardProps = {
  id: string;
  svg: string;
  description: string;
  selected: boolean;
  onClick: () => void;
};