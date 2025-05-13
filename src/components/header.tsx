
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    { id: "about", label: "About" },
    { id: "resume", label: "Resume" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 10);

      // Update active section based on scroll position
      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));

      const currentSection = sectionElements.find((section) => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom > 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/50 h-16"
          : "bg-transparent border-transparent h-20"
      )}
    >
      <div className="container h-full flex items-center justify-between">
        <div className="font-mono font-bold text-2xl flex items-center">
          <img src="https://github.com/Shubh-Goyal-07/enigma-portfolio/blob/main/src/data/logo.png?raw=true" alt="Enigma Logo" className="h-12 w-12 mr-2" />
          <span className="dark:text-white">Enigma</span>
          <span className="text-primary">_</span>
        </div>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-1">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-mono transition-colors relative group",
                activeSection === section.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {activeSection === section.id && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-1/2 bg-primary"></span>
              )}
              <span className="relative z-10">{section.label}</span>
            </a>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden gap-2">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="rounded-full"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-0 top-[64px] bg-background/95 backdrop-blur-lg z-40 md:hidden transition-transform duration-300",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="container py-8 flex flex-col items-center space-y-4">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "px-4 py-2 rounded-md text-lg font-mono transition-colors w-full text-center",
                activeSection === section.id
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
              )}
            >
              {section.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
