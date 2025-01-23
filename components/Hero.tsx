import React from 'react';
import HeroBackground from './hero/HeroBackground';
import HeroContent from './hero/HeroContent';
import HeroTransition from './transitions/HeroTransition';

const Hero = () => {
  return (
    <>
      <div className="relative h-screen overflow-hidden">
        <HeroBackground />
        <HeroContent />
      </div>
      <HeroTransition />
    </>
  );
};

export default Hero;