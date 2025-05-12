
import { cn } from "@/lib/utils";

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className="enigma-card rounded-lg p-6">
      <h3 className="text-xl font-display font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-full bg-primary/10 text-sm font-medium"
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
}

function Achievement({ title, description }: AchievementProps) {
  return (
    <div className="enigma-card rounded-lg p-6 hover:border-primary/30">
      <h3 className="text-lg font-display font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

export function ResumeSection() {
  const skills = {
    frontend: ["React", "TypeScript", "NextJS", "TailwindCSS", "Redux"],
    backend: ["NodeJS", "Express", "MongoDB", "SQL", "AWS", "Firebase"],
    ai: ["Python", "TensorFlow", "PyTorch", "NLP", "Computer Vision", "MLOps"],
    tools: ["Git", "Docker", "CI/CD", "Jest", "Cypress", "Figma"]
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
      className="py-20 min-h-screen flex items-center"
    >
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
          My <span className="text-primary">Resume</span>
        </h2>

        <div className="mb-12">
          <h3 className="text-2xl font-display font-semibold mb-8">Tech Stack</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkillCategory title="Frontend Development" skills={skills.frontend} />
            <SkillCategory title="Backend Development" skills={skills.backend} />
            <SkillCategory title="AI & Machine Learning" skills={skills.ai} />
            <SkillCategory title="Tools & Platforms" skills={skills.tools} />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-display font-semibold mb-8">Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Achievement
                key={index}
                title={achievement.title}
                description={achievement.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
