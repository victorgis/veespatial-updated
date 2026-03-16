//pages/home.tsx

// import Navigation from "@/components/navigation";
// import HeroSection from "@/components/hero-section";
// import ProjectsSection from "@/components/projects-section";
// import SkillsSection from "@/components/skills-section";
// import AboutSection from "@/components/about-section";
// import ContactSection from "@/components/contact-section";
// import Footer from "@/components/footer";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
//       <Navigation />
//       <HeroSection />
//       <ProjectsSection />
//       <SkillsSection />
//       <AboutSection />
//       <ContactSection />
//       <Footer />
//     </div>
//   );
// }

//pages/home.tsx

import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

// Import the new components
import { FloatingWhatsApp, QuickFixCTA } from "@/components/whatsapp-section";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navigation />
      <HeroSection />
      
      {/* 1. Added the Quick Fix Section here */}
      <QuickFixCTA /> 

      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
      <Footer />

      {/* 2. Added the Floating Button at the bottom */}
      <FloatingWhatsApp />
    </div>
  );
}
