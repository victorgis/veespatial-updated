import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";

function template() {

  // This goes in the script tag or component of your success page
  



  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navigation />
      <div className="py-52">
        <div className="">
            
        </div>
        </div>
      <ContactSection />
      <Footer />
    </div>
  );
}
export default template;
