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
    <div
      ref={menuRef}
      onClick={onOpenMenu}
      className="fixed-menu flex justify-center items-center pt-4 pr-6 pb-0 pl-0 fixed top-0 right-0 z-[8] translate-x-[150%] transition-transform duration-200 ease-out cursor-pointer [&.is-appear]:translate-x-0"
    >
      <div className="menu-mobile on-desktop flex justify-self-end font-['Asap_Condensed'] font-bold text-2xl">
        Menu
      </div>
    </div>
  );
};
