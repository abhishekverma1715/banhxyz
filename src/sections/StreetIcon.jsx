import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../utils/gsap';

export const StreetIcon = () => {
  const sectionRef = useRef(null);
  const h1BigTypoRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !h1BigTypoRef.current) return;

    const isDesktop = window.innerWidth >= 992;

    const streetTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: isDesktop ? 'top 5%' : 'top 40%',
        end: isDesktop ? '100% 90%' : '100% 80%',
        scrub: 1,
      },
    });

    streetTl.fromTo(
      h1BigTypoRef.current,
      { clipPath: 'inset(0% 0% 100% 0%)' },
      {
        clipPath: 'inset(0% 0% 0% 0%)',
        ease: 'none',
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === sectionRef.current) t.kill();
      });
    };
  }, []);

  return (
    <>
      <div className="spacer w-full h-[15rem] max-lg:h-[10rem]" />
      <section
        ref={sectionRef}
        className="street flex justify-center items-center w-full h-auto py-40 max-lg:pb-32 px-0 relative"
        id="street"
      >
        <div className="st-wrap flex flex-col justify-center items-center px-4 z-[1] w-full">
          <div className="st-img-row flex justify-between items-end px-20 max-lg:px-10 max-[679px]:justify-center w-full">
            <div className="st-image flex justify-center items-end w-2/5 max-lg:w-1/2 aspect-[3/2] max-[679px]:hidden">
              <img
                loading="eager"
                src="/img/Street image 1.png"
                alt="Street image"
              />
            </div>
            <div className="st-img-paper w-80 max-lg:w-80 max-[679px]:w-60">
              <img
                loading="eager"
                src="/img/Popular dish.png"
                alt="Popular dish"
              />
            </div>
          </div>

          <div className="st-big-typo flex justify-center items-center relative">
            <h1
              ref={h1BigTypoRef}
              id="h1BigTypo"
              className="text-center text-[15rem] leading-[1.1] w-[min(100rem,100%)] text-black absolute z-[1] max-[1366px]:text-[11.5rem] max-[1366px]:w-[min(75rem,100%)] max-lg:text-[10rem] max-lg:w-[min(65rem,100%)] max-md:text-[6.8rem] max-md:w-[min(45rem,100%)] max-sm:text-[5rem] max-sm:w-[min(35rem,100%)]"
            >
              Bánh mì can easily be found anywhere on the streets of Vietnam
            </h1>
            <h1 className="text-center text-[15rem] leading-[1.1] w-[min(100rem,100%)] text-[#d4a373] max-[1366px]:text-[11.5rem] max-[1366px]:w-[min(75rem,100%)] max-lg:text-[10rem] max-lg:w-[min(65rem,100%)] max-md:text-[6.8rem] max-md:w-[min(45rem,100%)] max-sm:text-[5rem] max-sm:w-[min(35rem,100%)]">
              Bánh mì can easily be found anywhere on the streets of Vietnam
            </h1>
          </div>

          <div className="st-img-row flex justify-between items-start px-20 max-lg:px-10 max-[679px]:justify-center w-full">
            <div className="st-img-paper paper-bottom w-48 max-[679px]:w-[9.3rem]">
              <img
                loading="eager"
                src="/img/Delicious flavor.png"
                alt="Delicious flavor"
              />
            </div>
            <div className="st-image flex justify-center items-end w-2/5 max-lg:w-1/2 aspect-[3/2] max-[679px]:hidden">
              <img
                loading="eager"
                src="/img/Street image 2.png"
                alt="Street image"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="spacer w-full h-[15rem] max-lg:h-[10rem]" />
    </>
  );
};
