import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

interface FooterProps {
  schoolName?: string;
  address?: string;
  phone?: string;
  email?: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
}

const Footer = ({
  schoolName = "Bal Bharati Public School, Navi Mumbai",
  address = "Sector 4, Kharghar, Navi Mumbai, Maharashtra 410210",
  phone = "022-27743824",
  email = "bbpsnavimumbai@balbharati.org",
  socialLinks = {
    facebook: "https://www.facebook.com/bbpsnavimumbai",
    twitter: "https://twitter.com/bbpsnavimumbai",
    instagram: "https://www.instagram.com/bbpsnavimumbai",
  },
}: FooterProps) => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4 md:px-8 w-full">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* School Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">{schoolName}</h3>
            <div className="flex items-start space-x-2">
              <MapPin className="h-5 w-5 mt-0.5 text-slate-400" />
              <span>{address}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-slate-400" />
              <span>{phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-slate-400" />
              <span>{email}</span>
            </div>
            <div className="flex space-x-4 pt-2">
              <a
                href={socialLinks.facebook}
                aria-label="Facebook"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.twitter}
                aria-label="Twitter"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.instagram}
                aria-label="Instagram"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about/school"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/academics/curriculum"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Academics
                </Link>
              </li>
              <li>
                <Link
                  to="/admissions/process"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  to="/student-life/activities"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Student Life
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  News & Events
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/academics/calendar"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  School Calendar
                </Link>
              </li>
              <li>
                <Link
                  to="/about/faculty"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Faculty & Staff
                </Link>
              </li>
              <li>
                <Link
                  to="/parents"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Parent Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/students"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Student Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/alumni"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Alumni
                </Link>
              </li>
              <li>
                <Link
                  to="/facilities/infrastructure"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Facilities
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Stay Connected</h3>
            <p className="text-slate-400">
              Subscribe to our newsletter for updates on school events and news.
            </p>
            <div className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
              />
              <Button className="w-full">Subscribe</Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-slate-700" />

        <div className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
          <div>
            <p>
              &copy; {new Date().getFullYear()} {schoolName}. All rights
              reserved.
            </p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link
              to="/accessibility"
              className="hover:text-white transition-colors"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
