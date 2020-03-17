import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SiteWidth } from '../../Global';

const Full = styled.section`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

  ${({ width }) => {
    if (width === 'site') {
      return `
      * {
          width: ${SiteWidth};
          margin: 0 auto;
        }
      `;
    }
  }}
`;

const FullWidth = ({ children, width }) => (
  <Full width={width}>{children}</Full>
);

FullWidth.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
};

FullWidth.defaultProps = {
  width: 'full',
};

export default FullWidth;
