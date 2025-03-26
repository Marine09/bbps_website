import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, ChevronDown, Bell, Search, Phone } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import LoginDialog from "@/components/auth/LoginDialog";
import { Badge } from "@/components/ui/badge";

interface HeaderProps {
  logo?: string;
  isLoggedIn?: boolean;
  userRole?: "student" | "parent" | "teacher" | "administrator";
  onLogin?: () => void;
  onLogout?: () => void;
}

const Header = ({
  logo = "/logo.png",
  isLoggedIn = false,
  userRole,
  onLogin = () => {},
  onLogout = () => {},
}: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLoginClick = () => {
    setLoginDialogOpen(true);
    onLogin();
  };

  const handleLogout = () => {
    onLogout();
  };

  return (
    <header className="w-full bg-white">
      {/* Top Bar */}
      <div className="bg-primary-800 text-white py-2">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4 mb-2 sm:mb-0">
            <div className="flex items-center">
              <Phone className="h-3 w-3 mr-1" />
              <a
                href="tel:+912227741641"
                className="hover:text-primary-200 transition-colors"
              >
                +91 (022) 27741641
              </a>
            </div>
            <span className="hidden sm:inline">|</span>
            <a
              href="mailto:bbpskhrnm@yahoo.com"
              className="hover:text-primary-200 transition-colors"
            >
              bbpskhrnm@yahoo.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/alumni"
              className="hover:text-primary-200 transition-colors"
            >
              Alumni
            </Link>
            <span>|</span>
            <Link
              to="/careers"
              className="hover:text-primary-200 transition-colors"
            >
              Careers
            </Link>
            <span>|</span>
            <Link
              to="/contact"
              className="hover:text-primary-200 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="shadow-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="BBPS Navi Mumbai Logo"
              className="h-16 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary-700">
                Bal Bharati Public School
              </span>
              <span className="text-sm text-gray-600">Navi Mumbai</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50">
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <ListItem href="/about/school" title="The School">
                        Learn about our school's history and vision.
                      </ListItem>
                      <ListItem href="/about/management" title="Management">
                        Meet our school management team.
                      </ListItem>
                      <ListItem
                        href="/about/principal"
                        title="Principal's Desk"
                      >
                        Message from our Principal.
                      </ListItem>
                      <ListItem href="/about/faculty" title="Faculty">
                        Our experienced and dedicated teachers.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Academics</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <ListItem href="/academics/curriculum" title="Curriculum">
                        Our comprehensive academic curriculum.
                      </ListItem>
                      <ListItem
                        href="/academics/departments"
                        title="Departments"
                      >
                        Academic departments and specializations.
                      </ListItem>
                      <ListItem
                        href="/academics/achievements"
                        title="Achievements"
                      >
                        Academic achievements and awards.
                      </ListItem>
                      <ListItem
                        href="/academics/calendar"
                        title="Academic Calendar"
                      >
                        Important dates and schedules.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Admissions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <ListItem
                        href="/admissions/process"
                        title="Admission Process"
                      >
                        Step-by-step guide to our admission process.
                      </ListItem>
                      <ListItem
                        href="/admissions/requirements"
                        title="Requirements"
                      >
                        Documents and eligibility criteria.
                      </ListItem>
                      <ListItem href="/admissions/fees" title="Fee Structure">
                        Information about tuition and other fees.
                      </ListItem>
                      <ListItem href="/admissions/faq" title="FAQs">
                        Frequently asked questions about admissions.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Student Life</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <ListItem
                        href="/student-life/activities"
                        title="Activities"
                      >
                        Extracurricular activities and clubs.
                      </ListItem>
                      <ListItem href="/student-life/sports" title="Sports">
                        Sports programs and facilities.
                      </ListItem>
                      <ListItem href="/student-life/events" title="Events">
                        School events and celebrations.
                      </ListItem>
                      <ListItem href="/student-life/gallery" title="Gallery">
                        Photos from school events and activities.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Facilities</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <ListItem
                        href="/facilities/infrastructure"
                        title="Infrastructure"
                      >
                        Our modern school infrastructure and campus.
                      </ListItem>
                      <ListItem href="/facilities/library" title="Library">
                        Our well-stocked library and resources.
                      </ListItem>
                      <ListItem href="/facilities/labs" title="Laboratories">
                        Science, computer, and other specialized labs.
                      </ListItem>
                      <ListItem href="/facilities/transport" title="Transport">
                        School transportation services.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contact">
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50">
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Login/User Button and Search */}
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-gray-600"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Notifications */}
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-600 relative"
            >
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-red-500">
                3
              </Badge>
            </Button>

            {/* Login/User */}
            {isLoggedIn ? (
              <div className="flex items-center space-x-2">
                <span className="hidden text-sm md:inline-block">
                  {userRole && `Logged in as ${userRole}`}
                </span>
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  <User className="mr-2 h-4 w-4" />
                  <span className="hidden md:inline">Logout</span>
                </Button>
              </div>
            ) : (
              <LoginDialog
                open={loginDialogOpen}
                onOpenChange={setLoginDialogOpen}
              />
            )}

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      {searchOpen && (
        <div className="border-t border-gray-200 py-3 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for anything..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                autoFocus
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => setSearchOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <MobileNavLink href="/" label="Home" />
            <MobileNavLinkWithDropdown
              label="About Us"
              links={[
                { href: "/about/school", label: "The School" },
                { href: "/about/management", label: "Management" },
                { href: "/about/principal", label: "Principal's Desk" },
                { href: "/about/faculty", label: "Faculty" },
              ]}
            />
            <MobileNavLinkWithDropdown
              label="Academics"
              links={[
                { href: "/academics/curriculum", label: "Curriculum" },
                { href: "/academics/departments", label: "Departments" },
                { href: "/academics/achievements", label: "Achievements" },
                { href: "/academics/calendar", label: "Academic Calendar" },
              ]}
            />
            <MobileNavLinkWithDropdown
              label="Admissions"
              links={[
                { href: "/admissions/process", label: "Admission Process" },
                { href: "/admissions/requirements", label: "Requirements" },
                { href: "/admissions/fees", label: "Fee Structure" },
                { href: "/admissions/faq", label: "FAQs" },
              ]}
            />
            <MobileNavLinkWithDropdown
              label="Student Life"
              links={[
                { href: "/student-life/activities", label: "Activities" },
                { href: "/student-life/sports", label: "Sports" },
                { href: "/student-life/events", label: "Events" },
                { href: "/student-life/gallery", label: "Gallery" },
              ]}
            />
            <MobileNavLinkWithDropdown
              label="Facilities"
              links={[
                { href: "/facilities/infrastructure", label: "Infrastructure" },
                { href: "/facilities/library", label: "Library" },
                { href: "/facilities/labs", label: "Laboratories" },
                { href: "/facilities/transport", label: "Transport" },
              ]}
            />
            <MobileNavLink href="/contact" label="Contact" />
          </div>
        </div>
      )}
    </header>
  );
};

interface ListItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  href: string;
  children?: React.ReactNode;
}

const ListItem = ({
  className,
  title,
  children,
  href,
  ...props
}: ListItemProps) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};

interface MobileNavLinkProps {
  href: string;
  label: string;
}

const MobileNavLink = ({ href, label }: MobileNavLinkProps) => {
  return (
    <Link
      to={href}
      className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    >
      {label}
    </Link>
  );
};

interface MobileNavLinkWithDropdownProps {
  label: string;
  links: { href: string; label: string }[];
}

const MobileNavLinkWithDropdown = ({
  label,
  links,
}: MobileNavLinkWithDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{label}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="ml-4 space-y-1 border-l border-gray-200 pl-4">
          {links.map((link, index) => (
            <MobileNavLink key={index} href={link.href} label={link.label} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
