/* eslint-disable react/jsx-props-no-spreading */
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useScrollEvent, FadeLinkTransition } from './utilities';
import {
  SiteWidth,
  BackgroundColor,
  PrimaryColor,
  SecondaryColor,
} from '../Global';

const HeaderWrapper = styled.header`
  background: ${({ location }) =>
    location.includes('project')
      ? ({ maths }) => maths >= 1 && BackgroundColor
      : BackgroundColor};
  padding: 1.5vh 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  grid-area: header;
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
    color: ${SecondaryColor};
  }
`;

const StyledLink = styled(props => <Link {...props} />)`
  border: none;
`;

const useGetPath = location => {
  const [locationPath, setLocationPath] = useState('');
  const regex = /^(\/[^\\/]+)/gm;
  const pathName = location.pathname;
  setLocationPath(pathName.match(regex).toString());

  useEffect(() => locationPath, [locationPath]);
};

// TODO:
// fix so calcs only on project pages
// context?

const Header = ({ siteTitle, location }) => {
  const [scrollPosition] = useScrollEvent('');
  const maths = 0 + scrollPosition / (window.innerHeight / 1.3);

  // console.log(maths > 1);
  return (
    <HeaderWrapper maths={maths} location={location.pathname}>
      <HeaderContainer>
        <HeaderLogo>
          <FadeLinkTransition to="/">
            {/* {siteTitle} */}
            <span>&lt;J</span>
            <span>onathan</span>
            <span>F</span>
            <span>reeman</span>
            <span>/&gt;</span>
          </FadeLinkTransition>
        </HeaderLogo>
        <Nav>
          <FadeLinkTransition to="/projects">Projects</FadeLinkTransition>
          <FadeLinkTransition to="/contact">Contact</FadeLinkTransition>
        </Nav>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
  location: PropTypes.object,
};

Header.defaultProps = {
  siteTitle: ``,
  location: {
    pathname: 'undefined',
  },
};

export default Header;
