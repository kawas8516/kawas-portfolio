
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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Enhanced Navigation */}
      <nav className="relative z-50 p-6 bg-white/80 backdrop-blur-md border-b border-border/50">
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
              className="text-foreground text-lg font-medium hover:text-primary transition-colors"
            >
              About
            </Link>
          </div>
          
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-white border border-border text-foreground placeholder-muted-foreground px-10 py-3 rounded-xl w-80 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
            />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-40 min-h-screen flex">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-70"></div>
        
        {/* Left Side - Enhanced Branding */}
        <div className="flex-1 flex items-center justify-center relative z-10">
          <div className="text-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 gradient-bg blur-xl opacity-20 rounded-2xl"></div>
              <div className="relative border-2 border-primary/20 px-12 py-8 inline-block rounded-2xl bg-white/80 backdrop-blur-sm shadow-2xl">
                <h1 className="text-gradient text-4xl md:text-5xl font-bold tracking-wider">
                  KAWAS | X
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Enhanced Content */}
        <div className="flex-1 flex items-center justify-center relative z-10">
          <div className="text-center px-8 max-w-2xl animate-fade-in-delay-1">
            <h2 className="text-6xl md:text-8xl font-light text-foreground mb-8 leading-tight">
              Hi!
            </h2>
            
            <h3 className="text-3xl md:text-5xl font-light text-foreground mb-8 leading-relaxed">
              I write code &<br />
              <span className="text-gradient">content</span>
            </h3>
            
            <p className="text-muted-foreground text-xl mb-12 leading-relaxed max-w-lg mx-auto">
              You can know me a little better on{" "}
              <Link 
                to="/about" 
                className="text-primary hover:text-primary/80 underline underline-offset-4 decoration-2 transition-colors"
              >
                about
              </Link>{" "}
              page or just drop an email to get upcoming blogs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="gradient-bg hover:opacity-90 transition-opacity px-8 py-4 text-lg shadow-lg"
                asChild
              >
                <Link to="/about">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 text-lg border-2 hover:bg-primary/5 transition-colors"
                asChild
              >
                <a href="mailto:kaustubhamandhane24@gmail.com">
                  Get In Touch
                </a>
              </Button>
            </div>
            
            {/* Enhanced Social Icons */}
            <div className="flex justify-center gap-4">
              {[
                { name: "M", href: "https://medium.com/@yourusername", color: "bg-green-500" },
                { name: "P", href: "https://pinterest.com/yourusername", color: "bg-red-500" },
                { name: "in", href: "https://linkedin.com/in/yourusername", color: "bg-blue-600" },
                { name: "IG", href: "https://instagram.com/yourusername", color: "bg-pink-500" }
              ].map((social, index) => (
                <a 
                  key={social.name}
                  href={social.href} 
                  className={`w-14 h-14 ${social.color} rounded-xl flex items-center justify-center text-white font-semibold hover:scale-110 transition-transform shadow-lg hover:shadow-xl`}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="section-padding bg-white relative z-30">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-gradient mb-6">What I Do</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating digital experiences that make a difference
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`text-center group hover-lift animate-fade-in-delay-${index + 1}`}
              >
                <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Chat Bubble */}
      <div className="fixed bottom-8 right-8 z-50 animate-fade-in-delay-3">
        <Button
          size="icon"
          className="gradient-bg hover:opacity-90 transition-all rounded-full w-16 h-16 shadow-2xl hover:scale-110"
          asChild
        >
          <a href="mailto:kaustubhamandhane24@gmail.com">
            <span className="text-2xl">💬</span>
          </a>
        </Button>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
