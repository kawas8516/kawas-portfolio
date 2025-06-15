
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const WorkExperience = () => {
  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Carrot Cash Project",
      type: "Hackathon Project",
      duration: "2024",
      location: "VISA Climate Tech Hackathon",
      description: "Developed an eco-conscious grocery shopping app that provides environmental impact information and rewards sustainable choices.",
      achievements: [
        "Built complete frontend interface using HTML, CSS, and JavaScript",
        "Implemented user-friendly UI for environmental impact tracking",
        "Participated in prestigious VISA Climate Tech Hackathon 2024",
        "Focused on sustainable technology solutions"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "UI/UX Design"],
      link: null,
      current: false
    },
    {
      title: "Frontend Developer",
      company: "Belleza Platform",
      type: "Personal Project",
      duration: "2024",
      location: "Pune, Maharashtra",
      description: "Developed a comprehensive platform for seamless salon bookings in Pune, addressing the pain points of long waiting times and last-minute cancellations.",
      achievements: [
        "Created intuitive booking interface for salon appointments",
        "Developed responsive web application from scratch",
        "Implemented user-friendly design for enhanced customer experience",
        "Built extensive salon network integration features"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      link: null,
      current: false
    },
    {
      title: "Volunteer Organizer",
      company: "IRIS (MITWPU)",
      type: "Volunteer",
      duration: "2023 - Present",
      location: "MIT World Peace University",
      description: "Active volunteer in university's premier student organization, contributing to event management and community building.",
      achievements: [
        "Organized and managed multiple campus events",
        "Developed teamwork and leadership skills",
        "Enhanced communication abilities through peer interaction",
        "Contributed to campus community development"
      ],
      technologies: ["Event Management", "Leadership", "Communication"],
      link: null,
      current: true
    },
    {
      title: "Event Volunteer",
      company: "Cubing Championship",
      type: "Volunteer",
      duration: "2023",
      location: "Seasons Mall, Pune",
      description: "Volunteered at competitive cubing events organized by Genius Kid, supporting event logistics and participant coordination.",
      achievements: [
        "Assisted with event setup and coordination",
        "Managed participant registration and support",
        "Gained experience in large-scale event management",
        "Contributed to successful community events"
      ],
      technologies: ["Event Coordination", "Customer Service"],
      link: null,
      current: false
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-gradient mb-6">Work Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey through projects, hackathons, and community involvement that shaped my development skills.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div 
                key={index} 
                className={`relative animate-fade-in-delay-${Math.min(index + 1, 3)}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 gradient-bg rounded-full border-4 border-background shadow-lg hidden md:block"></div>
                
                <Card className="ml-0 md:ml-20 hover-lift border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold">{experience.title}</h3>
                          {experience.current && (
                            <Badge className="gradient-bg text-white">Current</Badge>
                          )}
                        </div>
                        <p className="text-lg text-primary font-medium mb-2">
                          {experience.company} • {experience.type}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {experience.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {experience.location}
                          </div>
                        </div>
                      </div>
                      {experience.link && (
                        <div className="flex-shrink-0">
                          <a 
                            href={experience.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            View Project
                          </a>
                        </div>
                      )}
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {experience.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-medium mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 gradient-bg rounded-full mt-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Technologies & Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
