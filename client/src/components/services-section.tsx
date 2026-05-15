import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import type { ComponentType } from "react";
import {
  Bot,
  Building2,
  FileText,
  Globe,
  Map,
  Smartphone,
  TrendingUp,
  Workflow,
} from "lucide-react";

type Service = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  roi: string;
};

const services: Service[] = [
  {
    title: "Spatial Intelligence & Site Selection",
    description:
      "Optimal site reports for factories, fuel stations, retail hubs, and logistics facilities using GIS, demand, access, and competitor layers.",
    icon: Map,
    roi: "High-ticket strategy reports",
  },
  {
    title: "Remote Sensing Analysis",
    description:
      "Satellite-based land use, change detection, and environmental risk insights for investment due diligence and project planning.",
    icon: Globe,
    roi: "Lower project risk before capex",
  },
  {
    title: "Geo-Enabled Web Platforms",
    description:
      "Custom dashboards and web apps that combine maps, business data, and analytics to support operations and executive decisions.",
    icon: Workflow,
    roi: "Recurring software retainers",
  },
  {
    title: "Mobile Apps & Field Data Systems",
    description:
      "Cross-platform apps for field teams, inspections, and data capture with offline-first workflows and real-time sync.",
    icon: Smartphone,
    roi: "Operational efficiency gains",
  },
  {
    title: "AI + Geospatial Automation",
    description:
      "Automated geoprocessing pipelines, anomaly detection, and AI-assisted reporting to cut manual analysis time.",
    icon: Bot,
    roi: "Scale without scaling headcount",
  },
  {
    title: "Technical Reports & Investment Briefs",
    description:
      "Executive-ready documentation that converts complex analysis into clear recommendations and ROI-backed decisions.",
    icon: FileText,
    roi: "Faster stakeholder approvals",
  },
];

export default function ServicesSection({
  compact = false,
}: {
  compact?: boolean;
}) {
  const shownServices = compact ? services.slice(0, 3) : services;

  return (
    <section id="services" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent"
          >
            Services Designed for High ROI
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto"
          >
            I help clients turn location intelligence into profitable decisions using geospatial analysis, software engineering, and AI.
          </motion.p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 ${compact ? "lg:grid-cols-3" : "lg:grid-cols-3"} gap-7`}>
          {shownServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <Card className="h-full border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400 mb-5">{service.description}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 text-sm font-semibold">
                    <TrendingUp className="w-4 h-4" />
                    {service.roi}
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
          transition={{ delay: 0.2 }}
          className="mt-14"
        >
          <Card className="border-0 bg-gradient-to-r from-slate-900 to-slate-700 text-white">
            <CardContent className="p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-2">
                  <Building2 className="w-6 h-6" />
                  Spatial Intelligence as a Service
                </h3>
                <p className="text-slate-200 max-w-3xl">
                  Need a defensible location strategy for a major investment in Akwa Ibom or beyond? I deliver data-backed site recommendations and executive reports your team can act on.
                </p>
              </div>
              <div className="flex gap-3">
                <a href="https://calendly.com/essangvictor/30min" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    Book a Discovery Call
                  </Button>
                </a>
                {/* {compact && (
                  <Link to="/services">
                    <Button variant="outline" className="border-white text-slate-900 hover:bg-slate-100">
                      View All Services
                    </Button>
                  </Link>
                )} */}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
