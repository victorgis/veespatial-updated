import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"
import StoreComingSoon from "@/components/store-comingsoon"
import { useEffect } from "react";
import Seo from "@/components/seo";

function store() {
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
            title="Store"
            description="Browse Veespatial digital products, app tools, and upcoming resources for builders, analysts, and growth-focused teams."
            keywords="Veespatial store, digital products, software tools, geospatial templates"
          />
          <Navigation />
          <div className="mt-10"></div>
          <StoreComingSoon />
          <ContactSection />
          <Footer />
        </div>
  )
}
export default store
