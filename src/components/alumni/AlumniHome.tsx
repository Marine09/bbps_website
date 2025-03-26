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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-600 opacity-90"></div>
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80"
            alt="School building"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome Back, Alumni
            </h1>
            <p className="text-xl mb-8">
              Reconnect with your alma mater, fellow graduates, and be part of
              our growing community.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Register Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Explore Benefits
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              to="/alumni/register"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <Users className="h-8 w-8 mx-auto mb-3 text-blue-600" />
              <h3 className="font-semibold">Register</h3>
            </Link>
            <Link
              to="/alumni/meetings"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <Calendar className="h-8 w-8 mx-auto mb-3 text-blue-600" />
              <h3 className="font-semibold">Book Meetings</h3>
            </Link>
            <Link
              to="/alumni/tours"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <MapPin className="h-8 w-8 mx-auto mb-3 text-blue-600" />
              <h3 className="font-semibold">School Tours</h3>
            </Link>
            <Link
              to="/alumni/donate"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <Gift className="h-8 w-8 mx-auto mb-3 text-blue-600" />
              <h3 className="font-semibold">Donate</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Alumni */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Alumni
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredAlumni.map((alumni) => (
              <Card
                key={alumni.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square relative">
                  <img
                    src={alumni.image}
                    alt={alumni.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{alumni.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">
                    Batch of {alumni.batch}
                  </p>
                  <p className="text-blue-600 font-medium mb-2">
                    {alumni.profession}
                  </p>
                  <p className="text-gray-600 text-sm">{alumni.achievement}</p>
                  <Link
                    to={`/alumni/profile/${alumni.id}`}
                    className="mt-4 inline-block text-blue-600 hover:underline"
                  >
                    View Profile →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              View All Alumni
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="events" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="jobs">Job Board</TabsTrigger>
              <TabsTrigger value="stories">Alumni Stories</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
              <TabsTrigger value="forums">Forums</TabsTrigger>
            </TabsList>

            <TabsContent
              value="events"
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-2xl font-bold mb-6">Upcoming Events</h3>
              <div className="space-y-6">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="border-b pb-6 last:border-0">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                        <Calendar className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-1">
                          {event.title}
                        </h4>
                        <p className="text-gray-600 mb-1">
                          {event.date} • {event.location}
                        </p>
                        <p className="text-gray-600">{event.description}</p>
                        <Button
                          variant="link"
                          className="p-0 h-auto mt-2 text-blue-600"
                        >
                          Register for this event →
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link to="/alumni/events">
                  <Button>View All Events</Button>
                </Link>
              </div>
            </TabsContent>

            <TabsContent
              value="jobs"
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-2xl font-bold mb-6">Job Opportunities</h3>
              <div className="grid gap-6">
                <div className="border rounded-lg p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-semibold mb-1">
                        Senior Software Engineer
                      </h4>
                      <p className="text-blue-600 mb-1">TechCorp India</p>
                      <p className="text-gray-600 mb-3">
                        Mumbai, Maharashtra • ₹25-35 LPA
                      </p>
                      <p className="text-gray-600">
                        Looking for experienced software engineers with
                        expertise in React, Node.js, and cloud technologies.
                      </p>
                    </div>
                    <Briefcase className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button size="sm">Apply Now</Button>
                    <Button size="sm" variant="outline">
                      Save
                    </Button>
                  </div>
                </div>

                <div className="border rounded-lg p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-semibold mb-1">
                        Marketing Manager
                      </h4>
                      <p className="text-blue-600 mb-1">Global Brands Ltd</p>
                      <p className="text-gray-600 mb-3">
                        Pune, Maharashtra • ₹18-22 LPA
                      </p>
                      <p className="text-gray-600">
                        Seeking a creative marketing professional to lead our
                        digital marketing initiatives.
                      </p>
                    </div>
                    <Briefcase className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button size="sm">Apply Now</Button>
                    <Button size="sm" variant="outline">
                      Save
                    </Button>
                  </div>
                </div>
              </div>
              <div className="text-center mt-8">
                <Link to="/alumni/jobs">
                  <Button>View All Jobs</Button>
                </Link>
              </div>
            </TabsContent>

            <TabsContent
              value="stories"
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-2xl font-bold mb-6">
                Alumni Success Stories
              </h3>
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=alumni5"
                    alt="Anil Kapoor"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-xl font-semibold mb-1">
                      From BBPS to Silicon Valley
                    </h4>
                    <p className="text-blue-600 mb-3">
                      Anil Kapoor, Batch of 2000
                    </p>
                    <p className="text-gray-600">
                      "My journey from BBPS Navi Mumbai to becoming a Product
                      Manager at Google was shaped by the strong foundation I
                      received at school. The emphasis on both academics and
                      extracurricular activities helped me develop a
                      well-rounded personality that has been crucial to my
                      success."
                    </p>
                    <Button
                      variant="link"
                      className="p-0 h-auto mt-2 text-blue-600"
                    >
                      Read full story →
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=alumni6"
                    alt="Meera Patel"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-xl font-semibold mb-1">
                      Making a Difference in Healthcare
                    </h4>
                    <p className="text-blue-600 mb-3">
                      Meera Patel, Batch of 1995
                    </p>
                    <p className="text-gray-600">
                      "The values of compassion and service that I learned at
                      BBPS guided me through medical school and beyond. Today,
                      as the head of a rural healthcare initiative, I'm able to
                      bring quality medical care to underserved communities."
                    </p>
                    <Button
                      variant="link"
                      className="p-0 h-auto mt-2 text-blue-600"
                    >
                      Read full story →
                    </Button>
                  </div>
                </div>
              </div>
              <div className="text-center mt-8">
                <Link to="/alumni/stories">
                  <Button>More Success Stories</Button>
                </Link>
              </div>
            </TabsContent>

            <TabsContent
              value="gallery"
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-2xl font-bold mb-6">Photo Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&q=80"
                  alt="Alumni Meet 2022"
                  className="w-full h-40 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                />
                <img
                  src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500&q=80"
                  alt="Graduation Day"
                  className="w-full h-40 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                />
                <img
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&q=80"
                  alt="Campus Tour"
                  className="w-full h-40 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                />
                <img
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&q=80"
                  alt="Reunion Event"
                  className="w-full h-40 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                />
              </div>
              <div className="text-center mt-8">
                <Link to="/alumni/gallery">
                  <Button>View Full Gallery</Button>
                </Link>
              </div>
            </TabsContent>

            <TabsContent
              value="forums"
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-2xl font-bold mb-6">Discussion Forums</h3>
              <div className="space-y-4">
                <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="flex justify-between">
                    <h4 className="font-semibold">Career Networking</h4>
                    <span className="text-sm text-gray-500">124 topics</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">
                    Connect with fellow alumni for career opportunities and
                    professional networking.
                  </p>
                </div>

                <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="flex justify-between">
                    <h4 className="font-semibold">School Memories</h4>
                    <span className="text-sm text-gray-500">87 topics</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">
                    Share your favorite memories and reconnect with old
                    classmates.
                  </p>
                </div>

                <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="flex justify-between">
                    <h4 className="font-semibold">Mentorship Program</h4>
                    <span className="text-sm text-gray-500">56 topics</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">
                    Discussions about mentoring current students and recent
                    graduates.
                  </p>
                </div>
              </div>
              <div className="text-center mt-8">
                <Link to="/alumni/forums">
                  <Button>Join Discussions</Button>
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Alumni Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-blue-100 p-3 rounded-full mb-4">
                  <ShoppingBag className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Alumni Merchandise
                </h3>
                <p className="text-gray-600 mb-4">
                  Show your school pride with our exclusive collection of BBPS
                  branded merchandise.
                </p>
                <Link to="/alumni/merchandise">
                  <Button variant="outline">Shop Now</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-blue-100 p-3 rounded-full mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Alumni Near You</h3>
                <p className="text-gray-600 mb-4">
                  Discover fellow BBPS alumni in your area and connect for local
                  meetups.
                </p>
                <Link to="/alumni/near-you">
                  <Button variant="outline">Find Alumni</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-blue-100 p-3 rounded-full mb-4">
                  <Heart className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Give Back</h3>
                <p className="text-gray-600 mb-4">
                  Support your alma mater through donations, scholarships, or
                  volunteering opportunities.
                </p>
                <Link to="/alumni/give-back">
                  <Button variant="outline">Learn More</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Digital ID and Membership */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Get Your Digital Alumni ID
              </h2>
              <p className="text-xl mb-6">
                Access exclusive benefits with your personalized digital alumni
                ID card. Use it for campus visits, special events, and
                alumni-only offers.
              </p>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Generate Your ID
              </Button>
            </div>
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Membership Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="bg-white/20 p-1 rounded-full">
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>Access to exclusive alumni events</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-white/20 p-1 rounded-full">
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>Networking opportunities with industry leaders</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-white/20 p-1 rounded-full">
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>School library and facility access</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-white/20 p-1 rounded-full">
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>Discounts on school merchandise</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-white/20 p-1 rounded-full">
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>Priority registration for alumni events</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link to="/alumni/membership">
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                  >
                    View Membership Options
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlumniHome;
