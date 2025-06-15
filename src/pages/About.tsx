
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Download, Github, Linkedin, Mail, Instagram } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Testimonials from "@/components/Testimonials";
import WorkExperience from "@/components/WorkExperience";

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
      type: "Frontend Development",
      github: "https://github.com/yourusername/belleza",
      demo: null
    },
    {
      title: "Carrot Cash - Eco-Conscious Grocery Shopping App",
      description: "Developed an app for sustainable grocery shopping, providing environmental impact information and rewards for eco-friendly choices. Participated in VISA Climate Tech Hackathon 2024, developing solutions that drive sustainable outcomes and enable consumers to make informed choices.",
      technologies: ["HTML", "CSS", "JavaScript"],
      type: "UI Development",
      github: "https://github.com/yourusername/carrot-cash",
      demo: null
    }
  ];

  const skills = [
    { name: "JavaScript", level: 85 },
    { name: "HTML5 & CSS3", level: 90 },
    { name: "Python", level: 75 },
    { name: "C/C++", level: 80 },
    { name: "PostgreSQL", level: 70 },
    { name: "Git & GitHub", level: 80 },
    { name: "Responsive Design", level: 85 },
    { name: "Problem Solving", level: 90 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-gradient mb-8">About Me</h1>
              <div className="w-24 h-2 gradient-bg mx-auto rounded-full mb-8"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Passionate developer, curious learner, and tech enthusiast crafting digital experiences 
                that make a difference.
              </p>
            </div>
            
            <Card className="hover-lift border-0 shadow-xl animate-fade-in-delay-1">
              <div className="p-8 md:p-12">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                  <div className="w-64 h-64 gradient-bg rounded-2xl flex-shrink-0 flex items-center justify-center shadow-2xl">
                    <span className="text-6xl font-bold text-white">KA</span>
                  </div>
                  
                  <div className="flex-1 text-center lg:text-left">
                    <h2 className="mb-8">Welcome to my little corner of the web!</h2>
                    
                    <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                      <p>
                        My passion for technology began in high school, where I crafted Ethernet cables with RJ-45 connectors. 
                        Since then, my curiosity has grown with my height too! I love exploring cloud computing, networking, 
                        AI, operating systems, IoT, and anything else that pushes the tech boundaries.
                      </p>
                      
                      <p>
                        I'm also a content creator at heart. I enjoy writing captions, emails, and all kinds of content 
                        that help connect people and share ideas. Though I occasionally draw or play games like Valorant 
                        and Minecraft, you can usually find me listening to Spotify or chatting on Discord.
                      </p>
                      
                      <p>
                        Outside the tech world, I'm all about meeting new people and exchanging ideas. If you're into 
                        technology, software, or just want to talk about the latest trends, I'm all ears!
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mt-10">
                      <Button size="lg" className="gradient-bg hover:opacity-90 transition-opacity">
                        <Download className="w-5 h-5 mr-2" />
                        Download CV
                      </Button>
                      <div className="flex items-center gap-3">
                        <a href="https://github.com/yourusername" className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                          <Github className="w-5 h-5" />
                        </a>
                        <a href="https://linkedin.com/in/yourusername" className="p-3 rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors">
                          <Linkedin className="w-5 h-5 text-blue-600" />
                        </a>
                        <a href="mailto:kaustubhamandhane24@gmail.com" className="p-3 rounded-lg bg-red-100 hover:bg-red-200 transition-colors">
                          <Mail className="w-5 h-5 text-red-600" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section-padding bg-white">
          <div className="max-w-4xl mx-auto container-padding">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-gradient mb-6">Skills & Expertise</h2>
              <p className="text-xl text-muted-foreground">
                Technologies and skills I've developed through coursework and projects
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={skill.name} className={`animate-fade-in-delay-${Math.min(index % 2 + 1, 3)}`}>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="gradient-bg h-2.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="section-padding bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="max-w-4xl mx-auto container-padding">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-gradient mb-6">Education</h2>
              <p className="text-xl text-muted-foreground">
                Academic foundation building my technical expertise
              </p>
            </div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <Card key={index} className="hover-lift border-0 shadow-lg animate-fade-in-delay-1">
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      <div className="flex-1">
                        <h3 className="mb-4">{edu.degree}</h3>
                        <p className="text-xl text-primary font-medium mb-4">{edu.institution}</p>
                        <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground mb-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {edu.period}
                          </div>
                          <div className="font-medium text-foreground">{edu.cgpa}</div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>{edu.description}</p>
                      <p>{edu.activities}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Work Experience Timeline */}
        <WorkExperience />

        {/* Projects Section */}
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-gradient mb-6">Featured Projects</h2>
              <p className="text-xl text-muted-foreground">
                Showcasing my development journey through real-world applications
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className={`hover-lift border-0 shadow-lg animate-fade-in-delay-${index + 1}`}>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="flex-1">{project.title}</h3>
                      <div className="flex gap-2 ml-4">
                        {project.github && (
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <p className="text-sm font-medium text-accent">{project.type}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* Contact Form */}
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
};

export default About;
