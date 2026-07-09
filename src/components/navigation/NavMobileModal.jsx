import React, { useRef, useEffect } from 'react';
import { gsap } from '../../utils/gsap';

export const NavMobileModal = ({ isOpen, onClose }) => {
  const wrapRef = useRef(null);
  const menuRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    if (!wrapRef.current || !menuRef.current || !closeRef.current) return;

    if (isOpen) {
      gsap.to(wrapRef.current, { display: 'flex', duration: 0 });
      gsap.to(closeRef.current, { opacity: 1, duration: 0.2 });
      gsap.fromTo(
        menuRef.current,
        { rotate: 0, xPercent: 100, yPercent: -15 },
        { rotate: -10, xPercent: 8, yPercent: -15, duration: 0.4, ease: 'power2.out' }
      );
    } else {
      gsap.to(closeRef.current, { opacity: 0, duration: 0.2 });
      gsap.fromTo(
        menuRef.current,
        { rotate: -10, xPercent: 8, yPercent: -15 },
        {
          rotate: 0,
          xPercent: 100,
          yPercent: -15,
          duration: 0.3,
          ease: 'power2.in',
          onComplete: () => {
            if (wrapRef.current) gsap.set(wrapRef.current, { display: 'none' });
          },
        }
      );
    }
  }, [isOpen]);

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <nav
      ref={wrapRef}
      onClick={onClose}
      className="navmobile-wrap hidden flex-col justify-center items-center fixed z-[100] top-0 right-0 w-[10rem] max-lg:w-[11.5rem]"
    >
      <div
        ref={menuRef}
        onClick={(e) => e.stopPropagation()}
        className="navmobile flex flex-col justify-start items-start gap-2 w-full pt-12 pr-8 pb-6 pl-6 bg-[#d4a373] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.3)]"
      >
        <a href="#hero" onClick={handleLinkClick} className="text-base max-lg:text-xl hover:text-[#f5ecd7] transition-colors">
          Top
        </a>
        <a href="#evolution" onClick={handleLinkClick} className="text-base max-lg:text-xl hover:text-[#f5ecd7] transition-colors">
          Story
        </a>
        <a href="#anatomy" onClick={handleLinkClick} className="text-base max-lg:text-xl hover:text-[#f5ecd7] transition-colors">
          Anatomy
        </a>
        <a href="#fillings" onClick={handleLinkClick} className="text-base max-lg:text-xl hover:text-[#f5ecd7] transition-colors">
          Fillings
        </a>
        <a href="#street" onClick={handleLinkClick} className="text-base max-lg:text-xl hover:text-[#f5ecd7] transition-colors">
          Street icon
        </a>
      </div>
      <p
        ref={closeRef}
        onClick={onClose}
        className="font-['Asap_Condensed'] font-bold text-[1.65rem] leading-[0.7] translate-x-[20px] cursor-pointer"
      >
        Close
      </p>
    </nav>
  );
};
