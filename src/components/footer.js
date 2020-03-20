import React from 'react';
import styled from 'styled-components';
import { Above } from '../Global';
import { ExLink } from './elements/links';

const FooterWrapper = styled.footer`
  ${'' /* max-width: ${SiteWidth}; */}
  ${'' /* margin: 25px auto 0; */}
  ${'' /* text-align: center; */}
  ${'' /* padding: 25px 0; */}
  ${Above.small`
  display: flex;
  justify-content: center;
  `}
  text-align: center;
  grid-area: footer;
  p {
    display: inline-block;
    padding: 0 5px;
  }
`;

const Footer = () => (
  <FooterWrapper>
    <span>
      <p>© {new Date().getFullYear()}, Built with</p>
      <ExLink linkTo="https://www.gatsbyjs.org">Gatsby</ExLink>
    </span>
    <span>
      <p>Font</p>:
      <ExLink linkTo="https://rubjo.github.io/victor-mono/">Victor Mono</ExLink>
    </span>
  </FooterWrapper>
);

export default Footer;
