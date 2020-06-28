import React from 'react';
import styled, { keyframes } from 'styled-components';

import { PrimaryColor, SecondaryColor, AltColor } from '../../Global';

const animate = keyframes`
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
`;

const Square = styled.div`
  position: absolute;
  width: 25%;
  height: 58%;
  background: #333;
  top: 64%;
  right: 37%;
  transform: skew(43deg, 4deg) perspective(0px) rotate3d(33, -2, -45, 61deg);
`;

const SquareEdge = styled(Square)`
  background: linear-gradient(to bottom, ${AltColor}, ${PrimaryColor});
  animation: ${animate} 5s linear infinite;
  width: 3%;
  height: 51%;
  top: 59%;
  right: 51%;
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

const SquareEdge2 = styled(SquareEdge)`
  width: 50%;
  height: 4%;
  background: linear-gradient(to top, ${SecondaryColor}, ${PrimaryColor});
  top: 60%;
  right: -25%;
  transform: skew(-50deg, 7deg) perspective(0px) rotate3d(-63, 19, 62, 6deg);
  z-index: -1;
`;

const Square2 = styled.div`
  position: absolute;
  width: 38%;
  height: 37%;
  background: linear-gradient(to top, ${SecondaryColor}, ${PrimaryColor});
  top: 61%;
  right: -1%;
  transform: skew(-52deg, 7deg) perspective(0px) rotate3d(-63, 19, 62, 6deg);
  z-index: -1;
`;

const Square3 = styled.div`
  position: absolute;
  width: 14%;
  height: 46%;
  background: #333;
  top: 60%;
  right: -14%;
  transform: skew(-52deg, 7deg) perspective(0px) rotate3d(-63, 19, 62, 6deg);
  z-index: 2;
`;

const Square4 = styled.div`
  position: absolute;
  width: 13%;
  height: 16%;
  background: #333;
  top: 64%;
  right: 83%;
  transform: skew(7deg, 7deg) perspective(0px) rotate3d(-63, 19, 62, 6deg);
  z-index: 2;
`;

const PhotoBorder = () => (
  <>
    <SquareEdge />
    <Square />
    <SquareEdge2 />
    <Square2 />
    <Square3 />
    <Square4 />
  </>
);

export default PhotoBorder;
