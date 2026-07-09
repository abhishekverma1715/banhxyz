import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../../utils/gsap';

export const ProgressBar = () => {
  const barRef = useRef(null);

  useEffect(() => {
    if (!barRef.current) return;

    const trigger = ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => {
        gsap.set(barRef.current, {
          width: `${self.progress * 100}%`,
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <div
      ref={barRef}
      className="progress-bar fixed top-0 left-0 h-[3px] w-0 bg-black pointer-events-none z-[9999]"
    />
  );
};
