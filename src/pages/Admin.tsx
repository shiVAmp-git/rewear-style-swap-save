
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Recycle, Users, Package, DollarSign, TrendingUp, Search, Filter, Shield, AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Admin = () => {
  const stats = {
    totalUsers: 12543,
    activeListings: 3421,
    totalSales: 89567,
    revenue: 234567,
    reportsOpen: 23,
    reportsResolved: 156
  };

  const recentUsers = [
    {
      id: 1,
      name: "Emma Johnson",
      email: "emma.j@email.com",
      joinDate: "2024-01-15",
      status: "active",
      itemsSold: 12,
      rating: 4.8,
      avatar: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "m.chen@email.com",
      joinDate: "2024-01-14",
      status: "pending",
      itemsSold: 0,
      rating: 0,
      avatar: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Sarah Williams",
      email: "sarah.w@email.com",
      joinDate: "2024-01-13",
      status: "active",
      itemsSold: 34,
      rating: 4.9,
      avatar: "/placeholder.svg"
    }
  ];

  const flaggedItems = [
    {
      id: 1,
      title: "Designer Handbag",
      seller: "Jane Doe",
      reason: "Suspected counterfeit",
      reportDate: "2024-01-15",
      status: "pending",
      image: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=300"
    },
    {
      id: 2,
      title: "Vintage Jacket",
      seller: "John Smith",
      reason: "Misleading description",
      reportDate: "2024-01-14",
      status: "under-review",
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300"
    },
    {
      id: 3,
      title: "Summer Dress",
      seller: "Alice Brown",
      reason: "Wrong category",
      reportDate: "2024-01-13",
      status: "resolved",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300"
    }
  ];

  const systemActivity = [
    { type: "user", action: "New user registration", user: "Emma Johnson", time: "5 min ago" },
    { type: "sale", action: "Item sold", item: "Vintage Jacket - $45", time: "12 min ago" },
    { type: "report", action: "Item reported", item: "Designer Handbag", time: "1 hour ago" },
    { type: "admin", action: "Admin action", detail: "User account suspended", time: "2 hours ago" }
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
                ReWear Admin
              </span>
            </Link>
            <div className="flex space-x-3">
              <Link to="/dashboard">
                <Button variant="ghost" className="text-green-600 hover:text-green-700">Back to Site</Button>
              </Link>
              <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white">
                <Shield className="w-4 h-4 mr-2" />
                Admin Panel
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage users, monitor activity, and maintain platform integrity</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Users</p>
                  <p className="text-2xl font-bold text-blue-600">{stats.totalUsers.toLocaleString()}</p>
                </div>
                <Users className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Active Listings</p>
                  <p className="text-2xl font-bold text-green-600">{stats.activeListings.toLocaleString()}</p>
                </div>
                <Package className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Sales</p>
                  <p className="text-2xl font-bold text-orange-600">{stats.totalSales.toLocaleString()}</p>
                </div>
                <TrendingUp className="w-8 h-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Revenue</p>
                  <p className="text-2xl font-bold text-purple-600">${stats.revenue.toLocaleString()}</p>
                </div>
                <DollarSign className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Open Reports</p>
                  <p className="text-2xl font-bold text-red-600">{stats.reportsOpen}</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-red-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Resolved</p>
                  <p className="text-2xl font-bold text-green-600">{stats.reportsResolved}</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="users">Manage Users</TabsTrigger>
            <TabsTrigger value="reports">Flagged Items</TabsTrigger>
            <TabsTrigger value="activity">System Activity</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
              <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input placeholder="Search users..." className="pl-10 w-64" />
                </div>
                <Select>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Users</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="suspended">Suspended</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="text-left p-4 font-medium text-gray-900">User</th>
                        <th className="text-left p-4 font-medium text-gray-900">Join Date</th>
                        <th className="text-left p-4 font-medium text-gray-900">Status</th>
                        <th className="text-left p-4 font-medium text-gray-900">Items Sold</th>
                        <th className="text-left p-4 font-medium text-gray-900">Rating</th>
                        <th className="text-left p-4 font-medium text-gray-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentUsers.map((user) => (
                        <tr key={user.id} className="border-b hover:bg-gray-50">
                          <td className="p-4">
                            <div className="flex items-center space-x-3">
                              <Avatar className="w-10 h-10">
                                <AvatarImage src={user.avatar} />
                                <AvatarFallback className="bg-green-100 text-green-600">
                                  {user.name.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium text-gray-900">{user.name}</p>
                                <p className="text-sm text-gray-600">{user.email}</p>
                              </div>
                            </div>
                          </td>
                          <td className="p-4 text-gray-600">{user.joinDate}</td>
                          <td className="p-4">
                            <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                              {user.status}
                            </Badge>
                          </td>
                          <td className="p-4 text-gray-600">{user.itemsSold}</td>
                          <td className="p-4 text-gray-600">{user.rating > 0 ? user.rating : 'N/A'}</td>
                          <td className="p-4">
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">View</Button>
                              <Button size="sm" variant="outline">Edit</Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Flagged Items</h2>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Reports</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="under-review">Under Review</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-4">
              {flaggedItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-gray-900">{item.title}</h3>
                            <p className="text-sm text-gray-600">by {item.seller}</p>
                          </div>
                          <Badge 
                            variant={
                              item.status === 'pending' ? 'destructive' :
                              item.status === 'under-review' ? 'secondary' : 'default'
                            }
                          >
                            {item.status.replace('-', ' ')}
                          </Badge>
                        </div>
                        <div className="mb-3">
                          <p className="text-sm text-gray-600">
                            <strong>Reason:</strong> {item.reason}
                          </p>
                          <p className="text-sm text-gray-600">
                            <strong>Reported:</strong> {item.reportDate}
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" className="bg-green-500 hover:bg-green-600">
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Approve
                          </Button>
                          <Button size="sm" variant="destructive">
                            <XCircle className="w-4 h-4 mr-1" />
                            Remove
                          </Button>
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">System Activity</h2>
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {systemActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          activity.type === 'user' ? 'bg-blue-100' :
                          activity.type === 'sale' ? 'bg-green-100' :
                          activity.type === 'report' ? 'bg-red-100' : 'bg-purple-100'
                        }`}>
                          {activity.type === 'user' && <Users className="w-5 h-5 text-blue-600" />}
                          {activity.type === 'sale' && <DollarSign className="w-5 h-5 text-green-600" />}
                          {activity.type === 'report' && <AlertTriangle className="w-5 h-5 text-red-600" />}
                          {activity.type === 'admin' && <Shield className="w-5 h-5 text-purple-600" />}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{activity.action}</p>
                          <p className="text-sm text-gray-600">
                            {activity.user && `User: ${activity.user}`}
                            {activity.item && `Item: ${activity.item}`}
                            {activity.detail && `Detail: ${activity.detail}`}
                          </p>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Admin Settings</h2>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Platform Configuration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Commission Rate (%)
                      </label>
                      <Input defaultValue="5" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Max Images per Listing
                      </label>
                      <Input defaultValue="5" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Auto-approve Listings
                      </label>
                      <Select defaultValue="yes">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        User Verification Required
                      </label>
                      <Select defaultValue="no">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button className="bg-green-500 hover:bg-green-600">
                    Save Settings
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
