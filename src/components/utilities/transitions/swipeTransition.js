import React from 'react';
import PropTypes from 'prop-types';
import { TransitionState } from 'gatsby-plugin-transition-link';
import { motion } from 'framer-motion';

const getDirection = {
  SwipeUp: {
    exiting: { transform: 'translate(0, -100%)' },
    exited: { transform: 'translate(0, -100%)' },
    entering: { transform: 'translate(0, 0%)' },
    entered: { transform: 'translate(0, 0%)' },
  },
  SwipeDown: {
    exiting: { transform: 'translate(0, 100%)' },
    exited: { transform: 'translate(0, 100%)' },
    entering: { transform: 'translate(0, 0%)' },
    entered: { transform: 'translate(0, 0%)' },
  },
};

export const SwipeTransition = ({ children, direction }) => (
  <TransitionState>
    {({ transitionStatus }) => (
      <motion.div
        variants={getDirection[direction]}
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
  direction: PropTypes.string,
};

SwipeTransition.defaultProps = {
  direction: 'SwipeUp',
};
