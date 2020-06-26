import { useEffect, useState } from 'react';
import { window, document } from 'browser-monads';

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

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export function useWindowDimensions() {
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

function getDocumentDimensions() {
  const { scrollHeight } = document.body;
  return {
    scrollHeight,
  };
}

export function useDocumentDimensions() {
  const [documentDimensions, setDocumentDimensions] = useState(
    getDocumentDimensions()
  );
  console.log(documentDimensions);

  useEffect(() => {
    setDocumentDimensions(getDocumentDimensions());
  }, []);
  return documentDimensions;
}

export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = e => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', setFromEvent);

    return () => {
      window.removeEventListener('mousemove', setFromEvent);
    };
  }, []);

  return position;
};
