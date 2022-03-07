import { StyledInput } from './styles'
import { InputProps } from './InputProps'


const Input = ({placeholder, name, register} : InputProps) => {
  return(
    <StyledInput placeholder={placeholder} {...register(name)}/>
  )
}

export default Input
