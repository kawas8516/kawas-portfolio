
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Download } from "lucide-react";
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
    },
    {
      title: "C++ System Utility Tool",
      description: "Developed a comprehensive command-line system utility tool for Windows with real-time system monitoring and file management capabilities. The tool enables users to monitor CPU and memory usage, list active processes, search for files, and perform file operations including copying and deletion. Features an interactive menu system designed for beginners and leverages Windows API functions, demonstrating advanced knowledge of C++ and Windows system programming.",
      technologies: ["C++", "Windows API", "MinGW"],
      type: "System Programming"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* About Me Section */}
          <section className="mb-24 animate-fade-in">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">About Me</h1>
              <div className="w-24 h-1 bg-foreground mx-auto rounded-full"></div>
            </div>
            
            <Card className="p-8 md:p-12 lg:p-16 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="w-48 h-48 lg:w-56 lg:h-56 bg-gradient-to-br from-foreground to-foreground/80 rounded-full flex-shrink-0 flex items-center justify-center hover:scale-105 transition-all duration-300">
                  <span className="text-4xl lg:text-5xl font-bold text-background">KA</span>
                </div>
                
                <div className="flex-1 text-center lg:text-left space-y-6">
                  <h2 className="text-2xl lg:text-3xl font-semibold text-foreground">Welcome to my little corner of the web!</h2>
                  
                  <div className="space-y-6 text-muted-foreground">
                    <p className="text-lg leading-relaxed">
                      My passion for technology began in high school, where I crafted Ethernet cables with RJ-45 connectors. Since then, my curiosity has grown with my height too! I love exploring cloud computing, networking, AI, operating systems, IoT, and anything else that pushes the tech boundaries.
                    </p>
                    
                    <p className="text-lg leading-relaxed">
                      I'm also a content creator at heart. I enjoy writing captions, emails, and all kinds of content that help connect people and share ideas. Though I occasionally draw or play games like Valorant and Minecraft, you can usually find me listening to Spotify or chatting on Discord.
                    </p>
                    
                    <p className="text-lg leading-relaxed">
                      Outside the tech world, I'm all about meeting new people and exchanging ideas. If you're into technology, software, or just want to talk about the latest trends, I'm all ears. Drop me a line, and let's connect!
                    </p>
                  </div>
                  
                  <Button 
                    size="lg" 
                    className="text-lg px-8 py-6 bg-foreground text-background hover:bg-foreground/90 hover:scale-105 transition-all duration-300"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download CV
                  </Button>
                </div>
              </div>
            </Card>
          </section>

          {/* Education Section */}
          <section className="mb-24 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-foreground">Education</h2>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <Card key={index} className="p-8 md:p-10 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <div className="space-y-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      <div className="flex-1 space-y-4">
                        <h3 className="text-xl lg:text-2xl font-semibold text-foreground">{edu.degree}</h3>
                        <p className="text-lg lg:text-xl text-primary font-medium">{edu.institution}</p>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm lg:text-base">{edu.period}</span>
                        </div>
                        <p className="text-muted-foreground font-medium text-base lg:text-lg">{edu.cgpa}</p>
                      </div>
                    </div>
                    <div className="space-y-4 text-muted-foreground">
                      <p className="text-base lg:text-lg leading-relaxed">{edu.description}</p>
                      <p className="text-base lg:text-lg leading-relaxed">{edu.activities}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-24 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-foreground">Projects</h2>
            
            <div className="grid gap-8 lg:gap-10">
              {projects.map((project, index) => (
                <Card key={index} className="p-8 md:p-10 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <div className="space-y-6">
                    <h3 className="text-xl lg:text-2xl font-semibold text-foreground">{project.title}</h3>
                    <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-sm px-3 py-1">{tech}</Badge>
                      ))}
                    </div>
                    
                    <p className="text-sm lg:text-base text-primary font-medium">{project.type}</p>
                  </div>
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
