
import { cn } from "@/lib/utils";

export function EmailSidebar() {
  return (
    <div className="fixed right-6 bottom-0 z-20 hidden md:block">
      <div className="flex flex-col items-center gap-6">
        <span 
          className="text-muted-foreground hover:text-primary transition-colors duration-300 vertical-text"
        >
          SHUBH GOYAL - ENIGMA
        </span>
        <div className="h-64 w-px bg-primary/50 mt-2"></div>
      </div>
    </div>
  );
}
