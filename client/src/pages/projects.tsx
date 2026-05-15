import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import ProjectsSection from "@/components/projects-section";
import Seo from "@/components/seo";

function projects() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Seo
        title="Projects Portfolio"
        description="Explore Veespatial projects across mobile apps, web applications, GIS platforms, and data-driven digital products."
        keywords="Veespatial projects, GIS portfolio, mobile app projects, web app case studies, software portfolio"
      />
      <Navigation />
      <div className="mt-10"></div>
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
export default projects;
