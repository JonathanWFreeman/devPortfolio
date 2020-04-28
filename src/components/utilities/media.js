import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  Video,
  Transformation,
  CloudinaryContext,
} from 'cloudinary-react';

// const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: 'jwfreeman' });

export const CloudImg = ({ img, desc }) => (
  <img
    src={`https://res.cloudinary.com/jwfreeman/video/upload/c_fill,h_400,w_1200/v1/${img}.jpg`}
    alt={desc}
  />
);

export const CloudCover = ({ img, desc }) => (
  <Image
    cloudName="jwfreeman"
    publicId="Portfolio/video/QuickTVDemo_ni2ter.jpg"
  >
    <Transformation width="1200" height="400" crop="fill" />
  </Image>
);

export const CloudVideo = ({ vid, desc }) => (
  <Video
    cloudName="jwfreeman"
    publicId="Portfolio/video/QuickTVDemo_ni2ter.jpg"
  >
    <Transformation
      startOffset="4"
      width="350"
      height="350"
      radius="20"
      effect="grayscale"
      border="5px_solid_black"
      crop="crop"
    />
  </Video>
);

CloudImg.propTypes = {
  img: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

CloudCover.propTypes = {
  img: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

CloudVideo.propTypes = {
  vid: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
