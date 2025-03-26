import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { QrCode, Download, Share2, Mail, Smartphone, Search, Check, Loader2 } from "lucide-react";

const verificationSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  graduationYear: z.string().min(4, {
    message: "Please enter a valid graduation year.",
  }),
});

const idCardSchema = z.object({
  fullName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  graduationYear: z.string().min(4, {
    message: "Please enter a valid graduation year.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  address: z.string().min(5, {
    message: "Please enter your current address.",
  }),
  city: z.string().min(2, {
    message: "Please enter your city.",
  }),
  country: z.string().min(2, {
    message: "Please enter your country.",
  }),
  profession: z.string().min(2, {
    message: "Please enter your profession.",
  }),
  photo: z.string().optional(),
});

type VerificationFormValues = z.infer<typeof verificationSchema>;
type IDCardFormValues = z.infer<typeof idCardSchema>;

const AlumniID = () => {
  const [stage, setStage] = useState<"verification" | "form" | "preview" | "success">("verification");
  const [isVerifying, setIsVerifying] = useState(false);
  const [idData, setIdData] = useState<IDCardFormValues | null>(null);
  
  // Form for initial verification
  const verificationForm = useForm<VerificationFormValues>({
    resolver: zodResolver(verificationSchema),
    defaultValues: {
      email: "",
      graduationYear: "",
    },
  });
  
  // Form for ID card details
  const idCardForm = useForm<IDCardFormValues>({
    resolver: zodResolver(idCardSchema),
    defaultValues: {
      fullName: "",
      graduationYear: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      country: "",
      profession: "",
      photo: "",
    },
  });
  
  const onVerificationSubmit = (values: VerificationFormValues) => {
    setIsVerifying(true);
    
    // Simulate API verification delay
    setTimeout(() => {
      setIsVerifying(false);
      
      // If verification successful, move to next stage
      // In a real app, you'd check this against an alumni database
      if (values.email && values.graduationYear) {
        // Pre-fill the ID card form with verified data
        idCardForm.setValue("email", values.email);
        idCardForm.setValue("graduationYear", values.graduationYear);
        
        setStage("form");
      }
    }, 1500);
  };
  
  const onIDCardSubmit = (values: IDCardFormValues) => {
    // Save the ID data for preview and success stages
    setIdData(values);
    setStage("preview");
  };
  
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    
    if (file) {
      // Convert image to base64 string for preview
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          idCardForm.setValue("photo", event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  
  const generateID = () => {
    // In a real app, this would generate the actual ID card
    // For now, just show success screen
    setStage("success");
  };
  
  const formatIDNumber = () => {
    // Create a unique ID based on graduation year and random digits
    const year = idData?.graduationYear || "0000";
    const random = Math.floor(10000 + Math.random() * 90000);
    return `BBPS-${year}-${random}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-3">Digital ID Generator</div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">Alumni Digital ID Card</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Generate your official BBPS Alumni digital ID for event access, campus visits, and exclusive alumni benefits.
            </p>
          </div>
          
          {/* Progress Steps */}
          <div className="flex justify-between mb-10 relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
            
            <div className={`relative z-10 flex flex-col items-center ${stage === "verification" ? "text-blue-600" : "text-gray-700"}`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 shadow-sm ${stage === "verification" ? "bg-blue-600 text-white" : (stage === "form" || stage === "preview" || stage === "success" ? "bg-green-500 text-white" : "bg-gray-200")}`}>
                {stage === "verification" ? "1" : <Check className="h-5 w-5" />}
              </div>
              <span className="text-sm font-medium">Verify</span>
            </div>
            
            <div className={`relative z-10 flex flex-col items-center ${stage === "form" ? "text-blue-600" : (stage === "verification" ? "text-gray-400" : "text-gray-700")}`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 shadow-sm ${stage === "form" ? "bg-blue-600 text-white" : (stage === "preview" || stage === "success" ? "bg-green-500 text-white" : "bg-gray-200")}`}>
                {stage === "form" ? "2" : (stage === "preview" || stage === "success" ? <Check className="h-5 w-5" /> : "2")}
              </div>
              <span className="text-sm font-medium">Details</span>
            </div>
            
            <div className={`relative z-10 flex flex-col items-center ${stage === "preview" ? "text-blue-600" : (stage === "verification" || stage === "form" ? "text-gray-400" : "text-gray-700")}`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 shadow-sm ${stage === "preview" ? "bg-blue-600 text-white" : (stage === "success" ? "bg-green-500 text-white" : "bg-gray-200")}`}>
                {stage === "preview" ? "3" : (stage === "success" ? <Check className="h-5 w-5" /> : "3")}
              </div>
              <span className="text-sm font-medium">Preview</span>
            </div>
            
            <div className={`relative z-10 flex flex-col items-center ${stage === "success" ? "text-blue-600" : "text-gray-400"}`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 shadow-sm ${stage === "success" ? "bg-green-500 text-white" : "bg-gray-200"}`}>
                {stage === "success" ? <Check className="h-5 w-5" /> : "4"}
              </div>
              <span className="text-sm font-medium">Download</span>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8">
            {/* Verification Stage */}
            {stage === "verification" && (
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Verify Your Alumni Status</h2>
                <p className="text-gray-600 mb-6 pb-2 border-b border-gray-100">
                  Please enter your registered email and graduation year to verify your alumni status.
                </p>
                
                <Form {...verificationForm}>
                  <form onSubmit={verificationForm.handleSubmit(onVerificationSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={verificationForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="your.email@example.com" {...field} />
                            </FormControl>
                            <FormDescription>
                              Use the email you registered with as an alumni
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={verificationForm.control}
                        name="graduationYear"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Graduation Year</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., 2005" {...field} />
                            </FormControl>
                            <FormDescription>
                              The year you graduated from BBPS
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="flex justify-end">
                      <Button type="submit" disabled={isVerifying}>
                        {isVerifying ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Verifying...
                          </>
                        ) : (
                          <>Verify & Continue</>
                        )}
                      </Button>
                    </div>
                  </form>
                </Form>
                
                <div className="mt-8 pt-8 border-t">
                  <h3 className="font-medium mb-2">Not Registered Yet?</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    If you haven't registered as an alumni yet, please complete the registration process first.
                  </p>
                  <Button variant="outline">Go to Alumni Registration</Button>
                </div>
              </div>
            )}
            
            {/* Form Stage */}
            {stage === "form" && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Enter Your ID Card Details</h2>
                <p className="text-gray-600 mb-6">
                  Please provide the following information to generate your digital alumni ID card.
                </p>
                
                <Form {...idCardForm}>
                  <form onSubmit={idCardForm.handleSubmit(onIDCardSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                      <div className="md:col-span-2">
                        <FormField
                          control={idCardForm.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your full name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={idCardForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="your.email@example.com" 
                                {...field} 
                                disabled
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={idCardForm.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your phone number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={idCardForm.control}
                        name="graduationYear"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Graduation Year</FormLabel>
                            <FormControl>
                              <Input {...field} disabled />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={idCardForm.control}
                        name="profession"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Profession</FormLabel>
                            <FormControl>
                              <Input placeholder="Current profession/job title" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="md:col-span-2">
                        <FormField
                          control={idCardForm.control}
                          name="address"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Address</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your current address" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={idCardForm.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>City</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your city" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={idCardForm.control}
                        name="country"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Country</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your country" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="md:col-span-2">
                        <FormField
                          control={idCardForm.control}
                          name="photo"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Photo</FormLabel>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                                <div className="col-span-1">
                                  <div className="w-32 h-32 border rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center mb-2">
                                    {field.value ? (
                                      <img 
                                        src={field.value} 
                                        alt="Profile Preview" 
                                        className="w-full h-full object-cover" 
                                      />
                                    ) : (
                                      <div className="text-gray-400 text-xs text-center px-2">
                                        No photo uploaded
                                      </div>
                                    )}
                                  </div>
                                  <p className="text-xs text-gray-500">
                                    Passport size photo
                                  </p>
                                </div>
                                <div className="col-span-2">
                                  <FormControl>
                                    <Input 
                                      type="file"
                                      accept="image/*"
                                      onChange={handleFileUpload}
                                    />
                                  </FormControl>
                                  <FormDescription>
                                    Upload a clear, recent photo with a plain background. Maximum size: 2MB
                                  </FormDescription>
                                  <FormMessage />
                                </div>
                              </div>
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-between pt-4 mt-4 border-t">
                      <Button 
                        type="button" 
                        variant="outline"
                        onClick={() => setStage("verification")}
                      >
                        Back
                      </Button>
                      <Button type="submit">
                        Preview ID Card
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            )}
            
            {/* Preview Stage */}
            {stage === "preview" && idData && (
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Preview Your Digital ID</h2>
                <p className="text-gray-600 mb-8">
                  Please review your ID card details before generating the final version.
                </p>
                
                <div className="flex justify-center mb-10">
                  <Card className="w-80 border-0 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-0">
                      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 text-center">
                        <div className="flex justify-center mb-1">
                          <img 
                            src="/logo.png" 
                            alt="BBPS Logo" 
                            className="h-8 w-auto"
                          />
                        </div>
                        <h3 className="font-bold text-xl">BBPS ALUMNI</h3>
                        <p className="text-sm text-blue-100">Official Digital ID</p>
                      </div>
                      
                      <div className="p-5">
                        <div className="flex">
                          <div className="mr-4">
                            {idData.photo ? (
                              <img 
                                src={idData.photo} 
                                alt="Profile" 
                                className="w-24 h-24 object-cover border-2 border-blue-100 rounded-lg shadow-sm"
                              />
                            ) : (
                              <div className="w-24 h-24 bg-blue-50 flex items-center justify-center border-2 border-blue-100 rounded-lg">
                                <span className="text-xs text-gray-500">No Photo</span>
                              </div>
                            )}
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-800 text-lg">{idData.fullName}</h4>
                            <p className="text-sm text-blue-600 font-medium mb-1">{formatIDNumber()}</p>
                            <p className="text-sm text-gray-600">Batch of {idData.graduationYear}</p>
                            <p className="text-sm text-gray-600 italic mt-1">{idData.profession}</p>
                          </div>
                        </div>
                        
                        <div className="mt-4 space-y-2 text-sm bg-gray-50 p-3 rounded-lg">
                          <div className="flex items-center">
                            <Mail className="h-4 w-4 mr-2 text-blue-600" />
                            <p className="truncate">{idData.email}</p>
                          </div>
                          <div className="flex items-center">
                            <Smartphone className="h-4 w-4 mr-2 text-blue-600" />
                            <p>{idData.phone}</p>
                          </div>
                          <div className="flex items-center">
                            <Search className="h-4 w-4 mr-2 text-blue-600" />
                            <p>{idData.city}, {idData.country}</p>
                          </div>
                        </div>
                        
                        <div className="mt-4 flex justify-center">
                          <div className="bg-white p-2 rounded-lg border border-gray-100 shadow-sm">
                            <QrCode className="h-20 w-20 text-blue-900" />
                          </div>
                        </div>
                        
                        <div className="mt-3 text-center text-xs text-gray-500">
                          <p>Scan to verify • Valid until: {new Date().getFullYear() + 5}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="flex justify-between pt-4 border-t">
                  <Button 
                    variant="outline"
                    onClick={() => setStage("form")}
                    className="px-6"
                  >
                    Edit Details
                  </Button>
                  <Button 
                    onClick={generateID}
                    className="bg-blue-600 hover:bg-blue-700 px-6"
                  >
                    Generate Digital ID
                  </Button>
                </div>
              </div>
            )}
            
            {/* Success Stage */}
            {stage === "success" && idData && (
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <Check className="h-10 w-10 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-green-600 mb-4">ID Generated Successfully!</h2>
                <p className="text-gray-600 mb-10 max-w-md mx-auto">
                  Your digital alumni ID card has been created and is ready to download or share.
                </p>
                
                <div className="flex justify-center mb-10">
                  <Card className="w-80 border-0 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-0">
                      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 text-center">
                        <div className="flex justify-center mb-1">
                          <img 
                            src="/logo.png" 
                            alt="BBPS Logo" 
                            className="h-8 w-auto"
                          />
                        </div>
                        <h3 className="font-bold text-xl">BBPS ALUMNI</h3>
                        <p className="text-sm text-blue-100">Official Digital ID</p>
                      </div>
                      
                      <div className="p-5">
                        <div className="flex">
                          <div className="mr-4">
                            {idData.photo ? (
                              <img 
                                src={idData.photo} 
                                alt="Profile" 
                                className="w-24 h-24 object-cover border-2 border-blue-100 rounded-lg shadow-sm"
                              />
                            ) : (
                              <div className="w-24 h-24 bg-blue-50 flex items-center justify-center border-2 border-blue-100 rounded-lg">
                                <span className="text-xs text-gray-500">No Photo</span>
                              </div>
                            )}
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-800 text-lg">{idData.fullName}</h4>
                            <p className="text-sm text-blue-600 font-medium mb-1">{formatIDNumber()}</p>
                            <p className="text-sm text-gray-600">Batch of {idData.graduationYear}</p>
                            <p className="text-sm text-gray-600 italic mt-1">{idData.profession}</p>
                          </div>
                        </div>
                        
                        <div className="mt-4 space-y-2 text-sm bg-gray-50 p-3 rounded-lg">
                          <div className="flex items-center">
                            <Mail className="h-4 w-4 mr-2 text-blue-600" />
                            <p className="truncate">{idData.email}</p>
                          </div>
                          <div className="flex items-center">
                            <Smartphone className="h-4 w-4 mr-2 text-blue-600" />
                            <p>{idData.phone}</p>
                          </div>
                          <div className="flex items-center">
                            <Search className="h-4 w-4 mr-2 text-blue-600" />
                            <p>{idData.city}, {idData.country}</p>
                          </div>
                        </div>
                        
                        <div className="mt-4 flex justify-center">
                          <div className="bg-white p-2 rounded-lg border border-gray-100 shadow-sm">
                            <QrCode className="h-20 w-20 text-blue-900" />
                          </div>
                        </div>
                        
                        <div className="mt-3 text-center text-xs text-gray-500">
                          <p>Scan to verify • Valid until: {new Date().getFullYear() + 5}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2 px-6">
                    <Download className="h-4 w-4" />
                    Download ID Card
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2 px-6">
                    <Share2 className="h-4 w-4" />
                    Share ID Card
                  </Button>
                </div>
                
                <div className="mt-10 pt-6 border-t">
                  <h3 className="font-medium mb-4 text-gray-800">ID Card Usage Instructions</h3>
                  <div className="bg-blue-50 p-4 rounded-lg max-w-md mx-auto">
                    <ul className="text-sm text-gray-700 text-left space-y-3">
                      <li className="flex items-start">
                        <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                          <Check className="h-3.5 w-3.5 text-blue-600" />
                        </div>
                        Your digital ID can be presented at all BBPS alumni events for quick registration.
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                          <Check className="h-3.5 w-3.5 text-blue-600" />
                        </div>
                        Download and save a copy on your smartphone for easy access.
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                          <Check className="h-3.5 w-3.5 text-blue-600" />
                        </div>
                        The QR code can be scanned to verify your alumni status.
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                          <Check className="h-3.5 w-3.5 text-blue-600" />
                        </div>
                        This ID is valid for 5 years and can be renewed afterwards.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniID; 