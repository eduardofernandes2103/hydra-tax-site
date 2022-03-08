import styled from 'styled-components'
import { InputStyleProps } from './InputProps'

export const StyledInput = styled.input<InputStyleProps>`
  width: ${(props) => props.width};
  min-width: 300px;
  height: 50px;
  color:  ${(props) => props.color};
  background-color: var(--slate-grey);
  padding: 16px;
  font-size: 18px;
  border-radius: 5px;
  border: none;
  border-bottom: 3px solid ${(props) => (props.error ? "var(--red)" : "var(--sky-blue)")}
`
