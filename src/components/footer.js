import React from 'react';
import styled from 'styled-components';
import { SiteWidth } from '../Global';
import { ExLink } from './elements/links';

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
        <ExLink linkTo="https://www.gatsbyjs.org">Gatsby</ExLink>
      </p>
      <p>
        Font:{' '}
        <ExLink linkTo="https://rubjo.github.io/victor-mono/">
          Victor Mono
        </ExLink>
      </p>
    </FooterWrapper>
  );
}

export default Footer;
