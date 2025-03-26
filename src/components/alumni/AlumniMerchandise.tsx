import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Heart, Tag, ChevronDown, ChevronUp, Truck, RefreshCw, Package, Info, Search, Check } from "lucide-react";
import { Input } from "@/components/ui/input";

interface MerchandiseItem {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  description: string;
  sizes?: string[];
  colors?: { name: string; hex: string }[];
}

const merchandiseItems: MerchandiseItem[] = [
  {
    id: 1,
    name: "Alumni T-Shirt",
    price: "₹799",
    image: "https://placehold.co/300x300/e2e8f0/1e293b?text=BBPS+T-Shirt",
    category: "Clothing",
    description: "Premium cotton T-shirt with school logo and 'BBPS Alumni' print",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Navy Blue", hex: "#1e3a8a" },
      { name: "White", hex: "#ffffff" },
      { name: "Maroon", hex: "#800020" },
    ],
  },
  {
    id: 2,
    name: "BBPS Coffee Mug",
    price: "₹449",
    image: "https://placehold.co/300x300/e2e8f0/1e293b?text=BBPS+Mug",
    category: "Accessories",
    description: "Ceramic coffee mug featuring the school emblem and motto",
    colors: [
      { name: "White", hex: "#ffffff" },
      { name: "Black", hex: "#000000" },
    ],
  },
  {
    id: 3,
    name: "Alumni Notebook",
    price: "₹349",
    image: "https://placehold.co/300x300/e2e8f0/1e293b?text=BBPS+Notebook",
    category: "Stationery",
    description: "A5 hardcover notebook with the school's anniversary design",
  },
  {
    id: 4,
    name: "BBPS Polo Shirt",
    price: "₹999",
    image: "https://placehold.co/300x300/e2e8f0/1e293b?text=BBPS+Polo",
    category: "Clothing",
    description: "Classic polo shirt with embroidered school emblem",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Navy Blue", hex: "#1e3a8a" },
      { name: "White", hex: "#ffffff" },
      { name: "Light Blue", hex: "#93c5fd" },
    ],
  },
  {
    id: 5,
    name: "Alumni Hoodie",
    price: "₹1,499",
    image: "https://placehold.co/300x300/e2e8f0/1e293b?text=BBPS+Hoodie",
    category: "Clothing",
    description: "Warm and comfortable hoodie with BBPS Alumni design",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Navy Blue", hex: "#1e3a8a" },
      { name: "Grey", hex: "#6b7280" },
      { name: "Black", hex: "#000000" },
    ],
  },
  {
    id: 6,
    name: "Commemorative Key Chain",
    price: "₹299",
    image: "https://placehold.co/300x300/e2e8f0/1e293b?text=BBPS+Keychain",
    category: "Accessories",
    description: "Metal keychain featuring the school building silhouette",
  },
  {
    id: 7,
    name: "Alumni Cap",
    price: "₹599",
    image: "https://placehold.co/300x300/e2e8f0/1e293b?text=BBPS+Cap",
    category: "Clothing",
    description: "Adjustable cap with embroidered BBPS Alumni logo",
    colors: [
      { name: "Navy Blue", hex: "#1e3a8a" },
      { name: "White", hex: "#ffffff" },
      { name: "Black", hex: "#000000" },
    ],
  },
  {
    id: 8,
    name: "Vintage School Pennant",
    price: "₹899",
    image: "https://placehold.co/300x300/e2e8f0/1e293b?text=BBPS+Pennant",
    category: "Memorabilia",
    description: "Classic felt pennant featuring the school colors and crest",
  },
];

