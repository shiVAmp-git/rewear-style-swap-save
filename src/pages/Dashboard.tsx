
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Recycle, Plus, DollarSign, Package, Heart, Star, MapPin, Edit2, Settings, MessageCircle, TrendingUp, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Dashboard = () => {
  const { profile, signOut } = useAuth();

  // These will be replaced with real data from Supabase queries
  const stats = {
    totalEarnings: 0,
    itemsSold: 0,
    itemsListed: 0,
    followers: 0
  };

  const myListings = [
    // Will be populated from database
  ];

  const recentActivity = [
    // Will be populated from database
  ];

  const savedItems = [
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
                ReWear
              </span>
            </Link>
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600">Welcome, {profile?.full_name}</span>
              <Link to="/browse">
                <Button variant="ghost" className="text-green-600 hover:text-green-700">Browse</Button>
              </Link>
              <Link to="/list-item">
                <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  List Item
                </Button>
              </Link>
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
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="flex items-center space-x-6 mb-6 md:mb-0">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={profile?.avatar_url} />
                  <AvatarFallback className="bg-green-100 text-green-600 text-2xl">
                    {profile?.full_name?.split(' ').map(n => n[0]).join('') || 'U'}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-1">{profile?.full_name}</h1>
                  <p className="text-gray-600 mb-2">@{profile?.full_name?.toLowerCase().replace(' ', '_')}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {profile?.location || 'Location not set'}
                    </div>
                    <span>Member since {new Date(profile?.created_at || '').toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-3">
                <Button variant="outline">
                  <Edit2 className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
                <Button variant="outline">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Button>
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
                  <p className="text-sm text-gray-600 mb-1">Total Earnings</p>
                  <p className="text-2xl font-bold text-green-600">${stats.totalEarnings}</p>
                </div>
                <DollarSign className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Items Sold</p>
                  <p className="text-2xl font-bold text-blue-600">{stats.itemsSold}</p>
                </div>
                <Package className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Active Listings</p>
                  <p className="text-2xl font-bold text-orange-600">{stats.itemsListed}</p>
                </div>
                <TrendingUp className="w-8 h-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Followers</p>
                  <p className="text-2xl font-bold text-purple-600">{stats.followers}</p>
                </div>
                <Heart className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="listings" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="listings">My Listings</TabsTrigger>
            <TabsTrigger value="activity">Recent Activity</TabsTrigger>
            <TabsTrigger value="saved">Saved Items</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
          </TabsList>

          <TabsContent value="listings" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">My Listings</h2>
              <Link to="/list-item">
                <Button className="bg-green-500 hover:bg-green-600">
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Item
                </Button>
              </Link>
            </div>
            
            {myListings.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No Items Listed Yet</h3>
                  <p className="text-gray-600 mb-4">Start selling by listing your first item</p>
                  <Link to="/list-item">
                    <Button className="bg-green-500 hover:bg-green-600">
                      <Plus className="w-4 h-4 mr-2" />
                      List Your First Item
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Listings will be mapped here when data is available */}
              </div>
            )}
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Recent Activity</h2>
            <Card>
              <CardContent className="p-12 text-center">
                <TrendingUp className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No Activity Yet</h3>
                <p className="text-gray-600">Your activity will appear here once you start using the platform</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="saved" className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Saved Items</h2>
            <Card>
              <CardContent className="p-12 text-center">
                <Heart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No Saved Items</h3>
                <p className="text-gray-600 mb-4">Browse items and save your favorites</p>
                <Link to="/browse">
                  <Button className="bg-green-500 hover:bg-green-600">
                    Browse Items
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages" className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Messages</h2>
            <Card>
              <CardContent className="p-12 text-center">
                <MessageCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No messages yet</h3>
                <p className="text-gray-600 mb-4">Start conversations with buyers and sellers</p>
                <Link to="/browse">
                  <Button className="bg-green-500 hover:bg-green-600">
                    Browse Items
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
