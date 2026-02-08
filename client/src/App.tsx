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

function App() {
  return (
    <ThemeProvider>
      <TooltipProvider>
        <Navigation /> {/* Nav is outside Routes so it shows on all pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/store" element={<Store />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contacts" element={<Contacts />} />
          {/* Add Store and Contact routes here similarly */}
        </Routes>
        <Toaster />
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
