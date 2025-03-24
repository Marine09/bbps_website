import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

// Sample news data
const newsItems = [
  {
    id: 1,
    title: 'BBPS Students Win National Science Olympiad',
    date: '2025-01-10',
    excerpt:
      'Three students from our school have secured top positions in the National Science Olympiad, bringing laurels to our institution.',
    category: 'Achievement',
    image: 'https://placehold.co/600x400/fff5e6/ff9500?text=Science+Olympiad',
    readTime: '3 min read',
  },
  {
    id: 2,
    title: 'New STEM Lab Inaugurated',
    date: '2025-01-05',
    excerpt:
      'State-of-the-art STEM laboratory inaugurated to enhance practical learning in Science, Technology, Engineering, and Mathematics.',
    category: 'Facility',
    image: 'https://placehold.co/600x400/e6f7ff/0075a2?text=STEM+Lab',
    readTime: '4 min read',
  },
  {
    id: 3,
    title: 'Annual Day Celebration: A Grand Success',
    date: '2024-12-20',
    excerpt:
      'Our Annual Day celebration was a spectacular showcase of student talent, creativity, and cultural diversity.',
    category: 'Event',
    image: 'https://placehold.co/600x400/f9e6ff/8c30f5?text=Annual+Day',
    readTime: '5 min read',
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
    case 'achievement':
      return 'bg-yellow-100 text-yellow-800';
    case 'facility':
      return 'bg-blue-100 text-blue-800';
    case 'event':
      return 'bg-purple-100 text-purple-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const NewsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
            <p className="mt-2 text-lg text-gray-600">
              Stay updated with the latest happenings at our school
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0">
            View All News
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((news) => (
            <Card key={news.id} className="overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader className="space-y-1 pb-0">
                <div className="flex justify-between items-center">
                  <Badge className={getCategoryColor(news.category)}>
                    {news.category}
                  </Badge>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-3 w-3 mr-1" />
                    {formatDate(news.date)}
                  </div>
                </div>
                <CardTitle className="text-xl mt-2">{news.title}</CardTitle>
              </CardHeader>
              <CardContent className="py-4">
                <CardDescription className="text-gray-600">
                  {news.excerpt}
                </CardDescription>
              </CardContent>
              <CardFooter className="pt-0 mt-auto">
                <div className="flex justify-between items-center w-full">
                  <span className="text-sm text-gray-500">{news.readTime}</span>
                  <Button variant="ghost" size="sm" className="text-primary-600 hover:text-primary-700">
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
