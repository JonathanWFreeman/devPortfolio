import React from 'react';
// import { Frame } from 'framer';
import { motion } from 'framer-motion';

const string = Array.from('Cool');

// Add staggering effect to the children of the container
const containerVariants = {
  before: {},
  after: { transition: { staggerChildren: 0.2 } },
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

const Animation = () => (
  <motion.div
    center="y"
    height={26}
    width="100%"
    background=""
    style={{
      fontFamily: 'Montserrat, Work Sans, sans-serif',
      fontWeight: 'bold',
      letterSpacing: '-0.04em',
      fontSize: 26,
      color: '#FFF',
      display: 'flex', // Set the display value to flex
      justifyContent: 'center', // Center all children elements on the x axis
    }}
    variants={containerVariants}
    initial="before"
    animate="after"
  >
    {string.map((letter, index) => (
      <motion.div
        key={index}
        width="auto" // Set the width to the width of the letter
        height={26} // Set the height to the height of the text
        background=""
        style={{ position: 'relative' }} // Position elements
        variants={letterVariants}
      >
        {/* Set any spaces to a non-breaking space */}
        {letter === ' ' ? '\u00A0' : letter}
      </motion.div>
    ))}
  </motion.div>
);

export default Animation;
