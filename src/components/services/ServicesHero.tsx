import React from 'react';
import { colors } from '../../styles/colors';
import ServicesHeroContent from './ServicesHeroContent';
import ServicesHeroBackground from './ServicesHeroBackground';
import ServicesHeroTransition from './ServicesHeroTransition';

const ServicesHero = () => {
  return (
    <div className="relative min-h-[60vh]">
      <ServicesHeroBackground />
      <ServicesHeroContent />
      <ServicesHeroTransition />
    </div>
  );
};

export default ServicesHero;