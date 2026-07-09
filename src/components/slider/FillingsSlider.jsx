import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const FillingsSlider = ({ slideWrapRef }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (!slideWrapRef.current) return;

    const carousel = new Swiper(slideWrapRef.current, {
      modules: [Navigation],
      wrapperClass: 'fl-slide',
      slideClass: 'fl-img',
      loop: true,
      navigation: {
        nextEl: '#btnNext',
        prevEl: '#btnPrev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1439: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      },
      speed: 500,
    });

    swiperRef.current = carousel;

    return () => {
      carousel.destroy(true, true);
    };
  }, [slideWrapRef]);

  const images = [
    '/img/Fillings 1.png',
    '/img/Fillings 2.png',
    '/img/Fillings 3.png',
    '/img/Fillings 4.png',
    '/img/Fillings 5.png',
    '/img/Fillings 6.png',
    '/img/Fillings 7.png',
    '/img/Fillings 8.png',
  ];

  return (
    <div
      ref={slideWrapRef}
      className="fl-slide-wrap flex justify-start items-center w-full relative"
    >
      <img
        loading="eager"
        id="curveTop"
        src="/img/Half circle top.svg"
        alt="half circle top"
      />
      <div className="fl-slide flex justify-start items-center w-full h-[40rem] max-xl:h-[32rem]">
        {images.map((src, index) => (
          <div
            key={index}
            className="fl-img flex flex-none w-[30rem] h-full aspect-[2/3] max-[540px]:w-[20rem]"
          >
            <img
              loading="eager"
              src={src}
              alt="Banh mi in life"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <img
        loading="eager"
        id="curveBottom"
        src="/img/Half circle bottom.svg"
        alt="half circle bottom"
      />
    </div>
  );
};
