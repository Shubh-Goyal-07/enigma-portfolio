
import { Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export function ThemeToggle() {
  useEffect(() => {
    // Always set the theme to dark
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  return (
    <Button variant="ghost" size="icon" className="rounded-full">
      <Moon className="h-5 w-5" />
      <span className="sr-only">Dark theme</span>
    </Button>
  );
}
