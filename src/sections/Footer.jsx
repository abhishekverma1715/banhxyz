import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../utils/gsap';

export const Footer = () => {
  const footerRef = useRef(null);
  const ftPaperRef = useRef(null);
  const ftTopImgRef = useRef(null);
  const ftBottomImgRef = useRef(null);

  useEffect(() => {
    if (!footerRef.current) return;

    const ftBmvnImgs = footerRef.current.querySelectorAll('.ft-bmvn img');

    const footerTl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top 20%',
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
  }, []);

  return (
    <footer
      ref={footerRef}
      className="footer grid grid-rows-3 w-full h-[100dvh] gap-6 p-6 bg-[#d4a373] relative overflow-hidden"
    >
      <div
        ref={ftTopImgRef}
        className="ft-img-top flex w-[18%] max-[1366px]:w-1/5 max-sm:w-[30%] absolute top-0 left-0"
      >
        <img
          loading="eager"
          src="/img/Footer banh mi top.png"
          alt="banhmi top"
        />
      </div>

      <div className="ft-content flex flex-col justify-center items-center justify-self-center self-center relative row-start-2 w-3/4 max-lg:w-4/5 max-sm:w-full gap-6 max-sm:gap-2">
        <div className="ft-bmvn w-full overflow-hidden">
          <img
            loading="lazy"
            src="/img/Footer banh mi.png"
            alt="banhmi"
          />
        </div>
        <div className="ft-bmvn w-full overflow-hidden">
          <img
            loading="lazy"
            src="/img/Footer vietnam.png"
            alt="vietnam"
          />
        </div>
        <img
          ref={ftPaperRef}
          loading="lazy"
          id="ftPaper"
          className="absolute w-1/2 max-md:w-3/5 max-sm:w-[65%]"
          src="/img/Footer paper center.png"
          alt="paper"
        />
      </div>

      <div className="ft-author grid grid-cols-3 w-full row-start-3 text-[#f5ecd7] text-sm max-sm:flex max-sm:flex-col-reverse max-sm:justify-center max-sm:items-center max-sm:gap-4 max-sm:self-end">
        <p className="text-[#f5ecd7] text-sm leading-none justify-self-start self-end max-sm:self-center">
          ©2026. Created by{' '}
          <span>
            <a
              id="author"
              href="https://www.hoquan.info/"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-[#f5ecd7] underline hover:text-[#bc4749]"
            >
              HoQuan
            </a>
          </span>
        </p>
        <a
          href="#hero"
          className="justify-self-center self-end max-sm:self-center text-[#f5ecd7] hover:text-[#bc4749]"
        >
          <p className="text-[#f5ecd7] text-sm leading-none">Go to top</p>
        </a>
      </div>

      <div
        ref={ftBottomImgRef}
        className="ft-img-bottom flex w-[22%] max-[1366px]:w-[30%] max-sm:hidden absolute bottom-0 right-0"
      >
        <img
          loading="eager"
          src="/img/Footer banh mi bottom.png"
          alt="banhmi bottom"
        />
      </div>
    </footer>
  );
};
