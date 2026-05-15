import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import Seo from "@/components/seo";

function contacts() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Seo
        title="Contact"
        description="Contact Victor Essang (Veespatial) for mobile/web development, GIS consulting, remote sensing analysis, and geospatial product work."
        keywords="contact Veespatial, hire GIS consultant, hire software developer, geospatial expert contact"
      />
      <Navigation />
      <div className="mt-10"></div>
      <ContactSection />
      <Footer />
    </div>
  );
}
export default contacts;
