import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Banknote,
  BookOpen,
  Calendar,
  Gift,
  Lamp,
  User,
  Award,
  GraduationCap,
  Heart,
  LucideIcon,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Clock,
  Users,
} from "lucide-react";

interface DonationOption {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  suggestedAmounts: number[];
}

const donationOptions: DonationOption[] = [
  {
    id: "scholarship",
    title: "Scholarship Fund",
    icon: BookOpen,
    description: "Support deserving students by contributing to our scholarship fund, helping future generations access quality education regardless of financial constraints.",
    suggestedAmounts: [1000, 5000, 10000, 25000],
  },
  {
    id: "infrastructure",
    title: "Infrastructure Development",
    icon: Lamp,
    description: "Help modernize our campus facilities, including classrooms, laboratories, and sports facilities to create better learning environments.",
    suggestedAmounts: [2000, 5000, 15000, 50000],
  },
  {
    id: "technology",
    title: "Technology Initiatives",
    icon: Gift,
    description: "Contribute to enhancing the school's technological capabilities, including computer labs, digital classrooms, and educational software.",
    suggestedAmounts: [3000, 7500, 15000, 30000],
  },
  {
    id: "alumni",
    title: "Alumni Activities",
    icon: Calendar,
    description: "Support alumni events, reunions, and networking activities that strengthen our community bonds and create meaningful connections.",
    suggestedAmounts: [1000, 2500, 5000, 10000],
  },
];

interface SuccessStory {
  id: number;
  title: string;
  description: string;
  fundRaised: string;
  impact: string;
  image: string;
}

const successStories: SuccessStory[] = [
  {
    id: 1,
    title: "Computer Lab Renovation",
    description: "Alumni donations helped renovate the computer lab with 40 new workstations and advanced educational software.",
    fundRaised: "₹15,00,000",
    impact: "Benefiting 1,200+ students annually with modern technology skills",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Computer+Lab",
  },
  {
    id: 2,
    title: "Merit Scholarship Program",
    description: "The alumni-funded scholarship program has supported academically gifted students from economically challenged backgrounds.",
    fundRaised: "₹22,50,000",
    impact: "Fully funded education for 45 deserving students over the past 3 years",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Scholarship+Program",
  },
  {
    id: 3,
    title: "Sports Complex Enhancement",
    description: "Alumni contributions upgraded the school's sports facilities, including a new basketball court and athletics equipment.",
    fundRaised: "₹18,75,000",
    impact: "Improved training facilities for 14 school sports teams",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Sports+Complex",
  },
];

const volunteerOpportunities = [
  {
    title: "Guest Lectures",
    description: "Share your professional expertise and inspire current students",
    commitment: "2-3 hours, scheduled based on your availability",
  },
  {
    title: "Mentorship Program",
    description: "Guide students in career planning and professional development",
    commitment: "4-6 hours monthly for at least 6 months",
  },
  {
    title: "Career Counseling",
    description: "Participate in career fairs and counseling sessions",
    commitment: "1-2 days annually",
  },
  {
    title: "Event Organization",
    description: "Help organize alumni gatherings, reunions, and networking events",
    commitment: "Varies based on event scale",
  },
  {
    title: "Fundraising Initiatives",
    description: "Assist in planning and executing fundraising campaigns",
    commitment: "Flexible, project-based involvement",
  },
];

