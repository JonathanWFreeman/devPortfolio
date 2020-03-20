import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { PrimaryColor } from '../../Global';

const animateLink = keyframes`
  0% {
    left: -100%;
  }
  50%,100% {
    left: 100%;
  }
`;

const ALink = styled.a`
  display: inline-flex;
  text-decoration: none;
  color: ${PrimaryColor};
  padding-bottom: 2px;
  position: relative;
  overflow: hidden;
  margin: 0 5px;
  p {
    margin: 0;
  }
  &:hover {
    font-style: italic;
  }
`;

const LinkAnimation = styled.span`
  display: block;
  position: absolute;
  bottom: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, ${PrimaryColor});
  animation: ${animateLink} 1.5s linear infinite;
`;

export const ExLink = ({ children, linkTo }) => (
  <ALink
    href={linkTo}
    target="_blank"
    rel="noopener noreferrer"
    className="link"
  >
    {children}
    <LinkAnimation />
  </ALink>
);

ExLink.propTypes = {
  children: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
};
