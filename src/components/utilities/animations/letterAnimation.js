import React from 'react';
// import { Frame } from 'framer';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

// Add staggering effect to the children of the container
const containerVariants = {
  before: {},
  after: custom => ({
    transition: {
      delayChildren: custom,
      staggerChildren: 0.05,
    },
  }),
};

// Variants for animating each letter
const letterVariants = {
  before: {
    opacity: 0,
    y: 20,
    transition: {
      type: 'spring',
      damping: 16,
      stiffness: 200,
    },
  },
  after: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 16,
      stiffness: 200,
    },
  },
};

const LetterAnimation = ({ children, delay }) => {
  const letters = [...children];

  return (
    <motion.div
      center="y"
      height={26}
      width="100%"
      background=""
      css={{
        display: 'flex', // Set the display value to flex
      }}
      custom={delay}
      variants={containerVariants}
      initial="before"
      animate="after"
    >
      {letters.map((letter, index) => (
        <motion.div
          key={index}
          width="auto" // Set the width to the width of the letter
          height={26} // Set the height to the height of the text
          background=""
          css={{ position: 'relative' }} // Position elements
          variants={letterVariants}
        >
          {/* Set any spaces to a non-breaking space */}
          {letter === ' ' ? '\u00A0' : letter}
        </motion.div>
      ))}
    </motion.div>
  );
};

LetterAnimation.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
};

export default LetterAnimation;
