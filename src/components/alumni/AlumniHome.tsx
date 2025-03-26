import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MapPin,
  Briefcase,
  Calendar,
  Gift,
  ShoppingBag,
  Users,
  MessageSquare,
  Image,
  Heart,
  FileCheck,
  Award,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const AlumniHome = () => {
  // Mock data for featured alumni
  const featuredAlumni = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      batch: "1995",
      profession: "Neurosurgeon",
      achievement: "Pioneer in minimally invasive brain surgery techniques",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=alumni1",
    },
    {
      id: 2,
      name: "Priya Sharma",
      batch: "2001",
      profession: "Tech Entrepreneur",
      achievement: "Founded a successful EdTech startup valued at $50M",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=alumni2",
    },
    {
      id: 3,
      name: "Vikram Mehta",
      batch: "1988",
      profession: "Environmental Scientist",
      achievement: "Led major climate research projects across South Asia",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=alumni3",
    },
    {
      id: 4,
      name: "Ananya Desai",
      batch: "2005",
      profession: "International Diplomat",
      achievement: "Youngest Indian representative at the UN Climate Summit",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=alumni4",
    },
  ];

  // Mock data for upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Alumni Meet 2023",
      date: "December 15, 2023",
      location: "School Auditorium",
      description:
        "Join us for a day of reconnecting with old friends and making new memories.",
    },
    {
      id: 2,
      title: "Career Mentorship Workshop",
      date: "November 5, 2023",
      location: "Virtual Event",
      description: "Alumni sharing career insights with current students.",
    },
    {
      id: 3,
      title: "Silver Jubilee Celebration - Batch of 1998",
      date: "January 20, 2024",
      location: "School Campus",
      description:
        "Special reunion for the batch celebrating 25 years since graduation.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-800 to-indigo-900 text-white py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/90"></div>
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80"
            alt="School building"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.8)" }}
          />
          
          {/* Decorative circles */}
          <div className="absolute top-1/4 left-0 w-72 h-72 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-indigo-500 opacity-10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-100 text-sm font-medium mb-6 backdrop-blur-sm">BBPS Alumni Network</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome Home, <span className="text-blue-300">Alumnus</span>
            </h1>
            <p className="text-xl mb-10 text-blue-100 max-w-2xl">
              Reconnect with your alma mater, fellow graduates, and be part of
              our thriving global community. Your journey continues here.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/alumni/register">
                <Button
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-blue-50 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
                >
                  Register Now
                </Button>
              </Link>
              <Link to="/alumni/membership">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 font-medium bg-transparent"
                >
                  Explore Benefits
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-30 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-full opacity-30 translate-y-1/3 -translate-x-1/4"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">Alumni Services & Resources</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { to: "/alumni/register", icon: <Users />, title: "Register" },
              { to: "/alumni/book-meeting", icon: <Calendar />, title: "Book Meetings" },
              { to: "/alumni/school-tour", icon: <MapPin />, title: "School Tours" },
              { to: "/alumni/near-you", icon: <Users />, title: "Alumni Near You" },
              { to: "/alumni/merchandise", icon: <ShoppingBag />, title: "Merchandise" },
              { to: "/alumni/give-back", icon: <Gift />, title: "Give Back" },
              { to: "/alumni/digital-id", icon: <FileCheck />, title: "Digital ID" },
              { to: "/alumni/membership", icon: <Award />, title: "Membership" },
            ].map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-1 text-center group border border-gray-100"
              >
                <div className="mx-auto mb-4 w-14 h-14 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {React.cloneElement(link.icon, { className: "h-6 w-6" })}
                </div>
                <h3 className="font-semibold text-gray-800">{link.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Alumni */}
      <section className="py-20 bg-white relative">
        {/* Decorative wave */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gray-50">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute -bottom-1 w-full h-16">
            <path fill="#fff" fillOpacity="1" d="M0,64L80,58.7C160,53,320,43,480,64C640,85,800,139,960,149.3C1120,160,1280,128,1360,112L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">
              Our Distinguished Alumni
            </h2>
            <Button variant="outline" className="group">
              View All Alumni
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredAlumni.map((alumni) => (
              <Card
                key={alumni.id}
                className="overflow-hidden hover:shadow-xl transition-all border-0 ring-1 ring-gray-200 rounded-xl group"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={alumni.image}
                    alt={alumni.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <Button variant="outline" size="sm" className="text-white border-white hover:bg-white/20">
                      View Profile
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">{alumni.name}</h3>
                      <p className="text-sm text-gray-500 mb-1">Batch of {alumni.batch}</p>
                    </div>
                  </div>
                  <p className="text-blue-600 font-medium mb-2">{alumni.profession}</p>
                  <p className="text-gray-600 text-sm">{alumni.achievement}</p>
                  <Link
                    to={`/alumni/profile/${alumni.id}`}
                    className="mt-4 inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    View Full Profile
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="events" className="w-full">
            <TabsList className="w-full max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-5 mb-10 p-1 bg-gray-100 rounded-full">
              <TabsTrigger value="events" className="rounded-full">Events</TabsTrigger>
              <TabsTrigger value="jobs" className="rounded-full">Job Board</TabsTrigger>
              <TabsTrigger value="stories" className="rounded-full">Alumni Stories</TabsTrigger>
              <TabsTrigger value="gallery" className="rounded-full">Gallery</TabsTrigger>
              <TabsTrigger value="forums" className="rounded-full">Forums</TabsTrigger>
            </TabsList>

            <TabsContent
              value="events"
              className="bg-white p-6 sm:p-8 rounded-xl shadow-sm"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800">Upcoming Events</h3>
                <Button variant="outline" size="sm">
                  View Calendar
                </Button>
              </div>
              
              <div className="space-y-6">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="border-b pb-6 last:border-0">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 text-blue-600 p-4 rounded-lg flex-shrink-0">
                        <Calendar className="h-6 w-6" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-xl font-semibold mb-1 text-gray-800">
                          {event.title}
                        </h4>
                        <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mb-2">
                          <span className="font-medium">{event.date}</span>
                          <span className="hidden sm:block mx-2">•</span>
                          <span>{event.location}</span>
                        </div>
                        <p className="text-gray-600 mb-3">{event.description}</p>
                        <Button
                          variant="link"
                          className="p-0 h-auto text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
                        >
                          Register for this event
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button variant="outline" className="md:hidden">
                  View All Events
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="jobs" className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800">Alumni Job Board</h3>
                <Button variant="outline" size="sm">
                  Post a Job
                </Button>
              </div>
              
              <div className="space-y-6">
                <div className="border rounded-xl p-6 hover:shadow-md transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-1">Senior Software Engineer</h4>
                      <p className="text-gray-600">Tech Solutions Inc.</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        Full Time
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                    <span className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      Bangalore, India
                    </span>
                    <span className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-1" />
                      5+ years experience
                    </span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      Posted 2 days ago
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Looking for an experienced software engineer to join our team. Must have strong experience with React, Node.js, and cloud technologies.
                  </p>
                  <div className="flex items-center justify-between">
                    <Button variant="outline" size="sm" className="text-blue-600 border-blue-200 hover:bg-blue-50">
                      View Details
                    </Button>
                    <span className="text-sm text-gray-500">Posted by: Rahul Mehta (Class of 2015)</span>
                  </div>
                </div>

                <div className="border rounded-xl p-6 hover:shadow-md transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-1">Marketing Manager</h4>
                      <p className="text-gray-600">Global Brands Co.</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        Remote
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                    <span className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      Remote
                    </span>
                    <span className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-1" />
                      3+ years experience
                    </span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      Posted 5 days ago
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Seeking a creative marketing manager to lead our digital marketing initiatives. Experience in social media and content strategy required.
                  </p>
                  <div className="flex items-center justify-between">
                    <Button variant="outline" size="sm" className="text-blue-600 border-blue-200 hover:bg-blue-50">
                      View Details
                    </Button>
                    <span className="text-sm text-gray-500">Posted by: Priya Sharma (Class of 2018)</span>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="stories" className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800">Alumni Stories</h3>
                <Button variant="outline" size="sm">
                  Share Your Story
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border rounded-xl overflow-hidden hover:shadow-md transition-all">
                  <img
                    src="https://placehold.co/600x300/e2e8f0/1e293b?text=Alumni+Story+1"
                    alt="Alumni story"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=story1"
                        alt="Author"
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-800">Dr. Amit Patel</h4>
                        <p className="text-sm text-gray-500">Class of 2005</p>
                      </div>
                    </div>
                    <h5 className="text-xl font-semibold mb-2 text-gray-800">From BBPS to Medical Excellence</h5>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      My journey from BBPS to becoming a leading cardiologist has been shaped by the values and discipline instilled in me during my school years. The science labs and dedicated teachers prepared me well for my medical career.
                    </p>
                    <Button variant="link" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                      Read Full Story
                    </Button>
                  </div>
                </div>

                <div className="border rounded-xl overflow-hidden hover:shadow-md transition-all">
                  <img
                    src="https://placehold.co/600x300/e2e8f0/1e293b?text=Alumni+Story+2"
                    alt="Alumni story"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=story2"
                        alt="Author"
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-800">Neha Gupta</h4>
                        <p className="text-sm text-gray-500">Class of 2012</p>
                      </div>
                    </div>
                    <h5 className="text-xl font-semibold mb-2 text-gray-800">Building a Tech Empire</h5>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      The entrepreneurial spirit I developed during my time at BBPS, especially during business club activities, helped me establish my own tech startup. Today, we're a team of 50+ employees serving clients globally.
                    </p>
                    <Button variant="link" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                      Read Full Story
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="gallery" className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800">Alumni Gallery</h3>
                <Button variant="outline" size="sm">
                  Upload Photos
                </Button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                  <div key={index} className="aspect-square relative group overflow-hidden rounded-xl">
                    <img
                      src={`https://placehold.co/400x400/e2e8f0/1e293b?text=Gallery+${index}`}
                      alt={`Gallery image ${index}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button variant="outline" size="sm" className="bg-white/90 hover:bg-white">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <Button variant="outline" className="gap-2">
                  View More Photos
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="forums" className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800">Alumni Forums</h3>
                <Button variant="outline" size="sm">
                  Start Discussion
                </Button>
              </div>
              
              <div className="space-y-6">
                <div className="border rounded-xl p-6 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=forum1"
                        alt="Author"
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-800">Rajesh Kumar</h4>
                        <p className="text-sm text-gray-500">Class of 2010</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">2 hours ago</span>
                  </div>
                  <h5 className="text-xl font-semibold mb-2 text-gray-800">Upcoming Alumni Meet 2024</h5>
                  <p className="text-gray-600 mb-4">
                    Let's discuss ideas for the upcoming alumni meet. I suggest we organize it in a way that includes both networking sessions and fun activities. What are your thoughts?
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="sm" className="text-gray-600">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        12 Replies
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-600">
                        <Heart className="h-4 w-4 mr-1" />
                        24 Likes
                      </Button>
                    </div>
                    <Button variant="outline" size="sm" className="text-blue-600 border-blue-200 hover:bg-blue-50">
                      Join Discussion
                    </Button>
                  </div>
                </div>

                <div className="border rounded-xl p-6 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=forum2"
                        alt="Author"
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-800">Anjali Sharma</h4>
                        <p className="text-sm text-gray-500">Class of 2015</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">5 hours ago</span>
                  </div>
                  <h5 className="text-xl font-semibold mb-2 text-gray-800">Career Mentorship Program</h5>
                  <p className="text-gray-600 mb-4">
                    I'm looking to start a mentorship program for current students. Would any alumni be interested in volunteering their time to mentor students in their respective fields?
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="sm" className="text-gray-600">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        8 Replies
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-600">
                        <Heart className="h-4 w-4 mr-1" />
                        15 Likes
                      </Button>
                    </div>
                    <Button variant="outline" size="sm" className="text-blue-600 border-blue-200 hover:bg-blue-50">
                      Join Discussion
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
            <p className="text-blue-100 mb-8">
              Subscribe to our alumni newsletter to receive updates about events, 
              opportunities, and school developments.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-800"
              />
              <Button className="bg-white text-blue-700 hover:bg-blue-50">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlumniHome;
