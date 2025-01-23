import type { ServiceCategory } from '../types/service';

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'residential',
    title: 'Residential Construction',
    description: 'Transform your vision into reality with our comprehensive residential construction services. From custom homes to multi-family developments, we bring expertise and attention to detail to every project.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    services: [
      {
        id: 'custom-homes',
        title: 'Custom Home Construction',
        description: 'Bespoke residential solutions tailored to your unique vision and lifestyle needs.',
        features: [
          'Architectural collaboration',
          'Premium materials',
          'Energy-efficient design',
          'Smart home integration'
        ]
      },
      {
        id: 'renovations',
        title: 'Home Renovations',
        description: 'Complete home transformations that enhance both functionality and aesthetic appeal.',
        features: [
          'Kitchen remodeling',
          'Bathroom upgrades',
          'Space optimization',
          'Modern fixtures'
        ]
      }
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial Construction',
    description: 'Elevate your business with our specialized commercial construction services. We create functional, attractive spaces that enhance productivity and customer experience.',
    image: 'https://nikoai.twic.pics/niko/n6HvKq2/1920x1080-Blog-2x-1-scaled.jpg',
    services: [
      {
        id: 'tenant-improvement',
        title: 'Tenant Improvements',
        description: 'Custom office and retail space modifications to meet your business needs.',
        features: [
          'Space planning',
          'Modern finishes',
          'Lighting design',
          'Mechanical optimization'
        ]
      },
      {
        id: 'restaurant-construction',
        title: 'Restaurant & Bar Construction',
        description: 'Specialized construction for food service and entertainment venues.',
        features: [
          'Kitchen layouts',
          'Ventilation systems',
          'Bar design',
          'Seating optimization'
        ]
      },
      {
        id: 'fitness-facilities',
        title: 'Fitness Facility Development',
        description: 'Purpose-built spaces for gyms and wellness centers.',
        features: [
          'Equipment layouts',
          'Specialized flooring',
          'Shower facilities',
          'Climate control'
        ]
      }
    ]
  },
  {
    id: 'specialized',
    title: 'Specialized Services',
    description: 'Expert solutions for specific construction needs, from structural work to energy efficiency improvements.',
    image: 'https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    services: [
      {
        id: 'roofing',
        title: 'Roofing',
        description: 'Professional roofing solutions with superior materials and expert installation.',
        features: [
          'Quality materials',
          'Weather protection',
          'Proper drainage',
          'Extended warranties'
        ]
      },
      {
        id: 'steel-framing',
        title: 'Steel Framing',
        description: 'Precision steel frame construction for superior structural integrity.',
        features: [
          'Custom fabrication',
          'Seismic compliance',
          'Engineer approved',
          'Quality assurance'
        ]
      },
      {
        id: 'ceiling-systems',
        title: 'T-Bar & Acoustic Solutions',
        description: 'Advanced ceiling systems for optimal acoustics and aesthetics.',
        features: [
          'Sound absorption',
          'Lighting integration',
          'Access panels',
          'Clean installation'
        ]
      }
    ]
  }
];