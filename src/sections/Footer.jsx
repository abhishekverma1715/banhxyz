import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../utils/gsap';

export const Footer = () => {
  const footerRef = useRef(null);
  const ftPaperRef = useRef(null);
  const ftTopImgRef = useRef(null);
  const ftBottomImgRef = useRef(null);

  useEffect(() => {
    /*
    if (!footerRef.current) return;

    const ftBmvnImgs = footerRef.current.querySelectorAll('.ft-bmvn img');

    const footerTl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top bottom',
        end: 'bottom 80%',
        toggleActions: 'play none none none',
      },
    });

    footerTl.from(ftPaperRef.current, { scale: 0, duration: 0.6 });
    footerTl.from(ftBmvnImgs, { yPercent: 150, stagger: 0.1, duration: 0.8 }, '<');
    footerTl.from(ftTopImgRef.current, { x: -400, duration: 0.8 }, '<0.1');
    footerTl.from(ftBottomImgRef.current, { x: 400, duration: 0.8 }, '<');

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === footerRef.current) t.kill();
      });
    };
    */
  }, []);

  return (
    <footer ref={footerRef} className="footer">
      <div ref={ftTopImgRef} className="ft-img-top">
        <img loading="eager" src="/img/Footer banh mi top.png" alt="banhmi top" />
      </div>
      <div className="ft-content">
        <div className="ft-bmvn">
          <img loading="lazy" src="/img/Footer banh mi.png" alt="banhmi" />
        </div>
        <div className="ft-bmvn">
          <img loading="lazy" src="/img/Footer vietnam.png" alt="vietnam" />
        </div>
        <img
          ref={ftPaperRef}
          loading="lazy"
          id="ftPaper"
          src="/img/Footer paper center.png"
          alt="paper"
        />
      </div>
      <div className="ft-author">
        <p>
          ©2026. Created by{' '}
          <span>
            <a id="author" href="https://www.hoquan.info/" target="_blank" rel="noreferrer">
              HoQuan
            </a>
          </span>
        </p>
        <a href="#hero"><p>Go to top</p></a>
      </div>
      <div ref={ftBottomImgRef} className="ft-img-bottom">
        <img loading="eager" src="/img/Footer banh mi bottom.png" alt="banhmi bottom" />
      </div>
    </footer>
  );
};
