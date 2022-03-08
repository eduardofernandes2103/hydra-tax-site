export interface InputProps {
  error?: boolean;
  color?: string
  name: string;
  mask: "comissionDate" | "currency";
  placeholder: string;
  width: string;
  register: (name: string) => void;
}

export interface InputStyleProps {
  error?: boolean;
  width: string;
}
