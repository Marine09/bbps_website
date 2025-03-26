import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Star, Zap, Shield, Calendar, Clock, FileCheck } from "lucide-react";

interface MembershipTier {
  id: string;
  name: string;
  price: {
    yearly: number;
    lifetime: number;
  };
  icon: React.ReactNode;
  description: string;
  benefits: string[];
  recommended?: boolean;
}

const membershipTiers: MembershipTier[] = [
  {
    id: "basic",
    name: "Basic Membership",
    price: {
      yearly: 1000,
      lifetime: 15000,
    },
    icon: <Check className="h-6 w-6 text-blue-600" />,
    description: "Essential benefits for staying connected with your alma mater",
    benefits: [
      "Digital Alumni ID Card",
      "Access to Alumni Directory",
      "Invitations to Regular Alumni Events",
      "Quarterly Alumni Newsletter",
      "School Campus Visit Access (weekends only)",
    ],
  },
  {
    id: "premium",
    name: "Premium Membership",
    price: {
      yearly: 2500,
      lifetime: 25000,
    },
    icon: <Star className="h-6 w-6 text-yellow-500" />,
    description: "Enhanced benefits for active alumni participation",
    benefits: [
      "All Basic Membership benefits",
      "Priority Registration for Alumni Events",
      "Access to Exclusive Networking Meetups",
      "Voting Rights in Alumni Association Elections",
      "10% Discount on Alumni Merchandise",
      "School Library Access",
      "Invitations to Special School Functions",
    ],
    recommended: true,
  },
  {
    id: "platinum",
    name: "Platinum Membership",
    price: {
      yearly: 5000,
      lifetime: 50000,
    },
    icon: <Zap className="h-6 w-6 text-purple-600" />,
    description: "Premium benefits for the most dedicated alumni",
    benefits: [
      "All Premium Membership benefits",
      "VIP Access to All School Events",
      "Personalized School Memorabilia",
      "Dedicated Alumni Counselor",
      "Ability to Host Events at School Premises",
      "25% Discount on Alumni Merchandise",
      "Recognition on School Website's Honor Wall",
      "Exclusive Leadership & Mentorship Opportunities",
    ],
  },
];

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What is the BBPS Alumni Membership Program?",
    answer: "The BBPS Alumni Membership Program is designed to strengthen connections between alumni and their alma mater. It provides various benefits including event access, networking opportunities, and exclusive resources, while supporting the school's development initiatives."
  },
  {
    question: "How do I join the Alumni Membership Program?",
    answer: "To join, you need to be a verified alumni of BBPS. Simply register through the alumni portal, verify your graduation details, select your preferred membership tier, and complete the payment process. You'll receive your digital membership credentials via email within 24 hours."
  },
  {
    question: "What's the difference between yearly and lifetime membership?",
    answer: "Yearly membership requires annual renewal and payment, while lifetime membership involves a one-time payment for permanent benefits. Lifetime membership provides better value for those planning to maintain their connection with BBPS for many years."
  },
  {
    question: "Can I upgrade my membership tier later?",
    answer: "Yes, you can upgrade your membership tier at any time. If you're on a yearly plan, you'll pay the prorated difference for the remaining period. For lifetime members, you can upgrade by paying the difference between your current and desired tier's lifetime rates."
  },
  {
    question: "How are membership fees utilized?",
    answer: "Membership fees support various alumni initiatives and school development projects, including scholarships for deserving students, campus infrastructure improvements, alumni events, and educational resources. A detailed breakdown is provided in the annual financial report shared with all members."
  },
  {
    question: "Is my membership fee tax-deductible?",
    answer: "Yes, a portion of your membership fee qualifies for tax deduction under Section 80G of the Income Tax Act. A donation receipt will be provided for the deductible amount after payment processing."
  },
];

