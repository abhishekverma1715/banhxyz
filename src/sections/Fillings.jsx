import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, SplitText } from '../utils/gsap';
import { FillingsSlider } from '../components/slider/FillingsSlider';

export const Fillings = () => {
  const wrapperRef = useRef(null);
  const flH1TopRef = useRef(null);
  const flH1MidRef = useRef(null);
  const flH1BottomRef = useRef(null);
  const flTextRef = useRef(null);
  const slideWrapRef = useRef(null);
  const carouselSectionRef = useRef(null);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const flH1TopST = new SplitText(flH1TopRef.current, {
      type: 'lines, words, chars',
      mask: 'lines',
    });
    const flH1MidST = new SplitText(flH1MidRef.current, {
      type: 'lines, words, chars',
      mask: 'lines',
    });
    const flH1BottomST = new SplitText(flH1BottomRef.current, {
      type: 'lines, words, chars',
      mask: 'lines',
    });

    const flTextST = new SplitText(flTextRef.current, {
      type: 'lines, words, chars',
      mask: 'lines',
    });

    const flBgs = wrapperRef.current.querySelectorAll('.fillings-bg');

    const flTl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: 'top 10%',
        end: 'bottom bottom',
        toggleActions: 'play none none reverse',
      },
    });

    flTl
      .from(flH1TopST.lines, { y: 150 })
      .from(
        flBgs[0],
        { clipPath: 'inset(0% 50% 0% 50%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          ease: 'none',
        }
      )
      .from(flH1MidST.lines, { y: 150 }, '<0.1')
      .from(
        flBgs[1],
        { clipPath: 'inset(0% 50% 0% 50%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          ease: 'none',
        },
        '<0.1'
      )
      .from(flH1BottomST.lines, { y: 150 }, '<0.2')
      .from(
        flBgs[2],
        { clipPath: 'inset(0% 50% 0% 50%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          ease: 'none',
        },
        '<0.2'
      );

    const flRows = wrapperRef.current.querySelectorAll('.fillings-content');

    const flTl2 = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
    });

    flTl2
    gsap.set(carouselSectionRef.current, {
      autoAlpha: 0,
    });

    flTl2
      .to(carouselSectionRef.current, {
        autoAlpha: 1,
        duration: 0.1,
      })
      .to([flRows[0], flRows[2]], {
        xPercent: 300,
        duration: 1.2,
        ease: 'none',
        rotate: 80,
        scale: 0.2,
      })
      .to(
        flRows[1],
        {
          xPercent: -300,
          duration: 1.2,
          ease: 'none',
          rotate: -80,
          scale: 0.2,
        },
        '<'
      )
      .fromTo(
        slideWrapRef.current,
        { clipPath: 'inset(0% 50% 0% 50% )', scale: 0.2 },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          ease: 'none',
          scale: 1,
        },
        '<0.3'
      );

    const flTl3 = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: '60% 50%',
        end: 'bottom bottom',
        toggleActions: 'play none none reverse',
      },
    });

    flTl3
      .from(flTextST.lines, { y: 50, stagger: 0.01 })
      .from('#btnPrev', { xPercent: 80, rotate: 360, opacity: 0 }, '<0.1')
      .from('#btnNext', { xPercent: -80, rotate: 360, opacity: 0 }, '<');

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === wrapperRef.current) t.kill();
      });
      flH1TopST.revert();
      flH1MidST.revert();
      flH1BottomST.revert();
      flTextST.revert();
    };
  }, []);

  return (
    <div ref={wrapperRef} className="fl-wrapper">
      <div className="fl-container">
        <section className="fillings" id="fillings">
          <div className="fillings-wrap">
            <div className="fillings-content">
              <h1 ref={flH1TopRef}>Types of</h1>
              <div className="fillings-bg">
                <img
                  loading="eager"
                  src="/img/Topping 1.png"
                  alt="Banh mi small image"
                />
              </div>
            </div>

            <div className="fillings-content row-reverse">
              <h1 ref={flH1MidRef}>Bánh mì</h1>
              <div className="fillings-bg">
                <img
                  loading="eager"
                  src="/img/Topping 2.png"
                  alt="Banh mi small image"
                />
              </div>
            </div>

            <div className="fillings-content">
              <h1 ref={flH1BottomRef}>Fillings</h1>
              <div className="fillings-bg">
                <img
                  loading="eager"
                  src="/img/Topping 3.png"
                  alt="Banh mi small image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Slide */}
        <section ref={carouselSectionRef} className="fl-carousel">
          <div className="fl-wrap">
            <p ref={flTextRef}>
              Banh mi has different fillings and can be paired with many
              Vietnamese dishes
            </p>

            <FillingsSlider slideWrapRef={slideWrapRef} />

            <div className="fl-btn">
              <div className="btn" id="btnPrev">
                <i className="ph-fill ph-arrow-left" />
              </div>
              <div className="btn" id="btnNext">
                <i className="ph-fill ph-arrow-right" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
