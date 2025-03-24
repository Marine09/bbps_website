import React from 'react';
import Hero from './Hero';
import Features from './Features';
import Testimonials from './Testimonials';
import NewsSection from '../news/NewsSection';
import EventsSection from '../events/EventsSection';
import Footer from '../layout/Footer';
import Navigation from '../layout/Navigation';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <EventsSection />
        <NewsSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage; 