const AlumniMerchandise = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  // Get unique categories
  const categories = ["All", ...new Set(merchandiseItems.map(item => item.category))];
  
  // Filter items by category and search query
  const filteredItems = merchandiseItems
    .filter(item => !selectedCategory || selectedCategory === "All" || item.category === selectedCategory)
    .filter(item => 
      !searchQuery || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
  const toggleItemDetails = (id: number) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-3">Alumni Shop</div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">Alumni Merchandise</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Show your BBPS pride with our exclusive alumni merchandise collection. Every purchase supports alumni initiatives and school development.
            </p>
          </div>
          
          {/* Search and Filter Section */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-10 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search merchandise..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 rounded-lg border-gray-200"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                  {categories.map(category => (
                    <Button
                      key={category}
                      variant={selectedCategory === category || (category === "All" && !selectedCategory) ? "default" : "outline"}
                      onClick={() => setSelectedCategory(category === "All" ? null : category)}
                      className={`rounded-full mb-0 ${
                        selectedCategory === category || (category === "All" && !selectedCategory) 
                          ? 'bg-blue-600 hover:bg-blue-700' 
                          : 'border-gray-200 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                      size="sm"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Merchandise grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all rounded-xl border-0 ring-1 ring-gray-200 group">
                  <div className="aspect-square relative overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="bg-white/80 hover:bg-white rounded-full h-8 w-8 shadow-sm"
                      >
                        <Heart className="h-4 w-4 text-gray-600" />
                      </Button>
                    </div>
                    <div className="absolute top-2 left-2">
                      <span className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-800">{item.name}</h3>
                      <span className="font-bold text-blue-600">{item.price}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <Button 
                        variant="outline"
                        size="sm"
                        onClick={() => toggleItemDetails(item.id)}
                        className="flex items-center gap-1 rounded-full border-gray-200 hover:bg-gray-50"
                      >
                        Details
                        {expandedItem === item.id ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </Button>
                      
                      <Button 
                        className="flex items-center gap-1 rounded-full bg-blue-600 hover:bg-blue-700"
                        size="sm"
                      >
                        <ShoppingCart className="h-4 w-4" />
                        Add to Cart
                      </Button>
                    </div>
                    
                    {expandedItem === item.id && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        {item.sizes && (
                          <div className="mb-4">
                            <p className="text-sm font-medium mb-2 text-gray-700">Available Sizes:</p>
                            <div className="flex flex-wrap gap-2">
                              {item.sizes.map(size => (
                                <Button 
                                  key={size} 
                                  variant="outline" 
                                  size="sm" 
                                  className="h-8 w-8 p-0 rounded-full border-gray-200 hover:border-blue-600 hover:text-blue-600"
                                >
                                  {size}
                                </Button>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {item.colors && (
                          <div className="mb-4">
                            <p className="text-sm font-medium mb-2 text-gray-700">Available Colors:</p>
                            <div className="flex flex-wrap gap-3">
                              {item.colors.map(color => (
                                <div key={color.name} className="flex flex-col items-center gap-1">
                                  <div 
                                    className="w-6 h-6 rounded-full border shadow-sm cursor-pointer hover:scale-110 transition-transform"
                                    style={{ 
                                      backgroundColor: color.hex, 
                                      borderColor: color.hex === "#ffffff" ? "#e2e8f0" : color.hex 
                                    }}
                                    title={color.name}
                                  />
                                  <span className="text-xs text-gray-600">{color.name}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        <p className="text-sm text-gray-600 mt-3 bg-blue-50 p-2 rounded-lg flex items-start">
                          <Info className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                          All proceeds support alumni activities and school development projects.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-full py-12 text-center">
                <div className="bg-gray-100 inline-flex rounded-full p-3 mb-4">
                  <Search className="h-6 w-6 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">No merchandise found</h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  We couldn't find any items matching your search criteria. Try adjusting your filters or search query.
                </p>
                <Button 
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory(null);
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
          
          {/* Info section */}
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Merchandise Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Truck className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800">Shipping & Delivery</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-2 mt-0.5">
                      <Check className="h-3 w-3 text-blue-600" />
                    </div>
                    Free shipping on orders above ₹1,500
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-2 mt-0.5">
                      <Check className="h-3 w-3 text-blue-600" />
                    </div>
                    Standard delivery within 5-7 business days
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-2 mt-0.5">
                      <Check className="h-3 w-3 text-blue-600" />
                    </div>
                    Express delivery available for additional charges
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-2 mt-0.5">
                      <Check className="h-3 w-3 text-blue-600" />
                    </div>
                    International shipping available to select countries
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <RefreshCw className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800">Returns & Exchanges</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-2 mt-0.5">
                      <Check className="h-3 w-3 text-blue-600" />
                    </div>
                    Returns accepted within 14 days of delivery
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-2 mt-0.5">
                      <Check className="h-3 w-3 text-blue-600" />
                    </div>
                    Items must be in original condition with tags
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-2 mt-0.5">
                      <Check className="h-3 w-3 text-blue-600" />
                    </div>
                    Exchanges available for size/color variations
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-2 mt-0.5">
                      <Check className="h-3 w-3 text-blue-600" />
                    </div>
                    Contact alumni@bbpsschool.edu.in for return process
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Package className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800">Payment & Support</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-2 mt-0.5">
                      <Check className="h-3 w-3 text-blue-600" />
                    </div>
                    Secure payment options (Credit/Debit/UPI)
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-2 mt-0.5">
                      <Check className="h-3 w-3 text-blue-600" />
                    </div>
                    EMI available on orders above ₹3,000
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-2 mt-0.5">
                      <Check className="h-3 w-3 text-blue-600" />
                    </div>
                    Dedicated support at merchandise@bbpsalumni.org
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-2 mt-0.5">
                      <Check className="h-3 w-3 text-blue-600" />
                    </div>
                    24-hour response time for all queries
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 bg-blue-50 p-6 rounded-xl">
              <div className="flex items-start">
                <Info className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">
                  <strong className="text-blue-700">Note:</strong> All merchandise sales support the BBPS Alumni Association fund, which helps finance scholarships, campus improvements, and alumni events. By purchasing alumni merchandise, you're contributing directly to your alma mater's growth and development.
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to show your BBPS pride?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Explore our full range of premium merchandise and wear your alumni status with pride.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-700 hover:bg-blue-50 shadow-md hover:shadow-lg transition-shadow px-6">
                View Special Offers
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6">
                Contact Custom Orders
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniMerchandise; 