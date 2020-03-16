import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';
import 'victormono';

export const SiteWidth = '80vw';
export const BackgroundColor = '#333';
export const PrimaryColor = '#03E9F4';
export const SecondaryColor = '#FF0700';
export const AltColor = '#1B5AF7';

// TODO:
// Add media for device

const size = {
  small: 600,
  med: 960,
  large: 1140,
};

export const Above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const Below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

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
  background-color: ${BackgroundColor};
  color: #FFF;
  font-size: 1.2rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1 {
  font-size: 4rem;
  font-size: min(max(3.5rem, 10vw), 4rem);
  font-weight: bold;
}

h2 {
  font-size: 3.5rem;
  font-size: min(max(3rem, 10vw), 3.5rem);
  font-weight: bold;
}

h3 {
  font-size: 2.5rem;
  font-weight: bold;
}

h4 {
  font-size: 2rem;
}

a {
  color: grey;
}

img {
  width: 100%;
}
`;

export default GlobalStyle;
