import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Users, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";

const formSchema = z.object({
  tourDate: z.date({
    required_error: "Please select a date for your tour.",
  }),
  tourTime: z.string({
    required_error: "Please select a time for your tour.",
  }),
  groupSize: z.string({
    required_error: "Please specify the number of people in your group.",
  }),
  tourType: z.enum(["general", "academic", "sports", "cultural", "nostalgic"], {
    required_error: "Please select a tour type.",
  }),
  specialRequests: z
    .string()
    .max(500, {
      message: "Special requests must not exceed 500 characters.",
    })
    .optional(),
  contactName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  contactEmail: z.string().email({
    message: "Please enter a valid email address.",
  }),
  contactPhone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  graduationYear: z.string().optional(),
});

type TourFormValues = z.infer<typeof formSchema>;

// Mock data for tour times
const tourTimes = [
  "10:00 AM - 11:30 AM",
  "12:00 PM - 01:30 PM",
  "02:00 PM - 03:30 PM",
  "04:00 PM - 05:30 PM",
];

// Mock data for upcoming tours with available slots
const upcomingTours = [
  {
    id: 1,
    date: new Date(2023, 10, 15), // November 15, 2023
    time: "10:00 AM - 11:30 AM",
    type: "general",
    availableSlots: 8,
    totalSlots: 15,
  },
  {
    id: 2,
    date: new Date(2023, 10, 22), // November 22, 2023
    time: "02:00 PM - 03:30 PM",
    type: "academic",
    availableSlots: 5,
    totalSlots: 10,
  },
  {
    id: 3,
    date: new Date(2023, 11, 5), // December 5, 2023
    time: "12:00 PM - 01:30 PM",
    type: "nostalgic",
    availableSlots: 12,
    totalSlots: 20,
    description: "Special tour focusing on alumni memories and school history",
  },
];

