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

export const useGetPath = location => {
  const [locationPath, setLocationPath] = useState('');

  const regex = /^(\/[^\\/]+)/gm;
  const pathName = location.pathname;
  setLocationPath(pathName.match(regex).toString());

  return locationPath;
};
