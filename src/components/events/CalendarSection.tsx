import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon, FilterIcon, ChevronDown, ChevronUp } from "lucide-react";

interface Event {
  id: string;
  title: string;
  date: Date;
  type: "academic" | "sports" | "arts" | "community" | "holiday";
  description: string;
  location?: string;
}

interface CalendarSectionProps {
  events?: Event[];
  title?: string;
  description?: string;
}

const eventTypeColors: Record<string, string> = {
  academic: "bg-blue-100 text-blue-800 hover:bg-blue-200",
  sports: "bg-green-100 text-green-800 hover:bg-green-200",
  arts: "bg-purple-100 text-purple-800 hover:bg-purple-200",
  community: "bg-amber-100 text-amber-800 hover:bg-amber-200",
  holiday: "bg-red-100 text-red-800 hover:bg-red-200",
};

const defaultEvents: Event[] = [
  {
    id: "1",
    title: "Parent-Teacher Meeting",
    date: new Date(new Date().getFullYear(), new Date().getMonth(), 15),
    type: "academic",
    description: "Term progress review with parents for all classes",
    location: "Respective Classrooms",
  },
  {
    id: "2",
    title: "Inter-House Sports Competition",
    date: new Date(new Date().getFullYear(), new Date().getMonth(), 18),
    type: "sports",
    description:
      "Annual inter-house sports competition featuring various athletic events",
    location: "School Sports Ground",
  },
  {
    id: "3",
    title: "Annual Day Celebration",
    date: new Date(new Date().getFullYear(), new Date().getMonth(), 22),
    type: "arts",
    description:
      "Annual cultural program featuring performances by students across all grades",
    location: "School Auditorium",
  },
  {
    id: "4",
    title: "Swachh Bharat Abhiyan",
    date: new Date(new Date().getFullYear(), new Date().getMonth(), 25),
    type: "community",
    description:
      "Community cleanliness drive as part of the Swachh Bharat initiative",
    location: "School Campus and Surrounding Areas",
  },
  {
    id: "5",
    title: "Summer Vacation Begins",
    date: new Date(new Date().getFullYear(), new Date().getMonth(), 30),
    type: "holiday",
    description: "Last working day before summer vacation",
    location: "School Campus",
  },
  {
    id: "6",
    title: "Science Exhibition",
    date: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 5),
    type: "academic",
    description:
      "Annual science exhibition showcasing student projects and innovations",
    location: "School Science Labs and Multipurpose Hall",
  },
  {
    id: "7",
    title: "Independence Day Celebration",
    date: new Date(new Date().getFullYear(), 7, 15),
    type: "holiday",
    description:
      "Special assembly and cultural program to celebrate Independence Day",
    location: "School Assembly Ground",
  },
];

