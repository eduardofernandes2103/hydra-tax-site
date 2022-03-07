import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --white:#FFFFFF;
    --sky-blue: #42B1DC;
    --liquid-blue: #00B4DB;
    --medium-blue: #0083B0;
    --strong-blue: #003366;
    --lime: #33cc33;
    --green: #009900;
    --email-error: #FFADAD;
    --red: #F20505;
    --slate-grey: #C4C4C4;
    --medium-grey: #6F6F6F;
    --strong-grey: #646464
  }
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: none;
  }
  body {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }
  body, input, button, h1, h3, h4, h5, h6, p, textarea, select{
      font-family: 'Roboto', sans-serif;
  }
  button {
      cursor: pointer;
  }
  a {
      text-decoration: none;
  }
`;

export default GlobalStyle;
