import { motion } from "framer-motion";
import { CloudLightning, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const ViewLiveApps = () => {
  return (
    <section className="py-16 px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800/50 dark:to-slate-900 border-2 border-dashed border-blue-200 dark:border-blue-900/50 rounded-3xl p-8 md:p-12 text-center"
      >
        <div className="flex justify-center mb-6">
          <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-500/20">
            <CloudLightning size={32} />
          </div>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-emerald-400 bg-clip-text text-transparent"
        >
          See My Work in Action
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Don't just take my word for it. Explore a curated collection of my 
          <span className="text-blue-600 dark:text-blue-400 font-semibold"> live applications </span> 
          ranging from AI integrations and GIS dashboards to full-stack web solutions.
        </motion.p>

        {/* --- FIXED WRAPPER FOR CENTERING --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center" // This centers the Link/Button
        >
          <Link to="/liveapps" className="inline-block">
            <button className="group flex items-center justify-center gap-3 bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-500 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all transform hover:scale-105 hover:shadow-xl shadow-blue-500/10">
              Explore Live Demos
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
            </button>
          </Link>
        </motion.div>
        
        <p className="mt-8 text-sm text-slate-500 dark:text-slate-500 font-medium uppercase tracking-widest">
          Web • Mobile • Chrome • GIS • AI
        </p>
      </motion.div>
    </section>
  );
};