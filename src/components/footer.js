import React from 'react';
import styled from 'styled-components';
import { SiteWidth } from '../Global';

const FooterWrapper = styled.footer`
  max-width: ${SiteWidth};
  margin: 0 auto;
  text-align: center;
`;

function Footer() {
  return (
    <FooterWrapper>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </FooterWrapper>
  );
}

export default Footer;
