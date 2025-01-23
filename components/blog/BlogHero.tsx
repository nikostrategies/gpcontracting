import React from 'react';
import Spline from '@splinetool/react-spline';
import { colors } from '../../styles/colors';

const BlogHero = () => {
  return (
    <div className="relative w-full">
      <div 
        className="relative py-20 w-full overflow-hidden"
        style={{ backgroundColor: colors.black.primary }}
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://nikoai.twic.pics/niko/51PmqN2/uya15tuswns01.webp")',
            opacity: 0.3
          }}
        />
        
        {/* Content Container */}
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto px-4 text-center">
            {/* Decorative line */}
            <div 
              className="w-12 h-[1px] mx-auto mb-8"
              style={{ background: `${colors.silver.solid.primary}40` }}
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
              Industry Insights
            </h1>
            
            <p 
              className="text-base md:text-lg font-light tracking-wider mb-8
                       max-w-2xl mx-auto leading-relaxed"
              style={{ color: colors.silver.solid.secondary }}
            >
              Expert perspectives on construction innovation, sustainability, 
              and industry best practices.
            </p>
            
            {/* Decorative line */}
            <div 
              className="w-12 h-[1px] mx-auto"
              style={{ background: `${colors.silver.solid.primary}40` }}
            />
          </div>
        </div>

        {/* Gradient overlay for smooth transition */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(180deg,
              transparent 0%,
              ${colors.black.secondary}40 70%,
              ${colors.black.secondary} 100%)`
          }}
        />
      </div>

      {/* Bottom transition */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom,
            transparent 0%,
            ${colors.black.secondary} 100%)`
        }}
      />
    </div>
  );
};

export default BlogHero;