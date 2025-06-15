
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
    <section className="section-padding bg-gray-50">
      <div className="max-w-4xl mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="text-black">What People Say</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Feedback from professors, peers, and community members I've had the pleasure to work with.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover-lift border shadow-sm"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-black">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                  <Quote className="w-5 h-5 text-gray-300" />
                </div>

                <p className="text-gray-600 mb-4">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-black text-black" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            Want to work together? Let's create something amazing!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
