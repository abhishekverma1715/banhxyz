import React, { useEffect, useRef } from 'react';
import { ScrollTrigger } from '../../utils/gsap';

export const FixedMenuButton = ({ onOpenMenu }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    if (!menuRef.current) return;

    const footerSection = document.querySelector('.footer');

    const trigger = ScrollTrigger.create({
      start: 1000,
      endTrigger: footerSection || document.body,
      end: 'top 20%',
      toggleClass: {
        targets: menuRef.current,
        className: 'is-appear',
      },
      invalidateOnRefresh: true,
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <div ref={menuRef} onClick={onOpenMenu} className="fixed-menu">
      <div className="menu-mobile on-desktop">Menu</div>
    </div>
  );
};
