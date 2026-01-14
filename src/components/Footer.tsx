import { Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "#", // TODO: Replace with your GitHub profile URL
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "#", // TODO: Replace with your LinkedIn profile URL
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "#", // TODO: Replace with your Twitter/X profile URL
    icon: Twitter,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} John Doe. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
