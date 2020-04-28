/* eslint-disable import/no-cycle */
/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useScrollEvent, SwipeTransition } from '../utilities';
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
  }
`;

const HeaderBg = ({ bg }) => {
  const [scrollPosition] = useScrollEvent('');

  return (
    <SwipeTransition>
      <Header bg={bg.image_cover}>
        <div
          id="bg"
          style={{
            opacity: 1 - scrollPosition / (window.innerHeight / 1.3),
            top: scrollPosition,
            backgroundPositionY: -scrollPosition / 4,
          }}
        >
          {bg.video && (
            <video autoPlay muted loop id="myVideo">
              <source src={bg.video} type="video/mp4" />
            </video>
          )}
        </div>
      </Header>
    </SwipeTransition>
  );
};

HeaderBg.propTypes = {
  bg: PropTypes.string,
};

export default HeaderBg;
