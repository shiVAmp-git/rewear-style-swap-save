
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Recycle, Search, Filter, Heart, Star, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Browse = () => {
  const featuredItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400",
      title: "Vintage Levi's Denim Jacket",
      price: "$24",
      originalPrice: "$89",
      size: "M",
      brand: "Levi's",
      seller: "Sarah M.",
      location: "Brooklyn, NY",
      rating: 4.8,
      condition: "Excellent",
      postedTime: "2 hours ago",
      likes: 23,
      category: "Jackets"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
      title: "Floral Summer Maxi Dress",
      price: "$18",
      originalPrice: "$65",
      size: "S",
      brand: "Zara",
      seller: "Emma K.",
      location: "Austin, TX",
      rating: 4.9,
      condition: "Like New",
      postedTime: "5 hours ago",
      likes: 31,
      category: "Dresses"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400",
      title: "Designer Wool Peacoat",
      price: "$85",
      originalPrice: "$320",
      size: "L",
      brand: "COS",
      seller: "Maya R.",
      location: "Seattle, WA",
      rating: 5.0,
      condition: "Very Good",
      postedTime: "1 day ago",
      likes: 45,
      category: "Coats"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400",
      title: "Retro Band T-Shirt",
      price: "$12",
      originalPrice: "$35",
      size: "M",
      brand: "Vintage",
      seller: "Alex P.",
      location: "Portland, OR",
      rating: 4.7,
      condition: "Good",
      postedTime: "3 hours ago",
      likes: 18,
      category: "T-Shirts"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1582418702294-e7474277d445?w=400",
      title: "High-Waisted Mom Jeans",
      price: "$22",
      originalPrice: "$78",
      size: "28",
      brand: "Urban Outfitters",
      seller: "Jess L.",
      location: "Chicago, IL",
      rating: 4.6,
      condition: "Excellent",
      postedTime: "6 hours ago",
      likes: 27,
      category: "Jeans"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400",
      title: "Silk Button-Up Blouse",
      price: "$32",
      originalPrice: "$125",
      size: "S",
      brand: "& Other Stories",
      seller: "Nina T.",
      location: "Miami, FL",
      rating: 4.8,
      condition: "Like New",
      postedTime: "4 hours ago",
      likes: 19,
      category: "Blouses"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400",
      title: "Designer Leather Boots",
      price: "$95",
      originalPrice: "$280",
      size: "8",
      brand: "Dr. Martens",
      seller: "Tyler K.",
      location: "Denver, CO",
      rating: 4.9,
      condition: "Very Good",
      postedTime: "8 hours ago",
      likes: 52,
      category: "Shoes"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=400",
      title: "Cashmere Sweater",
      price: "$45",
      originalPrice: "$180",
      size: "M",
      brand: "Everlane",
      seller: "Sophie R.",
      location: "Boston, MA",
      rating: 4.8,
      condition: "Excellent",
      postedTime: "12 hours ago",
      likes: 38,
      category: "Sweaters"
    }
  ];

  const categories = [
    { name: "All", count: "2.4k" },
    { name: "Dresses", count: "450" },
    { name: "Jeans", count: "320" },
    { name: "Jackets", count: "280" },
    { name: "T-Shirts", count: "380" },
    { name: "Shoes", count: "220" },
    { name: "Accessories", count: "150" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-green-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <Recycle className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                ReWear
              </span>
            </Link>
            <div className="flex space-x-3">
              <Link to="/signin">
                <Button variant="ghost" className="text-green-600 hover:text-green-700">Sign In</Button>
              </Link>
              <Link to="/dashboard">
                <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white">
                  Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <Input 
                placeholder="Search for items, brands, or users..." 
                className="pl-10 h-12"
              />
            </div>
            <div className="flex gap-2">
              <Select>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Items</SelectItem>
                  <SelectItem value="dresses">Dresses</SelectItem>
                  <SelectItem value="jeans">Jeans</SelectItem>
                  <SelectItem value="jackets">Jackets</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-24">
                  <SelectValue placeholder="Size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="xs">XS</SelectItem>
                  <SelectItem value="s">S</SelectItem>
                  <SelectItem value="m">M</SelectItem>
                  <SelectItem value="l">L</SelectItem>
                  <SelectItem value="xl">XL</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <Badge 
                key={index} 
                variant={index === 0 ? "default" : "outline"} 
                className={`cursor-pointer px-4 py-2 ${index === 0 ? 'bg-green-500 hover:bg-green-600' : 'hover:bg-green-50'}`}
              >
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>
        </div>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Browse Items</h2>
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by: Most Recent" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 shadow-lg bg-white">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-3 left-3 bg-green-500 text-white">
                  {item.condition}
                </Badge>
                <Button 
                  size="sm" 
                  className="absolute top-3 right-3 w-8 h-8 rounded-full p-0 bg-white/80 hover:bg-white text-red-500 hover:text-red-600 transition-colors"
                  variant="ghost"
                >
                  <Heart className="w-4 h-4" />
                </Button>
                <div className="absolute bottom-3 right-3 bg-white/90 rounded-full px-2 py-1 text-xs flex items-center">
                  <Heart className="w-3 h-3 text-red-500 mr-1" />
                  {item.likes}
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-sm text-gray-900 truncate">{item.title}</h3>
                  <Badge variant="outline" className="text-xs">{item.size}</Badge>
                </div>
                <p className="text-gray-600 text-xs mb-2">{item.brand} • {item.category}</p>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-green-600">{item.price}</span>
                    <span className="text-gray-400 line-through text-xs">{item.originalPrice}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="text-xs font-medium">{item.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback className="bg-green-100 text-green-600 text-xs">
                        {item.seller.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-gray-600">{item.seller}</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <MapPin className="w-3 h-3 mr-1" />
                    {item.location.split(',')[0]}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="w-3 h-3 mr-1" />
                    {item.postedTime}
                  </div>
                  <Link to={`/item/${item.id}`}>
                    <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1">
                      View
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-green-200 text-green-700 hover:bg-green-50 px-8 py-4"
          >
            Load More Items
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Browse;
