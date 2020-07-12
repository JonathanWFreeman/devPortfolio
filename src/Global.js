import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { Above } from './components/utilities';
import 'victormono';

export const SiteWidth = '80vw';
export const BackgroundColor = '#333333';
export const PrimaryColor = '#03E9F4';
export const SecondaryColor = '#FF0700';
export const AltColor = '#1B5AF7';

const GlobalStyle = createGlobalStyle`
${normalize};

html {
  box-sizing: border-box;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
}

*, *:before, *:after {
  box-sizing: inherit;
}

::-webkit-scrollbar {
    width: 5px;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
}

body{
  font-family: 'Victor Mono', monospace;
  background-color: ${BackgroundColor};
  color: #FFF;
  ${Above.small`
    font-size: 1.3rem;
  `}
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

p {
  line-height: 2rem;
}

h1 {
  font-size: 4rem;
  font-size: min(max(3rem, 10vw), 4rem);
  font-weight: bold;
}

h2 {
  font-size: 3.5rem;
  font-size: min(max(2rem, 10vw), 3rem);
  font-weight: bold;
}

h3 {
  font-size: min(max(1.5rem, 10vw), 2rem);
  font-weight: bold;
}

h4 {
  font-size: min(max(1.2rem, 10vw), 1.5rem);
}

a {
  color: grey;
}

img {
  width: 100%;
}
`;

export default GlobalStyle;
