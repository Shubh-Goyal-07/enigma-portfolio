
import { cn } from "@/lib/utils";

export function EmailSidebar() {
  return (
    <div className="fixed right-6 bottom-0 z-20 hidden md:block">
      <div className="flex flex-col items-center gap-6">
        <a 
          href="mailto:hello@enigma.dev"
          className="text-muted-foreground hover:text-primary transition-colors duration-300 vertical-text"
          aria-label="Email"
        >
          hello@enigma.dev
        </a>
        <div className="h-16 w-px bg-primary/50"></div>
      </div>
    </div>
  );
}
