import StyledButton from "./styles";
import { ButtonProps } from "./ButtonProps";

const Button = ({
  children,
  setColor,
  setHeight,
  setFont,
  setWidth,
  setBackground,
  type,
  onClick,
}: ButtonProps) => {
  return (
    <StyledButton
      setBackground={setBackground}
      setHeight={setHeight}
      setWidth={setWidth}
      setColor={setColor}
      setFont={setFont}
      type={type}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};
export default Button;
