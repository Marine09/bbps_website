import React from 'react';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Sample events data - would be fetched from API/database
const events = [
  {
    id: 1,
    title: 'Annual Sports Meet',
    date: '2025-01-15',
    time: '9:00 AM - 5:00 PM',
    location: 'School Sports Ground',
    description: 'Annual sports competition featuring track and field events, team sports, and individual championships.',
    category: 'Sports',
    image: 'https://placehold.co/600x400/e5edff/0a2463?text=Sports+Meet',
  },
  {
    id: 2,
    title: 'Science Exhibition',
    date: '2025-02-10',
    time: '10:00 AM - 3:00 PM',
    location: 'School Auditorium',
    description: 'Showcase of student science projects demonstrating innovative solutions to real-world problems.',
    category: 'Academic',
    image: 'https://placehold.co/600x400/e6f7ff/0075a2?text=Science+Exhibition',
  },
  {
    id: 3,
    title: 'Cultural Fest',
    date: '2025-03-05',
    time: '11:00 AM - 7:00 PM',
    location: 'School Amphitheater',
    description: 'Annual cultural celebration featuring dance, music, drama performances by students of all grades.',
    category: 'Cultural',
    image: 'https://placehold.co/600x400/f9e6ff/8c30f5?text=Cultural+Fest',
  },
  {
    id: 4,
    title: 'Parent-Teacher Conference',
    date: '2025-04-20',
    time: '9:00 AM - 4:00 PM',
    location: 'School Classrooms',
    description: 'Individual meetings between parents and teachers to discuss student progress and development areas.',
    category: 'Meeting',
    image: 'https://placehold.co/600x400/f2f2f2/666666?text=Parent+Teacher+Meeting',
  },
];

// Format date function
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  
  return new Date(dateString).toLocaleDateString('en-US', options);
};

// Get category color
const getCategoryColor = (category: string) => {
  switch (category.toLowerCase()) {
    case 'sports':
      return 'bg-green-100 text-green-800';
    case 'academic':
      return 'bg-blue-100 text-blue-800';
    case 'cultural':
      return 'bg-purple-100 text-purple-800';
    case 'meeting':
      return 'bg-gray-100 text-gray-800';
    default:
      return 'bg-primary-100 text-primary-800';
  }
};

const EventsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
            <p className="mt-2 text-lg text-gray-600">
              Stay up to date with our school events and activities
            </p>
          </div>
          <Button className="mt-4 md:mt-0">
            View All Events
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden h-full flex flex-col transition-shadow hover:shadow-lg">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <Badge className={getCategoryColor(event.category)} variant="outline">
                    {event.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl mt-2">{event.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {event.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-4 pt-0">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-700">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin className="mr-2 h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0 mt-auto">
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection; 