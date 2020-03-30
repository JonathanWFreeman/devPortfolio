/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useScrollEvent } from '../utilities';
import {
  BackgroundColor,
  PrimaryColor,
  SecondaryColor,
  AltColor,
} from '../../Global';

const Header = styled.header`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: ${BackgroundColor};
  #bg {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${({ bg }) => bg}),
      linear-gradient(230deg, ${SecondaryColor}, ${PrimaryColor}, ${AltColor});
    background-blend-mode: multiply;
    ${'' /* background-blend-mode: luminosity; */}
    background-size: cover;
    .skewed {
      position: absolute;
      bottom: -100vh;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${BackgroundColor};
      transform: skewY(-10deg);
      transform-origin: top left;
    }
  }
`;

const HeaderBg = ({ bg }) => {
  const [scrollPosition] = useScrollEvent('');

  return (
    <Header bg={bg}>
      <div
        id="bg"
        style={{
          opacity: 1 - scrollPosition / (window.innerHeight / 1.3),
          top: scrollPosition,
          backgroundPositionY: -scrollPosition / 4,
        }}
      >
        <span
          className="skewed"
          style={{ transform: `skewY(${-5 + scrollPosition / 200}deg)` }}
        />
      </div>
    </Header>
  );
};

HeaderBg.propTypes = {
  bg: PropTypes.string,
};

export default HeaderBg;
