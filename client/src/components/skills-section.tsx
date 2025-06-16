import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Code, Server, MapPin, Brain, Settings, Palette } from "lucide-react";

const skillCategories = [
  {
    title: "Mobile Development",
    icon: Smartphone,
    iconColor: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900",
    skills: [
      "React Native",
      "Expo",
      "Android Studio",
      "Xcode",
      "React Native CLI",
    ],
  },
  {
    title: "Web Development",
    icon: Code,
    iconColor: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-100 dark:bg-green-900",
    skills: [
      "React",
      "Vue.js",
      "Next.js",
      "Nuxt.js",
      "JavaScript",
      "TypeScript",
    ],
  },
  {
    title: "Backend & Database",
    icon: Server,
    iconColor: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-100 dark:bg-purple-900",
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "MongoDB",
      "PostgreSQL",
      "Firebase",
    ],
  },
  {
    title: "GIS & Remote Sensing",
    icon: MapPin,
    iconColor: "text-red-600 dark:text-red-400",
    bgColor: "bg-red-100 dark:bg-red-900",
    skills: ["ArcGIS", "QGIS", "GeoServer", "SNAP", "MapBox", "Google Earth"],
  },
  {
    title: "ML & Analytics",
    icon: Brain,
    iconColor: "text-indigo-600 dark:text-indigo-400",
    bgColor: "bg-indigo-100 dark:bg-indigo-900",
    skills: ["TensorFlow", "Scikit-learn", "Pandas"],
  },
  {
    title: "DevOps & Tools",
    icon: Settings,
    iconColor: "text-yellow-600 dark:text-yellow-400",
    bgColor: "bg-yellow-100 dark:bg-yellow-900",
    skills: ["Git", "Docker", "AWS"],
  },
  {
    title: "Design & UI/UX",
    icon: Palette,
    iconColor: "text-pink-600 dark:text-pink-400",
    bgColor: "bg-pink-100 dark:bg-pink-900",
    skills: ["Figma", "Tailwind CSS", "Material-UI"],
  },
];

const skillColors = {
  "React Native":
    "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
  "React Native CLI":
    "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
  Expo: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
  "Android Studio":
    "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
  Xcode: "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
  React: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
  "Vue.js": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
  "Next.js": "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
  "Nuxt.js":
    "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
  JavaScript:
    "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
  TypeScript: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
  "Node.js":
    "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
  "Express.js": "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
  Python:
    "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
  MongoDB: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
  PostgreSQL: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
  Firebase:
    "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
  ArcGIS: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
  QGIS: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
  GeoServer:
    "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
  SNAP: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
  MapBox:
    "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
  "Google Earth":
    "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
  TensorFlow:
    "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
  "Scikit-learn":
    "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
  Pandas:
    "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
  Git: "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
  Docker: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
  AWS: "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
  Figma:
    "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
  "Tailwind CSS":
    "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
  "Material-UI":
    "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-green-600 bg-clip-text text-transparent"
          >
            Skills & Technologies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
          >
            A comprehensive toolkit for building modern applications and analyzing geospatial data
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-8">
          {skillCategories.slice(0, 4).map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-white dark:bg-slate-900 rounded-xl shadow-lg h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 ${category.bgColor} rounded-lg mr-4`}>
                      <category.icon className={`w-6 h-6 ${category.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                      {category.title}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div key={skill} className="flex items-center">
                        <span className={`tech-tag px-3 py-1 text-sm rounded-full ${skillColors[skill as keyof typeof skillColors] || 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}>
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.slice(4).map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 4) * 0.1 }}
            >
              <Card className="bg-white dark:bg-slate-900 rounded-xl shadow-lg h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 ${category.bgColor} rounded-lg mr-4`}>
                      <category.icon className={`w-6 h-6 ${category.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                      {category.title}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div key={skill} className="flex items-center">
                        <span className={`tech-tag px-3 py-1 text-sm rounded-full ${skillColors[skill as keyof typeof skillColors] || 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}>
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
