import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { SecondaryColor } from '../../Global';

export const Button = styled.button`
  position: relative;
  text-decoration: none;
  margin: 15px 15px 0 0;
  display: inline-block;
  padding: 10px 30px;
  color: ${({ color }) => color};
  letter-spacing: 1px;
  border: none;
  background: transparent;
  transition: 0.5s;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0003);
  :before {
    transition: 0.5s;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-top: 2px solid ${({ color }) => color};
    border-left: 2px solid ${({ color }) => color};
  }
  :after {
    transition: 0.5s;
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 10px;
    height: 10px;
    border-bottom: 2px solid ${({ color }) => color};
    border-right: 2px solid ${({ color }) => color};
  }
  :hover {
    background: ${({ color }) => color};
    color: #fff;
    box-shadow: 0 0 25px ${({ color }) => color};
    transition-delay: 0.3s;
    :before,
    :after {
      width: 100%;
      height: 100%;
    }
  }
`;

export const ButtonLinkIn = ({ children, linkTo, color }) => (
  <Button as={Link} to={linkTo} color={color}>
    {children}
  </Button>
);

export const ButtonLinkEx = ({ children, linkTo, color }) => (
  <Button
    as="a"
    href={linkTo}
    target="_blank"
    rel="noopener noreferrer"
    color={color}
  >
    {children}
  </Button>
);

ButtonLinkIn.propTypes = {
  children: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  color: PropTypes.object,
};

ButtonLinkIn.defaultProps = {
  color: SecondaryColor,
};

ButtonLinkEx.propTypes = {
  children: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  color: PropTypes.object,
};

ButtonLinkEx.defaultProps = {
  color: SecondaryColor,
};
