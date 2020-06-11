import { useEffect, useState } from 'react';

export const useScrollEvent = initialState => {
  const [scrollPosition, setScrollPosition] = useState(initialState);

  const setYPosition = () => {
    setScrollPosition(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', setYPosition);
    // cleanup
    return () => window.removeEventListener('scroll', setYPosition);
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

async function getWindowDimensions() {
  const { scrollWidth: width, scrollHeight: height } = await document.body;
  return {
    width,
    height,
  };
}

export async function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
