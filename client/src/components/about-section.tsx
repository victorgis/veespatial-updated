import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Globe, TrendingUp, Users } from "lucide-react";

import victor from "../../assets/images/victoressang.jpg"

export default function AboutSection() {
  const motivations = [
    {
      icon: Rocket,
      text: "Building scalable mobile applications that reach millions of users across Android and iOS platforms"
    },
    {
      icon: Globe,
      text: "Leveraging geospatial data to solve real-world problems in agriculture, urban planning, and environmental monitoring"
    },
    {
      icon: TrendingUp,
      text: "Applying machine learning algorithms to spatial datasets for predictive analytics and decision-making"
    },
    {
      icon: Users,
      text: "Collaborating with cross-functional teams to deliver impactful solutions that make a difference"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Victor
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              I'm a passionate Software Engineer and GIS Expert who thrives at
              the intersection of cutting-edge technology and geospatial
              intelligence. With 8+ years of experience in mobile and web
              development, I specialize in creating innovative solutions that
              leverage location-based services and spatial data analysis.
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              My journey began with traditional software development, but I
              quickly discovered the immense potential of integrating geospatial
              technology into modern applications. This unique combination
              allows me to build applications that not only function beautifully
              but also provide meaningful insights through spatial analysis and
              location intelligence.
            </p>

            <Card className="bg-slate-50 dark:bg-slate-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-slate-100">
                  What drives me:
                </h3>
                <ul className="space-y-3">
                  {motivations.map((motivation, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <motivation.icon className="text-blue-600 dark:text-blue-400 mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-400">
                        {motivation.text}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              When I'm not coding, you'll find me exploring new geospatial
              datasets, contributing to open-source projects, or mentoring
              aspiring developers who share my passion for technology and
              spatial thinking.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={victor}
              width={800}
              height={600}
              alt="Professional software developer working on geospatial applications"
              className="rounded-xl shadow-2xl w-full h-auto"
            />

            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 rounded-xl shadow-xl p-6 border border-slate-200 dark:border-slate-700"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">8+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Years Experience
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 rounded-xl shadow-xl p-6 border border-slate-200 dark:border-slate-700"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">
                  20+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Projects Delivered
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
