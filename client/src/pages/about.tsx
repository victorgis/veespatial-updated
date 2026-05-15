import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import { useEffect } from "react";
import Seo from "@/components/seo";

function about() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto", // changes to "smooth" if you want a smooth scroll to the top
    });
  }, []);
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Seo
        title="About Victor Essang"
        description="Learn about Victor Essang, a software developer and geospatial analyst focused on mobile apps, web platforms, GIS intelligence, and remote sensing."
        keywords="about Victor Essang, Veespatial profile, software engineer Nigeria, geospatial analyst, GIS consultant"
      />
      <Navigation />
      <div className="mt-10"></div>
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
export default about
