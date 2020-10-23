import React from 'react';
import PropTypes from 'prop-types';

import { SwipeTransition } from './swipeTransition';
import { FadeTransition } from './fadeTransition';

const Transition = ({ children, transitionType, transitionDirection }) => {
  switch (transitionType) {
    case 'swipe':
      return (
        <SwipeTransition transitionDirection={transitionDirection}>
          {children}
        </SwipeTransition>
      );
    default:
      return <FadeTransition>{children}</FadeTransition>;
  }
};

Transition.propTypes = {
  children: PropTypes.node,
  transitionType: PropTypes.string,
  transitionDirection: PropTypes.string,
};

Transition.defaultProps = {
  transitionType: 'fade',
};

export default Transition;
