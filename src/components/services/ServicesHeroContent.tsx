import React from 'react';
import { colors } from '../../styles/colors';

const ServicesHeroContent = () => {
  return (
    <div className="relative container mx-auto px-4 py-32">
      <div className="max-w-4xl mx-auto text-center">
        {/* Decorative line */}
        <div 
          className="w-12 h-[1px] mx-auto mb-8"
          style={{ 
            background: `linear-gradient(90deg,
              transparent 0%,
              ${colors.silver.solid.primary}40 50%,
              transparent 100%)`
          }}
        />
        
        <h1 
          className="font-cormorant text-4xl md:text-5xl font-light tracking-wide mb-8 leading-[1.4]"
          style={{ 
            background: colors.silver.gradient.primary,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            paddingBottom: '0.1em'
          }}
        >
          Comprehensive Construction Services
        </h1>
        
        <p 
          className="text-base md:text-lg font-light tracking-wider mb-8
                   max-w-2xl mx-auto leading-relaxed"
          style={{ color: colors.silver.solid.secondary }}
        >
          From residential developments to commercial spaces, we deliver 
          excellence across every project with precision and expertise.
        </p>
        
        {/* Decorative line */}
        <div 
          className="w-12 h-[1px] mx-auto"
          style={{ 
            background: `linear-gradient(90deg,
              transparent 0%,
              ${colors.silver.solid.primary}40 50%,
              transparent 100%)`
          }}
        />
      </div>
    </div>
  );
};

export default ServicesHeroContent;