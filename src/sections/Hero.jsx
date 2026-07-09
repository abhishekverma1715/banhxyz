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
      <section className="hero" id="hero">
        <div ref={heroTopRef} className="hero-top">
          <a href="#evolution" className="navlink">Story</a>
          <a href="#anatomy" className="navlink">Anatomy</a>
          <h1 className="hero-tag">#TheTasteOfVietnam</h1>
          <a href="#fillings" className="navlink">Fillings</a>
          <a href="#street" className="navlink">Street icon</a>
          <div onClick={onOpenMenu} className="menu-mobile">Menu</div>
        </div>

        <div className="hero-mid">
          <h1 ref={heroH1LeftRef} className="hero-h1">Banh mi</h1>
          <div ref={heroImgRef} className="hero-img">
            <img
              loading="eager"
              fetchPriority="high"
              id="bmCircle"
              src="/img/Hero banh mi circle bg.png"
              alt="Banh mi background circle"
            />
            <img
              loading="eager"
              fetchPriority="high"
              id="bmMain"
              src="/img/Hero banh mi.png"
              alt="Banh mi"
            />
          </div>
          <h1 ref={heroH1RightRef} className="hero-h1">Viet nam</h1>
        </div>

        <div ref={heroBottomRef} className="hero-bottom">
          <p className="hero-b1">/ˌbɑːn ˈmiː/ (noun)</p>
          <p ref={heroB2Ref} className="hero-b2">
            More than just a sandwich, it's a legendary, crispy flavor that
            resonates through generations. Feel the soul of Vietnam, with every
            bite.
          </p>
          <div className="hero-b3">
            <p>Discover the crunch</p>
            <i id="heroIcon" className="ph-fill ph-arrow-down" />
          </div>
        </div>
      </section>
      <div className="spacer" />
    </>
  );
};
