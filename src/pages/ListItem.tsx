
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Recycle, Upload, X, Camera, DollarSign, Tag } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const formSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  category: z.string().min(1, "Please select a category"),
  brand: z.string().min(1, "Brand is required"),
  size: z.string().min(1, "Please select a size"),
  condition: z.string().min(1, "Please select condition"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  price: z.string().min(1, "Price is required"),
  originalPrice: z.string().optional(),
  availableForSale: z.boolean().default(true),
  openToSwaps: z.boolean().default(true),
});

type FormData = z.infer<typeof formSchema>;

const ListItem = () => {
  const [uploadedImages, setUploadedImages] = useState<string[]>([
    "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=200",
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200",
    "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200"
  ]);
  const [isDraft, setIsDraft] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "Vintage Levi's Denim Jacket",
      category: "jackets",
      brand: "Levi's",
      size: "m",
      condition: "excellent",
      description: "Classic vintage Levi's denim jacket in excellent condition. Perfect for layering and adds a timeless style to any outfit.",
      price: "25.00",
      originalPrice: "89.00",
      availableForSale: true,
      openToSwaps: true,
    },
  });

  const watchedValues = form.watch();

  const removeImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleImageUpload = () => {
    // Simulate image upload
    const newImage = "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200";
    if (uploadedImages.length < 5) {
      setUploadedImages(prev => [...prev, newImage]);
      toast({
        title: "Image uploaded",
        description: "Your image has been added successfully.",
      });
    } else {
      toast({
        title: "Upload limit reached",
        description: "You can upload maximum 5 images.",
        variant: "destructive",
      });
    }
  };

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    console.log("Images:", uploadedImages);
    
    if (!isDraft) {
      toast({
        title: "Item Listed Successfully!",
        description: `${data.title} has been listed for $${data.price}`,
      });
      // Navigate to dashboard after successful listing
      setTimeout(() => navigate('/dashboard'), 2000);
    } else {
      toast({
        title: "Draft Saved",
        description: "Your item has been saved as draft.",
      });
    }
  };

  const handleSaveAsDraft = () => {
    setIsDraft(true);
    form.handleSubmit(onSubmit)();
  };

  const calculateSavings = () => {
    const price = parseFloat(watchedValues.price || "0");
    const originalPrice = parseFloat(watchedValues.originalPrice || "0");
    if (originalPrice && price) {
      const savings = Math.round(((originalPrice - price) / originalPrice) * 100);
      return savings;
    }
    return 0;
  };

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

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                    <div 
                      className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-400 transition-colors cursor-pointer"
                      onClick={handleImageUpload}
                    >
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                      <p className="text-sm text-gray-500">PNG, JPG up to 10MB (max 5 images)</p>
                      <Button type="button" className="mt-4 bg-green-500 hover:bg-green-600">
                        Choose Files
                      </Button>
                    </div>
                    
                    {/* Preview Images */}
                    {uploadedImages.length > 0 && (
                      <div className="grid grid-cols-3 gap-4">
                        {uploadedImages.map((image, index) => (
                          <div key={index} className="relative group">
                            <img 
                              src={image} 
                              alt={`Preview ${index + 1}`}
                              className="w-full h-24 object-cover rounded-lg"
                            />
                            <Button 
                              type="button"
                              size="sm" 
                              onClick={() => removeImage(index)}
                              className="absolute -top-2 -right-2 w-6 h-6 rounded-full p-0 bg-red-500 hover:bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X className="w-3 h-3" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
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
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Item Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Vintage Levi's Denim Jacket" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Category</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select category" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="jackets">Jackets</SelectItem>
                              <SelectItem value="dresses">Dresses</SelectItem>
                              <SelectItem value="jeans">Jeans</SelectItem>
                              <SelectItem value="shoes">Shoes</SelectItem>
                              <SelectItem value="accessories">Accessories</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="brand"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Brand</FormLabel>
                          <FormControl>
                            <Input placeholder="Levi's" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="size"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Size</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select size" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="xs">XS</SelectItem>
                              <SelectItem value="s">S</SelectItem>
                              <SelectItem value="m">M</SelectItem>
                              <SelectItem value="l">L</SelectItem>
                              <SelectItem value="xl">XL</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="condition"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Condition</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select condition" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="like-new">Like New</SelectItem>
                              <SelectItem value="excellent">Excellent</SelectItem>
                              <SelectItem value="very-good">Very Good</SelectItem>
                              <SelectItem value="good">Good</SelectItem>
                              <SelectItem value="fair">Fair</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe the item's condition, fit, and any unique features..."
                            rows={4}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Pricing and Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Pricing & Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Selling Price</FormLabel>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                          <FormControl>
                            <Input placeholder="25.00" className="pl-10" {...field} />
                          </FormControl>
                        </div>
                        <p className="text-sm text-gray-500">Set your asking price</p>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="originalPrice"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Original Price (Optional)</FormLabel>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                          <FormControl>
                            <Input placeholder="89.00" className="pl-10" {...field} />
                          </FormControl>
                        </div>
                        <p className="text-sm text-gray-500">What you paid originally</p>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div>
                    <Label>Available Actions</Label>
                    <div className="space-y-2 mt-2">
                      <FormField
                        control={form.control}
                        name="availableForSale"
                        render={({ field }) => (
                          <div className="flex items-center space-x-2">
                            <input 
                              type="checkbox" 
                              id="sell" 
                              className="rounded" 
                              checked={field.value}
                              onChange={field.onChange}
                            />
                            <Label htmlFor="sell" className="text-sm">Available for Sale</Label>
                          </div>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="openToSwaps"
                        render={({ field }) => (
                          <div className="flex items-center space-x-2">
                            <input 
                              type="checkbox" 
                              id="swap" 
                              className="rounded" 
                              checked={field.value}
                              onChange={field.onChange}
                            />
                            <Label htmlFor="swap" className="text-sm">Open to Swaps</Label>
                          </div>
                        )}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Listing Preview */}
                <div className="bg-green-50 p-4 rounded-lg mt-6">
                  <h3 className="font-semibold text-green-800 mb-2">Listing Preview</h3>
                  <div className="text-sm text-green-700">
                    <p><strong>Title:</strong> {watchedValues.title || "Enter item title"}</p>
                    <p><strong>Price:</strong> ${watchedValues.price || "0"} {watchedValues.originalPrice && <span className="line-through text-gray-500">(${watchedValues.originalPrice} original)</span>}</p>
                    {calculateSavings() > 0 && (
                      <p><strong>Savings:</strong> {calculateSavings()}% off retail price</p>
                    )}
                  </div>
                </div>
                
                <div className="flex gap-4 mt-6">
                  <Button 
                    type="submit" 
                    className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                    onClick={() => setIsDraft(false)}
                  >
                    List Item
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="flex-1"
                    onClick={handleSaveAsDraft}
                  >
                    Save as Draft
                  </Button>
                </div>
              </CardContent>
            </Card>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ListItem;
