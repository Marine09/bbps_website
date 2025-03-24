import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pagination } from "@/components/ui/pagination";
import { Search, Filter } from "lucide-react";

// Define the NewsCard component inline since there seems to be an issue with importing it
const NewsCard = ({
  title = "",
  date = "",
  category = "",
  summary = "",
  image = "",
}) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col bg-white hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground">
            {category}
          </span>
        </div>
      </div>
      <CardContent className="flex-1 flex flex-col p-5">
        <div className="text-sm text-gray-500 mb-2">{date}</div>
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 line-clamp-3 mb-4 flex-1">{summary}</p>
        <Button
          variant="link"
          className="p-0 h-auto text-primary justify-start"
        >
          Read More
        </Button>
      </CardContent>
    </Card>
  );
};

interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  image: string;
}

interface NewsSectionProps {
  newsItems?: NewsItem[];
  categories?: string[];
}

const NewsSection = ({
  newsItems = [
    {
      id: "1",
      title: "BBPS Navi Mumbai Ranks Among Top CBSE Schools",
      date: "2023-05-15",
      category: "Achievements",
      summary:
        "We are proud to announce that BBPS Navi Mumbai has been ranked among the top CBSE schools in Maharashtra for academic excellence and holistic education.",
      image:
        "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&q=80",
    },
    {
      id: "2",
      title: "Students Excel in International Olympiads",
      date: "2023-05-10",
      category: "Academics",
      summary:
        "Congratulations to our students who have secured top positions in various International Olympiads in Mathematics, Science, and Informatics.",
      image:
        "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=600&q=80",
    },
    {
      id: "3",
      title: "Annual Sports Day Celebration",
      date: "2023-05-05",
      category: "Sports",
      summary:
        "The Annual Sports Day was celebrated with great enthusiasm. Students participated in various athletic events and demonstrated excellent sportsmanship.",
      image:
        "https://images.unsplash.com/photo-1546519638-68e109acd27d?w=600&q=80",
    },
    {
      id: "4",
      title: "Parent-Teacher Meeting Schedule",
      date: "2023-04-28",
      category: "Events",
      summary:
        "The schedule for the upcoming parent-teacher meeting has been released. Parents are requested to check their email for their assigned time slots.",
      image:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&q=80",
    },
    {
      id: "5",
      title: "New STEM Lab Inauguration",
      date: "2023-04-20",
      category: "Facilities",
      summary:
        "We're excited to announce the inauguration of our state-of-the-art STEM lab, equipped with advanced technology to enhance learning experiences.",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80",
    },
    {
      id: "6",
      title: "Cultural Fest 'Tarang' Celebrates Diversity",
      date: "2023-04-15",
      category: "Arts",
      summary:
        "Our annual cultural fest 'Tarang' was a grand success, showcasing the rich cultural diversity through various performances by our talented students.",
      image:
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80",
    },
  ],
  categories = [
    "All",
    "Academics",
    "Sports",
    "Arts",
    "Events",
    "Achievements",
    "Facilities",
  ],
}: NewsSectionProps) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Filter news items based on active category and search query
  const filteredNews = newsItems.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredNews.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              News & Announcements
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Stay updated with the latest happenings, events, and achievements
              at our school.
            </p>
          </div>

          <div className="mt-4 md:mt-0 w-full md:w-auto">
            <div className="relative w-full md:w-64">
              <Input
                type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>

        <Tabs
          defaultValue="All"
          value={activeCategory}
          onValueChange={setActiveCategory}
          className="w-full"
        >
          <div className="flex items-center mb-6">
            <Filter className="mr-2 h-5 w-5 text-gray-500" />
            <span className="mr-4 text-sm font-medium text-gray-500">
              Filter by:
            </span>
            <TabsList className="bg-white border overflow-x-auto">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={activeCategory} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentItems.length > 0 ? (
                currentItems.map((item) => (
                  <NewsCard
                    key={item.id}
                    title={item.title}
                    date={item.date}
                    category={item.category}
                    summary={item.summary}
                    image={item.image}
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500 text-lg">
                    No news items found matching your criteria.
                  </p>
                </div>
              )}
            </div>

            {filteredNews.length > itemsPerPage && (
              <div className="flex justify-center mt-8">
                <Pagination>
                  <Button
                    variant="outline"
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className="mr-2"
                  >
                    Previous
                  </Button>
                  <div className="flex items-center space-x-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <Button
                          key={page}
                          variant={currentPage === page ? "default" : "outline"}
                          onClick={() => setCurrentPage(page)}
                          className="w-10 h-10 p-0"
                        >
                          {page}
                        </Button>
                      ),
                    )}
                  </div>
                  <Button
                    variant="outline"
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="ml-2"
                  >
                    Next
                  </Button>
                </Pagination>
              </div>
            )}
          </TabsContent>
        </Tabs>

        <div className="mt-8 text-center">
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white transition-colors"
          >
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
