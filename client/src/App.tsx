import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import Home from "@/pages/home";

function App() {
  return (
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Home />
        </TooltipProvider>
      </ThemeProvider>
  );
}

export default App;
