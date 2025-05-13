
import { cn } from "@/lib/utils";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 min-h-screen flex items-center relative"
    >
      {/* Circuit pattern in background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="absolute h-full w-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path stroke="currentColor" strokeWidth="0.2" fill="none" d="M0,0 L100,0 L100,100 L0,100 Z" />
          <path stroke="currentColor" strokeWidth="0.2" fill="none" d="M0,0 L100,100" />
          <path stroke="currentColor" strokeWidth="0.2" fill="none" d="M100,0 L0,100" />
          {/* Horizontal lines */}
          {Array.from({length: 10}).map((_, i) => (
            <path 
              key={`h-${i}`} 
              stroke="currentColor" 
              strokeWidth="0.1" 
              fill="none" 
              d={`M0,${i * 10} L100,${i * 10}`} 
            />
          ))}
          {/* Vertical lines */}
          {Array.from({length: 10}).map((_, i) => (
            <path 
              key={`v-${i}`} 
              stroke="currentColor" 
              strokeWidth="0.1" 
              fill="none" 
              d={`M${i * 10},0 L${i * 10},100`} 
            />
          ))}
        </svg>
      </div>

      <div className="container z-10 relative">
        <div className="font-mono text-sm text-primary opacity-80 mb-2">
          &lt;section id="about"&gt;
        </div>
        <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4">
          About Me<span className="text-primary">_</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="space-y-6">
            <div className="enigma-card p-6 rounded-xl">
              <h3 className="text-lg font-mono text-primary mb-3 border-b border-primary/30 pb-2 inline-block">
                // PERSONAL_PROFILE
              </h3>
              <p className="text-muted-foreground mb-4">
                I'm Shubh Goyal, a software engineer and AI researcher passionate about building innovative solutions at the intersection of technology and creativity.
              </p>
              <p className="text-muted-foreground">
                With expertise in both web development and artificial intelligence, I create applications that are not only functional but also intuitive and impactful.
              </p>
            </div>
            
            <div className="enigma-card p-6 rounded-xl">
              <h3 className="text-lg font-mono text-primary mb-3 border-b border-primary/30 pb-2 inline-block">
                // TECH_PHILOSOPHY
              </h3>
              <p className="font-mono text-lg mb-3 italic">
                <span className="text-primary">"</span>In a world of abstractions, the ability to see through layers of complexity is what separates good engineers from great ones.<span className="text-primary">"</span>
              </p>
              <p className="text-muted-foreground">
                I believe in writing code that is not only efficient but also maintainable and elegant. Every project is an opportunity to create something meaningful that solves real problems.
              </p>
            </div>
          </div>
          
          <div className="enigma-card p-6 rounded-xl h-full">
            <h3 className="text-lg font-mono text-primary mb-3 border-b border-primary/30 pb-2 inline-block">
              // CORE_SKILLS
            </h3>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div>
                <h4 className="font-mono text-foreground mb-2">Development</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <span className="h-1 w-1 bg-primary rounded-full mr-2"></span>
                    React, Next.js
                  </li>
                  <li className="flex items-center">
                    <span className="h-1 w-1 bg-primary rounded-full mr-2"></span>
                    TypeScript, JavaScript
                  </li>
                  <li className="flex items-center">
                    <span className="h-1 w-1 bg-primary rounded-full mr-2"></span>
                    Node.js, Express
                  </li>
                  <li className="flex items-center">
                    <span className="h-1 w-1 bg-primary rounded-full mr-2"></span>
                    Tailwind, CSS
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-mono text-foreground mb-2">AI & ML</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <span className="h-1 w-1 bg-primary rounded-full mr-2"></span>
                    PyTorch, TensorFlow
                  </li>
                  <li className="flex items-center">
                    <span className="h-1 w-1 bg-primary rounded-full mr-2"></span>
                    Computer Vision
                  </li>
                  <li className="flex items-center">
                    <span className="h-1 w-1 bg-primary rounded-full mr-2"></span>
                    NLP, Transformers
                  </li>
                  <li className="flex items-center">
                    <span className="h-1 w-1 bg-primary rounded-full mr-2"></span>
                    Machine Learning
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-mono text-foreground mb-2">Interests</h4>
              <div className="flex flex-wrap gap-2">
                {["Open Source", "LLMs", "Web3", "System Design", "UI/UX", "Research"].map((interest) => (
                  <span 
                    key={interest}
                    className="px-2 py-1 text-xs rounded bg-primary/10 text-primary border border-primary/20"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="font-mono text-sm text-primary opacity-80 mt-12">
          &lt;/section&gt;
        </div>
      </div>
    </section>
  );
}
