import React from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  GraduationCap,
  Users,
  Newspaper,
  Calendar,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface QuickLinkProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

const QuickLinkCard = ({
  icon,
  title,
  description,
  href = "#",
}: QuickLinkProps) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="rounded-full bg-blue-100 p-3 mb-4">{icon}</div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <Link
          to={href}
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          Learn More →
        </Link>
      </CardContent>
    </Card>
  );
};

interface QuickLinksProps {
  links?: QuickLinkProps[];
}

const QuickLinks = ({ links = [] }: QuickLinksProps) => {
  // Default links if none are provided
  const defaultLinks: QuickLinkProps[] = [
    {
      icon: <BookOpen className="h-6 w-6 text-blue-600" />,
      title: "Academics",
      description:
        "Explore our CBSE curriculum, academic programs, and educational philosophy",
      href: "/academics",
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-blue-600" />,
      title: "Admissions",
      description:
        "Learn about the admission process, requirements, and fee structure",
      href: "/admissions",
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "Student Life",
      description:
        "Discover clubs, sports, cultural activities, and student achievements",
      href: "/student-life",
    },
    {
      icon: <Newspaper className="h-6 w-6 text-blue-600" />,
      title: "Circulars",
      description: "Access important circulars, notices, and announcements",
      href: "/circulars",
    },
    {
      icon: <Calendar className="h-6 w-6 text-blue-600" />,
      title: "Academic Calendar",
      description:
        "View term dates, exam schedules, holidays, and important events",
      href: "/academics/calendar",
    },
  ];

  const displayLinks = links.length > 0 ? links : defaultLinks;

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Quick Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {displayLinks.map((link, index) => (
            <QuickLinkCard
              key={index}
              icon={link.icon}
              title={link.title}
              description={link.description}
              href={link.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
