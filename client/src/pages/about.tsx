import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import { useEffect } from "react";

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
      <Navigation />
      <div className="mt-10"></div>
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
export default about