const SchoolTour = () => {
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<TourFormValues | null>(
    null,
  );
  const [selectedTourId, setSelectedTourId] = useState<number | null>(null);

  const form = useForm<TourFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tourDate: undefined,
      tourTime: "",
      groupSize: "1",
      tourType: "general",
      specialRequests: "",
      contactName: "",
      contactEmail: "",
      contactPhone: "",
      graduationYear: "",
    },
  });

  const onSubmit = (values: TourFormValues) => {
    console.log(values);
    // Here you would typically send the data to your backend
    setBookingDetails(values);
    setBookingConfirmed(true);
  };

  const selectPrescheduledTour = (tour: (typeof upcomingTours)[0]) => {
    setSelectedTourId(tour.id);
    form.setValue("tourDate", tour.date);
    form.setValue("tourTime", tour.time);
    form.setValue("tourType", tour.type as any);
  };

  const resetForm = () => {
    form.reset();
    setBookingConfirmed(false);
    setBookingDetails(null);
    setSelectedTourId(null);
  };

  // Generate graduation years (from current year back to 1970)
  const currentYear = new Date().getFullYear();
  const graduationYears = Array.from({ length: currentYear - 1969 }, (_, i) =>
    (currentYear - i).toString(),
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2">
            Schedule a School Tour
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Revisit your alma mater and see how the campus has evolved over the
            years.
          </p>

          {bookingConfirmed ? (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-green-600 mb-4">
                Tour Scheduled Successfully!
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-6 text-left">
                <h3 className="font-semibold text-lg mb-4 text-center">
                  Tour Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600 text-sm">Date:</p>
                    <p className="font-medium">
                      {bookingDetails?.tourDate
                        ? format(bookingDetails.tourDate, "PPP")
                        : ""}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Time:</p>
                    <p className="font-medium">{bookingDetails?.tourTime}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Group Size:</p>
                    <p className="font-medium">
                      {bookingDetails?.groupSize} people
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Tour Type:</p>
                    <p className="font-medium capitalize">
                      {bookingDetails?.tourType}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Contact Name:</p>
                    <p className="font-medium">{bookingDetails?.contactName}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Graduation Year:</p>
                    <p className="font-medium">
                      {bookingDetails?.graduationYear || "Not specified"}
                    </p>
                  </div>
                </div>
                {bookingDetails?.specialRequests && (
                  <div className="mt-4">
                    <p className="text-gray-600 text-sm">Special Requests:</p>
                    <p className="font-medium">
                      {bookingDetails.specialRequests}
                    </p>
                  </div>
                )}
              </div>
              <p className="text-gray-600 mb-6">
                A confirmation email has been sent to{" "}
                {bookingDetails?.contactEmail} with all the details. Please
                arrive 15 minutes before your scheduled time at the school
                reception.
              </p>
              <Button onClick={resetForm}>Schedule Another Tour</Button>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">
                  Upcoming Group Tours
                </h2>
                <p className="text-gray-600 mb-4">
                  Join one of our scheduled group tours or book a private tour
                  below.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {upcomingTours.map((tour) => (
                    <Card
                      key={tour.id}
                      className={cn(
                        "cursor-pointer hover:border-blue-400 transition-colors",
                        selectedTourId === tour.id
                          ? "border-2 border-blue-500"
                          : "",
                      )}
                      onClick={() => selectPrescheduledTour(tour)}
                    >
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-medium">
                              {format(tour.date, "MMMM d, yyyy")}
                            </h3>
                            <p className="text-sm text-gray-600">{tour.time}</p>
                          </div>
                          <div className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded capitalize">
                            {tour.type}
                          </div>
                        </div>
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                          <Users className="h-4 w-4 mr-1" />
                          <span>{tour.availableSlots} spots available</span>
                        </div>
                        {tour.description && (
                          <p className="text-xs text-gray-500 mt-2">
                            {tour.description}
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="border-t pt-8">
                <h2 className="text-xl font-semibold mb-4">
                  Book a Private Tour
                </h2>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="tourDate"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>Tour Date</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant={"outline"}
                                    className={cn(
                                      "w-full pl-3 text-left font-normal",
                                      !field.value && "text-muted-foreground",
                                    )}
                                  >
                                    {field.value ? (
                                      format(field.value, "PPP")
                                    ) : (
                                      <span>Pick a date</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent
                                className="w-auto p-0"
                                align="start"
                              >
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  disabled={(date) => {
                                    // Disable past dates, weekends, and dates more than 60 days in the future
                                    const today = new Date();
                                    today.setHours(0, 0, 0, 0);
                                    const sixtyDaysFromNow = new Date();
                                    sixtyDaysFromNow.setDate(
                                      today.getDate() + 60,
                                    );
                                    const day = date.getDay();
                                    return (
                                      date < today ||
                                      date > sixtyDaysFromNow ||
                                      day === 0
                                    );
                                  }}
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                            <FormDescription>
                              Select a weekday within the next 60 days. Tours
                              are not available on Sundays.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="tourTime"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Tour Time</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a time slot" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {tourTimes.map((time) => (
                                  <SelectItem key={time} value={time}>
                                    <div className="flex items-center">
                                      <Clock className="mr-2 h-4 w-4" />
                                      <span>{time}</span>
                                    </div>
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormDescription>
                              Each tour lasts approximately 90 minutes.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="groupSize"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Number of People</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select group size" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                  <SelectItem key={num} value={num.toString()}>
                                    {num} {num === 1 ? "person" : "people"}
                                  </SelectItem>
                                ))}
                                <SelectItem value="more than 10">
                                  More than 10 people
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormDescription>
                              For groups larger than 10, please specify in
                              special requests.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="graduationYear"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Graduation Year (Optional)</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
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
                            <FormDescription>
                              This helps us personalize your tour experience.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="tourType"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Tour Focus</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              value={field.value}
                              className="flex flex-col space-y-1"
                            >
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="general" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    General Campus Tour
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="academic" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Academic Facilities
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="sports" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Sports Facilities
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="cultural" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Cultural Facilities
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="nostalgic" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Nostalgic Alumni Tour
                                  </FormLabel>
                                </FormItem>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormDescription>
                            Select the primary focus for your tour. The
                            nostalgic tour is specially designed for alumni.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="specialRequests"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Special Requests (Optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Any specific areas you'd like to visit or special accommodations needed"
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="border-t pt-6">
                      <h3 className="text-lg font-semibold mb-4">
                        Contact Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="contactName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter your full name"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="contactEmail"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
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
                          name="contactPhone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
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
                    </div>

                    <Button type="submit" className="w-full">
                      Schedule Tour
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SchoolTour;
