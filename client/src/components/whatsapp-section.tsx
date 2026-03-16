import { MessageCircle, } from "lucide-react"; // Or use any SVG icon
import whatsappPng from "../../assets/images/whatsapp-white.png"; // Optional: Add a WhatsApp icon image

const WHATSAPP_NUMBER = "+2348106638962"; // REPLACE WITH YOUR PHONE NUMBER (include country code, no + or 00)

export const FloatingWhatsApp = () => {
  const message = encodeURIComponent("Hello! I found your portfolio and I'd like to chat.");
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Contact on WhatsApp"
    >
        
      {/* <MessageCircle size={28} /> */}
      <img src={whatsappPng} alt="WhatsApp" className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-in-out whitespace-nowrap">
        Chat with me
      </span>
    </a>
  );
};

export const QuickFixCTA = () => {
  const quickFixMessage = encodeURIComponent(
    "Hi! I need a quick fix for a project involving [Tech/IT/Web/Mobile/GIS/AI]. Can you help?"
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${quickFixMessage}`;

  return (
    <section className="py-12 mt-10 px-4">
      <div className="max-w-4xl mx-auto bg-blue-50 dark:bg-slate-800 border-2 border-dashed border-blue-200 dark:border-slate-700 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Need a Quick Fix? 🛠️</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          Whether it's a bug in your code, a GIS mapping issue, AI integration, or general IT support, 
          I'm available for urgent tasks and quick technical solutions.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
        >
          <MessageCircle size={20} />
            {/* <img src={whatsappPng} alt="WhatsApp" className="w-5 h-5 " /> */}
          Get Instant Help
        </a>
      </div>
    </section>
  );
};