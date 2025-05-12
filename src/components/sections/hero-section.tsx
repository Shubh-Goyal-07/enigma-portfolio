
import { Typewriter } from "@/components/typewriter";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center pt-16"
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              Hi, I'm <span className="text-primary">Enigma</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-muted-foreground">
              AI Engineer & Full Stack Developer
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic mb-6">
              "Life is simple"
            </blockquote>
            <div className="text-lg md:text-xl font-medium h-8">
              <Typewriter 
                texts={["Eat", "Code", "Sleep", "Repeat"]} 
                className="text-primary"
              />
            </div>
            <div className="mt-8">
              <a 
                href="#contact" 
                className={cn(
                  "inline-flex items-center justify-center rounded-md text-sm font-medium",
                  "bg-primary text-primary-foreground hover:bg-primary/90",
                  "h-10 px-8 py-2 transition-colors"
                )}
              >
                Get In Touch
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center animate-bounce-slow">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
                alt="Profile" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
