/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-expressions */
import React from 'react';
import PropTypes from 'prop-types';
import TransitionLink, { TransitionState } from 'gatsby-plugin-transition-link';
import { motion } from 'framer-motion';

const Fade = {
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
  entering: { opacity: 1 },
  entered: { opacity: 1 },
};

const Swipe = {
  exiting: { transform: 'translate(0, -100%)' },
  exited: { transform: 'translate(0, -100%)' },
  entering: { transform: 'translate(0, 0%)' },
  entered: { transform: 'translate(0, 0%)' },
};

const verticalAnimation = (length, direction, e, node) => {
  console.log('Wow it worked');
  console.log({ length });
  console.log({ direction });
  console.log(e.target);
  console.dir(node);
  return (node.style.background = 'purple');
  // const directionTo = direction === 'up' ? '-100%' : '100%'
  // const directionFrom = direction === 'up' ? '100%' : '-100%'

  // const seconds = length

  // return gsap.timeline()
  //   .set(this.transitionCover, { y: directionFrom })
  //   .to(this.transitionCover, {
  //     y: '0%',
  //     ease: "power1.easeInOut",
  //     duration: seconds / 2,
  //   })
  //   .set(this.layoutContents, { opacity: 0 })
  //   .to(this.transitionCover, {
  //     y: directionTo,
  //     ease: "power1.easeIn",
  //     duration: seconds / 2,
  //   })
};

const TRANSITION_LENGTH = 1;

export const exitTransition = {
  length: TRANSITION_LENGTH, // Take 1.5 seconds to leave
  trigger: () => console.log('We are exiting'),
};

export const entryTransition = {
  delay: TRANSITION_LENGTH, // Wait 1.5 seconds before entering
  trigger: () => console.log('We are entering'),
};

const exitTransitionTest = {
  delay: TRANSITION_LENGTH, // Wait 1.5 seconds before entering
  trigger: ({ exit, e, node }) => verticalAnimation(exit, 'up', e, node),
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

export const SwipeTransition = ({ children }) => (
  <TransitionState>
    {({ transitionStatus }) => (
      <motion.div variants={Swipe} initial="exiting" animate={transitionStatus}>
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

SwipeTransition.propTypes = {
  children: PropTypes.node.isRequired,
};

FadeLinkTransition.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
