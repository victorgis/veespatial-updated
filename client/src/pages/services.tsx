import { useEffect } from "react";
import ServicesSection from "@/components/services-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import Seo from "@/components/seo";

function Services() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Seo
        title="Services"
        description="High-ROI services from Veespatial: site selection intelligence, GIS analytics, remote sensing, geo-enabled software, and AI automation."
        keywords="spatial intelligence as a service, site selection report, GIS consulting, remote sensing services, geospatial software"
      />
      <div className="mt-10"></div>
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default Services;
