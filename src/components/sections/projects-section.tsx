
import { cn } from "@/lib/utils";
import { Github, ExternalLink, ChevronRight, Terminal, Lock, ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import useEmblaCarousel from 'embla-carousel-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl?: string;
  tags: string[];
}

function ProjectCard({ title, description, image, githubUrl, liveUrl, tags }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="project-card rounded-xl overflow-hidden relative group h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Terminal-inspired card header */}
      <div className="absolute top-0 left-0 right-0 h-8 z-10 flex items-center px-3 font-mono text-xs bg-black/50">
        <span className="mr-auto text-primary opacity-80">
          <Terminal className="h-3 w-3 inline mr-1" /> ~/projects/{title.toLowerCase().replace(/\s+/g, '-')}
        </span>
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/70"></span>
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70"></span>
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/70"></span>
        </span>
      </div>
      
      {/* Tech-inspired card patterns */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-enigma-dark via-transparent to-transparent opacity-80"></div>
        <div className="absolute top-4 right-4 font-mono text-xs opacity-30">
          {Array.from({length: 3}).map((_, i) => (
            <div key={i}>{Math.random().toString(36).substring(2, 8)}</div>
          ))}
        </div>
        <div className="absolute bottom-4 left-4 font-mono text-xs opacity-30">
          {Array.from({length: 2}).map((_, i) => (
            <div key={i}>{Math.random().toString(16).substring(2, 10)}</div>
          ))}
        </div>
      </div>
      
      <div className="relative overflow-hidden pt-8"> {/* Added pt-8 for the terminal header */}
        <AspectRatio ratio={16/9}>
          <img
            src={image}
            alt={title}
            className={cn(
              "w-full h-full object-cover transition-all duration-700",
              isHovered ? "scale-110 blur-sm" : ""
            )}
          />
        </AspectRatio>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-enigma-dark"></div>
        
        {/* Top border glow */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        
        {/* Project technology tags shown on hover */}
        <div className={cn(
          "absolute inset-0 flex items-center justify-center flex-col p-6 bg-enigma-dark/80 backdrop-blur-sm mt-8", // Added mt-8 for terminal header
          "transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0"
        )}>
          <div className="text-sm font-mono text-primary/80 mb-2"># project stack</div>
          <div className="flex flex-wrap gap-2 justify-center">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-mono rounded-sm bg-primary/10 text-primary border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-6 relative z-10 flex-1 flex flex-col">
        <div className="font-mono text-xs text-primary/60 mb-1">
          # project details
        </div>
        
        <h3 className="text-xl font-mono tracking-wide mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-6 font-light flex-grow">{description}</p>
        
        <div className="flex items-center space-x-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center space-x-2 text-sm font-mono",
                "hover:text-primary transition-all duration-300 group/link",
                "border-b border-transparent hover:border-primary/50 pb-1"
              )}
            >
              <Github className="h-4 w-4" />
              <span>Source</span>
              <ChevronRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
            </a>
          )}

          
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center space-x-2 text-sm font-mono",
                "hover:text-primary transition-all duration-300 group/link",
                "border-b border-transparent hover:border-primary/50 pb-1"
              )}
            >
              <ExternalLink className="h-4 w-4" />
              <span>Demo</span>
              <ChevronRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
            </a>
          )}
        </div>
        
        <div className="font-mono text-xs text-primary/60 mt-4">
          # end of project
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [emblaRef, emblaApi] = useEmblaCarousel({ skipSnaps: false, containScroll: "trimSnaps" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  
  const projects = {
    ai: [
      {
        title: "Adobe’s Fake Image and Artifact Detection Challenge",
        description: "A deep learning solution using CNNs and a multi-headed KAN classifier for fake image detection and source attribution (diffusion or GAN), and using fine-tuned Vision Language Model (VLM) to generate artifact reports for authenticity analysis, applied to 16x16 pixel images",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        // githubUrl: "https://github.com/Shubh-Goyal-07/cloudPhysician_inter_iit",
        // liveUrl: "#",
        tags: ["PyTorch", "KAN", "VLMs", "Generative AI"]
      },
      {
        title: "Explainable Multilingual Architecture for Alzheimer’s Dementia Detection",
        description: "A speech-based deep learning framework for early Alzheimer’s detection, using models like CNNs, WaveNet, and Wav2Vec2 with Grad-CAM for visualizing feature importance and identifying discriminative patterns in frequency bands.",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
        // githubUrl: "#",
        tags: ["PyTorch", "HuggingFace", "Speech Understanding", "Explainable AI"]
      },
      {
        title: "Optimizer Design",
        description: "Developed a modification to the Adam optimizer, improving convergence speed and performance compared to the standard Adam in some cases, with ongoing efforts to stabilize it and test it on real datasets and models.",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        // githubUrl: "https://github.com/Shubh-Goyal-07/cloudPhysician_inter_iit",
        // liveUrl: "#",
        tags: ["PyTorch", "Core DL", "Research"]
      },
      {
        title: "Cloudphysician’s Vital Extraction Challenge",
        description: "A system leveraging a fine-tuned DETR model to extract image regions with vital sign values, PARSEQ for scene text recognition, and OpenCV-based classical computer vision techniques to digitize heart rate graphs for analysis.",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        githubUrl: "https://github.com/Shubh-Goyal-07/cloudPhysician_inter_iit",
        // liveUrl: "#",
        tags: ["Image Processing", "PyTorch", "Computer Vision"]
      },
      { 
        title: "FaceNet Implementation",
        description: "Recreated the architectures from the FaceNet research paper and a Standard Siamese Network from scratch using PyTorch, and trained both models on the CelebA dataset for face recognition tasks.",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        githubUrl: "https://github.com/Shubh-Goyal-07/Implementation-FaceNet-SiameseNet",
        // liveUrl: "#",
        tags: ["PyTorch"]
      },
    ],
    web: [
      {
        title: "Literature Society IITJ Website",
        description: "A web platform for library management and community interaction, featuring post sharing and JWT-based authentication, with a Django server deployed on AWS EC2 and a ReactJS client hosted on Netlify.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        // githubUrl: "#",
        liveUrl: "https://litsoc.live/",
        tags: ["ReactJS", "Django REST Framework", "AWS"]
      },
      {
        title: "WebRTC-Based Video Conferencing Platform",
        description: "A cross-platform video conferencing system featuring real-time audio/video, multi-user support, and secure peer-to-peer connectivity using WebRTC, hosted on GCP.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
        githubUrl: "https://github.com/Shubh-Goyal-07/WebRTC",
        tags: ["NodeJS", "ReactJS", "WebRTC"]
      },
      {
        title: "Trumio’s Generative AI Product Development Challenge",
        description: "A project milestone planner with a RAG-based chatbot built using LangChain and ChromaDB, along with an AI Learning Hub service automating video generation through diffusion models and APIs for AI avatars and learning content creation.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
        githubUrl: "https://github.com/Shubh-Goyal-07/Trumio_Team40/tree/main",
        liveUrl: "https://drive.google.com/file/d/11LroiGM_E3jrRLyHVkXOsaxbBww7X0eB/view",
        tags: ["Python", "LangChain", "Pinecone", "HuggingFace"]
      }
    ]
  };
  
  const allProjects = [...projects.ai, ...projects.web];
  const displayProjects = activeCategory === "all" ? allProjects : projects[activeCategory as 'ai' | 'web'];
  
  useEffect(() => {
    if (emblaApi) {
      const onSelect = () => {
        setActiveIndex(emblaApi.selectedScrollSnap());
        setTotalSlides(emblaApi.scrollSnapList().length);
      };
      
      emblaApi.on("select", onSelect);
      // Initialize values
      setTotalSlides(emblaApi.scrollSnapList().length);
      setActiveIndex(emblaApi.selectedScrollSnap());
      
      return () => {
        emblaApi.off("select", onSelect);
      };
    }
    return undefined;
  }, [emblaApi, activeCategory]);
  
  // Reset carousel when changing categories
  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(0);
      setActiveIndex(0);
    }
  }, [activeCategory, emblaApi]);

  return (
    <section
      id="projects"
      className="py-20 min-h-screen relative"
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
          <Terminal className="inline-block w-4 h-4 mr-1" /> <span className="text-primary">[shubh@arch ~]$</span> ls -la ~/projects/
        </div>
        <h2 className="text-4xl md:text-5xl font-mono font-bold mb-2">
          Projects<span className="text-primary">_</span>
        </h2>
        <div className="font-mono text-xs text-muted-foreground mb-4">
          Notable implementations and code specimens
        </div>
        <div className="font-mono text-lg text-primary mb-6 inline-block border-b border-primary/30 pb-1">
          Things I've Made
        </div>
        
        {/* Category filters */}
        <div className="mb-8">
          <ToggleGroup type="single" value={activeCategory} onValueChange={(value) => value && setActiveCategory(value)}>
            <ToggleGroupItem value="all" className="font-mono text-sm">All</ToggleGroupItem>
            <ToggleGroupItem value="ai" className="font-mono text-sm">AI / ML</ToggleGroupItem>
            <ToggleGroupItem value="web" className="font-mono text-sm">Web Dev</ToggleGroupItem>
          </ToggleGroup>
        </div>
        
        {/* Projects carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {displayProjects.map((project, index) => (
                <div 
                  key={index} 
                  className="flex-[0_0_100%] min-w-0 px-4 md:flex-[0_0_50%]"
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    githubUrl={project.githubUrl}
                    liveUrl={project.liveUrl}
                    tags={project.tags}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation and counter */}
          <div className="flex justify-between items-center mt-6">
            <div className="font-mono text-sm text-muted-foreground">
              <span className="text-primary">{activeIndex + 1}</span>/{totalSlides}
            </div>
            
            <div className="flex gap-2">
              <button 
                onClick={() => emblaApi?.scrollPrev()} 
                className="bg-primary/10 hover:bg-primary/20 text-primary rounded-full p-2 transition-colors duration-300"
                disabled={activeIndex === 0}
              >
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Previous</span>
              </button>
              <button 
                onClick={() => emblaApi?.scrollNext()} 
                className="bg-primary/10 hover:bg-primary/20 text-primary rounded-full p-2 transition-colors duration-300"
                disabled={activeIndex === totalSlides - 1}
              >
                <ArrowRight className="h-5 w-5" />
                <span className="sr-only">Next</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="font-mono text-sm text-primary opacity-80 mt-12">
          <span className="text-muted-foreground">[shubh@arch ~]$</span> <span className="animate-pulse">_</span>
        </div>
      </div>
    </section>
  );
}