const CalendarSection: React.FC<CalendarSectionProps> = ({
  events = defaultEvents,
  title = "School Events Calendar",
  description = "Stay updated with all the important events happening at our school. Filter by event type to find what interests you.",
}) => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // Filter events based on selected filter
  const filteredEvents =
    selectedFilter === "all"
      ? events
      : events.filter((event) => event.type === selectedFilter);

  // Get events for the selected date
  const eventsForSelectedDate = date
    ? filteredEvents.filter(
        (event) =>
          event.date.getDate() === date.getDate() &&
          event.date.getMonth() === date.getMonth() &&
          event.date.getFullYear() === date.getFullYear(),
      )
    : [];

  // Function to highlight dates with events
  const isDayWithEvent = (day: Date) => {
    return filteredEvents.some(
      (event) =>
        event.date.getDate() === day.getDate() &&
        event.date.getMonth() === day.getMonth() &&
        event.date.getFullYear() === day.getFullYear(),
    );
  };

  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Calendar Column */}
          <div className="lg:w-1/2 bg-gray-50 rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <CalendarIcon className="h-5 w-5" />
                <span>Calendar</span>
              </h3>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-1"
              >
                <FilterIcon className="h-4 w-4" />
                <span>Filter</span>
                {showFilters ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </Button>
            </div>

            {showFilters && (
              <div className="mb-4 p-3 bg-gray-100 rounded-md">
                <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
                  <span className="text-sm font-medium">Event Type:</span>
                  <Select
                    value={selectedFilter}
                    onValueChange={setSelectedFilter}
                  >
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Events</SelectItem>
                      <SelectItem value="academic">Academic</SelectItem>
                      <SelectItem value="sports">Sports</SelectItem>
                      <SelectItem value="arts">Arts</SelectItem>
                      <SelectItem value="community">Community</SelectItem>
                      <SelectItem value="holiday">Holidays</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className={`cursor-pointer ${selectedFilter === "all" ? "bg-gray-800 text-white" : ""}`}
                    onClick={() => setSelectedFilter("all")}
                  >
                    All
                  </Badge>
                  <Badge
                    className={`cursor-pointer ${selectedFilter === "academic" ? eventTypeColors.academic : "bg-blue-50 text-blue-600"}`}
                    onClick={() => setSelectedFilter("academic")}
                  >
                    Academic
                  </Badge>
                  <Badge
                    className={`cursor-pointer ${selectedFilter === "sports" ? eventTypeColors.sports : "bg-green-50 text-green-600"}`}
                    onClick={() => setSelectedFilter("sports")}
                  >
                    Sports
                  </Badge>
                  <Badge
                    className={`cursor-pointer ${selectedFilter === "arts" ? eventTypeColors.arts : "bg-purple-50 text-purple-600"}`}
                    onClick={() => setSelectedFilter("arts")}
                  >
                    Arts
                  </Badge>
                  <Badge
                    className={`cursor-pointer ${selectedFilter === "community" ? eventTypeColors.community : "bg-amber-50 text-amber-600"}`}
                    onClick={() => setSelectedFilter("community")}
                  >
                    Community
                  </Badge>
                  <Badge
                    className={`cursor-pointer ${selectedFilter === "holiday" ? eventTypeColors.holiday : "bg-red-50 text-red-600"}`}
                    onClick={() => setSelectedFilter("holiday")}
                  >
                    Holidays
                  </Badge>
                </div>
              </div>
            )}

            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
              modifiers={{
                hasEvent: (date) => isDayWithEvent(date),
              }}
              modifiersClassNames={{
                hasEvent: "font-bold text-primary border-primary",
              }}
            />
          </div>

          {/* Events Column */}
          <div className="lg:w-1/2 bg-gray-50 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">
              {date ? (
                <span>
                  Events for{" "}
                  {date.toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              ) : (
                <span>Select a date to view events</span>
              )}
            </h3>

            {eventsForSelectedDate.length > 0 ? (
              <div className="space-y-4">
                {eventsForSelectedDate.map((event) => (
                  <div
                    key={event.id}
                    className="p-4 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => setSelectedEvent(event)}
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="text-lg font-medium">{event.title}</h4>
                      <Badge className={eventTypeColors[event.type]}>
                        {event.type.charAt(0).toUpperCase() +
                          event.type.slice(1)}
                      </Badge>
                    </div>
                    {event.location && (
                      <p className="text-sm text-gray-500 mt-1">
                        Location: {event.location}
                      </p>
                    )}
                    <p className="text-sm mt-2">{event.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <CalendarIcon className="h-12 w-12 text-gray-400 mb-4" />
                <p className="text-gray-500">
                  No events scheduled for this date
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Try selecting a different date or changing your filters
                </p>
              </div>
            )}

            {selectedEvent && (
              <div className="mt-6 p-4 bg-gray-100 rounded-md">
                <div className="flex justify-between items-start">
                  <h4 className="text-lg font-semibold">
                    {selectedEvent.title}
                  </h4>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedEvent(null)}
                    className="h-6 w-6 p-0"
                  >
                    ×
                  </Button>
                </div>
                <div className="mt-2">
                  <p className="text-sm">
                    <span className="font-medium">Date:</span>{" "}
                    {selectedEvent.date.toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                  {selectedEvent.location && (
                    <p className="text-sm mt-1">
                      <span className="font-medium">Location:</span>{" "}
                      {selectedEvent.location}
                    </p>
                  )}
                  <p className="text-sm mt-1">
                    <span className="font-medium">Type:</span>{" "}
                    {selectedEvent.type.charAt(0).toUpperCase() +
                      selectedEvent.type.slice(1)}
                  </p>
                  <p className="text-sm mt-3">{selectedEvent.description}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;
