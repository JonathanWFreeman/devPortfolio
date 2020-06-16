import React from 'react';
import PropTypes from 'prop-types';
import { TransitionState } from 'gatsby-plugin-transition-link';
import { motion } from 'framer-motion';
import { document } from 'browser-monads';

const SwipeDirection = {
  up: {
    exiting: custom => ({
      transform: `translate(0, -${custom}px)`,
      transitionDuration: '1s',
    }),
    exited: custom => ({
      transform: `translate(0, -${custom}px)`,
      transitionDuration: '1s',
    }),
    entering: { transform: 'translate(0, 0%)', transitionDuration: '1s' },
    entered: { transform: 'translate(0, 0%)', transitionDuration: '1s' },
  },
  down: {
    exiting: custom => ({
      transform: `translate(0, ${custom}px)`,
      transitionDuration: '1s',
    }),
    exited: custom => ({
      transform: `translate(0, ${custom}px)`,
      transitionDuration: '1s',
    }),
    entering: { transform: 'translate(0, 0%)', transitionDuration: '1s' },
    entered: { transform: 'translate(0, 0%)', transitionDuration: '1s' },
  },
};

export const SwipeTransition = ({ children, transitionDirection }) => {
  const height = document.body.scrollHeight || 1;
  console.log(height);
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
  children: PropTypes.node.isRequired,
  transitionDirection: PropTypes.string,
};

SwipeTransition.defaultProps = {
  transitionDirection: 'down',
};
