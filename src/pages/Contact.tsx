import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
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

          <div className="grid lg:grid-cols-2 gap-16">
            
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

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in">
              <Card className="p-8 md:p-10 hover:shadow-lg transition-all duration-300">
                <h2 className="text-2xl lg:text-3xl font-semibold mb-8 text-foreground">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground">kaustubhamandhane24@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <p className="text-muted-foreground">Available upon request</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Location</h3>
                      <p className="text-muted-foreground">Pune, Maharashtra, India</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Response Time */}
              <Card className="p-8 md:p-10 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Quick Response</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I typically respond to messages within 24 hours. For urgent inquiries, 
                  feel free to mention it in your message subject line.
                </p>
              </Card>
            </div>
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
