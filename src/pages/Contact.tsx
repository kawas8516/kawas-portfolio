import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Send } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

const Contact = () => {

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Section */}
          <section className="mb-20 text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">Get In Touch</h1>
            <div className="w-24 h-1 bg-foreground mx-auto rounded-full mb-8"></div>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'd love to hear from you! Whether you have a project in mind, want to discuss technology, 
              or just want to say hello, feel free to reach out.
            </p>
          </section>

          <div className="max-w-2xl mx-auto">
            {/* Get in Touch */}
            <Card className="p-8 md:p-10 hover:shadow-lg transition-all duration-300 animate-fade-in">
              <h2 className="text-2xl lg:text-3xl font-semibold mb-8 text-foreground">Get In Touch</h2>
              
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'd love to hear from you! Whether you have a project in mind, want to discuss technology, 
                  or just want to say hello, feel free to reach out via email.
                </p>
                
                <Button 
                  size="lg"
                  onClick={() => window.location.href = 'mailto:kaustubhamandhane24@gmail.com'}
                  className="w-full h-12 text-lg bg-foreground text-background hover:bg-foreground/90 hover:scale-105 transition-all duration-300"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Email
                </Button>
              </div>
            </Card>
          </div>

          {/* Testimonials Section */}
          <Testimonials />

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
