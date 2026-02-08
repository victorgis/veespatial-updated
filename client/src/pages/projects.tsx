import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import ProjectsSection from "@/components/projects-section";

function projects() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navigation />
      <div className="mt-10"></div>
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
export default projects;
