import React from "react";
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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  graduationYear: z.string({
    required_error: "Please select your graduation year.",
  }),
  currentOccupation: z.string().min(2, {
    message: "Please enter your current occupation.",
  }),
  company: z.string().optional(),
  position: z.string().optional(),
  address: z.string().min(5, {
    message: "Please enter your current address.",
  }),
  city: z.string().min(2, {
    message: "Please enter your city.",
  }),
  country: z.string().min(2, {
    message: "Please enter your country.",
  }),
  interests: z.array(z.string()).optional(),
  bio: z
    .string()
    .max(500, {
      message: "Bio must not exceed 500 characters.",
    })
    .optional(),
  agreeTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions.",
  }),
});

type RegistrationFormValues = z.infer<typeof formSchema>;

const interestOptions = [
  { id: "mentorship", label: "Mentorship" },
  { id: "guest-lectures", label: "Guest Lectures" },
  { id: "career-guidance", label: "Career Guidance" },
  { id: "fundraising", label: "Fundraising" },
  { id: "events", label: "Event Organization" },
];

const AlumniRegistration = () => {
  // Generate graduation years (from current year back to 1970)
  const currentYear = new Date().getFullYear();
  const graduationYears = Array.from({ length: currentYear - 1969 }, (_, i) =>
    (currentYear - i).toString(),
  );

  const form = useForm<RegistrationFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      graduationYear: "",
      currentOccupation: "",
      company: "",
      position: "",
      address: "",
      city: "",
      country: "",
      interests: [],
      bio: "",
      agreeTerms: false,
    },
  });

  const onSubmit = (values: RegistrationFormValues) => {
    console.log(values);
    // Here you would typically send the data to your backend
    alert(
      "Registration submitted successfully! You will receive a confirmation email shortly.",
    );
    form.reset();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-center mb-2">
            Alumni Registration
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Join our alumni network to stay connected with your alma mater and
            fellow graduates.
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Personal Information Section */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold border-b pb-2">
                  Personal Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name*</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your first name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name*</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your last name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email*</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your.email@example.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number*</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your phone number"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="graduationYear"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Graduation Year*</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your graduation year" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {graduationYears.map((year) => (
                            <SelectItem key={year} value={year}>
                              {year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Professional Information Section */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold border-b pb-2">
                  Professional Information
                </h2>

                <FormField
                  control={form.control}
                  name="currentOccupation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Occupation*</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your current occupation"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company/Organization</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your company name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="position"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Position/Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your position" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Contact Information Section */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold border-b pb-2">
                  Contact Information
                </h2>

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address*</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter your current address"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City*</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your city" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Country*</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your country" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Additional Information Section */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold border-b pb-2">
                  Additional Information
                </h2>

                <FormField
                  control={form.control}
                  name="interests"
                  render={() => (
                    <FormItem>
                      <div className="mb-4">
                        <FormLabel>Areas of Interest</FormLabel>
                        <FormDescription>
                          Select areas where you would like to contribute to the
                          school community.
                        </FormDescription>
                      </div>
                      {interestOptions.map((option) => (
                        <FormField
                          key={option.id}
                          control={form.control}
                          name="interests"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={option.id}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(option.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([
                                            ...(field.value || []),
                                            option.id,
                                          ])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== option.id,
                                            ),
                                          );
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  {option.label}
                                </FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Brief Bio</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Share a brief bio about yourself (max 500 characters)"
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Tell us about your journey after graduation,
                        achievements, and current endeavors.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Terms and Conditions */}
              <FormField
                control={form.control}
                name="agreeTerms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        I agree to the terms and conditions and privacy policy
                      </FormLabel>
                      <FormDescription>
                        By registering, you agree to join our alumni network and
                        receive occasional updates.
                      </FormDescription>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Submit Registration
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AlumniRegistration;
