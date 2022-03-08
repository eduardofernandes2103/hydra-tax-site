import styled from "styled-components";
import {ComissionStyleProps} from './ComissionNoteProps'

export const Container = styled.div<ComissionStyleProps>`
  width: 400px;
  height: 100px;
  min-height: 80px;
  margin-bottom: 1rem;
  background-color: var(--slate-grey);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  p {
    color: var(--strong-grey);
  }
  .tax{
    color: var(--red);
  }
  span {
    color: ${props => (props.isNegative ? "var(--red)" : "var(--green)")} ;
  }
`;
