import React from 'react';
import PropTypes from 'prop-types';
import { Video } from 'cloudinary-react';
import cloudinary from 'cloudinary-core';

const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: 'jwfreeman' });
const cloud = 'jwfreeman';

export function imgCover(bool, ref) {
  let target = bool ? (target = 'video') : (target = 'image');
  return `https://res.cloudinary.com/jwfreeman/${target}/upload/${ref}.jpg`;
}

export const CloudImg = ({ img, desc }) => (
  <img
    src={`https://res.cloudinary.com/jwfreeman/video/upload/c_fill,h_400,w_1200/v1/${img}.jpg`}
    alt={desc}
  />
);

export const CloudVideo = ({ vid }) => {
  const url = `https://res.cloudinary.com/jwfreeman/video/upload/${vid}`;
  return (
    <Video
      cloudName={cloud}
      publicId={cloudinaryCore.url(url)}
      autoplay="true"
      loop="true"
      format="mp4"
    />
  );
};

CloudImg.propTypes = {
  img: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

CloudVideo.propTypes = {
  vid: PropTypes.string.isRequired,
};
