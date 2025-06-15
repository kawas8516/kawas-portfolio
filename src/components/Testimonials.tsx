
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Project Manager at TechCorp",
      content: "Working with Kaustubh was a fantastic experience. His attention to detail and technical expertise helped us deliver our project ahead of schedule.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      content: "Kaustubh's ability to understand complex requirements and translate them into clean, functional code is impressive. Highly recommend!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Design Lead",
      content: "Great collaboration skills and always open to feedback. The final product exceeded our expectations in both functionality and design.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <section className="mt-24 animate-fade-in">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">What People Say</h2>
        <div className="w-24 h-1 bg-foreground mx-auto rounded-full"></div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="p-6 md:p-8 hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="space-y-4">
              <div className="flex gap-1">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="pt-4 border-t border-border">
                <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
