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
    <div ref={wrapRef} className="evolution-wrap" id="evolution">
      <div className="evo-container">
        <section className="evolution">
          <div className="evo-wrap">
            <h1 ref={h1Ref}>The Evolution of bánh mì</h1>
            <p ref={pRef}>From a French delicacy to a Vietnamese street icon</p>
          </div>

          <div className="evo-imgs">
            <div className="evo-img-wrap">
              <img
                loading="lazy"
                className="evo-img"
                src="/img/Evolution 1.png"
                alt="Evolution of banh mi 1"
              />
            </div>
            <div className="evo-img-wrap">
              <img
                loading="lazy"
                className="evo-img"
                src="/img/Evolution 2.png"
                alt="Evolution of banh mi 2"
              />
            </div>
            <div className="evo-img-wrap">
              <img
                loading="lazy"
                className="evo-img"
                src="/img/Evolution 3.png"
                alt="Evolution of banh mi 3"
              />
            </div>
            <div className="evo-img-wrap">
              <img
                loading="lazy"
                className="evo-img"
                src="/img/Evolution 4.png"
                alt="Evolution of banh mi 4"
              />
            </div>
            <div className="evo-img-wrap">
              <img
                loading="lazy"
                className="evo-img"
                src="/img/Evolution 5.png"
                alt="Evolution of banh mi 5"
              />
            </div>
            <div className="evo-img-wrap">
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
        <section ref={msTopRef} id="msTop" className="milestone">
          <div className="ms-content">
            <div className="ms-header">
              <h2 ref={msH2Ref}>The arrival</h2>
              <p ref={msPRef}>
                Originally brought to Saigon as the French Baguette, it was a
                luxury reserved for the elite, known simply as Western Bread
              </p>
            </div>
            <img loading="lazy" src="/img/1859.svg" alt="1859" />
          </div>
          <div className="ms-img-wrap-border">
            <img
              loading="lazy"
              src="/img/Banh mi 1859.png"
              alt="Banh mi 1859"
            />
          </div>
        </section>
      </div>
    </div>
  );
};
