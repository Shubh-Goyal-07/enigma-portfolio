
import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ResumeSection } from "@/components/sections/resume-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { PublicationsSection } from "@/components/sections/publications-section";
import { ContactSection } from "@/components/sections/contact-section";
import { SocialLinksSidebar } from "@/components/social-links-sidebar";
import { EmailSidebar } from "@/components/email-sidebar";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <SocialLinksSidebar />
      <EmailSidebar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ResumeSection />
        <ProjectsSection />
        <PublicationsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
