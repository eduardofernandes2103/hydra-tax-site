import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100px;
  color: var(--slate-grey);
  background-color: var(--strong-blue);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 32px;
  padding: 0 2rem;
  margin-bottom: 2rem;
  .headerLogo {
    display: flex;
    flex-direction: row;
    align-items: center;
    svg {
      font-size: 64px;
    }
  }
`;
