import React, { useEffect, useRef } from 'react';
import { gsap, SplitText } from '../utils/gsap';
import { Preload } from './Preload';

export const Hero = ({ onOpenMenu }) => {
  const heroTopRef = useRef(null);
  const heroBottomRef = useRef(null);
  const heroImgRef = useRef(null);
  const heroH1LeftRef = useRef(null);
  const heroH1RightRef = useRef(null);
  const heroB2Ref = useRef(null);

  const preloadRef = useRef(null);
  const bgCircleRef = useRef(null);
  const preloadContentRef = useRef(null);
  const preloadH1Refs = useRef([]);

  useEffect(() => {
    const isDesktop = window.innerWidth >= 992;
    const heroDuration = isDesktop ? 1.8 : 1.2;

    const preloadH1Elements = preloadH1Refs.current.filter(Boolean);
    const preloadH1ST = new SplitText(preloadH1Elements, {
      type: 'lines, words, chars',
      mask: 'lines',
    });

    const heroTextST = new SplitText(heroB2Ref.current, {
      type: 'lines, words, chars',
      mask: 'lines',
    });

    gsap.set([heroTopRef.current, heroBottomRef.current], { opacity: 0 });
    gsap.set(heroImgRef.current, { opacity: 0, scale: 0, rotate: 360 });

    const heroTl = gsap.timeline({
      onComplete: () => {
        if (preloadRef.current) {
          preloadRef.current.style.display = 'none';
        }
      },
    });

    heroTl
      .from(preloadH1ST.lines, { yPercent: 100, delay: 0.8 })
      .to(preloadContentRef.current, { scale: 0, delay: 0.5, duration: 0.6 })
      .fromTo(
        bgCircleRef.current,
        { clipPath: 'circle(100% at 50% 50%)', scale: 1 },
        {
          clipPath: 'circle(0% at 50% 50%)',
          scale: 0,
          duration: 0.8,
        },
        '<'
      );

    heroTl
      .fromTo(
        heroH1LeftRef.current,
        { xPercent: isDesktop ? -350 : -300 },
        { xPercent: 0, duration: heroDuration },
        '<'
      )
      .fromTo(
        heroH1RightRef.current,
        { xPercent: isDesktop ? 350 : 300 },
        { xPercent: 0, duration: heroDuration },
        '<'
      )
      .to(
        heroImgRef.current,
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: isDesktop ? 1.2 : heroDuration,
        },
        '<0.8'
      )
      .to([heroTopRef.current, heroBottomRef.current], {
        opacity: 1,
        duration: isDesktop ? 1.3 : heroDuration,
      })
      .from(
        heroTextST.lines,
        { y: 50, duration: isDesktop ? 1 : 0.8 },
        '<0.2'
      );

    return () => {
      heroTl.kill();
      preloadH1ST.revert();
      heroTextST.revert();
    };
  }, []);

  return (
    <>
      <Preload
        preloadRef={preloadRef}
        bgCircleRef={bgCircleRef}
        contentRef={preloadContentRef}
        h1Refs={preloadH1Refs}
      />
      <section
        className="hero grid grid-rows-[1fr_auto_1fr] items-center h-[100dvh] overflow-hidden"
        id="hero"
      >
        <div
          ref={heroTopRef}
          className="hero-top grid grid-cols-5 gap-6 w-full self-start max-sm:flex max-sm:justify-between"
        >
          <a
            href="#evolution"
            className="navlink self-center justify-self-start max-md:hidden"
          >
            Story
          </a>
          <a
            href="#anatomy"
            className="navlink self-center justify-self-start max-md:hidden"
          >
            Anatomy
          </a>
          <h1 className="hero-tag text-2xl normal-case self-center justify-self-center">
            #TheTasteOfVietnam
          </h1>
          <a
            href="#fillings"
            className="navlink self-center justify-self-end max-md:hidden"
          >
            Fillings
          </a>
          <a
            href="#street"
            className="navlink self-end justify-self-end max-md:hidden"
          >
            Street icon
          </a>
          <div
            onClick={onOpenMenu}
            className="menu-mobile hidden max-sm:flex justify-self-end font-['Asap_Condensed'] font-bold text-2xl cursor-pointer"
          >
            Menu
          </div>
        </div>

        <div className="hero-mid grid grid-cols-3 gap-6 w-full max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:gap-0">
          <h1
            ref={heroH1LeftRef}
            className="hero-h1 text-[10rem] max-[1800px]:text-[8rem] max-lg:text-[7rem] max-sm:text-[5.5rem] self-center justify-self-end"
          >
            Banh mi
          </h1>
          <div
            ref={heroImgRef}
            className="hero-img flex items-center justify-center w-4/5 max-lg:w-1/2 max-sm:w-[65%] relative self-center justify-self-center aspect-square"
          >
            <img
              loading="eager"
              fetchPriority="high"
              id="bmCircle"
              className="w-4/5"
              src="/img/Hero banh mi circle bg.png"
              alt="Banh mi background circle"
            />
            <img
              loading="eager"
              fetchPriority="high"
              id="bmMain"
              className="absolute w-[90%]"
              src="/img/Hero banh mi.png"
              alt="Banh mi"
            />
          </div>
          <h1
            ref={heroH1RightRef}
            className="hero-h1 text-[10rem] max-[1800px]:text-[8rem] max-lg:text-[7rem] max-sm:text-[5.5rem] self-center justify-self-start"
          >
            Viet nam
          </h1>
        </div>

        <div
          ref={heroBottomRef}
          className="hero-bottom grid grid-cols-[0.5fr_auto_0.5fr] gap-6 w-full self-end max-lg:grid-cols-1 max-lg:gap-4 max-sm:gap-2"
        >
          <p className="hero-b1 self-end justify-self-start max-lg:self-center max-lg:justify-self-center max-lg:row-start-2">
            /ˌbɑːn ˈmiː/ (noun)
          </p>
          <p
            ref={heroB2Ref}
            className="hero-b2 text-center w-[25rem] max-lg:w-[min(25rem,100%)] self-center justify-self-center"
          >
            More than just a sandwich, it's a legendary, crispy flavor that
            resonates through generations. Feel the soul of Vietnam, with every
            bite.
          </p>
          <div className="hero-b3 flex items-center justify-center gap-2 self-end justify-self-end max-lg:justify-self-center">
            <p>Discover the crunch</p>
            <i id="heroIcon" className="ph-fill ph-arrow-down text-base" />
          </div>
        </div>
      </section>
      <div className="spacer w-full h-[15rem] max-lg:h-[10rem]" />
    </>
  );
};
