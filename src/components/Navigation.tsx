
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold tracking-tight hover:scale-105 transition-all duration-300">
            Portfolio
          </Link>
          
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 ${
                location.pathname === "/" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 ${
                location.pathname === "/about" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 ${
                location.pathname === "/contact" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Contact
            </Link>
            <Button asChild size="sm" className="hover:scale-105 transition-all duration-300">
              <a href="mailto:kaustubhamandhane24@gmail.com">Quick Email</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
