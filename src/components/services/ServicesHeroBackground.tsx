import React from 'react';
import { colors } from '../../styles/colors';

const ServicesHeroBackground = () => {
  return (
    <div className="absolute inset-0">
      {/* Premium background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform-gpu"
        style={{
          backgroundImage: 'url("https://nikoai.twic.pics/niko/N90MYB7/58db9dcd2168473d9384c2e007de163f.webp")',
          willChange: 'transform',
        }}
      />

      {/* Sophisticated gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            to bottom,
            ${colors.black.primary}95 0%,
            ${colors.black.primary}80 30%,
            ${colors.black.primary}70 60%,
            ${colors.black.primary}90 100%
          )`,
          mixBlendMode: 'multiply',
        }}
      />

      {/* Subtle texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-noise"
        style={{ mixBlendMode: 'overlay' }}
      />

      {/* Elegant vignette effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(
            circle at center,
            transparent 0%,
            ${colors.black.primary}40 100%
          )`,
        }}
      />
    </div>
  );
};

export default ServicesHeroBackground;