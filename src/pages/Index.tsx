import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Recycle } from "lucide-react";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import NewsletterForm from "../components/NewsletterForm";

const Index = () => {
  const featuredItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400",
      title: "Vintage Levi's Denim Jacket",
      price: "$24",
      description: "Authentic vintage Levi's denim jacket. Perfect for all seasons.",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
      title: "Floral Summer Dress",
      price: "$18",
      description: "Light and airy floral dress. Ideal for summer outings.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400",
      title: "Wool Peacoat",
      price: "$85",
      description: "Classic wool peacoat. Stay warm and stylish in winter.",
    },
  ];

  const howItWorksSteps = [
    {
      number: "1",
      title: "List Your Items",
      description: "Snap a few photos, write a description, and set your price.",
    },
    {
      number: "2",
      title: "Connect with Buyers",
      description: "Respond to offers, answer questions, and arrange meetups.",
    },
    {
      number: "3",
      title: "Get Paid or Trade",
      description: "Receive payment or trade for something new. It's that simple!",
    },
  ];

  const stats = [
    { label: "Items Listed", value: "4.5K+" },
    { label: "Happy Users", value: "2.8K+" },
    { label: "Daily Transactions", value: "1.2K+" },
    { label: "Sustainability Score", value: "98%" },
  ];

  const testimonials = [
    {
      name: "Emma K.",
      avatar: "/placeholder.svg",
      text: "I've found some amazing vintage pieces on ReWear and decluttered my closet at the same time. It's a win-win!",
    },
    {
      name: "Mike R.",
      avatar: "/placeholder.svg",
      text: "ReWear makes sustainable fashion so accessible. I love knowing I'm helping the environment while looking great.",
    },
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
                  List Item
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url(/hero-pattern.svg)] bg-center opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Give Your Clothes a Second Life
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              ReWear is the community marketplace for buying, selling, and swapping clothes. Join us in making fashion more sustainable.
            </p>
            <div className="space-x-3">
              <Link to="/browse">
                <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white">
                  Browse Items
                </Button>
              </Link>
              <Link to="/list-item">
                <Button variant="outline">List Your Item</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainable Fashion</h3>
                <p className="text-gray-600">Reduce waste and promote eco-friendly practices by giving clothes a second life.</p>
              </CardContent>
            </Card>
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Earn Money</h3>
                <p className="text-gray-600">Turn your unused clothes into cash or trade for something new.</p>
              </CardContent>
            </Card>
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Marketplace</h3>
                <p className="text-gray-600">Join a community of fashion enthusiasts who care about sustainability and style.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Items</h2>
            <p className="text-xl text-gray-600">Check out some of our community's most popular listings.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredItems.map((item) => (
              <Card key={item.id} className="bg-white hover:shadow-lg transition-shadow">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover rounded-t-md"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">{item.price}</span>
                    <Button variant="outline">View Item</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join ReWear in three easy steps.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksSteps.map((step, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 font-bold text-2xl flex items-center justify-center mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">ReWear by the Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-xl">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how ReWear is making a difference in the lives of our users.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="w-12 h-12 mr-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
                    </Avatar>
                    <div className="text-xl font-semibold text-gray-900">{testimonial.name}</div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Stay in the Loop</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Get the latest sustainable fashion tips, featured items, and ReWear community updates delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <NewsletterForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-2xl font-bold mb-4">ReWear</h4>
            <p className="text-gray-400">
              The community marketplace for sustainable fashion. Buy, sell, and swap clothes with a purpose.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Explore</h4>
            <ul className="text-gray-400 space-y-2">
              <li>
                <Link to="/browse" className="hover:text-white transition-colors">Browse Items</Link>
              </li>
              <li>
                <Link to="/list-item" className="hover:text-white transition-colors">List Your Item</Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-white transition-colors">Dashboard</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Connect</h4>
            <p className="text-gray-400">
              Stay up to date with the latest from ReWear.
            </p>
            <NewsletterForm className="!m-0" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center text-gray-400">
          &copy; {new Date().getFullYear()} ReWear. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
