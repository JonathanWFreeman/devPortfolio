/* eslint-disable react/jsx-props-no-spreading */
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { SiteWidth, BackgroundColor, PrimaryColor } from '../Global';

const HeaderWrapper = styled.div`
  background: ${BackgroundColor};
  padding: 1.5vh 0;
  position: fixed;
  width: 100%;
  z-index: 100;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: ${SiteWidth};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLogo = styled.div`
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
  a {
    font-style: normal;
    text-decoration: none;
  }
  span {
    :nth-child(odd) {
      color: ${PrimaryColor};
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
    color: ${PrimaryColor};
    text-decoration: none;
    flex: 1;
    :not(:first-child) {
      margin-left: 30px;
    }
  }
  .active {
    color: red;
  }
`;

const StyledLink = styled(props => <Link {...props} />)`
  border: none;
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <HeaderLogo>
        <Link to="/">
          {/* {siteTitle} */}
          <span>&lt;J</span>
          <span>onathan</span>
          <span>F</span>
          <span>reeman</span>
          <span>/&gt;</span>
        </Link>
      </HeaderLogo>
      <Nav>
        <Link activeClassName="active" partiallyActive to="/projects">
          Projects
        </Link>
        <Link activeClassName="active" to="/contact">
          Contact
        </Link>
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
