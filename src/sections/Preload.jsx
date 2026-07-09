import React from 'react';

export const Preload = ({ preloadRef, bgCircleRef, contentRef, h1Refs }) => {
  return (
    <section
      ref={preloadRef}
      className="preload flex justify-center items-center w-full h-[100dvh] fixed z-10 top-0 left-0"
    >
      <div className="preload-wrap flex flex-col justify-center items-center relative w-full h-full">
        <div
          ref={bgCircleRef}
          className="bg-circle w-[150rem] h-[150rem] max-md:w-[100rem] max-md:h-[100rem] rounded-[999rem] bg-[#d4a373] absolute z-0"
        />
        <div
          ref={contentRef}
          className="preload-content flex flex-col justify-center items-center w-full h-full z-[1]"
        >
          <h1 ref={(el) => (h1Refs.current[0] = el)}>Crispy</h1>
          <h1 ref={(el) => (h1Refs.current[1] = el)}>Tasty</h1>
          <h1 ref={(el) => (h1Refs.current[2] = el)}>Irresistible</h1>
        </div>
      </div>
    </section>
  );
};
