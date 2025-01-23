import React from 'react';
import { colors } from '../../styles/colors';

const ServicesHeroTransition = () => {
  return (
    <>
      {/* Smooth transition gradient */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: `linear-gradient(
            to bottom,
            transparent 0%,
            ${colors.black.secondary} 100%
          )`,
        }}
      />

      {/* Organic shape for natural transition */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background: `radial-gradient(
            ellipse 100% 150% at 50% 100%,
            ${colors.black.secondary} 0%,
            transparent 70%
          )`,
        }}
      />
    </>
  );
};

export default ServicesHeroTransition;