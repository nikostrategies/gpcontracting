import React from 'react';
import { colors } from '../../styles/colors';

const HeroTransition = () => {
  return (
    <div className="relative">
      {/* Main gradient transition */}
      <div 
        className="absolute -top-32 left-0 right-0 h-32 z-10"
        style={{
          background: `linear-gradient(
            to bottom,
            transparent,
            ${colors.black.secondary}
          )`,
          backdropFilter: 'blur(8px)',
        }}
      />

      {/* Subtle noise texture overlay */}
      <div 
        className="absolute -top-32 left-0 right-0 h-32 opacity-[0.03] z-20 bg-noise"
        style={{ mixBlendMode: 'overlay' }}
      />

      {/* Organic shape for natural blend */}
      <div 
        className="absolute -top-48 left-0 right-0 h-48 z-0"
        style={{
          background: `radial-gradient(
            ellipse 100% 100% at 50% 100%,
            ${colors.black.secondary},
            transparent
          )`
        }}
      />
    </div>
  );
};

export default HeroTransition;