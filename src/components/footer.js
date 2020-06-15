import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Above, Transition } from './utilities';
import { ExLink } from './elements';

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
  width: 100vw;
  span {
    white-space: nowrap;
  }
  p {
    display: inline-block;
    padding: 0 5px;
    margin: 5px 0;
  }
`;

const Footer = ({ transitionType, transitionDirection }) => (
  <FooterWrapper>
    <Transition
      transitionType={transitionType}
      transitionDirection={transitionDirection}
    >
      <span>
        {'{'}
        <p>© {new Date().getFullYear()}, Built with</p>
        <ExLink linkTo="https://www.gatsbyjs.org">Gatsby</ExLink>
        {'}'}
      </span>
      {'\n'}
      <span>
        {'{'}
        <p>Font</p>:
        <ExLink linkTo="https://rubjo.github.io/victor-mono/">
          Victor Mono
        </ExLink>
        {'}'}
      </span>
    </Transition>
  </FooterWrapper>
);

Footer.propTypes = {
  transitionType: PropTypes.string,
  transitionDirection: PropTypes.string,
};

export default Footer;
