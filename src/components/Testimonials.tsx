
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Professor, MIT World Peace University",
      content: "Kaustubh has shown exceptional dedication to learning and programming. His projects demonstrate strong problem-solving skills and creative thinking.",
      rating: 5,
      avatar: "RK"
    },
    {
      name: "Priya Sharma",
      role: "Fellow BCA Student",
      content: "Working with Kaustubh on group projects has been amazing. He brings fresh ideas and always helps the team deliver quality results.",
      rating: 5,
      avatar: "PS"
    },
    {
      name: "IRIS Team Lead",
      role: "MITWPU Student Organization",
      content: "Kaustubh's volunteer work with us has been outstanding. He's reliable, creative, and always goes the extra mile to help organize successful events.",
      rating: 5,
      avatar: "IT"
    },
    {
      name: "Tech Community Member",
      role: "Local Developer Meetup",
      content: "His passion for technology is infectious. Kaustubh actively participates in discussions and shares valuable insights about modern development practices.",
      rating: 5,
      avatar: "TC"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-gradient mb-6">What People Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Feedback from professors, peers, and community members I've had the pleasure to work with.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`hover-lift border-0 shadow-lg animate-fade-in-delay-${Math.min(index + 1, 3)}`}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                  <Quote className="w-6 h-6 text-primary/30" />
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-delay-3">
          <p className="text-muted-foreground">
            Want to work together? Let's create something amazing!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
