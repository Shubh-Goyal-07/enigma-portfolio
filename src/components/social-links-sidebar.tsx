
import { Github, Instagram, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

export function SocialLinksSidebar() {
  return (
    <div className="fixed left-6 bottom-0 z-20 hidden flex-col items-center gap-6 md:flex">
      <a
        href="https://github.com/Shubh-Goyal-07"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors duration-300"
        aria-label="GitHub"
      >
        <Github className="h-6 w-6" />
      </a>
      <a
        href="https://www.linkedin.com/in/shubh-goyal-78a6a6222/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors duration-300"
        aria-label="LinkedIn"
      >
        <Linkedin className="h-6 w-6" />
      </a>
      <a
        href="https://www.instagram.com/5hu6h_goya1/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors duration-300"
        aria-label="Instagram"
      >
        <Instagram className="h-6 w-6" />
      </a>
      <div className="h-60 w-px bg-primary/50 mt-2"></div>
    </div>
  );
}