const AlumniMembership = () => {
  const [selectedTier, setSelectedTier] = useState<string>("premium");
  const [membershipType, setMembershipType] = useState<"yearly" | "lifetime">("yearly");
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };
  
  const handleSelectTier = (tierId: string) => {
    setSelectedTier(tierId);
  };
  
  const handleSelectType = (type: "yearly" | "lifetime") => {
    setMembershipType(type);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-3">Alumni Benefits</div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">Alumni Membership</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join our exclusive alumni membership program to unlock premium benefits, networking opportunities, and stay connected with your alma mater.
            </p>
          </div>
          
          {/* Membership Type Toggle */}
          <div className="mb-12 flex justify-center">
            <Tabs 
              defaultValue="yearly" 
              value={membershipType}
              onValueChange={(value) => handleSelectType(value as "yearly" | "lifetime")}
              className="w-full max-w-md"
            >
              <TabsList className="grid w-full grid-cols-2 bg-gray-100 p-1 rounded-full">
                <TabsTrigger value="yearly" className="rounded-full data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm">
                  Yearly Membership
                </TabsTrigger>
                <TabsTrigger value="lifetime" className="rounded-full data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm">
                  Lifetime Membership
                </TabsTrigger>
              </TabsList>
              <TabsContent value="yearly" className="text-center text-sm text-gray-600 mt-3">
                Pay annually and enjoy continuous membership benefits
              </TabsContent>
              <TabsContent value="lifetime" className="text-center text-sm text-gray-600 mt-3">
                One-time payment for lifelong membership benefits
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Membership Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {membershipTiers.map((tier) => (
              <Card 
                key={tier.id}
                className={`overflow-hidden transition-all rounded-xl ${
                  selectedTier === tier.id 
                    ? 'border-2 border-blue-500 shadow-lg' 
                    : 'border border-gray-100 hover:shadow-lg hover:-translate-y-1 transform transition-all'
                } ${tier.recommended ? 'relative' : ''}`}
              >
                {tier.recommended && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-xs font-medium rounded-bl-lg">
                    RECOMMENDED
                  </div>
                )}
                
                <CardContent className="p-7">
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className={`h-16 w-16 rounded-full flex items-center justify-center mb-4 ${
                      tier.id === 'basic' ? 'bg-blue-50' : 
                      tier.id === 'premium' ? 'bg-yellow-50' : 'bg-purple-50'
                    }`}>
                      {tier.icon}
                    </div>
                    <h2 className="text-xl font-semibold mb-1 text-gray-800">{tier.name}</h2>
                    <p className="text-gray-500 text-sm mb-5">{tier.description}</p>
                    <div className="mb-2">
                      <span className="text-3xl font-bold text-gray-800">₹{tier.price[membershipType].toLocaleString()}</span>
                      <span className="text-gray-500 text-sm">
                        {membershipType === "yearly" ? "/year" : " (one-time)"}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-medium text-sm uppercase text-gray-500 text-center mb-4">Member Benefits</h3>
                    <ul className="space-y-3">
                      {tier.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <div className={`p-1 rounded-full flex-shrink-0 mr-3 mt-0.5 ${
                            tier.id === 'basic' ? 'bg-blue-100 text-blue-600' : 
                            tier.id === 'premium' ? 'bg-yellow-100 text-yellow-600' : 'bg-purple-100 text-purple-600'
                          }`}>
                            <Check className="h-3 w-3" />
                          </div>
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                
                <CardFooter className="px-7 pb-7 pt-2">
                  <Button 
                    className={`w-full rounded-full ${
                      selectedTier === tier.id 
                        ? tier.id === 'basic' ? 'bg-blue-600 hover:bg-blue-700' : 
                          tier.id === 'premium' ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-purple-600 hover:bg-purple-700'
                        : 'bg-white text-gray-800 border-gray-200 hover:bg-gray-50'
                    }`}
                    variant={selectedTier === tier.id ? "default" : "outline"}
                    onClick={() => handleSelectTier(tier.id)}
                  >
                    {selectedTier === tier.id ? "Selected" : "Select Plan"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {/* Selected Membership Summary */}
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8 mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-gray-800">Membership Summary</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium mb-4 text-gray-700">Selected Plan</h3>
                <div className="flex items-start p-5 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="mr-4">
                    <div className={`h-12 w-12 rounded-full flex items-center justify-center ${
                      selectedTier === 'basic' ? 'bg-blue-50' : 
                      selectedTier === 'premium' ? 'bg-yellow-50' : 'bg-purple-50'
                    }`}>
                      {membershipTiers.find(tier => tier.id === selectedTier)?.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {membershipTiers.find(tier => tier.id === selectedTier)?.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {membershipType === "yearly" ? "Annual Membership" : "Lifetime Membership"}
                    </p>
                    <p className="text-blue-600 font-medium mt-1">
                      ₹{membershipTiers.find(tier => tier.id === selectedTier)?.price[membershipType].toLocaleString()}
                      <span className="text-gray-500 text-sm font-normal">
                        {membershipType === "yearly" ? "/year" : " (one-time)"}
                      </span>
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 space-y-3 bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-5 w-5 mr-3 text-blue-600" />
                    <span className="text-gray-700">
                      {membershipType === "yearly" 
                        ? "Valid for 1 year from date of purchase" 
                        : "Valid for lifetime"}
                    </span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="h-5 w-5 mr-3 text-blue-600" />
                    <span className="text-gray-700">Activation within 24 hours of payment</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <FileCheck className="h-5 w-5 mr-3 text-blue-600" />
                    <span className="text-gray-700">Digital membership certificate included</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-medium mb-5 text-gray-800">Payment Information</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name (as per records)
                    </label>
                    <input 
                      type="text"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input 
                      type="email"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Graduation Year
                    </label>
                    <input 
                      type="text"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., 2005"
                    />
                  </div>
                  <Button className="w-full rounded-lg mt-2 bg-blue-600 hover:bg-blue-700">Proceed to Payment</Button>
                  <p className="text-xs text-gray-500 text-center mt-2">
                    By proceeding, you agree to our membership terms and conditions.
                  </p>
                </form>
              </div>
            </div>
          </div>
          
          {/* Membership Benefits */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-10 mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-30 -translate-y-1/3 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100 rounded-full opacity-30 translate-y-1/3 -translate-x-1/3"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl font-semibold mb-8 text-center text-gray-800">Why Join the Alumni Membership Program?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mb-5">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-3 text-gray-800">Exclusive Access</h3>
                  <p className="text-gray-600">
                    Gain privileged access to school facilities, special events, and alumni-only gatherings throughout the year.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="h-14 w-14 bg-yellow-100 rounded-full flex items-center justify-center mb-5">
                    <Star className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="font-semibold mb-3 text-gray-800">Professional Network</h3>
                  <p className="text-gray-600">
                    Connect with a vast network of successful BBPS alumni across various industries for career growth and collaborations.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="h-14 w-14 bg-purple-100 rounded-full flex items-center justify-center mb-5">
                    <Zap className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-3 text-gray-800">Give Back</h3>
                  <p className="text-gray-600">
                    Your membership directly contributes to school development and scholarships for deserving students.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* FAQs */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-gray-800">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`border rounded-xl overflow-hidden transition-all ${expandedFAQ === index ? 'border-blue-200 bg-blue-50' : 'border-gray-100'}`}
                >
                  <button
                    className="flex justify-between items-center w-full p-5 text-left font-medium focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className={expandedFAQ === index ? 'text-blue-700' : 'text-gray-800'}>{faq.question}</span>
                    <span className={`ml-2 ${expandedFAQ === index ? 'text-blue-600' : 'text-gray-400'}`}>
                      {expandedFAQ === index ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </span>
                  </button>
                  
                  {expandedFAQ === index && (
                    <div className="p-5 pt-0 border-t border-blue-100">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Testimonials */}
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-8 text-center text-gray-800">What Our Members Say</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=testimonial1"
                    alt="Rahul Mehta"
                    className="w-16 h-16 rounded-full border-2 border-blue-100 shadow-sm mr-4"
                  />
                  <div>
                    <h3 className="font-medium text-gray-800">Rahul Mehta</h3>
                    <p className="text-sm text-blue-600">Class of 2002, Premium Member</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The alumni membership has been invaluable for my professional networking. I've connected with fellow BBPS graduates who've helped me navigate career transitions and find new opportunities."
                </p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=testimonial2"
                    alt="Priya Sharma"
                    className="w-16 h-16 rounded-full border-2 border-yellow-100 shadow-sm mr-4"
                  />
                  <div>
                    <h3 className="font-medium text-gray-800">Priya Sharma</h3>
                    <p className="text-sm text-yellow-600">Class of 2010, Platinum Member</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "As a lifetime platinum member, I love being able to access school facilities and host events there. It's been wonderful to give back through mentoring programs and see the direct impact of my contributions."
                </p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=testimonial3"
                    alt="Vikram Joshi"
                    className="w-16 h-16 rounded-full border-2 border-purple-100 shadow-sm mr-4"
                  />
                  <div>
                    <h3 className="font-medium text-gray-800">Vikram Joshi</h3>
                    <p className="text-sm text-purple-600">Class of 1995, Basic Member</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The basic membership has kept me connected to my roots. The quarterly newsletter keeps me updated about school developments, and the alumni events are always a nostalgic trip down memory lane."
                </p>
              </div>
            </div>
          </div>
          
          {/* Join Now CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to Join the BBPS Alumni Community?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Become a member today and enjoy exclusive benefits while staying connected with your alma mater and fellow alumni.
            </p>
            <Button className="bg-white text-blue-700 hover:bg-blue-50 shadow-md hover:shadow-lg transition-shadow px-8 py-6 h-auto text-lg font-medium">
              Join the Membership Program
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniMembership; 