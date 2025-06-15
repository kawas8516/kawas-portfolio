
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Ocean Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/55873c1b-4282-498e-99b2-b0a30184fa6d.png')`
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Navigation */}
      <nav className="relative z-50 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-white text-lg font-medium hover:text-white/80 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-white text-lg font-medium hover:text-white/80 transition-colors">
              About
            </Link>
            <Link to="/blog" className="text-white text-lg font-medium hover:text-white/80 transition-colors">
              Blog
            </Link>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-black/20 border border-white/20 text-white placeholder-white/60 px-10 py-2 rounded-md w-80 focus:outline-none focus:border-white/40 transition-colors"
            />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-40 min-h-screen flex">
        {/* Left Side - Logo/Branding */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="border-2 border-white px-8 py-4 inline-block">
              <h1 className="text-white text-4xl font-bold tracking-wider">
                KAWAS | X
              </h1>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex-1 flex items-center justify-center bg-gradient-to-r from-transparent to-black/60">
          <div className="text-center px-8 max-w-lg">
            <h2 className="text-6xl md:text-7xl font-light text-white mb-8 leading-tight">
              Hi!
            </h2>
            
            <h3 className="text-3xl md:text-4xl font-light text-white mb-8 leading-relaxed">
              I write code &<br />content
            </h3>
            
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              You can know me a little better on{" "}
              <Link to="/about" className="underline hover:text-white transition-colors">
                about
              </Link>{" "}
              page or just go drop email to get upcoming blogs
            </p>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white text-black hover:bg-white/90 border-white px-8 py-3 text-lg font-medium"
              asChild
            >
              <Link to="/about">Learn More</Link>
            </Button>
            
            {/* Social Icons */}
            <div className="flex justify-center gap-6 mt-12">
              <a href="https://medium.com/@yourusername" className="text-white hover:text-white/70 transition-colors">
                <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center">
                  <span className="text-sm font-medium">M</span>
                </div>
              </a>
              <a href="https://pinterest.com/yourusername" className="text-white hover:text-white/70 transition-colors">
                <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center">
                  <span className="text-sm font-medium">P</span>
                </div>
              </a>
              <a href="https://linkedin.com/in/yourusername" className="text-white hover:text-white/70 transition-colors">
                <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center">
                  <span className="text-sm font-medium">in</span>
                </div>
              </a>
              <a href="https://instagram.com/yourusername" className="text-white hover:text-white/70 transition-colors">
                <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center">
                  <span className="text-sm font-medium">IG</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Chat bubble in bottom right */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="icon"
          className="bg-gray-600 hover:bg-gray-700 text-white rounded-lg w-12 h-12"
          asChild
        >
          <a href="mailto:your.email@example.com">
            <span className="text-lg">💬</span>
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Index;
