export interface ItemsProps {
  key: number;
  title: string;
  subtitle: string;
  progress?: number;
  isActive?: boolean;
  onClick: () => void;
}

export interface ItemStyleProps {
  isActive?: boolean | null;
  progress?: number;
}
