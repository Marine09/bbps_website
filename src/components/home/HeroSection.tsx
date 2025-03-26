import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
}

const HeroSection = ({
  title = "Bal Bharati Public School, Navi Mumbai",
  subtitle = "Excellence in Education, Character, and Values",
  description = "Bal Bharati Public School, Navi Mumbai is committed to providing quality education that nurtures academic excellence, character development, and holistic growth. We empower students to become responsible global citizens with strong values and leadership skills.",
  primaryCta = {
    text: "Admissions Open",
    href: "/admissions",
  },
  secondaryCta = {
    text: "Explore Our Campus",
    href: "/about/school",
  },
  backgroundImage = "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80",
}: HeroSectionProps) => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 text-white">
        <div className="max-w-3xl">
          {subtitle && (
            <h2 className="text-lg md:text-xl font-medium text-primary-200 mb-3">
              {subtitle}
            </h2>
          )}

          {title && (
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {title}
            </h1>
          )}

          {description && (
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              {description}
            </p>
          )}

          <div className="flex flex-wrap gap-4">
            {primaryCta && (
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={() => (window.location.href = primaryCta.href)}
              >
                {primaryCta.text}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}

            {secondaryCta && (
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                onClick={() => (window.location.href = secondaryCta.href)}
              >
                {secondaryCta.text}
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/10 to-transparent z-10" />
    </div>
  );
};

export default HeroSection;
