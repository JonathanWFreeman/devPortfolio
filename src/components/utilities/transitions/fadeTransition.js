/* eslint-disable no-unused-expressions */
import React from 'react';
import PropTypes from 'prop-types';
import TransitionLink, { TransitionState } from 'gatsby-plugin-transition-link';
import { motion } from 'framer-motion';

import { entryTransition, exitTransition } from './transitions';

const Fade = {
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
  entering: { opacity: 1 },
  entered: { opacity: 1 },
};

// In a component that wraps your page contents
export const FadeTransition = ({ children }) => (
  <TransitionState>
    {({ transitionStatus }) => (
      <motion.div variants={Fade} initial="exiting" animate={transitionStatus}>
        {children}
      </motion.div>
    )}
  </TransitionState>
);

export const FadeLinkTransition = ({ to, children }) => (
  <TransitionLink
    to={to}
    exit={exitTransition}
    entry={entryTransition}
    activeClassName="active"
    partiallyActive
  >
    {children}
  </TransitionLink>
);

FadeTransition.propTypes = {
  children: PropTypes.node.isRequired,
};

FadeLinkTransition.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
