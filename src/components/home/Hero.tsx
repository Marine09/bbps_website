import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({ 
  backgroundImage = 'https://placehold.co/1920x1080/0a2463/ffffff?text=BBPS+Navi+Mumbai' 
}) => {
  return (
    <div className="relative">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          filter: 'brightness(0.7)'
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-700/50" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 lg:py-48">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
            Bal Bharati Public School
            <span className="block text-primary-300">Navi Mumbai</span>
          </h1>
          <p className="mt-6 text-xl text-white max-w-lg">
            Empowering young minds with knowledge, values, and skills to excel in a global world. Join us in shaping the leaders of tomorrow.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-primary-700 hover:bg-primary-50">
              Admissions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary-700">
              Virtual Tour
            </Button>
          </div>
        </div>
      </div>
      
      {/* Announcement bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary-700 py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
          <p className="text-white font-medium">
            <span className="font-bold">Announcements:</span> Admission for 2025-26 academic year now open
          </p>
          <Button variant="link" className="text-white mt-2 sm:mt-0">
            Learn More
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero; 