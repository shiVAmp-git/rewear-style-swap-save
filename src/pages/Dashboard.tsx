
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Recycle, Plus, DollarSign, Package, Heart, Star, MapPin, Edit2, Settings, MessageCircle, TrendingUp, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const user = {
    name: "Sarah Mitchell",
    username: "@sarahm_vintage",
    avatar: "/placeholder.svg",
    location: "Brooklyn, NY",
    memberSince: "March 2022",
    rating: 4.8,
    totalReviews: 156,
    verified: true,
    stats: {
      totalEarnings: 2450,
      itemsSold: 87,
      itemsListed: 23,
      followers: 342
    }
  };

  const myListings = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300",
      title: "Vintage Levi's Denim Jacket",
      price: "$24",
      status: "active",
      views: 89,
      likes: 23,
      messages: 5,
      listedDate: "2 hours ago"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300",
      title: "Floral Summer Dress",
      price: "$18",
      status: "sold",
      views: 156,
      likes: 31,
      messages: 12,
      listedDate: "1 week ago"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300",
      title: "Wool Peacoat",
      price: "$85",
      status: "active",
      views: 234,
      likes: 45,
      messages: 8,
      listedDate: "3 days ago"
    }
  ];

  const recentActivity = [
    { type: "sale", item: "Vintage Band Tee", amount: "$15", time: "2 hours ago" },
    { type: "message", item: "Denim Jacket", user: "Emma K.", time: "5 hours ago" },
    { type: "like", item: "Wool Peacoat", user: "Mike R.", time: "1 day ago" },
    { type: "view", item: "Summer Dress", count: "12 new views", time: "2 days ago" }
  ];

  const savedItems = [
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=300",
      title: "Vintage Band T-Shirt",
      price: "$12",
      seller: "Alex P.",
      location: "Portland, OR"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1582418702294-e7474277d445?w=300",
      title: "High-Waisted Jeans",
      price: "$22",
      seller: "Jess L.",
      location: "Chicago, IL"
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
              <Link to="/list-item">
                <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  List Item
                </Button>
              </Link>
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
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback className="bg-green-100 text-green-600 text-2xl">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-1">{user.name}</h1>
                  <p className="text-gray-600 mb-2">{user.username}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {user.location}
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      {user.rating} ({user.totalReviews} reviews)
                    </div>
                    <span>Member since {user.memberSince}</span>
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
                  <p className="text-2xl font-bold text-green-600">${user.stats.totalEarnings}</p>
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
                  <p className="text-2xl font-bold text-blue-600">{user.stats.itemsSold}</p>
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
                  <p className="text-2xl font-bold text-orange-600">{user.stats.itemsListed}</p>
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
                  <p className="text-2xl font-bold text-purple-600">{user.stats.followers}</p>
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myListings.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <Badge 
                      className={`absolute top-3 left-3 ${
                        item.status === 'active' ? 'bg-green-500' : 'bg-gray-500'
                      } text-white`}
                    >
                      {item.status}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-lg font-bold text-green-600 mb-3">{item.price}</p>
                    <div className="grid grid-cols-3 gap-2 text-xs text-gray-600 mb-3">
                      <div className="flex items-center">
                        <Eye className="w-3 h-3 mr-1" />
                        {item.views}
                      </div>
                      <div className="flex items-center">
                        <Heart className="w-3 h-3 mr-1" />
                        {item.likes}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="w-3 h-3 mr-1" />
                        {item.messages}
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mb-3">Listed {item.listedDate}</p>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1">Edit</Button>
                      <Button size="sm" variant="outline" className="flex-1">View</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Recent Activity</h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          activity.type === 'sale' ? 'bg-green-100' :
                          activity.type === 'message' ? 'bg-blue-100' :
                          activity.type === 'like' ? 'bg-red-100' : 'bg-gray-100'
                        }`}>
                          {activity.type === 'sale' && <DollarSign className="w-5 h-5 text-green-600" />}
                          {activity.type === 'message' && <MessageCircle className="w-5 h-5 text-blue-600" />}
                          {activity.type === 'like' && <Heart className="w-5 h-5 text-red-600" />}
                          {activity.type === 'view' && <Eye className="w-5 h-5 text-gray-600" />}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            {activity.type === 'sale' && `Sold ${activity.item} for ${activity.amount}`}
                            {activity.type === 'message' && `New message about ${activity.item} from ${activity.user}`}
                            {activity.type === 'like' && `${activity.user} liked your ${activity.item}`}
                            {activity.type === 'view' && `${activity.item} got ${activity.count}`}
                          </p>
                          <p className="text-sm text-gray-600">{activity.time}</p>
                        </div>
                      </div>
                      <Button size="sm" variant="ghost">View</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="saved" className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Saved Items</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedItems.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <Button 
                      size="sm" 
                      className="absolute top-3 right-3 w-8 h-8 rounded-full p-0 bg-white/80 hover:bg-white text-red-500"
                      variant="ghost"
                    >
                      <Heart className="w-4 h-4 fill-current" />
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">by {item.seller}</p>
                    <div className="flex items-center text-xs text-gray-500 mb-3">
                      <MapPin className="w-3 h-3 mr-1" />
                      {item.location}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-green-600">{item.price}</span>
                      <Button size="sm" className="bg-green-500 hover:bg-green-600">
                        View Item
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="messages" className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Messages</h2>
            <Card>
              <CardContent className="p-6">
                <div className="text-center py-12">
                  <MessageCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No messages yet</h3>
                  <p className="text-gray-600 mb-4">Start conversations with buyers and sellers</p>
                  <Link to="/browse">
                    <Button className="bg-green-500 hover:bg-green-600">
                      Browse Items
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
