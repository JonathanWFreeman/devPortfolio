import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Video } from 'cloudinary-react';
import cloudinary from 'cloudinary-core';

import { useMousePosition } from './hooks';
import { isMobile } from './breakpoints';

const cloud = 'jwfreeman';
const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: cloud });

export function imgCover(media, ref) {
  // let target = bool ? (target = 'video') : (target = 'image');
  return `https://res.cloudinary.com/jwfreeman/${media}/upload/Portfolio/${media}/${ref}.jpg`;
}

export const PortfolioImages = ({ img, media, desc }) => (
  <img
    src={`https://res.cloudinary.com/jwfreeman/${media}/upload/c_fill,h_600,w_1600/v1/Portfolio/${media}/${img}.jpg`}
    alt={desc}
  />
);

export const CloudVideo = ({ vid }) => {
  const url = `https://res.cloudinary.com/jwfreeman/video/upload/Portfolio/video/${vid}`;
  return (
    <Video
      cloudName={cloud}
      publicId={cloudinaryCore.url(url)}
      autoPlay
      loop
      format="mp4"
    />
  );
};

export const CloudImage = ({ img }) => {
  const [mousePos, setMousePos] = useState({ x: 500, y: 500 });
  const mousePosition = useMousePosition();

  useEffect(() => {
    if (!isMobile()) {
      setMousePos({ x: mousePosition.x, y: mousePosition.y });
    }
  }, [mousePosition.x, mousePosition.y]);

  return (
    <img
      // src="https://res.cloudinary.com/jwfreeman/image/upload/v1/Portfolio/image/jonathan_freeman_img.png"
      src="https://res.cloudinary.com/jwfreeman/image/upload/v1593205662/Portfolio/image/jonathan_freeman_img_jo59mg.png"
      alt="Jonathan Freeman"
      css={`
        filter: drop-shadow(${mousePos.x / 100}px ${mousePos.y / 100}px 2px red)
          drop-shadow(
            ${(mousePos.x / 200) * -1}px ${(mousePos.y / 200) * -1}px 2px
              #03e9f4
          );
      `}
    />
  );
};

CloudImage.propTypes = {
  img: PropTypes.string.isRequired,
};

PortfolioImages.propTypes = {
  img: PropTypes.string.isRequired,
  media: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

CloudVideo.propTypes = {
  vid: PropTypes.string.isRequired,
};
