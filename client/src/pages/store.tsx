import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"
import StoreComingSoon from "@/components/store-comingsoon"

function store() {
  return (
     <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
          <Navigation />
          <div className="mt-10"></div>
          <StoreComingSoon />
          <ContactSection />
          <Footer />
        </div>
  )
}
export default store