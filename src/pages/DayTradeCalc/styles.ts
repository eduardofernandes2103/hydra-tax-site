import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  .buttonPlace {
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-right: 4rem;
  }
  .componentMain {
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 2rem;
    h2{
          color: var(--strong-blue);
          font-size: 36px;
        }
    .leftSide{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 30rem;
      .conditionalButtons{
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        margin-top: 2rem;
        margin-bottom: 2rem;
      }
      form {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        p{
          text-align: left;
          color: var(--strong-blue);
          margin: 1rem 0 0.2rem 1rem;
        }
        button{
          margin-top: 1rem;
        }
      }
    }
    .rightSide{
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: 50%;
      text-align: center;
      .notesDisplay{
        margin-top: 2rem;
        height: 30rem;
        overflow: scroll;
      }
      .notesDisplay::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;
