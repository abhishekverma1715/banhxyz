import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, SplitText } from '../utils/gsap';

export const Milestone = () => {
  const stickyWrapRef = useRef(null);
  const ms2Ref = useRef(null);
  const ms3Ref = useRef(null);
  const ms2H2Ref = useRef(null);
  const ms2PRef = useRef(null);
  const ms2ImgRef = useRef(null);
  const ms3H2Ref = useRef(null);
  const ms3PRef = useRef(null);
  const ms3ImgRef = useRef(null);

  useEffect(() => {
    if (!stickyWrapRef.current) return;

    const isDesktop = window.innerWidth >= 992;

    const ms2H2ST = new SplitText(ms2H2Ref.current, {
      type: 'lines, words, chars',
      mask: 'lines',
    });
    const ms2PST = new SplitText(ms2PRef.current, {
      type: 'lines, words, chars',
      mask: 'lines',
    });
    const ms3H2ST = new SplitText(ms3H2Ref.current, {
      type: 'lines, words, chars',
      mask: 'lines',
    });
    const ms3PST = new SplitText(ms3PRef.current, {
      type: 'lines, words, chars',
      mask: 'lines',
    });

    const msTl = gsap.timeline({
      scrollTrigger: {
        trigger: stickyWrapRef.current,
        start: isDesktop ? '10% top' : 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
    });

    msTl.to(ms2Ref.current, { scale: 0.8, rotate: 5, opacity: 0.5 });
    msTl.to(ms3Ref.current, { scale: 0.8, rotate: -5 });

    const msTl2 = gsap.timeline({
      scrollTrigger: {
        trigger: stickyWrapRef.current,
        start: 'top 50%',
        end: 'bottom bottom',
        toggleActions: 'play none none none',
      },
    });

    msTl2
      .from(ms2H2ST.lines, { y: 150, stagger: 0.1 })
      .from(ms2PST.lines, { y: 100, stagger: 0.1 }, '<0.1')
      .fromTo(
        ms2ImgRef.current,
        { clipPath: 'inset(50% 50% 50% 50%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          ease: 'none',
        },
        '<0.2'
      );

    const msTl3 = gsap.timeline({
      scrollTrigger: {
        trigger: stickyWrapRef.current,
        start: isDesktop ? '60% 85%' : '40% 50%',
        end: 'bottom bottom',
        toggleActions: 'play none none none',
      },
    });

    msTl3
      .from(ms3H2ST.lines, { y: 150, stagger: 0.1 })
      .from(ms3PST.lines, { y: 100, stagger: 0.1 }, '<0.1')
      .fromTo(
        ms3ImgRef.current,
        { clipPath: 'inset(50% 50% 50% 50%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          ease: 'none',
        },
        '<0.1'
      );

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === stickyWrapRef.current) t.kill();
      });
      ms2H2ST.revert();
      ms2PST.revert();
      ms3H2ST.revert();
      ms3PST.revert();
    };
  }, []);

  return (
    <div ref={stickyWrapRef} className="milestone-sticky">
      {/* ms 2 (1958) */}
      <section
        ref={ms2Ref}
        className="milestone row-reverse ms-sticky flex flex-row-reverse justify-center items-center w-full h-screen gap-20 bg-[#d4a373] sticky top-0 max-lg:flex-col max-lg:gap-10 max-lg:relative"
        id="ms2"
      >
        <div className="ms-content flex flex-col w-1/2 h-full justify-between gap-10 max-lg:w-full max-lg:h-auto max-sm:justify-center">
          <div className="ms-header flex flex-col items-start justify-start w-[min(25rem,100%)] gap-2">
            <h2 ref={ms2H2Ref}>The rebirth</h2>
            <p ref={ms2PRef}>
              At a small bakery called Hòa Mã, the baguette was transformed. By
              adding rice flour for a lighter crunch and stuffing it with local
              flavors, the modern Banh mi was born and designed for the vibrant,
              fast-paced life of the city
            </p>
          </div>
          <img
            loading="lazy"
            className="max-lg:w-3/5 max-sm:w-full"
            src="/img/1958.svg"
            alt="1958"
          />
        </div>

        <div
          ref={ms2ImgRef}
          className="ms-img-wrap-border w-1/2 h-full border-[0.8rem] border-[#f5ecd7] overflow-hidden aspect-[3/4] max-lg:w-full max-lg:border-[0.5rem]"
        >
          <img
            loading="lazy"
            className="h-full object-cover"
            src="/img/Banh mi 1958.png"
            alt="Banh mi 1958"
          />
        </div>
      </section>

      {/* ms 3 (2011) */}
      <section
        ref={ms3Ref}
        className="milestone ms-sticky flex justify-center items-center w-full h-screen gap-20 bg-[#d4a373] sticky top-0 max-lg:flex-col max-lg:gap-10 max-lg:relative"
        id="ms3"
      >
        <div className="ms-content flex flex-col w-1/2 h-full justify-between gap-10 max-lg:w-full max-lg:h-auto max-sm:justify-center">
          <div className="ms-header flex flex-col items-start justify-start w-[min(25rem,100%)] gap-2">
            <h2 ref={ms3H2Ref}>Global recognition</h2>
            <p ref={ms3PRef}>
              The word "Banh Mi" officially entered the Oxford English
              Dictionary. No longer just a sandwich, but a global culinary
              ambassador representing the resilience and creativity of Vietnam
            </p>
          </div>
          <img
            loading="lazy"
            className="max-lg:w-3/5 max-sm:w-full"
            src="/img/2011.svg"
            alt="2011"
          />
        </div>

        <div
          ref={ms3ImgRef}
          className="ms-img-wrap-border w-1/2 h-full border-[0.8rem] border-[#f5ecd7] overflow-hidden aspect-[3/4] max-lg:w-full max-lg:border-[0.5rem]"
        >
          <img
            loading="lazy"
            className="h-full object-cover"
            src="/img/Banh mi 2011.png"
            alt="Banh mi 2011"
          />
        </div>
      </section>
      <div className="spacer w-full h-[15rem] max-lg:h-[10rem]" />
    </div>
  );
};
