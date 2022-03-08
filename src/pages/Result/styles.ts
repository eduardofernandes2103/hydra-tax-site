import styled from 'styled-components';
import { ResultStyleProps } from './ResultTypes';

export const Container = styled.div<ResultStyleProps>`
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  .resultDisplay{
    width: 45rem;
    height: 30rem;
    background-color: var(--slate-grey);
    border-radius: 20px;
    h2{
      color: var(--strong-blue);
      font-size: 36px;
    }
    .report{
      h3{
        color: var(--strong-grey);
        font-size: 28px;
      }
      span{
        color: ${props => (props.isNegative ? 'var(--red)' : 'var(--lime)')};
      }
    }
  }
`;
