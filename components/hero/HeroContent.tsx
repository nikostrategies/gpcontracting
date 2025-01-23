import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../shared/PrimaryButton';
import { colors } from '../../styles/colors';

const HeroContent = () => {
  return (
    <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
      <p 
        className="text-xl md:text-2xl mb-12 max-w-3xl font-light tracking-wide"
        style={{ 
          color: colors.silver.solid.primary,
          fontFamily: 'Inter, sans-serif',
          textShadow: '0 2px 4px rgba(0,0,0,0.3)', // Enhance readability
        }}
      >
        Building Dreams with Precision, Quality, and Expertise
      </p>
      
      <Link to="/services">
        <PrimaryButton>
          Explore Our Services
        </PrimaryButton>
      </Link>

      <div 
        className="absolute bottom-10 animate-bounce"
        style={{ color: colors.silver.solid.primary }}
      >
        <ChevronDown size={32} />
      </div>
    </div>
  );
};

export default HeroContent;