import React from 'react';
import { colors } from '../../styles/colors';
import { aboutPartners } from '../../data/aboutPartnerData';
import FadeInUp from '../animations/FadeInUp';

const PartnerLogo = ({ name, logo }: { name: string; logo: string }) => {
  return (
    <div 
      className="aspect-[3/2] p-6 rounded-sm relative overflow-hidden group"
      style={{ 
        background: `linear-gradient(135deg,
          ${colors.white.pure}05 0%,
          ${colors.white.pure}02 100%)`
      }}
    >
      <img
        src={logo}
        alt={`${name} logo`}
        className="w-full h-full object-contain transition-all duration-500
                 group-hover:scale-105"
        loading="lazy"
      />

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
    </div>
  );
};

const TrustedPartnersSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <FadeInUp>
          <h2 
            className="font-cormorant text-3xl font-light tracking-wider text-center mb-16"
            style={{ 
              background: colors.silver.gradient.primary,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Trusted Partners
          </h2>
        </FadeInUp>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {aboutPartners.map((partner, index) => (
            <FadeInUp key={partner.id} delay={index * 100}>
              <PartnerLogo name={partner.name} logo={partner.logo} />
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartnersSection;