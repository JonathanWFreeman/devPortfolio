import React from 'react';
import styled from 'styled-components';
import { SiteWidth } from '../Global';

const FooterWrapper = styled.footer`
  max-width: ${SiteWidth};
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: center;
  p {
    margin: 0 10px;
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <p>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </p>
      <p>
        Font: <a href="https://rubjo.github.io/victor-mono/">Victor Mono</a>
      </p>
    </FooterWrapper>
  );
}

export default Footer;
