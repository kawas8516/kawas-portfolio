
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Download, ExternalLink, Github } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const education = [
    {
      degree: "Bachelor of Computer Applications",
      institution: "MIT World Peace University, Pune",
      period: "2022 - 2025",
      cgpa: "Current CGPA: 7.93 (out of 10.0)",
      description: "Developed Programming skills in C, C++, OOP, Python, HTML5, CSS, and Database Administration, PostgreSQL through coursework.",
      activities: "Developed teamwork, communication, and problem-solving abilities through projects and student clubs (STARS, Sterg, mitwpu). Volunteered at IRIS (MITWPU) and Cubing Championship (Genius Kid), Seasons Mall"
    }
  ];

  const projects = [
    {
      title: "Belleza",
      description: "Developed a platform for seamless salon bookings in Pune, allowing users to schedule appointments from home. Eliminated long waiting times and last-minute cancellations through a user-friendly interface and extensive salon network.",
      technologies: ["HTML", "CSS", "JavaScript"],
      type: "Frontend Development"
    },
    {
      title: "Carrot Cash - Eco-Conscious Grocery Shopping App",
      description: "Developed an app for sustainable grocery shopping, providing environmental impact information and rewards for eco-friendly choices. Participated in VISA Climate Tech Hackathon 2024, developing solutions that drive sustainable outcomes and enable consumers to make informed choices.",
      technologies: ["HTML", "CSS", "JavaScript"],
      type: "UI Development"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* About Me Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
            
            <Card className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-48 h-48 bg-gradient-to-br from-primary to-primary/60 rounded-full flex-shrink-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary-foreground">KA</span>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl font-semibold mb-6">Welcome to my little corner of the web!</h2>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    My passion for technology began in high school, where I crafted Ethernet cables with RJ-45 connectors. Since then, my curiosity has grown with my height too! I love exploring cloud computing, networking, AI, operating systems, IoT, and anything else that pushes the tech boundaries.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    I'm also a content creator at heart. I enjoy writing captions, emails, and all kinds of content that help connect people and share ideas. Though I occasionally draw or play games like Valorant and Minecraft, you can usually find me listening to Spotify or chatting on Discord.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                    Outside the tech world, I'm all about meeting new people and exchanging ideas. If you're into technology, software, or just want to talk about the latest trends, I'm all ears. Drop me a line, and let's connect!
                  </p>
                  
                  <Button size="lg" className="text-lg px-8 py-6">
                    <Download className="w-5 h-5 mr-2" />
                    Download CV
                  </Button>
                </div>
              </div>
            </Card>
          </section>

          {/* Education Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                        <p className="text-lg text-primary font-medium mb-2">{edu.institution}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {edu.period}
                          </div>
                        </div>
                        <p className="text-muted-foreground font-medium mb-3">{edu.cgpa}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-3">{edu.description}</p>
                    <p className="text-muted-foreground">{edu.activities}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
            
            <div className="grid md:grid-cols-1 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                  
                  <p className="text-sm text-primary font-medium">{project.type}</p>
                </Card>
              ))}
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
