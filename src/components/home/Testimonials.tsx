import React from 'react';
import { QuoteIcon } from 'lucide-react';

// Sample testimonial data
const testimonials = [
  {
    content:
      "My child has truly flourished at Bal Bharati Public School. The teachers are exceptionally dedicated and provide a nurturing environment that encourages both academic excellence and character development.",
    author: "Priya Sharma",
    role: "Parent of Class 8 Student",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    content:
      "As an alumnus, I can confidently say that the values and education I received at BBPS have shaped my career and life in profound ways. The school's focus on holistic development sets it apart.",
    author: "Rahul Mehta",
    role: "Alumni, Batch of 2010",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    content:
      "The innovative teaching methods and state-of-the-art facilities at Bal Bharati provide students with an exceptional learning experience. I'm proud to see my daughter develop into a confident, knowledgeable individual.",
    author: "Anjali Gupta",
    role: "Parent of Class 5 Student",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    content:
      "The school's emphasis on both academics and extracurricular activities creates a perfect balance. My years at BBPS taught me discipline, teamwork, and leadership skills that continue to benefit me today.",
    author: "Vikram Singh",
    role: "Alumni, Batch of 2015",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What Our Community Says
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Hear from our parents, students, and alumni about their experiences with Bal Bharati Public School.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-8 relative border border-gray-100 hover:shadow-md transition-shadow"
            >
              <QuoteIcon className="h-12 w-12 text-primary-100 absolute top-4 right-4" />
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <img
                    className="h-16 w-16 rounded-full object-cover"
                    src={testimonial.image}
                    alt={testimonial.author}
                    onError={(e) => {
                      // Fallback if image doesn't load
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/64';
                    }}
                  />
                </div>
                <div>
                  <p className="text-gray-700 mb-4 relative z-10">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <h4 className="font-medium text-gray-900">{testimonial.author}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-primary-600 font-medium">
            Join our community and experience the difference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 