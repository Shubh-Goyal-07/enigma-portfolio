
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export function Header() {
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  const sections = [
    { id: "about", label: "About Me" },
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b h-16 flex items-center",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border/50"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <div className="font-display font-bold text-2xl text-primary">
          <span className="dark:text-white">Enigma</span>
          <span className="text-primary">.</span>
        </div>

        <nav className="hidden md:flex items-center space-x-1">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                activeSection === section.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {section.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center md:hidden">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
