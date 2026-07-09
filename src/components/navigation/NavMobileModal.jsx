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
    <nav ref={wrapRef} className="navmobile-wrap" style={{ display: 'none' }}>
      <div ref={menuRef} className="navmobile">
        <a href="#hero" onClick={handleLinkClick}>Top</a>
        <a href="#evolution" onClick={handleLinkClick}>Story</a>
        <a href="#anatomy" onClick={handleLinkClick}>Anatomy</a>
        <a href="#fillings" onClick={handleLinkClick}>Fillings</a>
        <a href="#street" onClick={handleLinkClick}>Street icon</a>
      </div>
      <p ref={closeRef} onClick={onClose} style={{ opacity: 0 }}>Close</p>
    </nav>
  );
};
