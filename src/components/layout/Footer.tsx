import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Bal Bharati Public School</h3>
            <div className="mb-4">
              <img src="https://placehold.co/200x80/ffffff/0a2463?text=BBPS" alt="School Logo" className="h-16 w-auto" />
            </div>
            <p className="text-gray-400 mb-4">
              Empowering minds, inspiring futures. Excellence in education since establishment.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/admission-info" className="text-gray-400 hover:text-white transition-colors">Admissions</Link>
              </li>
              <li>
                <Link to="/academics" className="text-gray-400 hover:text-white transition-colors">Academics</Link>
              </li>
              <li>
                <Link to="/facilities" className="text-gray-400 hover:text-white transition-colors">Facilities</Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-white transition-colors">Events</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Important Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Important Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/fee-payment" className="text-gray-400 hover:text-white transition-colors">Fee Payment</Link>
              </li>
              <li>
                <Link to="/results" className="text-gray-400 hover:text-white transition-colors">Results</Link>
              </li>
              <li>
                <Link to="/alumni" className="text-gray-400 hover:text-white transition-colors">Alumni</Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/downloads" className="text-gray-400 hover:text-white transition-colors">Downloads</Link>
              </li>
              <li>
                <a href="https://cbse.gov.in/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">CBSE</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Sector 4, Kharghar, Navi Mumbai - 410210, Maharashtra, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                <a href="tel:+912227741641" className="text-gray-400 hover:text-white transition-colors">
                  +91 (022) 27741641, 27742773
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                <a href="mailto:bbpskhrnm@yahoo.com" className="text-gray-400 hover:text-white transition-colors">
                  bbpskhrnm@yahoo.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Bal Bharati Public School, Navi Mumbai. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/site-map" className="text-gray-400 hover:text-white text-sm transition-colors">
              Site Map
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
