
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Recycle, Upload, X, Camera, DollarSign, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const ListItem = () => {
  const mockImages = [
    "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=200",
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200",
    "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200"
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">List Your Item</h1>
          <p className="text-gray-600">Turn your unused clothes into cash or trade for something new!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Image Upload Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Camera className="w-5 h-5 mr-2" />
                Product Images
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-400 transition-colors">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                  <p className="text-sm text-gray-500">PNG, JPG up to 10MB (max 5 images)</p>
                  <Button className="mt-4 bg-green-500 hover:bg-green-600">
                    Choose Files
                  </Button>
                </div>
                
                {/* Preview Images */}
                <div className="grid grid-cols-3 gap-4">
                  {mockImages.map((image, index) => (
                    <div key={index} className="relative group">
                      <img 
                        src={image} 
                        alt={`Preview ${index + 1}`}
                        className="w-full h-24 object-cover rounded-lg"
                      />
                      <Button 
                        size="sm" 
                        className="absolute -top-2 -right-2 w-6 h-6 rounded-full p-0 bg-red-500 hover:bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Item Details Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Tag className="w-5 h-5 mr-2" />
                Item Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="title">Item Title</Label>
                <Input id="title" placeholder="Vintage Levi's Denim Jacket" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="jackets">Jackets</SelectItem>
                      <SelectItem value="dresses">Dresses</SelectItem>
                      <SelectItem value="jeans">Jeans</SelectItem>
                      <SelectItem value="shoes">Shoes</SelectItem>
                      <SelectItem value="accessories">Accessories</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="brand">Brand</Label>
                  <Input id="brand" placeholder="Levi's" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="size">Size</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="xs">XS</SelectItem>
                      <SelectItem value="s">S</SelectItem>
                      <SelectItem value="m">M</SelectItem>
                      <SelectItem value="l">L</SelectItem>
                      <SelectItem value="xl">XL</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="condition">Condition</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="like-new">Like New</SelectItem>
                      <SelectItem value="excellent">Excellent</SelectItem>
                      <SelectItem value="very-good">Very Good</SelectItem>
                      <SelectItem value="good">Good</SelectItem>
                      <SelectItem value="fair">Fair</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Describe the item's condition, fit, and any unique features..."
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pricing and Actions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <DollarSign className="w-5 h-5 mr-2" />
              Pricing & Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <Label htmlFor="price">Selling Price</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input id="price" placeholder="25.00" className="pl-10" />
                </div>
                <p className="text-sm text-gray-500 mt-1">Set your asking price</p>
              </div>
              
              <div>
                <Label htmlFor="original-price">Original Price (Optional)</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input id="original-price" placeholder="89.00" className="pl-10" />
                </div>
                <p className="text-sm text-gray-500 mt-1">What you paid originally</p>
              </div>
              
              <div>
                <Label>Available Actions</Label>
                <div className="space-y-2 mt-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="sell" className="rounded" defaultChecked />
                    <Label htmlFor="sell" className="text-sm">Available for Sale</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="swap" className="rounded" defaultChecked />
                    <Label htmlFor="swap" className="text-sm">Open to Swaps</Label>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg mt-6">
              <h3 className="font-semibold text-green-800 mb-2">Listing Preview</h3>
              <div className="text-sm text-green-700">
                <p><strong>Title:</strong> Vintage Levi's Denim Jacket</p>
                <p><strong>Price:</strong> $25 <span className="line-through text-gray-500">($89 original)</span></p>
                <p><strong>Savings:</strong> 72% off retail price</p>
              </div>
            </div>
            
            <div className="flex gap-4 mt-6">
              <Button className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
                List Item
              </Button>
              <Button variant="outline" className="flex-1">
                Save as Draft
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ListItem;
