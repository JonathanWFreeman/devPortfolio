import styled from 'styled-components';
import { Link } from 'gatsby';

import { SecondaryColor } from '../../Global';

export const ButtonLink = styled(Link)`
  position: relative;
  text-decoration: none;
  margin: 15px 15px 0 0;
  display: inline-block;
  padding: 10px 30px;
  color: ${SecondaryColor};
  letter-spacing: 1px;
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
    border-top: 2px solid ${SecondaryColor};
    border-left: 2px solid ${SecondaryColor};
  }
  :after {
    transition: 0.5s;
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 10px;
    height: 10px;
    border-bottom: 2px solid ${SecondaryColor};
    border-right: 2px solid ${SecondaryColor};
  }
  :hover {
    background: ${SecondaryColor};
    color: #fff;
    box-shadow: 0 0 25px ${SecondaryColor};
    transition-delay: 0.3s;
    :before,
    :after {
      width: 100%;
      height: 100%;
    }
  }
`;
