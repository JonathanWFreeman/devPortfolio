import React, { useState, useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import { Video } from 'cloudinary-react';
import cloudinary from 'cloudinary-core';

import { useMousePosition } from './hooks';
import { isMobile } from './breakpoints';

const cloud = 'jwfreeman';
const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: cloud });

export function imgCover(media, src) {
  return `https://res.cloudinary.com/jwfreeman/${media}/upload/Portfolio/${media}/${src}.jpg`;
}

export const PortfolioImages = ({ src, media, desc }) => (
  <img
    src={`https://res.cloudinary.com/jwfreeman/${media}/upload/c_fill,h_600,w_1600/Portfolio/${media}/${src}.jpg`}
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

export const SelfImage = () => {
  const [mousePos, setMousePos] = useState({ x: 500, y: 500 });
  const mousePosition = useMousePosition();
  const url = `https://res.cloudinary.com/jwfreeman/image/upload/v1593218108/Portfolio/image/jonathan_freeman_img.png`;

  useEffect(() => {
    if (!isMobile()) {
      setMousePos({ x: mousePosition.x, y: mousePosition.y });
    }
  }, [mousePosition.x, mousePosition.y]);

  return (
    <StaticImage
      src={url}
      alt="Jonathan Freeman"
      placeholder="blurred"
      style={{
        filter: `drop-shadow(${mousePos.x / 100}px ${
          mousePos.y / 100
        }px 2px red) 
        drop-shadow(${(mousePos.x / 200) * -1}px ${
          (mousePos.y / 200) * -1
        }px 2px #03e9f4)`,
      }}
    />
  );
};

PortfolioImages.propTypes = {
  src: PropTypes.string.isRequired,
  media: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

CloudVideo.propTypes = {
  vid: PropTypes.string.isRequired,
};
