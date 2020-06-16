import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import { useScrollEvent, CloudVideo, imgCover, isMobile } from '../utilities';
import {
  BackgroundColor,
  PrimaryColor,
  SecondaryColor,
  AltColor,
} from '../../Global';

const Header = styled.header`
  position: relative;
  width: 100vw;
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
    background-position: center center;
    .skewed {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 125px;
      height: 105px;
      background: ${BackgroundColor};
      transform: skewY(-40deg);
      transform-origin: bottom right;
    }
  }
`;

const animate = keyframes`
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
`;

const Arrow = styled.svg`
  position: absolute;
  z-index: 500;
  width: 50px;
  height: 50px;
  top: 20px;
  right: 5px;
  transform: skewY(40deg);
  animation: ${animate} 5s linear infinite;
`;

const HeaderBg = ({ bg }) => {
  const [scrollPosition] = useScrollEvent('');

  return (
    <Header bg={imgCover(bg.media_type, bg.cloud_ref)}>
      <div
        id="bg"
        style={{
          opacity: 1 - scrollPosition / (window.innerHeight / 1.3),
          top: scrollPosition,
          backgroundPositionY: -scrollPosition / 4,
        }}
      >
        {isMobile() === false && bg.media_type === 'video' && (
          <CloudVideo vid={bg.cloud_ref} />
        )}
        <span
          className="skewed"
          style={{
            opacity: `${100 - scrollPosition}%`,
          }}
        >
          <Arrow viewBox="0 0 448 512">
            <path
              fill="url(#arrowGradient)"
              d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"
            />
            <defs>
              <linearGradient id="arrowGradient" gradientTransform="rotate(90)">
                <stop offset="0%" stopColor="#ff8806" />
                <stop offset="100%" stopColor="#d9574a" />
              </linearGradient>
            </defs>
          </Arrow>
        </span>
      </div>
    </Header>
  );
};

HeaderBg.propTypes = {
  bg: PropTypes.object.isRequired,
};

export default HeaderBg;
