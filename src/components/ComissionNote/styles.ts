import styled from "styled-components";

export const Container = styled.div`
  width: 500px;
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
  span {
    color: var(--green);
  }
`;
