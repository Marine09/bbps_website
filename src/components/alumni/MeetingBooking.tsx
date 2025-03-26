import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
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
import { Card, CardContent } from "@/components/ui/card";

const formSchema = z.object({
  teacherId: z.string({
    required_error: "Please select a teacher.",
  }),
  date: z.date({
    required_error: "Please select a date.",
  }),
  timeSlot: z.string({
    required_error: "Please select a time slot.",
  }),
  meetingType: z.enum(["in-person", "virtual"], {
    required_error: "Please select a meeting type.",
  }),
  purpose: z
    .string()
    .min(10, {
      message: "Purpose must be at least 10 characters.",
    })
    .max(500, {
      message: "Purpose must not exceed 500 characters.",
    }),
});

type BookingFormValues = z.infer<typeof formSchema>;

// Mock data for teachers
const teachers = [
  {
    id: "1",
    name: "Mrs. Anjali Desai",
    department: "Science",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=teacher1",
  },
  {
    id: "2",
    name: "Mr. Rajesh Kumar",
    department: "Mathematics",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=teacher2",
  },
  {
    id: "3",
    name: "Ms. Priya Sharma",
    department: "English",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=teacher3",
  },
  {
    id: "4",
    name: "Dr. Vikram Mehta",
    department: "Social Sciences",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=teacher4",
  },
  {
    id: "5",
    name: "Mrs. Sunita Patel",
    department: "Computer Science",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=teacher5",
  },
];

// Mock data for time slots
const timeSlots = [
  "09:00 AM - 09:30 AM",
  "09:30 AM - 10:00 AM",
  "10:00 AM - 10:30 AM",
  "10:30 AM - 11:00 AM",
  "11:00 AM - 11:30 AM",
  "11:30 AM - 12:00 PM",
  "12:00 PM - 12:30 PM",
  "02:00 PM - 02:30 PM",
  "02:30 PM - 03:00 PM",
  "03:00 PM - 03:30 PM",
  "03:30 PM - 04:00 PM",
];

const MeetingBooking = () => {
  const [selectedTeacher, setSelectedTeacher] = useState<string | null>(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingDetails, setBookingDetails] =
    useState<BookingFormValues | null>(null);

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      teacherId: "",
      date: undefined,
      timeSlot: "",
      meetingType: "in-person",
      purpose: "",
    },
  });

  const onSubmit = (values: BookingFormValues) => {
    console.log(values);
    // Here you would typically send the data to your backend
    setBookingDetails(values);
    setBookingConfirmed(true);
  };

  const handleTeacherSelect = (teacherId: string) => {
    setSelectedTeacher(teacherId);
    form.setValue("teacherId", teacherId);
  };

  const resetForm = () => {
    form.reset();
    setSelectedTeacher(null);
    setBookingConfirmed(false);
    setBookingDetails(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2">
            Book a Meeting with Teachers
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Schedule a meeting with your former teachers to reconnect and share
            your journey.
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
                Meeting Scheduled Successfully!
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-6 text-left">
                <h3 className="font-semibold text-lg mb-4 text-center">
                  Booking Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600 text-sm">Teacher:</p>
                    <p className="font-medium">
                      {
                        teachers.find((t) => t.id === bookingDetails?.teacherId)
                          ?.name
                      }
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Department:</p>
                    <p className="font-medium">
                      {
                        teachers.find((t) => t.id === bookingDetails?.teacherId)
                          ?.department
                      }
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Date:</p>
                    <p className="font-medium">
                      {bookingDetails?.date
                        ? format(bookingDetails.date, "PPP")
                        : ""}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Time:</p>
                    <p className="font-medium">{bookingDetails?.timeSlot}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Meeting Type:</p>
                    <p className="font-medium capitalize">
                      {bookingDetails?.meetingType}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-gray-600 text-sm">Purpose:</p>
                  <p className="font-medium">{bookingDetails?.purpose}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                A confirmation email has been sent to your registered email
                address with all the details.
                {bookingDetails?.meetingType === "virtual" &&
                  " The virtual meeting link will be shared prior to the scheduled time."}
              </p>
              <Button onClick={resetForm}>Book Another Meeting</Button>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Select a Teacher</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {teachers.map((teacher) => (
                    <Card
                      key={teacher.id}
                      className={cn(
                        "cursor-pointer hover:border-blue-400 transition-colors",
                        selectedTeacher === teacher.id
                          ? "border-2 border-blue-500"
                          : "",
                      )}
                      onClick={() => handleTeacherSelect(teacher.id)}
                    >
                      <CardContent className="p-4 flex items-center space-x-4">
                        <img
                          src={teacher.image}
                          alt={teacher.name}
                          className="w-12 h-12 rounded-full"
                        />
                        <div>
                          <h3 className="font-medium">{teacher.name}</h3>
                          <p className="text-sm text-gray-600">
                            {teacher.department}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="teacherId"
                    render={({ field }) => (
                      <FormItem className="hidden">
                        <FormControl>
                          <input type="hidden" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Date</FormLabel>
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
                                  // Disable past dates, weekends, and dates more than 30 days in the future
                                  const today = new Date();
                                  today.setHours(0, 0, 0, 0);
                                  const thirtyDaysFromNow = new Date();
                                  thirtyDaysFromNow.setDate(
                                    today.getDate() + 30,
                                  );
                                  const day = date.getDay();
                                  return (
                                    date < today ||
                                    date > thirtyDaysFromNow ||
                                    day === 0 ||
                                    day === 6
                                  );
                                }}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormDescription>
                            Select a weekday within the next 30 days.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="timeSlot"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Time Slot</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a time slot" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {timeSlots.map((slot) => (
                                <SelectItem key={slot} value={slot}>
                                  <div className="flex items-center">
                                    <Clock className="mr-2 h-4 w-4" />
                                    <span>{slot}</span>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            Choose a convenient time slot for your meeting.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="meetingType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Meeting Type</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select meeting type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="in-person">
                              In-Person Meeting
                            </SelectItem>
                            <SelectItem value="virtual">
                              Virtual Meeting
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Choose whether you'd like to meet in person at the
                          school or via video call.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="purpose"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Purpose of Meeting</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Briefly describe why you'd like to meet with the teacher"
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Please provide some context for the meeting to help
                          the teacher prepare.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={!selectedTeacher}
                  >
                    Schedule Meeting
                  </Button>
                </form>
              </Form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MeetingBooking;
