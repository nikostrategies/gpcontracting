import React from 'react';
import PartnerLogo from './PartnerLogo';
import { partners } from '../../data/partnerData';
import FadeInUp from '../animations/FadeInUp';

const PartnerGrid = () => {
  // Split partners into two rows for 3-2 layout
  const topRow = partners.slice(0, 3);
  const bottomRow = partners.slice(3);

  return (
    <div className="max-w-4xl mx-auto mt-16">
      {/* Top row - 3 logos */}
      <div className="grid grid-cols-3 gap-8 mb-8">
        {topRow.map((partner, index) => (
          <FadeInUp 
            key={partner.id}
            delay={index * 100}
          >
            <PartnerLogo {...partner} />
          </FadeInUp>
        ))}
      </div>
      
      {/* Bottom row - 2 logos */}
      <div className="grid grid-cols-2 gap-8 max-w-[66%] mx-auto">
        {bottomRow.map((partner, index) => (
          <FadeInUp 
            key={partner.id}
            delay={(index + 3) * 100}
          >
            <PartnerLogo {...partner} />
          </FadeInUp>
        ))}
      </div>
    </div>
  );
};

export default PartnerGrid;