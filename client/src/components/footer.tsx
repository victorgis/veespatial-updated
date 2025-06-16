import { motion } from "framer-motion";
import { Linkedin, Github, Twitter, Mail, Youtube, X } from "lucide-react";

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/victoressang",
    label: "LinkedIn",
  },
  {
    icon: Github,
    href: "https://github.com/victorgis",
    label: "GitHub",
  },
  {
    icon: X,
    href: "https://x.com/victor_gis",
    label: "X",
  },
  {
    icon: Mail,
    href: "mailto:essangvictor@gmail.com",
    label: "Email",
  },
  {
    icon: Youtube,
    href: "https://www.youtube.com/@victoressang",
    label: "Youtube",
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="mb-4 md:mb-0">
            <p className="text-slate-400">
              &copy; 2025 Victor Essang. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : "_self"}
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="text-slate-400 hover:text-white transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
            <div>
              <ul>
                <li>
                  <a
                    href="https://medium.com/@victorgis"
                    target="_blank"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Me
                  </a>
                  <a
                    href="https://www.upwork.com/freelancers/~012d233326cbb63858?mp_source=share"
                    target="_blank"
                    className="text-slate-400 ml-5 hover:text-white transition-colors"
                  >
                    Up
                  </a>
                  <a
                    href="https://www.behance.net/gallery/134518485/GIS-Portfolio"
                    target="_blank"
                    className="text-slate-400 ml-5 hover:text-white transition-colors"
                  >
                    Be
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
