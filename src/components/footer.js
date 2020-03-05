import React from 'react';
import styled from 'styled-components';
import { SiteWidth } from '../Global';

const FooterWrapper = styled.footer`
  max-width: ${SiteWidth};
  margin: 25px auto 0;
  text-align: center;
  display: flex;
  justify-content: center;
  padding: 25px 0;
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
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.gatsbyjs.org"
        >
          Gatsby
        </a>
      </p>
      <p>
        Font:{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://rubjo.github.io/victor-mono/"
        >
          Victor Mono
        </a>
      </p>
    </FooterWrapper>
  );
}

export default Footer;
