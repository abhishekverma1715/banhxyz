import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, SplitText } from '../utils/gsap';

export const Evolution = () => {
  const wrapRef = useRef(null);
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const msTopRef = useRef(null);
  const msH2Ref = useRef(null);
  const msPRef = useRef(null);

  useEffect(() => {
    if (!wrapRef.current) return;

    const evoH1ST = new SplitText(h1Ref.current, {
      type: 'lines, words, chars',
      mask: 'lines',
    });

    const evoPST = new SplitText(pRef.current, {
      type: 'lines, words, chars',
      mask: 'lines',
    });

    const msH2ST = new SplitText(msH2Ref.current, {
      type: 'lines, words, chars',
      mask: 'lines',
    });

    const msPST = new SplitText(msPRef.current, {
      type: 'lines, words, chars',
      mask: 'lines',
    });

    const evoImgs = wrapRef.current.querySelectorAll('.evo-img');

    const evoTl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapRef.current,
        start: 'top 30%',
        end: 'bottom bottom',
        toggleActions: 'play none none none',
      },
    });

    if (window.innerWidth >= 601) {
      evoTl.fromTo(
        evoImgs,
        { clipPath: 'inset(50% 50% 50% 50%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 0.5,
          stagger: 0.1,
        }
      );
    }

    evoTl
      .from(evoH1ST.lines, { y: 150, stagger: 0.1 }, '<0.1')
      .from(evoPST.lines, { y: 100, stagger: 0.1 }, '<0.2');

    const evoTl2 = gsap.timeline({
      scrollTrigger: {
        trigger: wrapRef.current,
        start: '20% top',
        end: '80% bottom',
        scrub: 1,
      },
    });

    evoTl2.fromTo(
      msTopRef.current,
      { clipPath: 'inset(50% 50% 50% 50%)' },
      {
        clipPath: 'inset(0% 0% 0% 0%)',
        ease: 'none',
      }
    );

    const evoTl3 = gsap.timeline({
      scrollTrigger: {
        trigger: wrapRef.current,
        start: '50% top',
        end: 'bottom bottom',
        toggleActions: 'play none none none',
      },
    });

    evoTl3
      .from(msH2ST.lines, { y: 150, stagger: 0.1 })
      .from(msPST.lines, { y: 100, stagger: 0.1 }, '<0.1');

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === wrapRef.current) t.kill();
      });
      evoH1ST.revert();
      evoPST.revert();
      msH2ST.revert();
      msPST.revert();
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="evolution-wrap flex justify-center items-start w-full h-[300vh]"
      id="evolution"
    >
      <div className="evo-container flex justify-center items-center sticky top-0 w-full h-screen">
        <section className="evolution flex justify-center items-center w-full relative">
          <div className="evo-wrap flex items-center justify-center flex-col gap-2 w-[min(45rem,100%)] max-[1366px]:w-[min(40rem,100%)] max-md:w-[min(32rem,100%)] max-sm:w-[min(28rem,100%)] relative z-[1]">
            <h1 ref={h1Ref} className="text-center">
              The Evolution of bánh mì
            </h1>
            <p ref={pRef} className="text-center w-[min(20rem,100%)]">
              From a French delicacy to a Vietnamese street icon
            </p>
          </div>

          <div className="evo-imgs absolute w-full h-[100dvh] grid grid-cols-12 grid-rows-3 gap-6 p-6 z-0 max-sm:hidden">
            <div className="evo-img-wrap col-start-1 row-start-2 w-[14rem] max-[1439px]:w-[10rem] max-lg:w-[12rem] max-md:w-[10rem] aspect-[2/3]">
              <img
                loading="lazy"
                className="evo-img"
                src="/img/Evolution 1.png"
                alt="Evolution of banh mi 1"
              />
            </div>
            <div className="evo-img-wrap col-start-4 self-center justify-self-end w-[10rem] max-[1439px]:w-[9rem] max-lg:w-[10rem] max-md:w-[8rem] aspect-square">
              <img
                loading="lazy"
                className="evo-img"
                src="/img/Evolution 2.png"
                alt="Evolution of banh mi 2"
              />
            </div>
            <div className="evo-img-wrap col-start-7 col-end-9 self-start w-[14rem] max-[1439px]:w-[12rem] max-lg:w-[12rem] max-md:w-[10rem] aspect-[4/3]">
              <img
                loading="lazy"
                className="evo-img"
                src="/img/Evolution 3.png"
                alt="Evolution of banh mi 3"
              />
            </div>
            <div className="evo-img-wrap col-start-12 row-start-2 self-center justify-self-end w-[14rem] max-[1439px]:w-[10rem] max-lg:w-[12rem] max-md:w-[10rem] aspect-[2/3]">
              <img
                loading="lazy"
                className="evo-img"
                src="/img/Evolution 4.png"
                alt="Evolution of banh mi 4"
              />
            </div>
            <div className="evo-img-wrap col-start-9 row-start-3 self-start justify-self-end w-[10rem] max-[1439px]:w-[9rem] max-lg:w-[10rem] max-md:w-[8rem] aspect-square">
              <img
                loading="lazy"
                className="evo-img"
                src="/img/Evolution 5.png"
                alt="Evolution of banh mi 5"
              />
            </div>
            <div className="evo-img-wrap col-start-5 col-end-7 row-start-3 self-end justify-self-end w-[14rem] max-[1439px]:w-[12rem] max-lg:w-[12rem] max-md:w-[10rem] aspect-[4/3]">
              <img
                loading="lazy"
                className="evo-img"
                src="/img/Evolution 6.png"
                alt="Evolution of banh mi 6"
              />
            </div>
          </div>
        </section>

        {/* Milestone 1 (1859) pinned on top of evolution inside container */}
        <section
          ref={msTopRef}
          id="msTop"
          className="milestone flex justify-center items-center w-full h-screen gap-20 bg-[#d4a373] absolute z-[2] max-lg:flex-col max-lg:gap-10 max-sm:justify-center"
        >
          <div className="ms-content flex flex-col w-1/2 h-full justify-between gap-10 max-lg:w-full max-lg:h-auto max-sm:justify-center">
            <div className="ms-header flex flex-col items-start justify-start w-[min(25rem,100%)] gap-2">
              <h2 ref={msH2Ref}>The arrival</h2>
              <p ref={msPRef}>
                Originally brought to Saigon as the French Baguette, it was a
                luxury reserved for the elite, known simply as Western Bread
              </p>
            </div>
            <img
              loading="lazy"
              className="max-lg:w-3/5 max-sm:w-full"
              src="/img/1859.svg"
              alt="1859"
            />
          </div>
          <div className="ms-img-wrap-border w-1/2 h-full border-[0.8rem] border-[#f5ecd7] overflow-hidden aspect-[3/4] max-lg:w-full max-lg:border-[0.5rem]">
            <img
              loading="lazy"
              className="h-full object-cover"
              src="/img/Banh mi 1859.png"
              alt="Banh mi 1859"
            />
          </div>
        </section>
      </div>
    </div>
  );
};
