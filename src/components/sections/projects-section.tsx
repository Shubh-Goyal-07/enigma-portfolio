
import { cn } from "@/lib/utils";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl?: string;
  tags: string[];
}

function ProjectCard({ title, description, image, githubUrl, liveUrl, tags }: ProjectCardProps) {
  return (
    <div className="project-card rounded-xl overflow-hidden relative">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90"></div>
      </div>
      
      <div className="p-6 relative z-10">
        <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary">
          {title}
        </h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary-foreground/80"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <p className="text-muted-foreground mb-6">{description}</p>
        
        <div className="flex items-center space-x-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center space-x-1 text-sm",
              "hover:text-primary transition-colors"
            )}
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>
          
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center space-x-1 text-sm",
                "hover:text-primary transition-colors"
              )}
            >
              <ExternalLink className="h-4 w-4" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const projects = [
    {
      title: "AI Vision Framework",
      description: "A deep learning framework for computer vision tasks with pre-trained models for object detection and segmentation.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      githubUrl: "#",
      liveUrl: "#",
      tags: ["PyTorch", "Python", "Computer Vision", "Docker"]
    },
    {
      title: "Neural Chat Platform",
      description: "A real-time chat application with AI-powered moderation, sentiment analysis, and auto-responses.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      githubUrl: "#",
      tags: ["React", "Node.js", "TensorFlow.js", "WebSockets"]
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for visualizing complex datasets with customizable charts and ML-based predictions.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      githubUrl: "#",
      liveUrl: "#",
      tags: ["D3.js", "React", "Express", "MongoDB", "ML"]
    },
    {
      title: "DevOps Automation Toolkit",
      description: "A set of tools for automating CI/CD pipelines with intelligent test prioritization and deployment strategies.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      githubUrl: "#",
      tags: ["Go", "Docker", "Kubernetes", "CI/CD"]
    }
  ];

  return (
    <section
      id="projects"
      className="py-20 min-h-screen"
    >
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
          My <span className="text-primary">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
