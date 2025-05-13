
import { cn } from "@/lib/utils";
import { Code, Database, Globe, Terminal, Cpu, Wrench } from "lucide-react";

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

function SkillCategory({ title, skills, icon }: SkillCategoryProps) {
  return (
    <div className="group enigma-card rounded-lg p-6 border-t border-primary/20 bg-gradient-to-br from-enigma-dark/70 to-enigma-dark">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-primary p-2 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-mono tracking-wider">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-md bg-primary/5 border border-primary/10 text-sm font-mono hover:bg-primary/10 transition-colors duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

interface AchievementProps {
  title: string;
  description: string;
  index: number;
}

function Achievement({ title, description, index }: AchievementProps) {
  return (
    <div className="enigma-card rounded-lg p-6 hover:border-primary/30 relative overflow-hidden group">
      {/* Terminal-like header */}
      <div className="font-mono text-xs mb-3 opacity-80">
        [achievement_<span className="text-primary">{index}</span>]$ <span className="animate-pulse">_</span>
      </div>
      
      <h3 className="text-lg font-mono tracking-wide mb-2 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-muted-foreground font-light">
        {description}
      </p>
      
      {/* Technical pattern background */}
      <div className="absolute -bottom-2 -right-2 text-primary/5 font-mono text-6xl pointer-events-none">
        {index}
      </div>
    </div>
  );
}

export function ResumeSection() {
  const skills = {
    lang: ["Python", "JavaScript", "TypeScript", "C++"],
    web: ["React", "TypeScript", "NextJS", "NodeJS", "Express", "MongoDB", "SQL"],
    ai: ["PyTorch", "TensorFlow", "HUggingFace", "Scikit-learn"],
    tools: ["Git/GitHub", "Docker", "CI/CD", "AWS", "Figma"]
  };

  const achievements = [
    {
      title: "AI Research Publication",
      description: "Published research paper on advanced neural network architectures in top AI conference."
    },
    {
      title: "Open Source Contribution",
      description: "Active contributor to major open-source AI libraries with 10+ merged PRs."
    },
    {
      title: "Hackathon Winner",
      description: "First place at International AI Hackathon for innovative solution to real-world problems."
    },
    {
      title: "Technical Speaker",
      description: "Regular speaker at tech conferences on AI and full stack development topics."
    }
  ];

  return (
    <section
      id="resume"
      className="py-20 min-h-screen flex items-center relative"
    >
      {/* Technical background elements */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({length: 20}).map((_, i) => (
            <div 
              key={i} 
              className="absolute bg-primary/30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() > 0.8 ? 100 : Math.random() * 300}px`,
                height: '1px',
              }}
            />
          ))}
          {Array.from({length: 20}).map((_, i) => (
            <div 
              key={i} 
              className="absolute bg-primary/20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                height: `${Math.random() > 0.8 ? 100 : Math.random() * 300}px`,
                width: '1px',
              }}
            />
          ))}
        </div>
      </div>

      <div className="container z-10">
        <div className="mb-12">
          <div className="font-mono text-sm text-primary opacity-80 mb-2">
            &lt;section id="qualifications"&gt;
          </div>
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-2">
            Resume<span className="text-primary">_</span>
          </h2>
          <div className="font-mono text-xs text-muted-foreground mb-12">
            Technical expertise and accomplishments
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-mono mb-8 border-b border-primary/10 pb-2">
            Tech<span className="text-primary">.</span>Stack()
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkillCategory 
              title="Languages" 
              skills={skills.lang} 
              icon={<Database className="h-5 w-5" />}
            />
            <SkillCategory 
              title="Web Development" 
              skills={skills.web} 
              icon={<Globe className="h-5 w-5" />}
            />
            <SkillCategory 
              title="AI & Machine Learning" 
              skills={skills.ai} 
              icon={<Cpu className="h-5 w-5" />}
            />
            <SkillCategory 
              title="Tools & Platforms" 
              skills={skills.tools} 
              icon={<Wrench className="h-5 w-5" />}
            />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-mono mb-8 border-b border-primary/10 pb-2">
            Achievements<span className="text-primary">.</span>log()
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Achievement
                key={index}
                index={index + 1}
                title={achievement.title}
                description={achievement.description}
              />
            ))}
          </div>
        </div>
        
        <div className="font-mono text-sm text-primary opacity-80 mt-12">
          &lt;/section&gt;
        </div>
      </div>
    </section>
  );
}
