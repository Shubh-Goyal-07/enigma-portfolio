
import { Typewriter } from "@/components/typewriter";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [cipherText, setCipherText] = useState("");
  const [animationComplete, setAnimationComplete] = useState(false);
  const [displayText, setDisplayText] = useState("SHUBH GOYAL");
  const plainText = "SHUBH GOYAL";
  const alternateName = "SHUBH GOYAL";
  
  // Initial cipher animation
  useEffect(() => {
    if (animationComplete) {
      setCipherText(plainText);
      return;
    }

    const startTime = Date.now();
    const animationDuration = 5000; // 5 seconds of randomization before settling

    const interval = setInterval(() => {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let result = "";
      
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / animationDuration, 1);
      
      for (let i = 0; i < plainText.length; i++) {
        // As progress increases, increase chance of showing correct letter
        const showCorrectChar = Math.random() < progress * 1.5 || (progress > 0.8 && Math.random() > 0.2);
        result += showCorrectChar ? plainText[i] : chars.charAt(Math.floor(Math.random() * chars.length));
      }
      
      setCipherText(result);
      
      // Check if animation should complete
      if (progress >= 1 && result === plainText) {
        clearInterval(interval);
        setAnimationComplete(true);
      }
    }, 150);
    
    return () => clearInterval(interval);
  }, [animationComplete]);

  // Text flip animation between ENIGMA and SHUBH GOYAL
  useEffect(() => {
    if (!animationComplete) return;
    
    const flipInterval = setInterval(() => {
      setDisplayText(current => current === plainText ? alternateName : plainText);
    }, 5000); // Flip every 5 seconds
    
    return () => clearInterval(flipInterval);
  }, [animationComplete]);
  
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
              <span className="font-mono text-primary tracking-widest">{!animationComplete ? cipherText : displayText}</span>
              <span className="sr-only">Enigma</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-6 text-muted-foreground font-light tracking-wider">
              AI Engineer <span className="text-primary">&</span> Full Stack Developer
            </p>
            
            <div className="px-4 py-3 border border-primary/30 bg-enigma-dark/30 backdrop-blur-sm rounded-md inline-block mb-6">
              <blockquote className="italic font-light text-lg">
                "In the symphony of chaos, I find patterns; in the noise, I decode signals."
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
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-primary/10 blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden border border-primary/20 shadow-xl perspective">
                <div className="w-full h-full transition-all duration-700 transform preserve-3d group-hover:rotate-y-180">
                  {/* Front side - Logo */}
                  <div className="absolute w-full h-full backface-hidden">
                    <img 
                      src="src/data/logo.png"
                      alt="Logo" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-enigma-dark/50 mix-blend-color"></div>
                    <div className="absolute inset-0 bg-gradient-to-b"></div>
                  </div>
                  
                  {/* Back side - Profile Photo (shows on hover) */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180">
                    <img 
                      src="src/data/me2.jpg"
                      alt="Profile Photo" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-enigma-dark/80"></div>
                  </div>
                </div>
                
                {/* Digital overlay effect */}
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
