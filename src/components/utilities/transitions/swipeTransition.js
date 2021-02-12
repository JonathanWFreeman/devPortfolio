import React from 'react';
import PropTypes from 'prop-types';
import { TransitionState } from 'gatsby-plugin-transition-link';
import { motion } from 'framer-motion';
import { document } from 'browser-monads';

const TRANSITION_LENGTH = '1s';

const SwipeDirection = {
  up: {
    exiting: (custom) => ({
      transform: `translate(0, -${custom}px)`,
      transitionDuration: TRANSITION_LENGTH,
    }),
    exited: (custom) => ({
      transform: `translate(0, -${custom}px)`,
      transitionDuration: TRANSITION_LENGTH,
    }),
    entering: {
      transform: 'translate(0, 0%)',
      transitionDuration: TRANSITION_LENGTH,
    },
    entered: {
      transform: 'translate(0, 0%)',
      transitionDuration: TRANSITION_LENGTH,
    },
  },
  down: {
    exiting: (custom) => ({
      transform: `translate(0, ${custom}px)`,
      transitionDuration: TRANSITION_LENGTH,
    }),
    exited: (custom) => ({
      transform: `translate(0, ${custom}px)`,
      transitionDuration: TRANSITION_LENGTH,
    }),
    entering: {
      transform: 'translate(0, 0%)',
      transitionDuration: TRANSITION_LENGTH,
    },
    entered: {
      transform: 'translate(0, 0%)',
      transitionDuration: TRANSITION_LENGTH,
    },
  },
};

export const SwipeTransition = ({ children, transitionDirection }) => {
  const height = document.body.scrollHeight || 2500;
  return (
    <TransitionState>
      {({ transitionStatus }) => (
        <motion.div
          variants={SwipeDirection[transitionDirection]}
          initial="exiting"
          animate={transitionStatus}
          custom={height}
        >
          {children}
        </motion.div>
      )}
    </TransitionState>
  );
};

SwipeTransition.propTypes = {
  children: PropTypes.node,
  transitionDirection: PropTypes.string,
};

SwipeTransition.defaultProps = {
  transitionDirection: 'down',
};
