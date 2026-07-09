import React, { useState } from 'react';
import { ProgressBar } from '../components/common/ProgressBar';
import { NavMobileModal } from '../components/navigation/NavMobileModal';
import { FixedMenuButton } from '../components/navigation/FixedMenuButton';
import { Hero } from '../sections/Hero';
import { Evolution } from '../sections/Evolution';
import { Milestone } from '../sections/Milestone';
import { Anatomy } from '../sections/Anatomy';
import { Fillings } from '../sections/Fillings';
import { StreetIcon } from '../sections/StreetIcon';
import { Footer } from '../sections/Footer';

export const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <main>
        <ProgressBar />
        <NavMobileModal isOpen={isMenuOpen} onClose={handleCloseMenu} />
        <FixedMenuButton onOpenMenu={handleOpenMenu} />
        <Hero onOpenMenu={handleOpenMenu} />
        <Evolution />
        <Milestone />
        <Anatomy />
        <Fillings />
        <StreetIcon />
      </main>
      <Footer />
    </>
  );
};
