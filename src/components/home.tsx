import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogIn, Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import HeroSection from "@/components/home/HeroSection";
import QuickLinks from "@/components/home/QuickLinks";
import NewsSection from "@/components/news/NewsSection";
import CalendarSection from "@/components/events/CalendarSection";
import LoginDialog from "@/components/auth/LoginDialog";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <QuickLinks />
        <NewsSection />
        <CalendarSection />

        {/* About Us Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Welcome to Bal Bharati Public School, Navi Mumbai
              </h2>
              <p className="text-lg text-gray-600">
                Established in 2000, BBPS Navi Mumbai is a premier educational
                institution affiliated to CBSE, dedicated to providing holistic
                education that nurtures academic excellence, character
                development, and values.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  Academic Excellence
                </h3>
                <p className="text-gray-600 text-center">
                  Our comprehensive CBSE curriculum and dedicated faculty ensure
                  that students achieve academic excellence and develop critical
                  thinking skills.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  Character Development
                </h3>
                <p className="text-gray-600 text-center">
                  We focus on instilling strong values, ethics, and character in
                  our students, preparing them to be responsible citizens of
                  tomorrow.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  Holistic Development
                </h3>
                <p className="text-gray-600 text-center">
                  Our diverse range of co-curricular activities, sports, and
                  cultural programs ensure the all-round development of every
                  student.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Schedule a Visit
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              What Our Community Says
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=parent1"
                    alt="Parent"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Priya Sharma</h4>
                    <p className="text-sm text-gray-500">Parent</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "BBPS Navi Mumbai has provided my child with an excellent
                  learning environment. The teachers are dedicated and the focus
                  on both academics and values is commendable."
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=student1"
                    alt="Student"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Aryan Patel</h4>
                    <p className="text-sm text-gray-500">Student, Class XII</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "The opportunities I've had at BBPS Navi Mumbai have helped me
                  grow academically and personally. The school has nurtured my
                  talents and prepared me for future challenges."
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=teacher1"
                    alt="Teacher"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Mrs. Anjali Desai</h4>
                    <p className="text-sm text-gray-500">Science Faculty</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Teaching at BBPS Navi Mumbai is a rewarding experience. The
                  school encourages innovative teaching methods and provides a
                  supportive environment for both teachers and students."
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
