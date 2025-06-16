import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
