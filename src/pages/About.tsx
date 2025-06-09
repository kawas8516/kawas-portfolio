
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Download, ExternalLink, Github } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const education = [
    {
      degree: "Master of Computer Science",
      institution: "University of Technology",
      period: "2020 - 2022",
      location: "New York, NY",
      description: "Specialized in Software Engineering and Machine Learning"
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "State University",
      period: "2016 - 2020",
      location: "California, CA",
      description: "Graduated Magna Cum Laude with focus on Web Development"
    }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack web application built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe API"],
      liveUrl: "https://project-demo.com",
      githubUrl: "https://github.com/yourusername/ecommerce-platform"
    },
    {
      title: "Task Management App",
      description: "Mobile-first task management application with real-time collaboration features and offline support.",
      technologies: ["React Native", "Firebase", "Redux", "PWA"],
      liveUrl: "https://taskapp-demo.com",
      githubUrl: "https://github.com/yourusername/task-manager"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for analyzing business metrics with real-time data processing and custom chart components.",
      technologies: ["Vue.js", "D3.js", "Python", "FastAPI"],
      liveUrl: "https://dashboard-demo.com",
      githubUrl: "https://github.com/yourusername/data-dashboard"
    },
    {
      title: "AI Content Generator",
      description: "Machine learning-powered content generation tool that helps writers create engaging articles and blog posts.",
      technologies: ["Python", "TensorFlow", "Flask", "OpenAI API"],
      liveUrl: "https://ai-content.com",
      githubUrl: "https://github.com/yourusername/ai-content-generator"
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
                  <span className="text-4xl font-bold text-primary-foreground">YN</span>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    I'm a passionate full-stack developer with over 4 years of experience creating 
                    digital solutions that make a difference. I love turning complex problems into 
                    simple, beautiful, and intuitive designs. When I'm not coding, you'll find me 
                    writing technical articles, contributing to open-source projects, or exploring 
                    the latest technologies.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                    My expertise spans across modern web technologies, cloud platforms, and mobile 
                    development. I believe in writing clean, maintainable code and creating 
                    exceptional user experiences.
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
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                      <p className="text-lg text-primary font-medium mb-2">{edu.institution}</p>
                      <p className="text-muted-foreground mb-3">{edu.description}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
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
