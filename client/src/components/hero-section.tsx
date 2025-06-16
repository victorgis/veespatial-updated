import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Smartphone, MapPin, Code, ChevronDown } from "lucide-react";
import heroImg from "../../assets/images/hero.jpg";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden"
    >
      <div
        // absolute inset-0 bg-black/20
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundAttachment: "fixed", // Creates parallax effect on desktop
          opacity: 0.08,
        }}
      ></div>

      {/* Floating elements */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 text-4xl opacity-20 text-white"
      >
        <Smartphone />
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-32 right-16 text-5xl opacity-20 text-white"
      >
        <MapPin />
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-40 right-20 text-3xl opacity-20 text-white"
      >
        <Code />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Victor{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Essang
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-slate-200 max-w-3xl mx-auto">
            Software Engineer & GIS Expert crafting innovative solutions at the
            crossroads of{" "}
            <span className="text-purple-400 font-semibold">AI</span>
            {", "}{" "}
            <span className="text-yellow-400 font-semibold">
              application development
            </span>{" "}
            and{" "}
            <span className="text-green-400 font-semibold">
              geospatial technology
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 bg-orange-500 hover:bg-orange-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              View My Work
            </Button>

            <Button
              variant="ghost"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold rounded-lg transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-70"
      >
        <ChevronDown className="text-2xl" />
      </motion.div>
    </section>
  );
}
