const TRANSITION_LENGTH = 1.5;
export const exitTransition = {
  length: TRANSITION_LENGTH, // Take 1.5 seconds to leave

  trigger: () => {
    console.log(`We are exiting`);
  },
};

export const entryTransition = {
  delay: TRANSITION_LENGTH, // Wait 1.5 seconds before entering

  trigger: () => {
    console.log(`We are entering`);
  },
};

export const exitTransitionTest = {
  delay: TRANSITION_LENGTH, // Wait 1.5 seconds before entering
  state: {
    height: () => {
      const height = document.body.scrollHeight;
      return height;
    },
  },
  trigger: ({ exit, e, node }) => verticalAnimation(exit, 'up', e, node),
};

const verticalAnimation = (exit, direction, e, node) => {
  console.log('Wow it worked');
  console.log({ exit });
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
