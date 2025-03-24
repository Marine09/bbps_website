import React from 'react';
import { BookOpen, Users, Award, Clock, Lightbulb, Globe } from 'lucide-react';

const features = [
  {
    name: 'Excellence in Academics',
    description:
      'Comprehensive curriculum designed to nurture critical thinking, creativity, and academic excellence.',
    icon: BookOpen,
  },
  {
    name: 'Expert Faculty',
    description:
      'Dedicated and highly qualified educators committed to bringing out the best in every student.',
    icon: Users,
  },
  {
    name: 'Modern Infrastructure',
    description:
      'State-of-the-art facilities including modern classrooms, laboratories, sports facilities, and digital learning resources.',
    icon: Lightbulb,
  },
  {
    name: 'Holistic Development',
    description:
      'Focus on all-round development through a perfect balance of academics, sports, arts, and extracurricular activities.',
    icon: Award,
  },
  {
    name: 'Value-Based Education',
    description:
      'Instilling traditional values and moral principles while preparing students for global citizenship.',
    icon: Globe,
  },
  {
    name: 'Personalized Attention',
    description:
      'Optimal teacher-student ratio ensuring individual attention and personalized guidance for every student.',
    icon: Clock,
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose Bal Bharati Public School?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            We offer a nurturing environment where students can discover their potential and excel.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-primary-500 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 