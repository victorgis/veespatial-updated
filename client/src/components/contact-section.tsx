import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "essangvictor@gmail.com",
    href: "mailto:essangvictor@gmail.com",
    bgColor: "bg-blue-100 dark:bg-blue-900",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "/in/victoressang",
    href: "https://linkedin.com/in/victoressang",
    bgColor: "bg-blue-100 dark:bg-blue-900",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: Github,
    title: "GitHub",
    value: "@victorgis",
    href: "https://github.com/victorgis",
    bgColor: "bg-blue-100 dark:bg-blue-900",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
];

const availabilities = [
  { label: "Full-time Roles", color: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400" },
  { label: "Contracts & Freelance Projects", color: "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400" },
  { label: "Consulting", color: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400" },
  { label: "Mentoring", color: "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400" }
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Whether you need a mobile app, web platform, or geospatial solution, I'm here to help turn your vision into reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <a
                href={method.href}
                className="group block bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                target={method.href.startsWith('http') ? '_blank' : '_self'}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <div className="mb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${method.bgColor} rounded-full group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className={`w-6 h-6 ${method.iconColor}`} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-100">
                  {method.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">{method.value}</p>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Card className="bg-white dark:bg-slate-900 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">
                Available for:
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {availabilities.map((availability, index) => (
                  <motion.span
                    key={availability.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className={`px-4 py-2 rounded-full font-semibold ${availability.color}`}
                  >
                    {availability.label}
                  </motion.span>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
