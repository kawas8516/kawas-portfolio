
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const [isPageTurning, setIsPageTurning] = useState(false);

  const handlePageTurn = () => {
    setIsPageTurning(true);
    // Navigate to about page after animation
    setTimeout(() => {
      window.location.href = '/about';
    }, 800);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-50 p-6 animate-fade-in">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-foreground text-lg font-medium hover:text-foreground/70 transition-all duration-300 hover:scale-105">
              Home
            </Link>
            <Link to="/about" className="text-foreground text-lg font-medium hover:text-foreground/70 transition-all duration-300 hover:scale-105">
              About
            </Link>
            <Link to="/contact" className="text-foreground text-lg font-medium hover:text-foreground/70 transition-all duration-300 hover:scale-105">
              Contact
            </Link>
          </div>
          
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-muted border border-border text-foreground placeholder-muted-foreground px-10 py-2 rounded-md w-80 focus:outline-none focus:border-ring transition-all duration-300 focus:shadow-md"
            />
          </div>
        </div>
      </nav>

      {/* Page Turn Overlay */}
      <div 
        className={`fixed inset-0 z-[100] pointer-events-none transition-all duration-800 ${
          isPageTurning 
            ? 'bg-background transform-gpu' 
            : 'transform translate-x-full'
        }`}
        style={{
          transformOrigin: 'left center',
          transform: isPageTurning 
            ? 'rotateY(0deg) translateX(0%)' 
            : 'rotateY(-90deg) translateX(100%)',
          backfaceVisibility: 'hidden',
          perspective: '1000px'
        }}
      />

      {/* Main Content */}
      <div className="relative z-40 min-h-screen flex">
        {/* Left Side - Logo/Branding */}
        <div className="w-1/2 flex items-center justify-center animate-fade-in">
          <div className="text-center">
            <div 
              className="border-2 border-foreground px-12 py-8 inline-block hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer select-none"
              onClick={handlePageTurn}
            >
              <h1 className="text-foreground text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider">
                KAWAS | X
              </h1>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-1/2 flex items-center justify-center px-8">
          <div className="text-left max-w-2xl animate-fade-in">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-light text-foreground mb-8 leading-tight animate-fade-in">
              Hi!
            </h2>
            
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-12 leading-relaxed animate-fade-in">
              I write code &<br />content
            </h3>
            
            <p className="text-muted-foreground text-lg md:text-xl mb-12 leading-relaxed max-w-lg animate-fade-in">
              You can know me a little better on{" "}
              <Link to="/about" className="underline hover:text-foreground transition-all duration-300 hover:no-underline">
                about
              </Link>{" "}
              page or just drop me a message to get in touch
            </p>
            
            <div className="flex gap-6 mb-16 animate-fade-in">
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 text-lg font-medium hover:bg-foreground hover:text-background transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link to="/about">Learn More</Link>
              </Button>
              
              <Button 
                size="lg" 
                className="px-8 py-4 text-lg font-medium bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-6 animate-fade-in">
              <a href="https://medium.com/@yourusername" className="text-foreground hover:text-muted-foreground transition-all duration-300 hover:scale-110">
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-all duration-300">
                  <span className="text-sm font-medium">M</span>
                </div>
              </a>
              <a href="https://pinterest.com/yourusername" className="text-foreground hover:text-muted-foreground transition-all duration-300 hover:scale-110">
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-all duration-300">
                  <span className="text-sm font-medium">P</span>
                </div>
              </a>
              <a href="https://linkedin.com/in/yourusername" className="text-foreground hover:text-muted-foreground transition-all duration-300 hover:scale-110">
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-all duration-300">
                  <span className="text-sm font-medium">in</span>
                </div>
              </a>
              <a href="https://instagram.com/yourusername" className="text-foreground hover:text-muted-foreground transition-all duration-300 hover:scale-110">
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-all duration-300">
                  <span className="text-sm font-medium">IG</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Chat bubble in bottom right */}
      <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
        <Button
          size="icon"
          className="bg-muted hover:bg-muted/80 text-foreground rounded-lg w-12 h-12 hover:scale-110 transition-all duration-300"
          asChild
        >
          <Link to="/contact">
            <span className="text-lg">💬</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;
