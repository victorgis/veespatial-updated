import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "@/components/navigation"; // Import Nav here
import Home from "@/pages/home";
// Import your other pages (create these files if they don't exist)
import About from "@/pages/about";
import Courses from "./pages/courses";
import Projects from "./pages/projects";
import Store from "./pages/store";
import Contacts from "./pages/contacts";
import ChromePaymentSuccess from "./pages/chrome-payment-success";
import ReplyGenie from "./apps-landing-pages/replygenie-chrome-extension";
import LiveApps from "./pages/liveapps"
import ReceiptWalletChromeExtension from "./apps-landing-pages/receiptwallet-chrome-extension";

function App() {
  return (
    <ThemeProvider>
      <TooltipProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/store" element={<Store />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/chrome-payment-success" element={< ChromePaymentSuccess/>} />
          <Route path="/replygenie" element={< ReplyGenie/>} />
          <Route path="/receiptwallet-chrome-extension" element={< ReceiptWalletChromeExtension/>} />
          <Route path="/liveapps" element={< LiveApps/>} />
          {/* Add Store and Contact routes here similarly */}
        </Routes>
        <Toaster />
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
