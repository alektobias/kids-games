import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html,body { 
    padding-top: 48px;
    min-height: 100vh;
    background-color: #282a36;
    font-family: sans-serif;
  }
  a { 
    text-decoration: none;
  }
  ul { list-style: none;}
  img, p { pointer-events: none;}
`;
