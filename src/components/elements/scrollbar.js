import React from 'react';
import styled, { keyframes } from 'styled-components';

import { useScrollEvent, Below } from '../utilities';
import { PrimaryColor, AltColor } from '../../Global';

const animate = keyframes`
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
`;

const ScrollPath = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 10px;
  ${Below.small`
    width: 2px
  `}
  height: 100%;
`;
const ProgressBar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 10px;
  ${Below.small`
    width: 2px
  `}
  height: 100%;
  background: linear-gradient(to bottom, ${AltColor}, ${PrimaryColor});
  animation: ${animate} 5s linear infinite;
  z-index: 100;
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, ${AltColor}, ${PrimaryColor});
    filter: blur(10px);
  }
  :after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, ${AltColor}, ${PrimaryColor});
    filter: blur(20px);
  }
`;

const Scrollbar = () => {
  const [scrollPosition] = useScrollEvent('');
  const totalHeight = document.body.scrollHeight - window.innerHeight;
  const progressHeight = (scrollPosition / totalHeight) * 100;

  return (
    <>
      <ScrollPath />
      <ProgressBar
        style={{
          height: `${progressHeight}%`,
        }}
      />
    </>
  );
};

export default Scrollbar;
