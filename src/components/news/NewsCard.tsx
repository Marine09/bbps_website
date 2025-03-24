import React from "react";
import { format } from "date-fns";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Clock } from "lucide-react";

interface NewsCardProps {
  id?: string;
  title?: string;
  date?: Date;
  category?: string;
  summary?: string;
  imageUrl?: string;
  author?: string;
  readTime?: number;
}

const NewsCard = ({
  id = "1",
  title = "School Wins National Science Competition",
  date = new Date(),
  category = "Academics",
  summary = "Our students took first place in the National Science Fair with their innovative project on renewable energy sources. This marks the third consecutive year our school has placed in the top three.",
  imageUrl = "https://images.unsplash.com/photo-1588072432836-e10032774350?w=500&q=80",
  author = "Principal Johnson",
  readTime = 4,
}: NewsCardProps) => {
  // Format the date to a readable string
  const formattedDate = format(date, "MMM dd, yyyy");

  // Map categories to badge variants
  const getBadgeVariant = (category: string) => {
    const categoryMap: Record<
      string,
      "default" | "secondary" | "destructive" | "outline"
    > = {
      Academics: "default",
      Sports: "secondary",
      Arts: "secondary",
      Events: "outline",
      Announcements: "destructive",
      Achievements: "default",
      Facilities: "secondary",
      Community: "outline",
    };

    return categoryMap[category] || "default";
  };

  return (
    <Card className="overflow-hidden flex flex-col h-full bg-white hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <Badge
          variant={getBadgeVariant(category)}
          className="absolute top-3 right-3"
        >
          {category}
        </Badge>
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold line-clamp-2">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {summary}
        </p>
      </CardContent>

      <CardFooter className="flex justify-between items-center text-xs text-muted-foreground pt-2 border-t">
        <div className="flex items-center gap-1">
          <CalendarIcon size={14} />
          <span>{formattedDate}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock size={14} />
          <span>{readTime} min read</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
