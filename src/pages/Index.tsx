
import { Button } from "@/components/ui/button";
import { Search, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Navigation */}
      <nav className="relative z-50 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-8">
            <Link 
              to="/" 
              className="text-foreground text-lg font-semibold hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-muted-foreground text-lg font-medium hover:text-primary transition-colors"
            >
              About
            </Link>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              type="text"
              placeholder="Search something..."
              className="glass-effect text-foreground placeholder-muted-foreground px-10 py-3 rounded-xl w-80 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-40 min-h-screen flex">
        {/* Left Side - Logo/Branding */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="glass-effect px-12 py-8 inline-block rounded-2xl hover-lift">
              <h1 className="text-gradient text-5xl font-bold tracking-wider">
                KAWAS | X
              </h1>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center px-8 max-w-lg">
            <h2 className="text-7xl md:text-8xl font-light text-foreground mb-8 leading-tight">
              Hi!
            </h2>
            
            <h3 className="text-4xl md:text-5xl font-light text-primary mb-8 leading-relaxed">
              I write code &<br />content
            </h3>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              You can know me a little better on{" "}
              <Link 
                to="/about" 
                className="text-primary hover:text-primary/80 underline decoration-2 underline-offset-4 transition-colors"
              >
                about
              </Link>{" "}
              page or just drop an email to get upcoming blogs
            </p>
            
            <Button 
              size="lg" 
              className="px-8 py-4 text-lg font-medium rounded-xl hover-lift group"
              asChild
            >
              <Link to="/about">
                Learn More 
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            {/* Social Icons */}
            <div className="flex justify-center gap-4 mt-12">
              <a 
                href="https://github.com/yourusername" 
                className="glass-effect w-12 h-12 rounded-full flex items-center justify-center hover-lift group"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                className="glass-effect w-12 h-12 rounded-full flex items-center justify-center hover-lift group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="mailto:kaustubhamandhane24@gmail.com" 
                className="glass-effect w-12 h-12 rounded-full flex items-center justify-center hover-lift group"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Chat bubble in bottom right */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="icon"
          className="glass-effect w-14 h-14 rounded-full hover-lift shadow-lg"
          asChild
        >
          <a href="mailto:kaustubhamandhane24@gmail.com">
            <span className="text-xl">💬</span>
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Index;
