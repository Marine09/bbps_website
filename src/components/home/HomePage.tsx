import React, { useState } from "react";
import HeroSection from "./HeroSection";
import QuickLinks from "./QuickLinks";
import Features from "./Features";
import Testimonials from "./Testimonials";
import NewsSection from "../news/NewsSection";
import EventsSection from "../events/EventsSection";
import CalendarSection from "../events/CalendarSection";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  GraduationCap,
  Award,
  Users,
  Clock,
  Play,
} from "lucide-react";

const HomePage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<
    "student" | "parent" | "teacher" | "administrator" | undefined
  >();

  const handleLogin = (userData: any) => {
    setIsLoggedIn(true);
    setUserRole(userData.role);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole(undefined);
  };

  return (
    <div className="min-h-screen">
      <Header
        isLoggedIn={isLoggedIn}
        userRole={userRole}
        onLogin={() => {}}
        onLogout={handleLogout}
      />
      <main>
        <HeroSection />
        <QuickLinks />

        {/* Welcome Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Welcome to Bal Bharati Public School, Navi Mumbai
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Established in 1995, BBPS Navi Mumbai has been at the
                  forefront of providing quality education that blends
                  traditional values with modern teaching methodologies.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our mission is to nurture young minds into responsible global
                  citizens who excel not just academically, but also in
                  character, creativity, and compassion.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <GraduationCap className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">CBSE Affiliated</p>
                      <p className="text-sm text-gray-600">
                        Excellence in Education
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <Award className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Top Ranking</p>
                      <p className="text-sm text-gray-600">
                        Among Mumbai Schools
                      </p>
                    </div>
                  </div>
                </div>
                <Button className="group">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80"
                  alt="School Building"
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary-600">28+</p>
                      <p className="text-sm text-gray-600">
                        Years of Excellence
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary-600">
                        5000+
                      </p>
                      <p className="text-sm text-gray-600">Students</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Features />
        <NewsSection />
        <CalendarSection />

        {/* Admissions CTA */}
        <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Admissions Open for 2025-26
                </h2>
                <p className="text-lg text-primary-100 mb-6">
                  Join our vibrant community of learners and embark on a journey
                  of academic excellence and holistic development.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <Users className="h-6 w-6 text-primary-300 mb-2" />
                    <h3 className="font-semibold mb-1">Limited Seats</h3>
                    <p className="text-sm text-primary-100">
                      Available for select grades
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <Clock className="h-6 w-6 text-primary-300 mb-2" />
                    <h3 className="font-semibold mb-1">Application Deadline</h3>
                    <p className="text-sm text-primary-100">January 15, 2025</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-white text-primary-700 hover:bg-primary-50">
                    Apply Now
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                  >
                    Download Prospectus
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block">
                <img
                  src="https://images.unsplash.com/photo-1577896852618-3b98968f9fdf?w=800&q=80"
                  alt="Students in classroom"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <Testimonials />

        {/* Virtual Tour Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Take a Virtual Tour
              </h2>
              <p className="mt-2 text-lg text-gray-600">
                Explore our campus facilities from the comfort of your home
              </p>
            </div>
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-xl relative">
              <img
                src="https://images.unsplash.com/photo-1583468982228-19f19164aee1?w=1200&q=80"
                alt="School Campus"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button className="bg-white/90 text-primary-700 hover:bg-white rounded-full h-16 w-16 flex items-center justify-center">
                  <Play className="h-8 w-8" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
