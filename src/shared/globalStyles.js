import { createGlobalStyle } from 'styled-components/macro';
 
export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
    color: white;
    background-color: ${props => props.theme.colors.background1};
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;