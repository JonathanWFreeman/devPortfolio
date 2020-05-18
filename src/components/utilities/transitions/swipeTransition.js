import React from 'react';
import PropTypes from 'prop-types';
import { TransitionState } from 'gatsby-plugin-transition-link';
import { motion } from 'framer-motion';

const SwipeDirection = {
  up: {
    exiting: { transform: 'translate(0, -100%)', transitionDuration: '1s' },
    exited: { transform: 'translate(0, -100%)', transitionDuration: '1s' },
    entering: { transform: 'translate(0, 0%)', transitionDuration: '1s' },
    entered: { transform: 'translate(0, 0%)', transitionDuration: '1s' },
  },
  down: {
    exiting: { transform: 'translate(0, 100%)', transitionDuration: '1s' },
    exited: { transform: 'translate(0, 100%)', transitionDuration: '1s' },
    entering: { transform: 'translate(0, 0%)', transitionDuration: '1s' },
    entered: { transform: 'translate(0, 0%)', transitionDuration: '1s' },
  },
};

export const SwipeTransition = ({ children, transitionDirection }) => (
  <TransitionState>
    {({ transitionStatus }) => (
      <motion.div
        variants={SwipeDirection[transitionDirection]}
        initial="exiting"
        animate={transitionStatus}
      >
        {children}
      </motion.div>
    )}
  </TransitionState>
);

SwipeTransition.propTypes = {
  children: PropTypes.node.isRequired,
  transitionDirection: PropTypes.string,
};

SwipeTransition.defaultProps = {
  transitionDirection: 'up',
};
