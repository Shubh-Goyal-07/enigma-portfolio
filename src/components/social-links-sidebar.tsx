
import { Github, Instagram, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

export function SocialLinksSidebar() {
  return (
    <div className="fixed left-6 bottom-0 z-20 hidden flex-col items-center gap-6 md:flex">
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors duration-300"
        aria-label="GitHub"
      >
        <Github className="h-5 w-5" />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors duration-300"
        aria-label="LinkedIn"
      >
        <Linkedin className="h-5 w-5" />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors duration-300"
        aria-label="Instagram"
      >
        <Instagram className="h-5 w-5" />
      </a>
      <div className="h-24 w-px bg-primary/50 mt-2"></div>
    </div>
  );
}
