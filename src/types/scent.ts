export type Scent = {
  id: string;
  description: string;
  png: string;
};

export type ScentCardProps = {
  id: string;
  png: string;
  description: string;
  selected: boolean;
  onClick: () => void;
};