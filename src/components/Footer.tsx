
import { Github, Linkedin, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/kawas8516", label: "GitHub" },
    { icon: FileText, href: "https://medium.com/@yourusername", label: "Blog" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/kawas-nandan/", label: "LinkedIn" },
    { 
      icon: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.46 6c-.85.38-1.78.64-2.75.76 1-.6 1.76-1.55 2.12-2.68-.93.55-1.96.95-3.06 1.17-.88-.94-2.13-1.53-3.51-1.53-2.66 0-4.81 2.16-4.81 4.81 0 .38.04.75.13 1.1-4-.2-7.57-2.12-9.95-5.04-.42.72-.66 1.55-.66 2.44 0 1.67.85 3.14 2.14 4-.79-.02-1.53-.24-2.18-.6v.06c0 2.33 1.66 4.28 3.86 4.72-.4.11-.83.17-1.27.17-.31 0-.62-.03-.92-.08.62 1.94 2.42 3.35 4.55 3.39-1.67 1.31-3.77 2.09-6.05 2.09-.39 0-.78-.02-1.17-.07 2.18 1.4 4.77 2.21 7.56 2.21 9.05 0 14-7.5 14-14 0-.21 0-.42-.01-.63.96-.69 1.79-1.56 2.45-2.55z"/>
        </svg>
      ), 
      href: "https://leetcode.com/u/kawas8516/", 
      label: "LeetCode" 
    }
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-muted-foreground" />
            <a 
              href="mailto:kaustubhamandhane24@gmail.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              kaustubhamandhane24@gmail.com
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="ghost"
                size="sm"
                asChild
                className="hover:bg-primary/10"
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <link.icon />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
