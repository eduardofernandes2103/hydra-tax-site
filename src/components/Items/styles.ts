import styled from "styled-components";
import { ItemStyleProps } from "./ItemsProps";

export const Container = styled.li<ItemStyleProps>`
  padding: 8px;
  padding-left: 20px;
  cursor: pointer;
  width: 28rem;
  height: 42%;
  background-color: var(--white);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  h3 {
    color: ${(props) =>
    props.isActive ? "var(--strong-blue)" : "var(--medium-blue)"};
    font-weight: ${(props) => (props.isActive ? "bolder" : "500")};
    font-size: 28px;
  }
  p {
    color: ${(props) =>
    props.isActive ? "var(--strong-blue)" : "var(--medium-grey)"};
    font-weight: ${(props) => (props.isActive ? "500" : "300")};
    font-size: 16px;
    width: 90%;
  }
  .emptyProgress {
    width: 90%;
    height: 6px;
    background-color: var(--slate-grey);
    border-radius: 5px;
    .progress {
      width: ${(props) => props.progress}%;
      height: 5px;
      background-color: var(--green);
      border-radius: 5px;
      transition: 0.5s;
    }
  }
`;
