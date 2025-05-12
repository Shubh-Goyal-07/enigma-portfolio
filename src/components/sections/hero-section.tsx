
import { Typewriter } from "@/components/typewriter";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [cipherText, setCipherText] = useState("");
  const plainText = "ENIGMA";
  
  useEffect(() => {
    const interval = setInterval(() => {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let result = "";
      for (let i = 0; i < plainText.length; i++) {
        const randomChar = chars.charAt(Math.floor(Math.random() * chars.length));
        result += Math.random() > 0.7 ? plainText[i] : randomChar;
      }
      setCipherText(result);
    }, 150);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center pt-16 overflow-hidden relative"
    >
      {/* Tech-inspired background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full border border-primary"></div>
        <div className="absolute top-40 right-20 w-60 h-60 rounded-full border border-primary"></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 rounded-full border border-primary"></div>
        
        {/* Binary, hex patterns */}
        <div className="absolute top-1/3 left-10 text-xs font-mono opacity-30 text-primary">
          {Array.from({length: 10}).map((_, i) => (
            <div key={i} className="my-2">
              {Array.from({length: 8}).map((_, j) => Math.random() > 0.5 ? '1' : '0').join('')}
            </div>
          ))}
        </div>
        <div className="absolute top-1/4 right-10 text-xs font-mono opacity-30 text-primary">
          {Array.from({length: 10}).map((_, i) => (
            <div key={i} className="my-2">
              {Array.from({length: 6}).map((_, j) => 
                Math.floor(Math.random() * 16).toString(16).toUpperCase()
              ).join('')}
            </div>
          ))}
        </div>
      </div>

      <div className="container z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <div className="mb-6 font-mono tracking-wider text-sm text-primary opacity-80">
              &lt;INITIATING_SEQUENCE/&gt;
            </div>
            
            <h1 className="font-mono text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
              <span className="font-mono text-primary tracking-widest">{cipherText}</span>
              <span className="sr-only">Enigma</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-6 text-muted-foreground font-light tracking-wider">
              AI Engineer <span className="text-primary">&</span> Full Stack Developer
            </p>
            
            <div className="px-4 py-3 border border-primary/30 bg-enigma-dark/30 backdrop-blur-sm rounded-md inline-block mb-6">
              <blockquote className="italic font-light text-lg">
                "Life is simple<span className="text-primary">_</span>"
              </blockquote>
            </div>
            
            <div className="text-lg md:text-xl font-medium h-8 font-mono">
              <Typewriter 
                texts={["Eat()", "Code()", "Sleep()", "Repeat()"]} 
                className="text-primary"
              />
            </div>
            
            <div className="mt-8">
              <a 
                href="#contact" 
                className={cn(
                  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium",
                  "bg-primary/10 text-primary hover:bg-primary/20 border border-primary/30",
                  "h-12 px-8 py-2 transition-all duration-300 group"
                )}
              >
                <span>Get In Touch</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-primary/10 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border border-primary/20 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-enigma-dark/50 mix-blend-color"></div>
                
                {/* Digital overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-enigma-dark/80"></div>
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  {Array.from({length: 20}).map((_, i) => (
                    <div 
                      key={i}
                      style={{
                        position: 'absolute',
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 10 + 5}px`,
                        height: '1px',
                        background: '#9b87f5',
                        opacity: Math.random() * 0.5 + 0.25
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
