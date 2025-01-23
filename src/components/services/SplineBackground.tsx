import React from 'react';
import { colors } from '../../styles/colors';

const SplineBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://nikoai.twic.pics/niko/1R5D3pG/building-1895879w-scaled.jpg")'
        }}
      />

      {/* Subtle gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg,
            ${colors.black.primary}95 0%,
            ${colors.black.primary}85 50%,
            ${colors.black.primary}95 100%
          )`,
          mixBlendMode: 'multiply'
        }}
      />

      {/* Top fade gradient */}
      <div 
        className="absolute top-0 left-0 right-0 h-32"
        style={{
          background: `linear-gradient(180deg,
            ${colors.black.secondary} 0%,
            transparent 100%)`
        }}
      />
      
      {/* Bottom fade gradient */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-64"
        style={{
          background: `linear-gradient(0deg,
            ${colors.black.primary} 0%,
            transparent 100%)`
        }}
      />
      
      {/* Side fade gradients */}
      <div 
        className="absolute top-0 bottom-0 left-0 w-32"
        style={{
          background: `linear-gradient(90deg,
            ${colors.black.primary} 0%,
            transparent 100%)`
        }}
      />
      <div 
        className="absolute top-0 bottom-0 right-0 w-32"
        style={{
          background: `linear-gradient(-90deg,
            ${colors.black.primary} 0%,
            transparent 100%)`
        }}
      />
    </div>
  );
};

export default SplineBackground;