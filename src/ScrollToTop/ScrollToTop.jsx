import React from 'react'
import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router'
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
  },[pathname]);
  return null;
};

export default ScrollToTop