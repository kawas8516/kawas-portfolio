
import { Button } from "@/components/ui/button";
import { Search, ArrowRight, Code, Palette, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, efficient code that solves real problems"
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Crafting user-friendly interfaces with attention to detail"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with teams and contributing to communities"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Navigation */}
      <nav className="p-6 bg-white border-b">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-8">
            <Link 
              to="/" 
              className="text-black text-lg font-semibold hover:text-gray-600 transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-black text-lg font-medium hover:text-gray-600 transition-colors"
            >
              About
            </Link>
          </div>
          
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-white border border-gray-200 text-black placeholder-gray-400 px-10 py-2 rounded-lg w-80 focus:outline-none focus:border-black transition-colors"
            />
          </div>
        </div>
      </nav>

      {/* Clean Hero Section */}
      <div className="min-h-screen flex">        
        {/* Left Side - Simple Branding */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center fade-in">
            <div className="border-2 border-black px-8 py-6 inline-block rounded-lg">
              <h1 className="text-4xl md:text-5xl font-bold tracking-wider text-black">
                KAWAS | X
              </h1>
            </div>
          </div>
        </div>

        {/* Right Side - Clean Content */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center px-8 max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-light text-black mb-6">
              Hi!
            </h2>
            
            <h3 className="text-2xl md:text-4xl font-light text-black mb-6">
              I write code &<br />
              <span className="font-medium">content</span>
            </h3>
            
            <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto">
              You can know me a little better on{" "}
              <Link 
                to="/about" 
                className="text-black hover:text-gray-600 underline underline-offset-4 font-medium"
              >
                about
              </Link>{" "}
              page or just drop an email to get upcoming blogs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg" 
                className="bg-black hover:bg-gray-800 text-white px-6 py-3"
                asChild
              >
                <Link to="/about">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="px-6 py-3 border-black text-black hover:bg-black hover:text-white"
                asChild
              >
                <a href="mailto:kaustubhamandhane24@gmail.com">
                  Get In Touch
                </a>
              </Button>
            </div>
            
            {/* Simple Social Icons */}
            <div className="flex justify-center gap-3">
              {[
                { name: "M", href: "https://medium.com/@yourusername" },
                { name: "P", href: "https://pinterest.com/yourusername" },
                { name: "in", href: "https://linkedin.com/in/yourusername" },
                { name: "IG", href: "https://instagram.com/yourusername" }
              ].map((social) => (
                <a 
                  key={social.name}
                  href={social.href} 
                  className="w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center font-medium hover:bg-gray-800 transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Simple Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-black">What I Do</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Passionate about creating digital experiences that make a difference
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white rounded-lg hover-lift"
              >
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-black">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Chat Button */}
      <div className="fixed bottom-6 right-6">
        <Button
          size="icon"
          className="bg-black hover:bg-gray-800 text-white rounded-full w-12 h-12 shadow-lg"
          asChild
        >
          <a href="mailto:kaustubhamandhane24@gmail.com">
            <span className="text-lg">💬</span>
          </a>
        </Button>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
