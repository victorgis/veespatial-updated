import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import ProjectsSection from "@/components/projects-section";
import { useEffect } from "react";

function chromePaymentSuccess() {

  // This goes in the script tag or component of your success page
  async function verifyPayment() {
    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get('session_id');

    if (sessionId) {
      const response = await fetch('https://vnoumodeojhcbxawvzpc.supabase.co/functions/v1/verify-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId })
      });

      if (response.ok) {
        console.log("Database updated! You can now tell the user to go back to the extension.");
      }
    }
  }

  useEffect(()=>{
    verifyPayment();
  },[])



  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navigation />
      <div className="mt-10">
        <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Payment Successful!</h1>
        <p className="text-lg">Thank you for your purchase. You can now return to the extension and enjoy your new features.</p>
        {/* <p>{response}</p> */}
      </div>
      </div>
      
      <ContactSection />
      <Footer />
    </div>
  );
}
export default chromePaymentSuccess;
