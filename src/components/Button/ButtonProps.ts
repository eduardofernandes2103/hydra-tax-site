type ButtonType = "button" | "submit" | "reset"

export interface ButtonProps {
  children: any;
  setColor: string;
  setHeight: string;
  setWidth: string;
  setFont: string;
  setBackground: string,
  type?: ButtonType;
  onClick?: () => void
}

export interface ButtonStyleProps {
  setColor: string;
  setHeight: string;
  setWidth: string;
  setBackground: string;
  setFont: string;
}
