import React from 'react';
import { Partner } from '../../types/partner';
import { colors } from '../../styles/colors';
import { useImageLoader } from '../../hooks/useImageLoader';

const PartnerLogo: React.FC<Partner> = ({ name, logo, website }) => {
  const { isLoaded, handleLoad } = useImageLoader();

  return (
    <a
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative aspect-[3/2] flex items-center justify-center p-4 rounded-sm 
                 transition-all duration-500"
      style={{
        background: `linear-gradient(135deg,
          ${colors.white.pure}05 0%,
          ${colors.white.pure}02 100%)`
      }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <img
          src={logo}
          alt={`${name} logo`}
          className={`
            max-w-[85%] max-h-[85%] object-contain 
            transition-all duration-500 group-hover:scale-105
            ${isLoaded ? 'opacity-100' : 'opacity-0'}
          `}
          onLoad={handleLoad}
          loading="lazy"
        />
      </div>

      {/* Hover highlight effect */}
      <div 
        className="absolute inset-0 opacity-0 transition-opacity duration-300
                   group-hover:opacity-5 pointer-events-none"
        style={{ 
          background: `radial-gradient(
            circle at center,
            ${colors.silver.solid.primary} 0%,
            transparent 70%
          )`
        }}
      />
    </a>
  );
};

export default PartnerLogo;