
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Recycle, Camera, MapPin, User, Shield, Truck } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, UserRole } from "@/contexts/AuthContext";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    phone: "",
    location: "",
    role: "customer" as UserRole,
  });
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password || !formData.fullName) {
      return;
    }

    try {
      setLoading(true);
      await signUp(formData.email, formData.password, {
        full_name: formData.fullName,
        phone: formData.phone,
        location: formData.location,
        role: formData.role,
      });
      
      // Redirect based on role
      if (formData.role === 'admin') {
        navigate('/admin');
      } else if (formData.role === 'delivery_partner') {
        navigate('/delivery-dashboard');
      } else {
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Signup error:', error);
    } finally {
      setLoading(false);
    }
  };

  const roleOptions = [
    { value: "customer", label: "Customer", icon: User, description: "Buy and sell items" },
    { value: "delivery_partner", label: "Delivery Partner", icon: Truck, description: "Deliver items to customers" },
    { value: "admin", label: "Admin", icon: Shield, description: "Manage platform" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
              <Recycle className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
              ReWear
            </span>
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">Join ReWear</CardTitle>
          <p className="text-gray-600">Start your sustainable fashion journey</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex justify-center">
              <div className="relative">
                <Avatar className="w-20 h-20">
                  <AvatarFallback className="bg-green-100 text-green-600 text-xl">
                    <Camera className="w-8 h-8" />
                  </AvatarFallback>
                </Avatar>
                <Button size="sm" className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0">
                  <Camera className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <div>
              <Label htmlFor="fullName">Full Name *</Label>
              <Input 
                id="fullName" 
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="password">Password *</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="Create a strong password"
                value={formData.password}
                onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input 
                id="phone" 
                placeholder="+1 (555) 123-4567"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              />
            </div>
            
            <div>
              <Label htmlFor="location">Location</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input 
                  id="location" 
                  placeholder="City, State"
                  className="pl-10"
                  value={formData.location}
                  onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="role">Account Type *</Label>
              <Select value={formData.role} onValueChange={(value: UserRole) => setFormData(prev => ({ ...prev, role: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select account type" />
                </SelectTrigger>
                <SelectContent>
                  {roleOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      <div className="flex items-center space-x-2">
                        <option.icon className="w-4 h-4" />
                        <div>
                          <div className="font-medium">{option.label}</div>
                          <div className="text-xs text-gray-500">{option.description}</div>
                        </div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </Button>
          </form>
          
          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/signin" className="text-green-600 hover:text-green-700 font-medium">
              Sign In
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
