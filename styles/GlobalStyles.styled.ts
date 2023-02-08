import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'arial';
    src: url('/fonts/Kallisto-Thin.otf');
  }
    @font-face {
    font-family: ${(props) => props.theme.fonts.primary};
    src: url('/fonts/Abel-Regular.ttf');
    }
  html,
  body {    
    padding: 0;
    margin: 0;
    background-color: ${(props) => props.theme.backgrounds.primary};
    color: ${(props) => props.theme.colors.primary};
  }

`;

export default GlobalStyle;
