import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { SiteWidth } from '../Global';

const HeaderWrapper = styled.div`
  background: rebeccapurple;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  width: ${SiteWidth};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderH1 = styled.h1`
  margin: 0;
  a {
    font-style: normal;
    text-decoration: none;
  }
  span {
    :nth-child(odd) {
      color: orange;
    }
    color: #fff;
    display: inline-flex;
    :nth-child(even) {
      font-weight: normal;
      overflow: hidden;
      transition: ease-in-out 0.5s;
      letter-spacing: -1em;
    }
  }
  &:hover span:nth-child(even) {
    letter-spacing: 0;
  }
  &:hover span:nth-child(4) {
    transition-delay: 0.3s;
  }
`;

const Nav = styled.nav`
  display: flex;
  a {
    margin-left: 10px;
    text-decoration: none;
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <HeaderH1 style={{}}>
        <Link to="/">
          {/* {siteTitle} */}
          <span>J</span>
          <span>onathan</span>
          <span>F</span>
          <span>reeman</span>
        </Link>
      </HeaderH1>
      <Nav>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </Nav>
    </HeaderContainer>
  </HeaderWrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
