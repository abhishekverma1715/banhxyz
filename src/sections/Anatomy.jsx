import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, SplitText } from '../utils/gsap';

export const Anatomy = () => {
  const wrapperRef = useRef(null);
  const preH1Ref = useRef(null);
  const preImgWrapRef = useRef(null);
  const preImgRef = useRef(null);
  const mainAnatomyRef = useRef(null);
  const startRedRef = useRef(null);
  const anabmRef = useRef(null);
  const list1Ref = useRef(null);
  const list2Ref = useRef(null);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const isDesktop = window.innerWidth >= 992;
    let preH1ST;

    const ctx = gsap.context(() => {
      preH1ST = new SplitText(preH1Ref.current, {
        type: 'lines, words, chars',
        mask: 'lines',
      });

      // Set proper initial states using gsap.set()
      gsap.set(preH1ST.lines, { y: 150 });
      gsap.set(preImgRef.current, { scale: 0.5, opacity: 0 });
      gsap.set(preImgWrapRef.current, { opacity: 0, scale: 0.8, y: 40 });
      gsap.set(mainAnatomyRef.current, { clipPath: 'polygon(60% 0, 60% 0, 40% 100%, 40% 100%)' });
      gsap.set(startRedRef.current, { scale: 0, opacity: 0 });
      gsap.set(anabmRef.current, { scale: 0, opacity: 0 });

      const list1Items = list1Ref.current.querySelectorAll('p');
      const list2Items = list2Ref.current.querySelectorAll('p');
      gsap.set(list1Items, { opacity: 0 });
      gsap.set(list2Items, { opacity: 0 });

      const imgPreMove = gsap
        .timeline({
          delay: 3,
          repeat: -1,
          yoyo: true,
          paused: true,
        })
        .to(preImgWrapRef.current, {
          y: '-24px',
          duration: 1,
          ease: 'power1.inOut',
        });

      const imgMainMove = gsap
        .timeline({
          delay: 3,
          repeat: -1,
          yoyo: true,
          paused: true,
        })
        .to(anabmRef.current, {
          y: isDesktop ? '-24px' : '-16px',
          duration: 1,
          ease: 'power1.inOut',
        });

      const preAnaTl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top 50%',
          end: 'bottom bottom',
          toggleActions: 'play none none reverse',
        },
      });

      preAnaTl.fromTo(
        preH1ST.lines,
        { y: 150 },
        { y: 0, stagger: 0.1, immediateRender: false }
      );
      
      preAnaTl.fromTo(
        preImgRef.current,
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, immediateRender: false },
        '<0.1'
      );
      
      preAnaTl.fromTo(
        preImgWrapRef.current,
        {
          opacity: 0,
          scale: 0.8,
          y: 40,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          immediateRender: false,
          onComplete: () => imgPreMove.play(),
          onReverseComplete: () => {
            imgPreMove.pause();
            gsap.set(preImgWrapRef.current, { clearProps: 'y' });
          },
        },
        '<'
      );

      const anaTl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: isDesktop ? '20% 10%' : '20% top',
          end: 'bottom bottom',
          scrub: 1,
          onLeaveBack: () => {
            imgMainMove.pause();
            gsap.set(anabmRef.current, { clearProps: 'y' });
          },
        },
      });

      anaTl
        .to(preImgWrapRef.current, { scale: 0, duration: 1 })
        .fromTo(
          mainAnatomyRef.current,
          { clipPath: 'polygon(60% 0, 60% 0, 40% 100%, 40% 100%)' },
          {
            clipPath: 'polygon(0% 0, 100% 0, 100% 100%, 0% 100%)',
            ease: 'none',
            duration: 1,
            immediateRender: false,
          },
          '<0.2'
        )
        .fromTo(
          startRedRef.current,
          {
            scale: 0,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            ease: 'none',
            immediateRender: false,
          },
          '<0.6'
        )
        .fromTo(
          anabmRef.current,
          {
            scale: 0,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            ease: 'none',
            immediateRender: false,
            onComplete: () => imgMainMove.play(),
          },
          '<0.1'
        );

      const anaTl2 = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: '50% 20%',
          end: 'bottom bottom',
          toggleActions: 'play none none reverse',
        },
      });

      anaTl2
        .fromTo(
          list1Items,
          { opacity: 0 },
          {
            opacity: 1,
            stagger: { each: 0.1, from: 'start' },
            immediateRender: false,
          }
        )
        .fromTo(
          list2Items,
          { opacity: 0 },
          {
            opacity: 1,
            stagger: { each: 0.1, from: 'end' },
            immediateRender: false,
          },
          '<'
        );
    }, wrapperRef);

    return () => {
      ctx.revert();
      if (preH1ST) preH1ST.revert();
    };
  }, []);

  return (
    <div ref={wrapperRef} className="anatomy-wrapper">
      <div className="anatomy-container">
        {/* pre anatomy */}
        <section className="pre-anatomy" id="anatomy">
          <h1 ref={preH1Ref}>
            Discover the delicate balance of textures and flavors that made the
            world fall in love
          </h1>
          <div ref={preImgWrapRef} className="pre-img">
            <img
              ref={preImgRef}
              loading="lazy"
              src="/img/Preanatomy banh mi.png"
              alt="Preanatomy"
            />
          </div>
        </section>

        {/* main anatomy */}
        <section
          ref={mainAnatomyRef}
          className="anatomy"
          style={{ clipPath: 'polygon(60% 0, 60% 0, 40% 100%, 40% 100%)' }}
        >
          <div className="ana-wrap">
            <div className="ana-row">
              <div className="ana-img-wrap">
                <img loading="lazy" src="/img/Carrot.png" alt="Carrot" />
              </div>
              <h1 className="ana-h1">Anatomy</h1>
              <div className="ana-img-wrap is-right">
                <img loading="lazy" src="/img/Cucumber.png" alt="Cucumber" />
              </div>
            </div>

            <div className="ana-mid">
              <div ref={list1Ref} id="list1" className="ana-list">
                <p>Baguatte</p>
                <p>Cold cuts</p>
                <p>Pork rolls</p>
                <p>Margarine</p>
                <p>Sauce</p>
                <p>Pate</p>
              </div>
              <div className="ana-banhmi">
                <img
                  ref={startRedRef}
                  loading="lazy"
                  id="startRed"
                  src="/img/Star red 10.svg"
                  alt="Star red"
                />
                <img
                  ref={anabmRef}
                  loading="lazy"
                  id="anabm"
                  src="/img/Anatomy banh mi.png"
                  alt="Anatomy of banh mi"
                />
              </div>
              <div ref={list2Ref} id="list2" className="ana-list">
                <p>Pickled daikon</p>
                <p>Cucumber</p>
                <p>Coriander</p>
                <p>Pepper</p>
                <p>Carrot</p>
                <p>Chilli</p>
              </div>
            </div>

            <div className="ana-row">
              <div className="ana-img-wrap">
                <img loading="lazy" src="/img/Coriander.png" alt="Coriander" />
              </div>
              <h1 className="ana-h1">Bánh mì</h1>
              <div className="ana-img-wrap is-right">
                <img loading="lazy" src="/img/Chilli.png" alt="Chilli" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
