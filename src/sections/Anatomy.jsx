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

    const preH1ST = new SplitText(preH1Ref.current, {
      type: 'lines, words, chars',
      mask: 'lines',
    });

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

    preAnaTl.from(preH1ST.lines, { y: 150, stagger: 0.1 });
    preAnaTl.from(
      preImgRef.current,
      { scale: 0.5, opacity: 0 },
      '<0.1'
    );
    preAnaTl.from(preImgWrapRef.current, {
      onComplete: () => imgPreMove.play(),
    });

    const anaTl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: isDesktop ? '20% 10%' : '20% top',
        end: 'bottom bottom',
        scrub: 1,
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
        },
        '<0.2'
      )
      .from(startRedRef.current, { scale: 0, opacity: 0 }, '<0.6')
      .from(anabmRef.current, { scale: 0, opacity: 0 }, '<0.1')
      .from(mainAnatomyRef.current, {
        onComplete: () => imgMainMove.play(),
      });

    const list1Items = list1Ref.current.querySelectorAll('p');
    const list2Items = list2Ref.current.querySelectorAll('p');

    const anaTl2 = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: '50% 20%',
        end: 'bottom bottom',
        toggleActions: 'play none none reverse',
      },
    });

    anaTl2
      .from(list1Items, {
        opacity: 0,
        stagger: { each: 0.1, from: 'start' },
      })
      .from(
        list2Items,
        { opacity: 0, stagger: { each: 0.1, from: 'end' } },
        '<'
      );

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === wrapperRef.current) t.kill();
      });
      imgPreMove.kill();
      imgMainMove.kill();
      preH1ST.revert();
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="anatomy-wrapper flex justify-center items-start w-full h-[400vh]"
    >
      <div className="anatomy-container flex justify-center items-center w-full h-[100dvh] sticky top-0">
        {/* pre anatomy */}
        <section
          className="pre-anatomy grid grid-rows-2 gap-6 w-full h-[100dvh]"
          id="anatomy"
        >
          <h1 ref={preH1Ref} className="w-[min(76rem,100%)] max-sm:text-[3.5rem]">
            Discover the delicate balance of textures and flavors that made the
            world fall in love
          </h1>
          <div
            ref={preImgWrapRef}
            className="pre-img flex justify-center items-center w-[min(45rem,100%)] max-xl:w-[40%] max-lg:w-[min(35rem,100%)] overflow-hidden justify-self-end self-end"
          >
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
          className="anatomy flex justify-center items-center w-full h-[100dvh] bg-[#d4a373] absolute"
          style={{ clipPath: 'polygon(60% 0, 60% 0, 40% 100%, 40% 100%)' }}
        >
          <div className="ana-wrap flex flex-col justify-between items-center w-full h-full z-[1]">
            <div className="ana-row grid grid-cols-[1fr_auto_1fr] gap-6 w-full max-sm:flex max-sm:justify-center">
              <div className="ana-img-wrap flex justify-center items-center w-[10rem] aspect-square max-md:w-4/5 max-sm:hidden">
                <img loading="lazy" src="/img/Carrot.png" alt="Carrot" />
              </div>
              <h1 className="ana-h1 justify-self-center self-center">Anatomy</h1>
              <div className="ana-img-wrap is-right flex justify-center items-center w-[10rem] aspect-square justify-self-end self-center max-md:w-4/5 max-sm:hidden">
                <img loading="lazy" src="/img/Cucumber.png" alt="Cucumber" />
              </div>
            </div>

            <div className="ana-mid grid grid-cols-[1fr_auto_1fr] gap-16 w-full max-md:grid-cols-[1fr_3fr_1fr] max-md:gap-6 max-[740px]:flex max-[740px]:flex-col max-[740px]:justify-center max-[740px]:items-center">
              <div
                ref={list1Ref}
                id="list1"
                className="ana-list flex flex-col items-end justify-self-end self-center max-[740px]:flex-row max-[740px]:flex-wrap max-[740px]:justify-center max-[740px]:gap-6 max-[740px]:w-[min(25rem,100%)]"
              >
                <p className="text-2xl max-lg:text-xl max-sm:text-[1.2rem]">Baguatte</p>
                <p className="text-2xl max-lg:text-xl max-sm:text-[1.2rem]">Cold cuts</p>
                <p className="text-2xl max-lg:text-xl max-sm:text-[1.2rem]">Pork rolls</p>
                <p className="text-2xl max-lg:text-xl max-sm:text-[1.2rem]">Margarine</p>
                <p className="text-2xl max-lg:text-xl max-sm:text-[1.2rem]">Sauce</p>
                <p className="text-2xl max-lg:text-xl max-sm:text-[1.2rem]">Pate</p>
              </div>
              <div className="ana-banhmi flex justify-center items-center justify-self-center relative w-[30rem] max-lg:w-[25rem] max-md:w-4/5 max-[740px]:w-3/5 aspect-[4/3]">
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
                  className="absolute z-[1]"
                  src="/img/Anatomy banh mi.png"
                  alt="Anatomy of banh mi"
                />
              </div>
              <div
                ref={list2Ref}
                id="list2"
                className="ana-list flex flex-col items-start justify-self-start self-center max-[740px]:flex-row max-[740px]:flex-wrap max-[740px]:justify-center max-[740px]:gap-6 max-[740px]:w-[min(25rem,100%)]"
              >
                <p className="text-2xl max-lg:text-xl max-sm:text-[1.2rem]">Pickled daikon</p>
                <p className="text-2xl max-lg:text-xl max-sm:text-[1.2rem]">Cucumber</p>
                <p className="text-2xl max-lg:text-xl max-sm:text-[1.2rem]">Coriander</p>
                <p className="text-2xl max-lg:text-xl max-sm:text-[1.2rem]">Pepper</p>
                <p className="text-2xl max-lg:text-xl max-sm:text-[1.2rem]">Carrot</p>
                <p className="text-2xl max-lg:text-xl max-sm:text-[1.2rem]">Chilli</p>
              </div>
            </div>

            <div className="ana-row grid grid-cols-[1fr_auto_1fr] gap-6 w-full max-sm:flex max-sm:justify-center">
              <div className="ana-img-wrap flex justify-center items-center w-[10rem] aspect-square max-md:w-4/5 max-sm:hidden">
                <img loading="lazy" src="/img/Coriander.png" alt="Coriander" />
              </div>
              <h1 className="ana-h1 justify-self-center self-center">Bánh mì</h1>
              <div className="ana-img-wrap is-right flex justify-center items-center w-[10rem] aspect-square justify-self-end self-center max-md:w-4/5 max-sm:hidden">
                <img loading="lazy" src="/img/Chilli.png" alt="Chilli" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
