import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import 'victormono';

export const SiteWidth = '90vw';
export const PrimaryColor = '#333';

const GlobalStyle = createGlobalStyle`
${normalize};

html {
  box-sizing: border-box;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body{
  font-family: 'Victor Mono', monospace;
  background-color: ${PrimaryColor};
  color: #FFF;
  font-size: 1.2rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1 {
  font-size: 4rem;
  font-weight: bold;
}

h2 {
  font-size: 3.5rem;
  font-weight: bold;
}

h3 {
  font-size: 2rem;
  font-weight: bold;
}

h4 {
  font-size: 2.5rem;
}

a {
  color: #FFF;
  &:hover{
    font-style: italic;
  }
}
`;

export default GlobalStyle;
