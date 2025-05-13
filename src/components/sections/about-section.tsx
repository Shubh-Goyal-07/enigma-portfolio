
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
              I'm Shubh Goyal, but I prefer to go by <span className="text-primary">Enigma</span>. As for my qualification, I hold a <span className="text-primary">B.Tech in Computer Science from IIT Jodhpur</span>.
              </p>
              <p className="text-muted-foreground mb-4">
              Passionate about building innovative solutions at the intersection of technology and creativity, I am deeply interested in <span className="text-primary">artificial intelligence</span> and <span className="text-primary">web development.</span> 
              </p>
              <p className="text-muted-foreground mb-4">
              <span className="text-primary">Leadership</span> and <span className="text-primary">entrepreneurship</span> are qualities I've developed over time, shaping my approach to problem-solving and collaboration.
              </p>
            </div>
            
            <div className="enigma-card p-6 rounded-xl">
              <h3 className="text-lg font-mono text-primary mb-3 border-b border-primary/30 pb-2 inline-block">
                // LIFE_PHILOSOPHY
              </h3>
              <p className="font-mono text-lg mb-3 italic">
                <span className="text-primary">"</span>There is always a brighter star to chase...<span className="text-primary">"</span>
              </p>
              <p className="text-muted-foreground">
              <span className="text-primary">Cats</span> are love, <span className="text-primary">FIFA</span> is necessary, reading <span className="text-primary">books</span> inevitable, and writing <span className="text-primary">poems</span> my luck.
              </p>
              <p className="text-muted-foreground">
                These joys keep me grounded while I aim for bigger dreams.
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
                    TypeScript, JavaScript
                  </li>
                  <li className="flex items-center">
                    <span className="h-1 w-1 bg-primary rounded-full mr-2"></span>
                    React, Next.js
                  </li>
                  <li className="flex items-center">
                    <span className="h-1 w-1 bg-primary rounded-full mr-2"></span>
                    Node.js, Express
                  </li>
                  <li className="flex items-center">
                    <span className="h-1 w-1 bg-primary rounded-full mr-2"></span>
                    Django
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
                    Hugging Face
                  </li>
                  <li className="flex items-center">
                    <span className="h-1 w-1 bg-primary rounded-full mr-2"></span>
                    Computer Vision
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-mono text-foreground mb-2">Tools and Platforms</h4>
              <div className="flex flex-wrap gap-2">
                {["Git/GitHub", "Docker", "AWS", "LaTeX"].map((interest) => (
                  <span 
                    key={interest}
                    className="px-2 py-1 text-xs rounded bg-primary/10 text-primary border border-primary/20"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-mono text-foreground mb-2">Interests</h4>
              <div className="flex flex-wrap gap-2">
                {["Research", "System Design", "Computer Vision", "Core Deep Learning"].map((interest) => (
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
