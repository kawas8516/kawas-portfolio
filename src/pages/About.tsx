
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Download, Github, Linkedin, Mail } from "lucide-react";
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
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20">
        {/* Clean Hero Section */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto container-padding">
            <div className="text-center mb-12">
              <h1 className="text-black mb-6">About Me</h1>
              <div className="w-16 h-1 bg-black mx-auto mb-6"></div>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Passionate developer, curious learner, and tech enthusiast crafting digital experiences 
                that make a difference.
              </p>
            </div>
            
            <Card className="hover-lift border shadow-sm">
              <div className="p-8">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="w-48 h-48 bg-black rounded-lg flex-shrink-0 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">KA</span>
                  </div>
                  
                  <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-black mb-6">Welcome to my little corner of the web!</h2>
                    
                    <div className="space-y-4 text-gray-600 leading-relaxed">
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
                    
                    <div className="flex flex-wrap gap-4 mt-8">
                      <Button className="bg-black hover:bg-gray-800 text-white">
                        <Download className="w-4 h-4 mr-2" />
                        Download CV
                      </Button>
                      <div className="flex items-center gap-2">
                        <a href="https://github.com/yourusername" className="p-2 rounded bg-gray-100 hover:bg-gray-200 transition-colors">
                          <Github className="w-4 h-4" />
                        </a>
                        <a href="https://linkedin.com/in/yourusername" className="p-2 rounded bg-gray-100 hover:bg-gray-200 transition-colors">
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a href="mailto:kaustubhamandhane24@gmail.com" className="p-2 rounded bg-gray-100 hover:bg-gray-200 transition-colors">
                          <Mail className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Education Section */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-4xl mx-auto container-padding">
            <div className="text-center mb-12">
              <h2 className="text-black">Education</h2>
              <p className="text-gray-600 text-lg">
                Academic foundation building my technical expertise
              </p>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="hover-lift border shadow-sm">
                  <div className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-black mb-2">{edu.degree}</h3>
                        <p className="text-lg font-medium mb-2">{edu.institution}</p>
                        <div className="flex flex-col sm:flex-row gap-4 text-gray-600 mb-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {edu.period}
                          </div>
                          <div className="font-medium">{edu.cgpa}</div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3 text-gray-600">
                      <p>{edu.description}</p>
                      <p>{edu.activities}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <WorkExperience />

        {/* Projects Section */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto container-padding">
            <div className="text-center mb-12">
              <h2 className="text-black">Featured Projects</h2>
              <p className="text-gray-600 text-lg">
                Showcasing my development journey through real-world applications
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="hover-lift border shadow-sm">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-black flex-1">{project.title}</h3>
                      <div className="flex gap-2 ml-4">
                        <a 
                          href="#" 
                          className="p-2 rounded bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-gray-100 text-gray-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <p className="text-sm font-medium text-black">{project.type}</p>
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
