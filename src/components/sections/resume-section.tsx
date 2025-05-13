
import { cn } from "@/lib/utils";
import { Code, Terminal, Award, Briefcase } from "lucide-react";

interface ExperienceProps {
  company: string;
  role: string;
  duration: string;
  description: string[];
  index: number;
}

function Experience({ company, role, duration, description, index }: ExperienceProps) {
  return (
    <div className="enigma-card rounded-lg p-6 hover:border-primary/30 relative overflow-hidden group">
      {/* Terminal-like header */}
      <div className="font-mono text-xs mb-3 opacity-80 flex items-center gap-2">
        <Briefcase className="h-3.5 w-3.5" />
        <span className="text-primary">[experience@arch ~]$</span> cat experience_{index}.log <span className="animate-pulse">_</span>
      </div>
      
      <div className="flex flex-col">
        <h3 className="text-lg font-mono tracking-wide mb-1 group-hover:text-primary transition-colors duration-300">
          {role} <span className="text-primary">@</span> {company}
        </h3>
        
        <div className="text-sm text-muted-foreground font-mono mb-3">
          {duration}
        </div>
        
        <ul className="list-none space-y-2">
          {description.map((item, i) => (
            <li key={i} className="text-muted-foreground font-light flex items-start gap-2">
              <span className="text-primary mt-1">$</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Terminal pattern background */}
      <div className="absolute -bottom-2 -right-2 text-primary/5 font-mono text-6xl pointer-events-none">
        {index}
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
      <div className="font-mono text-xs mb-3 opacity-80 flex items-center gap-2">
        <Award className="h-3.5 w-3.5" />
        <span className="text-primary">[achievement@arch ~]$</span> cat achievement_{index}.log <span className="animate-pulse">_</span>
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
  const experiences = [
    {
      company: "IBM Research, India",
      role: "GRM'23 NLP Research Intern",
      duration: "May 2023 - Aug 2023",
      description: [
        "Developed pipeline for bias/toxicity detection in outputs of large language models and integrated GPT-2, BERT and other language models from Hugging Face for testing.",
        "Successful AAAI ’24 Demonstartion Track Publication."
      ]
    }, 
    {
      company: "5 Point AI Labs",
      role: "SWE Intern",
      duration: "May 2024 - Feb 2025",
      description: [
        "Designed and developed a core dynamic multi-agent AI system capable of creating an assistant for any FastAPI application.",
        "Techstack, Frameworks, and Tools used: Python, LangGraph, FastAPI, MongoDB, ASP .NET Core, Postman."
      ]
    }
  ];

  const achievements = [
    // {
    //   title: "Open Source Contribution",
    //   description: "Active contributor to major open-source AI libraries with 10+ merged PRs."
    // },
    {
      title: "Ranked 9th - Inter IIT Techmeet 12.0",
      description: "Trumio’s High Prep Challenge"
    },
    {
      title: "Ranked 10th - Inter IIT Techmeet 12.0",
      description: "Cloudphysician’s Mid Prep Challenge"
    }
  ];

  return (
    <section
      id="resume"
      className="py-20 min-h-screen flex items-center relative"
    >
      {/* Terminal-like background elements */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Random terminal commands as background decorations */}
          {Array.from({length: 15}).map((_, i) => (
            <div 
              key={i} 
              className="absolute font-mono text-xs"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.6,
                transform: `scale(${0.8 + Math.random() * 0.4})`,
              }}
            >
              {[
                'cd ~/projects',
                'nvim main.py',
                'git commit -m "fix"',
                'sudo pacman -Syu',
                'ssh server@192.168.1.1',
                'python -m venv env',
                'docker-compose up -d',
                'systemctl start nginx',
                'cat ~/.zshrc',
                './deploy.sh',
                'npm run build',
                'curl https://api.example.com',
                'ls -la',
                'make install',
                'grep -r "TODO" .'
              ][i % 15]}
            </div>
          ))}
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
            <Terminal className="inline-block w-4 h-4 mr-1" /> <span className="text-primary">[shubh@arch ~]$</span> cat resume.md
          </div>
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-2">
            Resume<span className="text-primary">_</span>
          </h2>
          <div className="font-mono text-xs text-muted-foreground mb-12">
            Experience and accomplishments
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-mono mb-8 border-b border-primary/10 pb-2 flex items-center">
            <Briefcase className="h-5 w-5 mr-2 text-primary" />
            Experience<span className="text-primary">.</span>log()
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {experiences.map((experience, index) => (
              <Experience
                key={index}
                index={index + 1}
                company={experience.company}
                role={experience.role}
                duration={experience.duration}
                description={experience.description}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-mono mb-8 border-b border-primary/10 pb-2 flex items-center">
            <Award className="h-5 w-5 mr-2 text-primary" />
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
          <span className="text-muted-foreground">[shubh@arch ~]$</span> <span className="animate-pulse">_</span>
        </div>
      </div>
    </section>
  );
}
