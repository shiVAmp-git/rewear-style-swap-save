
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Recycle, Heart, Share2, MessageCircle, Star, MapPin, Clock, Shield, Package, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  
  const product = {
    id: 1,
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800"
    ],
    title: "Vintage Levi's Denim Jacket",
    price: "$24",
    originalPrice: "$89",
    savings: "72% off",
    size: "M",
    brand: "Levi's",
    category: "Jackets",
    condition: "Excellent",
    description: "This classic Levi's denim jacket is in excellent condition with minimal wear. Perfect for layering and has that authentic vintage look. The jacket features the iconic Levi's styling with button closure and chest pockets. Fits true to size with a relaxed fit.",
    seller: {
      name: "Sarah M.",
      avatar: "/placeholder.svg",
      rating: 4.8,
      reviews: 156,
      location: "Brooklyn, NY",
      joinedDate: "Member since 2022",
      verified: true
    },
    postedTime: "2 hours ago",
    likes: 23,
    views: 89,
    details: {
      material: "100% Cotton Denim",
      color: "Classic Blue",
      season: "All Season",
      style: "Vintage/Classic"
    }
  };

  const relatedItems = [
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300",
      title: "Vintage Band Tee",
      price: "$12",
      seller: "Mike K."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300",
      title: "Mom Jeans",
      price: "$18",
      seller: "Alex P."
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=300",
      title: "Cotton Sweater",
      price: "$28",
      seller: "Emma L."
    }
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
              <Link to="/browse">
                <Button variant="ghost" className="text-green-600 hover:text-green-700">Browse</Button>
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
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/browse" className="hover:text-green-600 flex items-center">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Browse
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative">
              <img 
                src={product.images[0]} 
                alt={product.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <Button 
                size="sm" 
                className="absolute top-4 right-4 w-10 h-10 rounded-full p-0 bg-white/80 hover:bg-white text-red-500 hover:text-red-600"
                variant="ghost"
              >
                <Heart className="w-5 h-5" />
              </Button>
              <Button 
                size="sm" 
                className="absolute top-4 left-4 w-10 h-10 rounded-full p-0 bg-white/80 hover:bg-white"
                variant="ghost"
              >
                <Share2 className="w-5 h-5" />
              </Button>
              
              {/* Navigation arrows */}
              <Button 
                size="sm" 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full p-0 bg-white/80 hover:bg-white"
                variant="ghost"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button 
                size="sm" 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full p-0 bg-white/80 hover:bg-white"
                variant="ghost"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex space-x-4">
              {product.images.map((image, index) => (
                <img 
                  key={index}
                  src={image} 
                  alt={`${product.title} ${index + 1}`}
                  className="w-20 h-20 object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-green-400 transition-colors"
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Badge className="bg-green-500 text-white">{product.condition}</Badge>
                <Badge variant="outline">{product.size}</Badge>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h1>
              <p className="text-gray-600">{product.brand} • {product.category}</p>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-4xl font-bold text-green-600">{product.price}</span>
              <div className="text-gray-400">
                <span className="line-through text-xl">{product.originalPrice}</span>
                <span className="ml-2 text-green-600 font-medium">{product.savings}</span>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-green-800 font-medium">💰 You save ${parseInt(product.originalPrice.slice(1)) - parseInt(product.price.slice(1))}!</p>
              <p className="text-green-700 text-sm">That's {product.savings} off the original retail price</p>
            </div>

            {/* Seller Info */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={product.seller.avatar} />
                      <AvatarFallback className="bg-green-100 text-green-600">
                        {product.seller.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-gray-900">{product.seller.name}</h3>
                        {product.seller.verified && (
                          <Shield className="w-4 h-4 text-green-500" />
                        )}
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-gray-600">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>{product.seller.rating}</span>
                        <span>({product.seller.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Profile
                  </Button>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {product.seller.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {product.postedTime}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white h-12 text-lg">
                Buy Now - {product.price}
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="h-12">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Message Seller
                </Button>
                <Button variant="outline" className="h-12">
                  <Package className="w-5 h-5 mr-2" />
                  Propose Swap
                </Button>
              </div>
              <div className="text-center text-sm text-gray-600">
                <span>{product.views} views • {product.likes} people interested</span>
              </div>
            </div>

            {/* Product Details */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Product Details</h3>
                <div className="space-y-3">
                  {Object.entries(product.details).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
                <Separator className="my-4" />
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Description</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Items */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">by {item.seller}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-green-600">{item.price}</span>
                    <Button size="sm" variant="outline">View</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
