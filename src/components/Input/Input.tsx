import { useCallback } from "react";
import { comissionDate, currency } from "./masks";
import { InputProps } from "./InputProps";
import { StyledInput } from "./styles";

const Input = ({
  color,
  error,
  placeholder,
  mask,
  name,
  width,
  register,
}: InputProps) => {
  const handleKeys = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      if (mask === "comissionDate") {
        comissionDate(e);
      }
      if (mask === "currency") {
        currency(e);
      }
    },
    [mask]
  );

  return (
    <StyledInput
      width={width}
      placeholder={placeholder}
      {...register(name)}
      onKeyUp={handleKeys}
      error={error ? true : false}
      color={color ? color : "var(--strong-grey)"}
    />
  );
};

export default Input;
