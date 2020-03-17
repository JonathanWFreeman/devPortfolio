import { useEffect, useState } from 'react';

export const useScrollEvent = initialState => {
  const [scrollPosition, setScrollPosition] = useState(initialState);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollPosition(window.pageYOffset);
    });
  }, []);
  return [scrollPosition];
};
