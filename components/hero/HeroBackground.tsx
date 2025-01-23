import React from 'react';
import { colors } from '../../styles/colors';

const HeroBackground = () => {
  return (
    <div className="absolute inset-0">
      {/* High-quality background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://nikoai.twic.pics/niko/2kQvQjb/1497496-E-0031-4-A16-A754-37-B789-B36604.jpg")',
          imageRendering: 'auto',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          perspective: '1000px',
        }}
      />

      {/* Multi-layer gradient overlay for depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            to bottom,
            ${colors.black.primary}80 0%,
            ${colors.black.primary}40 40%,
            ${colors.black.primary}60 60%,
            ${colors.black.primary}90 85%,
            ${colors.black.secondary} 100%
          )`,
          mixBlendMode: 'multiply',
        }}
      />

      {/* Subtle vignette effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(
            circle at center,
            transparent 0%,
            ${colors.black.primary}40 100%
          )`,
          mixBlendMode: 'overlay',
        }}
      />
    </div>
  );
};

export default HeroBackground;