
import { cn } from "@/lib/utils";
import { ExternalLink, ChevronRight, BookOpen } from "lucide-react";

interface PublicationCardProps {
  title: string;
  authors: string[];
  journal: string;
  year: string;
  abstract: string;
  doi?: string;
  pdfUrl?: string;
}

function PublicationCard({ title, authors, journal, year, abstract, doi, pdfUrl }: PublicationCardProps) {
  return (
    <div className="project-card rounded-xl overflow-hidden">
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="p-6 relative z-10">
        <div className="font-mono text-xs text-primary/60 mb-1">
          &lt;publication&gt;
        </div>
        
        <h3 className="text-xl font-mono tracking-wide mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4 font-light italic">
          {authors.join(", ")}
        </p>
        
        <div className="flex items-center text-sm text-muted-foreground mb-4">
          <BookOpen className="h-4 w-4 mr-2" />
          <span>{journal}, {year}</span>
        </div>
        
        <p className="text-muted-foreground mb-6 font-light">{abstract}</p>
        
        <div className="flex items-center space-x-4">
          {doi && (
            <a
              href={`https://doi.org/${doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center space-x-2 text-sm font-mono",
                "hover:text-primary transition-all duration-300 group/link",
                "border-b border-transparent hover:border-primary/50 pb-1"
              )}
            >
              <span>DOI</span>
              <ChevronRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
            </a>
          )}
          
          {pdfUrl && (
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center space-x-2 text-sm font-mono",
                "hover:text-primary transition-all duration-300 group/link",
                "border-b border-transparent hover:border-primary/50 pb-1"
              )}
            >
              <ExternalLink className="h-4 w-4" />
              <span>PDF</span>
              <ChevronRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
            </a>
          )}
        </div>
        
        <div className="font-mono text-xs text-primary/60 mt-4">
          &lt;/publication&gt;
        </div>
      </div>
    </div>
  );
}

export function PublicationsSection() {
  const publications = [
    {
      title: "LLMGuard: Guarding against Unsafe LLM Behavior",
      authors: ["Shubh Goyal", "Sukriti Goyal", "Nishtha Madaan", "Arnav Goel", "..."],
      journal: "38th Annual AAAI Conference on Artificial Intelligence",
      year: "2024",
      abstract: "Although the rise of Large Language Models (LLMs) in enterprise settings brings new opportunities and capabilities, it also brings challenges, such as the risk of generating inappropriate, biased, or misleading content that violates regulations and can have legal concerns. To alleviate this, we present 'LLMGuard', a tool that monitors user interactions with an LLM application and flags content against specific behaviours or conversation topics. To do this robustly, LLMGuard employs an ensemble of detectors.",
      doi: "https://doi.org/10.1609/aaai.v38i21.30566",
      pdfUrl: "https://arxiv.org/pdf/2403.00826"
    }
  ];

  return (
    <section
      id="publications"
      className="py-20 relative"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="absolute h-full w-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Background pattern */}
          <path stroke="currentColor" strokeWidth="0.2" fill="none" d="M0,0 L100,0 L100,100 L0,100 Z" />
          <path stroke="currentColor" strokeWidth="0.2" fill="none" d="M0,0 L100,100" />
          <path stroke="currentColor" strokeWidth="0.2" fill="none" d="M100,0 L0,100" />
          {Array.from({length: 10}).map((_, i) => (
            <path 
              key={`h-${i}`} 
              stroke="currentColor" 
              strokeWidth="0.1" 
              fill="none" 
              d={`M0,${i * 10} L100,${i * 10}`} 
            />
          ))}
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
          &lt;section id="publications"&gt;
        </div>
        <h2 className="text-4xl md:text-5xl font-mono font-bold mb-2">
          Publications<span className="text-primary">_</span>
        </h2>
        <div className="font-mono text-xs text-muted-foreground mb-4">
          Academic research and papers
        </div>
        <div className="font-mono text-lg text-primary mb-12 inline-block border-b border-primary/30 pb-1">
          Stuff I've Written
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          {publications.map((publication, index) => (
            <PublicationCard
              key={index}
              title={publication.title}
              authors={publication.authors}
              journal={publication.journal}
              year={publication.year}
              abstract={publication.abstract}
              doi={publication.doi}
              pdfUrl={publication.pdfUrl}
            />
          ))}
        </div>
        
        <div className="font-mono text-sm text-primary opacity-80 mt-12">
          &lt;/section&gt;
        </div>
      </div>
    </section>
  );
}
