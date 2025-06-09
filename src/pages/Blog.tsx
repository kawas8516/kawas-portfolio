
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-muted-foreground text-lg">Thoughts on code, content, and everything in between</p>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
          </div>
          
          <div className="text-center py-20">
            <Card className="p-12 max-w-md mx-auto">
              <h3 className="text-xl font-semibold mb-4">Coming Soon</h3>
              <p className="text-muted-foreground mb-6">
                I'm working on some exciting content. Subscribe to get notified when new posts are published!
              </p>
              <a 
                href="mailto:your.email@example.com" 
                className="text-primary hover:underline font-medium"
              >
                Drop me an email to stay updated
              </a>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
