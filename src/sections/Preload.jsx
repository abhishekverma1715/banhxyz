import React from 'react';

export const Preload = ({ preloadRef, bgCircleRef, contentRef, h1Refs }) => {
  return (
    <section ref={preloadRef} className="preload">
      <div className="preload-wrap">
        <div ref={bgCircleRef} className="bg-circle" />
        <div ref={contentRef} className="preload-content">
          <h1 ref={(el) => (h1Refs.current[0] = el)}>Crispy</h1>
          <h1 ref={(el) => (h1Refs.current[1] = el)}>Tasty</h1>
          <h1 ref={(el) => (h1Refs.current[2] = el)}>Irresistible</h1>
        </div>
      </div>
    </section>
  );
};
