import styled from 'styled-components'
import back from '../../assets/backWTC.png'

export const Container = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${back});
  background-size: cover;
  background-repeat: no-repeat;

  .transparentBox{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: var(--transparent-black);

    .leftSide{
      height: 80%;
      width: 35rem;
      background-color: var(--transparente-div);
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      h2{
        margin-top: 1rem;
        color: var(--sky-blue);
        font-size: 78px;
      }
      ul{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 70%;
        list-style: none;
      }
    }

    .rightSide{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      margin-bottom: 6rem;
      max-width: 435px;
      height: 80%;
      .title{
        color: var(--strong-blue);
        font-size: 64px;
        font-weight: bolder;
        .hydra{
          color: var(--white);
          text-align: center;
          margin-right: 10rem;
          margin-top: 2rem;
        }
        }
        .slogan{
          margin-left: 5rem;
          text-align: center;
        }
      }
      .subtitle{
        color: var(--strong-blue);
        font-size: 26px;
        font-weight: bolder;
        text-align: center;
        margin-bottom: 6rem;
      }
    }
  }

  @media (max-width: 500px){

  }
`
