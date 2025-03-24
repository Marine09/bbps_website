import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

// Navigation items - this would be populated from the data scraper
const navigationItems = [
  {
    title: 'About BBPS',
    submenu: [
      { title: 'About us', href: '/about' },
      { title: 'History of school', href: '/history' },
      { title: 'Mission', href: '/mission' },
      { title: 'Vision', href: '/vision' },
      { title: 'Management', href: '/management' },
      { title: 'Principal\'s Message', href: '/principals-message' },
      { title: 'Staff List', href: '/staff' },
      { title: 'Inclusive Education', href: '/inclusive-education' },
      { title: 'Affiliation', href: '/affiliation' },
    ],
  },
  {
    title: 'Campus',
    submenu: [
      { title: 'Campus Tour', href: '/campus-tour' },
      { title: 'Facilities & Infrastructure', href: '/facilities' },
      { title: 'Safety & Security', href: '/safety' },
    ],
  },
  {
    title: 'Admission',
    submenu: [
      { title: 'Information', href: '/admission-info' },
      { title: 'Fee Structure', href: '/fee-structure' },
      { title: 'Fee Norms', href: '/fee-norms' },
      { title: 'Online Registration', href: '/registration' },
      { title: 'Orientation', href: '/orientation' },
    ],
  },
  {
    title: 'Academics',
    submenu: [
      { title: 'Subjects offered', href: '/subjects' },
      { title: 'Annual Syllabus', href: '/syllabus' },
      { title: 'Exam Schedule', href: '/exams' },
      { title: 'Holiday Homework', href: '/homework' },
      { title: 'Class Timetable', href: '/timetable' },
      { title: 'CBSE Results', href: '/results' },
      { title: 'Achievements', href: '/achievements' },
    ],
  },
  {
    title: 'Beyond Academics',
    submenu: [
      { title: 'House System', href: '/house-system' },
      { title: 'Clubs & Activities', href: '/clubs' },
      { title: 'Excursions & Tours', href: '/excursions' },
      { title: 'Publications', href: '/publications' },
      { title: 'Student Council', href: '/student-council' },
    ],
  },
  { title: 'Contact', href: '/contact' },
];

interface SubmenuProps {
  items: { title: string; href: string }[];
  isOpen: boolean;
}

const Submenu: React.FC<SubmenuProps> = ({ items, isOpen }) => {
  if (!isOpen) return null;
  
  return (
    <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
      <div className="py-1" role="menu" aria-orientation="vertical">
        {items.map((item) => (
          <Link
            key={item.title}
            to={item.href}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

interface MobileMenuProps {
  items: typeof navigationItems;
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ items, isOpen, onClose }) => {
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white">
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-bold">Menu</h2>
        <button onClick={onClose} className="text-gray-700">
          <X className="h-6 w-6" />
        </button>
      </div>
      <div className="p-4">
        {items.map((item, index) => (
          <div key={item.title} className="mb-4">
            {item.submenu ? (
              <>
                <button
                  className="flex justify-between items-center w-full text-left py-2 font-medium"
                  onClick={() => setOpenSubmenuIndex(openSubmenuIndex === index ? null : index)}
                >
                  {item.title}
                  {openSubmenuIndex === index ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>
                {openSubmenuIndex === index && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.title}
                        to={subItem.href}
                        className="block py-2 text-gray-600"
                        onClick={onClose}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                to={item.href || '/'}
                className="block py-2 font-medium"
                onClick={onClose}
              >
                {item.title}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export const Navigation: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                className="h-10 w-auto"
                src="https://placehold.co/200x80/0a2463/ffffff?text=BBPS"
                alt="Bal Bharati Public School"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            {navigationItems.map((item, index) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => setOpenIndex(index)}
                onMouseLeave={() => setOpenIndex(null)}
              >
                {item.submenu ? (
                  <>
                    <button className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-800 border-b-2 border-transparent hover:border-primary-500 hover:text-primary-600 transition duration-150 ease-in-out">
                      {item.title}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    <Submenu items={item.submenu} isOpen={openIndex === index} />
                  </>
                ) : (
                  <Link
                    to={item.href || '/'}
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-800 border-b-2 border-transparent hover:border-primary-500 hover:text-primary-600 transition duration-150 ease-in-out"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <MobileMenu 
        items={navigationItems} 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </header>
  );
};

export default Navigation; 