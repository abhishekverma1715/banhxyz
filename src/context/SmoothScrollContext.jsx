import React, { createContext, useContext, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from '../utils/gsap';

const SmoothScrollContext = createContext(null);

export const SmoothScrollProvider = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    const lenis = new Lenis({
      duration: 1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 0.9,
    });

    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const tickerCallback = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={lenisRef}>
      {children}
    </SmoothScrollContext.Provider>
  );
};

export const useSmoothScroll = () => {
  const context = useContext(SmoothScrollContext);
  return context;
};