const AlumniGiveBack = () => {
  const [selectedDonation, setSelectedDonation] = useState<string | null>(null);
  const [donationAmount, setDonationAmount] = useState<string>("");
  const [customAmount, setCustomAmount] = useState<boolean>(false);
  
  const handleDonationSelect = (id: string) => {
    setSelectedDonation(id);
    setDonationAmount("");
    setCustomAmount(false);
  };
  
  const handleAmountSelect = (amount: number) => {
    setDonationAmount(amount.toString());
    setCustomAmount(false);
  };
  
  const handleCustomAmount = () => {
    setDonationAmount("");
    setCustomAmount(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-3">Alumni Contributions</div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">Give Back to BBPS</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Support your alma mater by contributing time, expertise, or resources to help current and future students thrive and continue the legacy of excellence.
            </p>
          </div>
          
          <Tabs defaultValue="donate" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-10 p-1 bg-gray-100 rounded-full">
              <TabsTrigger value="donate" className="rounded-full data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm">Donate</TabsTrigger>
              <TabsTrigger value="volunteer" className="rounded-full data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm">Volunteer</TabsTrigger>
              <TabsTrigger value="impact" className="rounded-full data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm">Impact Stories</TabsTrigger>
            </TabsList>
            
            {/* Donate Tab */}
            <TabsContent value="donate">
              <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8 mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Make a Contribution</h2>
                <p className="text-gray-600 mb-8 pb-2 border-b border-gray-100">
                  Your financial support helps enhance educational opportunities, improve facilities, and create a better learning environment for current and future students.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {donationOptions.map((option) => {
                    const Icon = option.icon;
                    return (
                      <Card 
                        key={option.id}
                        className={`cursor-pointer transition-all rounded-xl overflow-hidden ${
                          selectedDonation === option.id 
                            ? 'border-2 border-blue-500 shadow-md' 
                            : 'border border-gray-100 hover:shadow-lg hover:-translate-y-1 transform transition-all'
                        }`}
                        onClick={() => handleDonationSelect(option.id)}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start">
                            <div className="mr-4 bg-blue-100 p-3 rounded-full">
                              <Icon className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg mb-2 text-gray-800">{option.title}</h3>
                              <p className="text-gray-600">{option.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
                
                {selectedDonation && (
                  <div className="border-t border-gray-100 pt-8">
                    <h3 className="font-semibold mb-5 text-gray-800">Select Donation Amount</h3>
                    <div className="flex flex-wrap gap-3 mb-8">
                      {donationOptions.find(opt => opt.id === selectedDonation)?.suggestedAmounts.map(amount => (
                        <Button
                          key={amount}
                          variant={donationAmount === amount.toString() && !customAmount ? "default" : "outline"}
                          onClick={() => handleAmountSelect(amount)}
                          className={`min-w-24 rounded-full border-gray-200 ${
                            donationAmount === amount.toString() && !customAmount 
                              ? 'bg-blue-600 hover:bg-blue-700' 
                              : 'hover:bg-gray-50 hover:text-gray-800'
                          }`}
                        >
                          ₹{amount.toLocaleString()}
                        </Button>
                      ))}
                      <Button
                        variant={customAmount ? "default" : "outline"}
                        onClick={handleCustomAmount}
                        className={`rounded-full border-gray-200 ${
                          customAmount 
                            ? 'bg-blue-600 hover:bg-blue-700' 
                            : 'hover:bg-gray-50 hover:text-gray-800'
                        }`}
                      >
                        Custom Amount
                      </Button>
                    </div>
                    
                    {customAmount && (
                      <div className="mb-8">
                        <Input
                          type="number"
                          placeholder="Enter custom amount (₹)"
                          value={donationAmount}
                          onChange={(e) => setDonationAmount(e.target.value)}
                          className="max-w-xs rounded-lg"
                        />
                      </div>
                    )}
                    
                    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mt-8 bg-blue-50 p-5 rounded-lg">
                      <div className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                        <p className="text-sm text-gray-600">
                          All donations are tax-deductible under Section 80G of the Income Tax Act.
                        </p>
                      </div>
                      <Button 
                        size="lg" 
                        disabled={!donationAmount}
                        className="bg-blue-600 hover:bg-blue-700 px-6 rounded-lg shadow-sm"
                      >
                        Proceed to Payment
                      </Button>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-xl p-8 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center p-4 border border-blue-400 bg-blue-500/20 backdrop-blur-sm rounded-lg">
                    <h3 className="text-3xl font-bold mb-2">₹50L+</h3>
                    <p className="text-blue-100">Raised for various initiatives from alumni donations</p>
                  </div>
                  <div className="text-center p-4 border border-blue-400 bg-blue-500/20 backdrop-blur-sm rounded-lg">
                    <h3 className="text-3xl font-bold mb-2">120+</h3>
                    <p className="text-blue-100">Students receiving scholarships from alumni funds</p>
                  </div>
                  <div className="text-center p-4 border border-blue-400 bg-blue-500/20 backdrop-blur-sm rounded-lg">
                    <h3 className="text-3xl font-bold mb-2">15+</h3>
                    <p className="text-blue-100">Campus improvement projects completed with alumni support</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Volunteer Tab */}
            <TabsContent value="volunteer">
              <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8 mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Volunteer Your Time & Expertise</h2>
                <p className="text-gray-600 mb-8 pb-2 border-b border-gray-100">
                  Share your knowledge, experience, and skills to enrich the educational journey of current students and support school initiatives.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="font-medium mb-6 text-gray-700 flex items-center">
                      <Users className="h-5 w-5 mr-2 text-blue-600" />
                      Available Opportunities
                    </h3>
                    <div className="space-y-4">
                      {volunteerOpportunities.map((opportunity, index) => (
                        <div key={index} className="border border-gray-100 rounded-xl p-5 hover:shadow-md transition-all hover:-translate-y-1 transform bg-gray-50">
                          <h4 className="font-semibold mb-2 text-gray-800">{opportunity.title}</h4>
                          <p className="text-gray-600 mb-3">{opportunity.description}</p>
                          <div className="flex items-center text-sm text-gray-500 bg-white p-2 rounded-lg inline-flex">
                            <Clock className="h-4 w-4 mr-2 text-blue-600" />
                            <span>{opportunity.commitment}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-b from-blue-50 to-indigo-50 rounded-xl p-6 border border-gray-100 shadow-sm">
                    <h3 className="font-medium mb-5 text-gray-800 flex items-center">
                      <Heart className="h-5 w-5 mr-2 text-blue-600" />
                      Express Interest
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <Input placeholder="Enter your name" className="rounded-lg" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <Input type="email" placeholder="your.email@example.com" className="rounded-lg" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Graduation Year
                        </label>
                        <Input placeholder="e.g., 2005" className="rounded-lg" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Areas of Interest
                        </label>
                        <select className="w-full h-10 px-3 rounded-lg border bg-white">
                          <option value="" disabled selected>Select an opportunity</option>
                          {volunteerOpportunities.map((opportunity, index) => (
                            <option key={index} value={opportunity.title}>{opportunity.title}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Message
                        </label>
                        <Textarea placeholder="Share any specific skills or ideas you'd like to contribute" className="rounded-lg" />
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-2">Submit Interest</Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl p-8 mb-8">
                <div className="max-w-3xl mx-auto text-center">
                  <h3 className="text-2xl font-bold mb-4">Why Volunteer With Us?</h3>
                  <p className="text-blue-100 mb-8">
                    Volunteering with your alma mater is not just about giving back, it's about building lasting connections, developing new skills, and making a meaningful impact on future generations.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 border border-blue-400 bg-blue-500/20 backdrop-blur-sm rounded-lg">
                      <Award className="h-8 w-8 mx-auto mb-3 text-blue-100" />
                      <h4 className="font-semibold mb-2">Recognition</h4>
                      <p className="text-sm text-blue-100">Volunteer contributions are recognized at our annual alumni awards ceremony</p>
                    </div>
                    <div className="p-4 border border-blue-400 bg-blue-500/20 backdrop-blur-sm rounded-lg">
                      <GraduationCap className="h-8 w-8 mx-auto mb-3 text-blue-100" />
                      <h4 className="font-semibold mb-2">Personal Growth</h4>
                      <p className="text-sm text-blue-100">Develop leadership, communication, and organizational skills</p>
                    </div>
                    <div className="p-4 border border-blue-400 bg-blue-500/20 backdrop-blur-sm rounded-lg">
                      <Users className="h-8 w-8 mx-auto mb-3 text-blue-100" />
                      <h4 className="font-semibold mb-2">Networking</h4>
                      <p className="text-sm text-blue-100">Connect with fellow alumni across different fields and industries</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Impact Stories Tab */}
            <TabsContent value="impact">
              <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8 mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Impact Stories</h2>
                <p className="text-gray-600 mb-8 pb-2 border-b border-gray-100">
                  See how alumni contributions have made a real difference in the lives of students and the development of our school.
                </p>
                
                <div className="space-y-10">
                  {successStories.map((story) => (
                    <div key={story.id} className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-100 pb-10 last:border-b-0 last:pb-0">
                      <div className="md:col-span-1">
                        <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100">
                          <img
                            src={story.image}
                            alt={story.title}
                            className="w-full h-56 object-cover"
                          />
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">{story.title}</h3>
                        <p className="text-gray-600 mb-6">{story.description}</p>
                        <div className="grid grid-cols-2 gap-6 mb-4">
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-500 mb-1">Funds Raised</p>
                            <p className="font-semibold text-blue-700 text-lg">{story.fundRaised}</p>
                          </div>
                          <div className="bg-green-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-500 mb-1">Impact</p>
                            <p className="font-semibold text-green-700 text-lg">{story.impact}</p>
                          </div>
                        </div>
                        <Button variant="outline" className="mt-2 text-blue-600 gap-1 border-blue-200 hover:bg-blue-50">
                          Read Full Story
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-center mt-10">
                  <Button variant="outline" className="gap-2 rounded-full px-6">
                    View More Impact Stories
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 text-center mb-8 relative overflow-hidden border border-gray-100 shadow-sm">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-30 -translate-y-1/3 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100 rounded-full opacity-30 translate-y-1/3 -translate-x-1/3"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">Join Our Donors Club</h3>
                  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    Become a part of our esteemed donors club by making regular contributions. Members receive special recognition, invitations to exclusive events, and regular updates on the impact of their donations.
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700 rounded-full px-6 shadow-sm">Learn More</Button>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8">
                <h3 className="text-xl font-semibold mb-6 text-center text-gray-800">Testimonials from Beneficiaries</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <p className="italic text-gray-600 mb-4">
                      "The alumni scholarship has been life-changing for me. I can now focus on my studies without the financial burden on my family. I hope to give back the same way when I graduate."
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">R</div>
                      <div>
                        <h4 className="font-medium text-gray-800">Rahul Sharma</h4>
                        <p className="text-sm text-blue-600">Class 12 Science Stream</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <p className="italic text-gray-600 mb-4">
                      "The new computer lab funded by alumni donations has completely transformed our learning experience. We now have access to modern technology and software that prepares us for future careers."
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold mr-3">A</div>
                      <div>
                        <h4 className="font-medium text-gray-800">Ananya Patel</h4>
                        <p className="text-sm text-indigo-600">Class 11 Commerce Stream</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AlumniGiveBack; 