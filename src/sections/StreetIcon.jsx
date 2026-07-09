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
      <div className="spacer" />
      <section ref={sectionRef} className="street" id="street">
        <div className="st-wrap">
          <div className="st-img-row">
            <div className="st-image">
              <img
                loading="eager"
                src="/img/Street image 1.png"
                alt="Street image"
              />
            </div>
            <div className="st-img-paper">
              <img
                loading="eager"
                src="/img/Popular dish.png"
                alt="Popular dish"
              />
            </div>
          </div>

          <div className="st-big-typo">
            <h1 ref={h1BigTypoRef} id="h1BigTypo">
              Bánh mì can easily be found anywhere on the streets of Vietnam
            </h1>
            <h1>
              Bánh mì can easily be found anywhere on the streets of Vietnam
            </h1>
          </div>

          <div className="st-img-row">
            <div className="st-img-paper paper-bottom">
              <img
                loading="eager"
                src="/img/Delicious flavor.png"
                alt="Delicious flavor"
              />
            </div>
            <div className="st-image">
              <img
                loading="eager"
                src="/img/Street image 2.png"
                alt="Street image"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="spacer" />
    </>
  );
};
