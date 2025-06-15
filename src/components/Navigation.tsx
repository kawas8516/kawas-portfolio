
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold tracking-tight text-gradient">
            Portfolio
          </Link>
          
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/about" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              About
            </Link>
            <Button asChild size="sm" className="rounded-xl hover-lift">
              <a href="mailto:kaustubhamandhane24@gmail.com">Contact</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
