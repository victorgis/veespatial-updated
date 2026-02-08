import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Globe, Map, Code, Timer, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import victor from "../../assets/images/victoressang.jpg";

export default function ComingSoon() {
  const upcomingFeatures = [
    {
      icon: Map,
      text: "Interactive Geospatial Portfolio: Showcasing real-world spatial analysis and mapping projects.",
    },
    {
      icon: Code,
      text: "Advanced GIS Tutorials: Deep dives into integrating spatial data with modern web and mobile frameworks.",
    },
    {
      icon: Globe,
      text: "Spatial Data Insights: A blog dedicated to agriculture, urban planning, and environmental tech.",
    },
    {
      icon: Rocket,
      text: "The Store: Premium geospatial tools, datasets, and specialized GIS software components.",
    },
  ];

  return (
    <section className="min-h-screen flex items-center bg-white dark:bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-sm font-medium">
              <Timer className="w-4 h-4 mr-2 animate-pulse" />
              Under Development
            </div>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              VeeSpatial <br />
              <span className="text-slate-900 dark:text-slate-100 text-4xl md:text-6xl">
                Coming Soon.
              </span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
              I am currently building a new home for the intersection of
              <span className="font-semibold text-blue-600">
                {" "}
                Software Engineering
              </span>{" "}
              and
              <span className="font-semibold text-purple-600">
                {" "}
                Geospatial Intelligence
              </span>
              . Get ready for a unique experience in spatial data analysis and
              innovation.
            </p>

            {/* Email Signup Placeholder */}
            {/* <div className="flex flex-col sm:flex-row gap-3 max-w-md">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 h-12"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white h-12 px-8">
                Notify Me
              </Button>
            </div> */}

            <Card className="bg-slate-50 dark:bg-slate-800 border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-slate-100 flex items-center">
                  What to expect:
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {upcomingFeatures.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-start text-sm text-slate-600 dark:text-slate-400"
                    >
                      <feature.icon className="text-blue-600 dark:text-blue-400 mr-2 mt-1 w-4 h-4 flex-shrink-0" />
                      {feature.text}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            {/* Main Image with decorative border */}
            <div className="relative p-2 rounded-2xl border border-slate-200 dark:border-slate-800">
              <img
                src={victor}
                alt="Victor Essang"
                className="rounded-xl grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
              />
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 via-transparent opacity-40"></div>

            {/* Floating Experience Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -bottom-8 -left-8 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-6 border border-slate-100 dark:border-slate-700"
            >
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Globe className="text-white w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">
                    8+ Yrs
                  </div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-bold">
                    Industry Expertise
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
