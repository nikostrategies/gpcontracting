import React from 'react';
import { colors } from '../../styles/colors';
import FadeInUp from '../animations/FadeInUp';

const CompanyOverview = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <FadeInUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
            {/* Left Column - Company Overview */}
            <div className="space-y-6">
              <h2 
                className="font-cormorant text-3xl font-light tracking-wider mb-8"
                style={{ 
                  background: colors.silver.gradient.primary,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Who We Are
              </h2>
              
              <p 
                className="text-lg font-light leading-relaxed"
                style={{ color: colors.silver.solid.secondary }}
              >
                GP Pacific Contracting Group LTD stands at the forefront of construction excellence in the Greater Vancouver area, built on the foundation of family values and a legacy of integrity and honesty passed down from our grandparents. Their unwavering commitment to doing what is right continues to inspire everything we do.
              </p>
              
              <p 
                className="text-lg font-light leading-relaxed"
                style={{ color: colors.silver.solid.secondary }}
              >
                What sets us apart is not just our forward-thinking approach to construction, but the deep sense of trust and transparency we foster in every project. We believe in open communication, honesty, and delivering results that exceed expectations while staying true to our values.
              </p>
              
              <p 
                className="text-lg font-light leading-relaxed"
                style={{ color: colors.silver.solid.secondary }}
              >
                Our team of skilled professionals approaches each project as if it were for our own family, with meticulous attention to detail and a commitment to excellence. By combining expertise, innovation, and a dedication to craftsmanship, we create spaces that reflect the dreams and aspirations of our clients while upholding the highest standards of quality.
              </p>

              <p 
                className="text-lg font-light leading-relaxed"
                style={{ color: colors.silver.solid.secondary }}
              >
                At GP Pacific Contracting, we honor our family's legacy by treating every client like part of our extended family—building trust, transforming spaces, and creating lasting relationships along the way.
              </p>
            </div>

            {/* Right Column - Featured Project Image */}
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Luxury custom home project"
                className="w-full h-full object-cover"
              />
              <div 
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(45deg,
                    ${colors.black.primary}cc 0%,
                    transparent 100%)`
                }}
              />
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};

export default CompanyOverview;