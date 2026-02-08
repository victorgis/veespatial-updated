import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ShoppingBag,
  ExternalLink,
  Layers,
  Cpu,
  Lock,
  Hammer,
  Database,
  Monitor,
} from "lucide-react";

export default function StoreComingSoon() {
  const categories = [
    { name: "My Tech Stack", icon: Cpu },
    { name: "GIS Data Assets", icon: Database },
    { name: "Code Components", icon: Hammer },
  ];

  const previewItems = [
    {
      title: "Precision GIS Workstation",
      type: "Recommendation",
      description:
        "The hardware setup I use for processing massive spatial datasets and 3D rendering.",
      tag: "Hardware",
      status: "Buy on Amazon",
      isAffiliate: true,
      icon: Monitor,
    },
    {
      title: "Global Agricultural Dataset",
      type: "VeeSpatial Original",
      description:
        "Highly curated spatial data layers for precision farming and crop monitoring.",
      tag: "Data",
      status: "Coming Soon",
      isAffiliate: false,
      icon: Layers,
    },
    {
      title: "React Spatial UI Kit",
      type: "VeeSpatial Original",
      description:
        "A library of reusable UI components specifically for map-heavy dashboard applications.",
      tag: "Code",
      status: "In Development",
      isAffiliate: false,
      icon: ShoppingBag,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge
              variant="outline"
              className="text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800 px-4 py-1"
            >
              VeeSpatial Marketplace
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white"
          >
            Professional Tools & <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Spatial Assets
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Curated gear for GIS professionals and custom-built digital assets
            to accelerate your geospatial workflow.
          </motion.p>
        </div>

        {/* Category Filter Placeholder */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                className="rounded-full bg-white dark:bg-slate-900"
              >
                <cat.icon className="w-4 h-4 mr-2" />
                {cat.name}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Store Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Card className="h-full border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden flex flex-col group">
                <CardContent className="p-8 flex-grow">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                      <item.icon className="w-8 h-8" />
                    </div>
                    <Badge
                      className={
                        item.isAffiliate
                          ? "bg-slate-100 text-slate-600"
                          : "bg-purple-100 text-purple-600 dark:bg-purple-900/30"
                      }
                    >
                      {item.type}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>

                <CardFooter className="p-6 bg-slate-50/50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    {item.tag}
                  </span>

                  {item.isAffiliate ? (
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      View Source <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  ) : (
                    <div className="flex items-center text-slate-400 text-sm italic">
                      <Lock className="w-3 h-3 mr-1" /> {item.status}
                    </div>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-20 p-12 rounded-3xl bg-gradient-to-b from-blue-600 to-purple-700 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Want early access?</h2>
          <p className="text-blue-100 mb-8 max-w-md mx-auto">
            Subscribe to be the first to know when we launch our GIS datasets
            and the VeeSpatial hardware recommendation guide.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center max-w-md mx-auto">
            <input
              placeholder="Your email address"
              className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md placeholder:text-blue-200 outline-none focus:ring-2 ring-white/50"
            />
            <Button className="bg-white text-blue-600 hover:bg-blue-50 h-auto py-3 px-8 font-bold">
              Join Waitlist
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
