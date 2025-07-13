
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Recycle, Package, MapPin, Clock, DollarSign, Truck, CheckCircle, XCircle, Navigation } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const DeliveryDashboard = () => {
  const { profile, signOut } = useAuth();
  const [activeTab, setActiveTab] = useState("available");

  // This will be replaced with real data from Supabase
  const stats = {
    totalDeliveries: 0,
    completedToday: 0,
    totalEarnings: 0,
    rating: 0,
  };

  const availableDeliveries = [
    // Will be populated from database
  ];

  const myDeliveries = [
    // Will be populated from database
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
                ReWear Delivery
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, {profile?.full_name}</span>
              <Button variant="outline" onClick={signOut}>
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex items-center space-x-6">
              <Avatar className="w-24 h-24">
                <AvatarImage src={profile?.avatar_url} />
                <AvatarFallback className="bg-green-100 text-green-600 text-2xl">
                  <Truck className="w-12 h-12" />
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-1">{profile?.full_name}</h1>
                <p className="text-gray-600 mb-2">Delivery Partner</p>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {profile?.location || 'Location not set'}
                  </div>
                  <div className="flex items-center">
                    <Package className="w-4 h-4 mr-1" />
                    {stats.totalDeliveries} deliveries
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Deliveries</p>
                  <p className="text-2xl font-bold text-blue-600">{stats.totalDeliveries}</p>
                </div>
                <Package className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Completed Today</p>
                  <p className="text-2xl font-bold text-green-600">{stats.completedToday}</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Earnings</p>
                  <p className="text-2xl font-bold text-orange-600">${stats.totalEarnings}</p>
                </div>
                <DollarSign className="w-8 h-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Rating</p>
                  <p className="text-2xl font-bold text-purple-600">{stats.rating || 'N/A'}</p>
                </div>
                <Truck className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="available">Available Deliveries</TabsTrigger>
            <TabsTrigger value="my-deliveries">My Deliveries</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="available" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Available Deliveries</h2>
              <Button className="bg-green-500 hover:bg-green-600">
                <Navigation className="w-4 h-4 mr-2" />
                Refresh Location
              </Button>
            </div>
            
            {availableDeliveries.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No Available Deliveries</h3>
                  <p className="text-gray-600">Check back later for new delivery opportunities</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {/* Delivery cards will be mapped here */}
              </div>
            )}
          </TabsContent>

          <TabsContent value="my-deliveries" className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">My Deliveries</h2>
            
            {myDeliveries.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <Truck className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No Active Deliveries</h3>
                  <p className="text-gray-600">Accept deliveries from the available tab to get started</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {/* Active delivery cards will be mapped here */}
              </div>
            )}
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Profile Settings</h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <p className="text-gray-900">{profile?.full_name}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <p className="text-gray-900">{profile?.email}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <p className="text-gray-900">{profile?.phone || 'Not provided'}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </label>
                    <p className="text-gray-900">{profile?.location || 'Not provided'}</p>
                  </div>
                  <Button className="bg-green-500 hover:bg-green-600">
                    Edit Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DeliveryDashboard;
