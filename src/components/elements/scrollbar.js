import React from 'react';
import styled, { keyframes } from 'styled-components';

import { useScrollEvent } from '../utilities/hooks';
import { PrimaryColor, SecondaryColor, AltColor } from '../../Global';

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
  height: 100%;
  background: rgba(255, 255, 255, 0.05);
`;
const ProgressBar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 10px;
  height: 100%;
  background: linear-gradient(to bottom, ${AltColor}, ${PrimaryColor});
  animation: ${animate} 5s linear infinite;
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
