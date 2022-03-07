import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80px;
  color: var(--white);
  background-color: var(--strong-blue);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 36px;
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
