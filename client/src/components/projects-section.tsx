import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import crossSafe from "../../assets/images/crossSafe.png";
import releaf from "../../assets/images/releaf.png";
import eoc from "../../assets/images/eoc.png";
import flexxy from "../../assets/images/flexxy.png";
import breics from "../../assets/images/Breics.png"

const projects = [
  {
    title: "CrossSafe Mobile App",
    description:
      "Cross-platform mobile application for safe road crossing and geofencing using React Native and integrated mapping services.",
    image: crossSafe,
    technologies: [
      "React Native",
      "Expo",
      "Google Maps",
      "Firebase",
      // "Redux",
      "TypeScript",
    ],
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Kraken",
    description: "Geospatial factory positioning system using ArcGIS JS API",
    image: releaf,
    technologies: ["Vue.js", "Esri Maps", "ArcGIS JS API", "Python", "SQL"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "COVID-19 City Dashboard",
    description: "Real-time dashboard for COVID-19 Case Response Centre",
    image: eoc,
    technologies: [
      "ArcGISPro",
      "ArcGIS Online",
      "D3.js",
      "Esri Maps",
      "MongoDB",
    ],
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "SmartFollowPro",
    description:
      "Web-based personalized, automated follow-up tool for small businesses, freelancers, and solopreneurs.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    technologies: [
      "Next.js",
      "AI",
      "PostgreSQL",
      "Gmail Integration",
      "Calendar Integration",
    ],
    demoLink: "#",
    codeLink: "#",
  },

  {
    title: "FlexxyDrive",
    description:
      "A ride sharing app, making mobility smarter, sustainable, and community-driven.",
    image: flexxy,
    technologies: [
      "Google Maps",
      "Socket.io",
      "React Native",
      "Django",
      "Redux",
    ],
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Breics",
    description:
      "A real estate wealth management company providing everyone access to secure investments.",
    image: breics,
    technologies: ["Nuxt.js", "PHP", "Google Maps", "Vuex"],
    demoLink: "#",
    codeLink: "#",
  },
];

const techColors = {
  "React Native":
    "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
  Expo: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
  ArcGISPro:
    "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
  MapBox: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
  GoogleMaps:
    "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
  Firebase:
    "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
  "Gmail Integration":
    "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
  Redux:
    "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
  TypeScript: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
  "Vue.js": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
  Python:
    "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
  AI: "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",

  "Calendar Integration":
    "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
  QGIS: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
  TensorFlow:
    "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
  PostgreSQL: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
  FastAPI: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
  "Next.js": "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
  "Node.js":
    "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
  GeoServer:
    "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
  "D3.js":
    "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
  "Socket.io": "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
  "Express.js": "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
  MongoDB: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
  Stripe:
    "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
  "Google Maps": "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
  AWS: "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
  ArcGIS: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
  "Esri Maps": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
  SNAP: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
  React: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
  Django: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
  InfluxDB: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
  "Nuxt.js":
    "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
  "Scikit-learn":
    "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
  OpenStreetMap:
    "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
  Redis: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
  Docker: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
  "ArcGIS JS API":
    "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
          >
            A selection of mobile applications, web platforms, and GIS solutions
            I've developed
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="project-card bg-slate-50 dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl overflow-hidden h-full">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-100">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies?.map((tech) => (
                        <span
                          key={tech}
                          className={`tech-tag px-3 py-1 text-sm rounded-full font-medium ${
                            techColors[tech as keyof typeof techColors] ||
                            "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center mt-auto">
                      <Button variant="ghost" size="sm" asChild>
                        <a
                          href={project.demoLink}
                          className="text-blue-600 hover:text-blue-700 font-semibold"
                        >
                          <ExternalLink className="w-4 h-4" />
                          {/* Live Demo */}
                          {/* mr-2 */}
                        </a>
                      </Button>
                      {/* <Button variant="ghost" size="sm" asChild>
                        <a
                          href={project.codeLink}
                          className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button> */}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          {/* <Button variant="outline" size="lg" asChild>
            <a href="#" className="inline-flex items-center">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button> */}
        </motion.div>
      </div>
    </section>
  );
}
