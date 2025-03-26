import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Search, Mail, Phone, Briefcase, GraduationCap, Users } from "lucide-react";

// Mock data for alumni
const alumniData = [
  {
    id: 1,
    name: "Rajesh Kumar",
    batch: "1995",
    location: "Mumbai, Maharashtra",
    distance: 5.2,
    profession: "Neurosurgeon",
    company: "Lilavati Hospital",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=alumni1",
    email: "rajesh.kumar@example.com",
    phone: "+91 98765 43210",
  },
  {
    id: 2,
    name: "Priya Sharma",
    batch: "2001",
    location: "Navi Mumbai, Maharashtra",
    distance: 2.8,
    profession: "Tech Entrepreneur",
    company: "EduTech Solutions",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=alumni2",
    email: "priya.sharma@example.com",
    phone: "+91 98765 12345",
  },
  {
    id: 3,
    name: "Vikram Mehta",
    batch: "1988",
    location: "Thane, Maharashtra",
    distance: 12.5,
    profession: "Environmental Scientist",
    company: "Green Earth Research",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=alumni3",
    email: "vikram.mehta@example.com",
    phone: "+91 98765 67890",
  },
  {
    id: 4,
    name: "Ananya Desai",
    batch: "2005",
    location: "Pune, Maharashtra",
    distance: 120.3,
    profession: "International Diplomat",
    company: "Ministry of External Affairs",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=alumni4",
    email: "ananya.desai@example.com",
    phone: "+91 98765 09876",
  },
  {
    id: 5,
    name: "Arjun Patel",
    batch: "2010",
    location: "Mumbai, Maharashtra",
    distance: 7.8,
    profession: "Software Engineer",
    company: "Google India",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=alumni5",
    email: "arjun.patel@example.com",
    phone: "+91 98765 23456",
  },
  {
    id: 6,
    name: "Meera Joshi",
    batch: "2003",
    location: "Navi Mumbai, Maharashtra",
    distance: 3.5,
    profession: "Marketing Director",
    company: "Unilever",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=alumni6",
    email: "meera.joshi@example.com",
    phone: "+91 98765 34567",
  },
  {
    id: 7,
    name: "Rahul Singhania",
    batch: "1992",
    location: "Mumbai, Maharashtra",
    distance: 8.1,
    profession: "Investment Banker",
    company: "Morgan Stanley",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=alumni7",
    email: "rahul.singhania@example.com",
    phone: "+91 98765 45678",
  },
  {
    id: 8,
    name: "Neha Kapoor",
    batch: "2008",
    location: "Thane, Maharashtra",
    distance: 15.2,
    profession: "Architect",
    company: "Design Innovations",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=alumni8",
    email: "neha.kapoor@example.com",
    phone: "+91 98765 56789",
  },
];

export const AlumniNearYou = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [distanceFilter, setDistanceFilter] = useState("all");
  const [batchFilter, setBatchFilter] = useState("");
  const [showMap, setShowMap] = useState(false);

  // Filter alumni based on search term and filters
  const filteredAlumni = alumniData.filter((alumni) => {
    const matchesSearch = 
      alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumni.profession.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumni.company.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLocation = 
      locationFilter === "" ||
      alumni.location.toLowerCase().includes(locationFilter.toLowerCase());
    
    const matchesBatch = 
      batchFilter === "" ||
      alumni.batch === batchFilter;
    
    const matchesDistance = 
      distanceFilter === "all" ||
      (distanceFilter === "0-5" && alumni.distance <= 5) ||
      (distanceFilter === "5-10" && alumni.distance > 5 && alumni.distance <= 10) ||
      (distanceFilter === "10-20" && alumni.distance > 10 && alumni.distance <= 20) ||
      (distanceFilter === "20+" && alumni.distance > 20);
    
    return matchesSearch && matchesLocation && matchesBatch && matchesDistance;
  });

  // Get unique batches for filter dropdown
  const uniqueBatches = [...new Set(alumniData.map(alumni => alumni.batch))].sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2">Alumni Near You</h1>
          <p className="text-gray-600 text-center mb-8">
            Connect with fellow BBPS alumni in your area for networking and meetups.
          </p>

          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by name, profession, or company"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-48">
                  <Input
                    placeholder="Location"
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    className="w-full"
                  />
                </div>
                <div className="w-full md:w-48">
                  <select
                    value={distanceFilter}
                    onChange={(e) => setDistanceFilter(e.target.value)}
                    className="w-full h-10 px-3 rounded-md border border-input bg-background"
                  >
                    <option value="all">Any Distance</option>
                    <option value="0-5">0-5 km</option>
                    <option value="5-10">5-10 km</option>
                    <option value="10-20">10-20 km</option>
                    <option value="20+">20+ km</option>
                  </select>
                </div>
                <div className="w-full md:w-48">
                  <select
                    value={batchFilter}
                    onChange={(e) => setBatchFilter(e.target.value)}
                    className="w-full h-10 px-3 rounded-md border border-input bg-background"
                  >
                    <option value="">Any Batch</option>
                    {uniqueBatches.map(batch => (
                      <option key={batch} value={batch}>{batch}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">
                {filteredAlumni.length} alumni found
              </p>
              <Button
                variant="outline"
                onClick={() => setShowMap(!showMap)}
                className="flex items-center gap-2"
              >
                <MapPin className="h-4 w-4" />
                {showMap ? "List View" : "Map View"}
              </Button>
            </div>
          </div>

          {showMap ? (
            <div className="bg-white rounded-lg shadow-sm p-6 h-[600px] flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">Map View Coming Soon</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  We're working on an interactive map to help you locate alumni more easily.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAlumni.length > 0 ? (
                filteredAlumni.map((alumni) => (
                  <Card key={alumni.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex items-start p-6">
                        <div className="flex-shrink-0 mr-4">
                          <div className="w-20 h-20 rounded-full overflow-hidden">
                            <img
                              src={alumni.image}
                              alt={alumni.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-1">{alumni.name}</h3>
                          <div className="flex items-center text-gray-500 text-sm mb-1">
                            <GraduationCap className="h-3 w-3 mr-1" />
                            <span>Batch of {alumni.batch}</span>
                          </div>
                          <div className="flex items-center text-gray-500 text-sm mb-1">
                            <Briefcase className="h-3 w-3 mr-1" />
                            <span>{alumni.profession}</span>
                          </div>
                          <div className="flex items-center text-gray-500 text-sm mb-1">
                            <Users className="h-3 w-3 mr-1" />
                            <span>{alumni.company}</span>
                          </div>
                        </div>
                      </div>

                      <div className="border-t px-6 py-4">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <MapPin className="h-3 w-3 mr-2" />
                          <span>{alumni.location}</span>
                          <span className="ml-auto font-medium text-blue-600">{alumni.distance} km</span>
                        </div>

                        <div className="flex justify-between mt-4">
                          <Button variant="outline" size="sm" className="flex items-center gap-1">
                            <Mail className="h-3 w-3" />
                            Email
                          </Button>
                          <Button variant="outline" size="sm" className="flex items-center gap-1">
                            <Phone className="h-3 w-3" />
                            Call
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No Alumni Found</h3>
                  <p className="text-gray-500 max-w-md mx-auto">
                    Try adjusting your filters to find alumni in your area.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};