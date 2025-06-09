
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowDown, Code, Coffee, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center">
                <Code className="w-16 h-16 text-primary-foreground" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Hi!
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-muted-foreground">
              I write code & content
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Full-Stack Developer | Problem Solver | Tech Enthusiast
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link to="/about">Know Me Better</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                <a href="mailto:your.email@example.com">Drop an Email</a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToNext}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary"
          >
            <span className="text-sm">Scroll for more</span>
            <ArrowDown className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Quick Preview Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">What I Do</h3>
            <p className="text-muted-foreground text-lg">Building digital experiences with passion and precision</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Code className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h4 className="text-xl font-semibold mb-3">Development</h4>
              <p className="text-muted-foreground">Creating robust and scalable applications with modern technologies</p>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Coffee className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h4 className="text-xl font-semibold mb-3">Content</h4>
              <p className="text-muted-foreground">Writing technical articles and sharing knowledge with the community</p>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Heart className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h4 className="text-xl font-semibold mb-3">Problem Solving</h4>
              <p className="text-muted-foreground">Tackling complex challenges with creative and efficient solutions</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
