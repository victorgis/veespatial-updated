import { motion } from "framer-motion";
import { ArrowUpRight, Globe2 } from "lucide-react";

export default function StudioBanner() {
  return (
    <section className="px-4 py-10">
      <motion.a
        href="https://app.veespatial.com"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto flex max-w-5xl flex-col gap-4 rounded-3xl border border-blue-200 bg-gradient-to-r from-slate-900 to-indigo-950 p-6 text-white shadow-xl dark:border-blue-900 md:flex-row md:items-center md:justify-between md:p-8"
      >
        <div className="flex items-start gap-4">
          <div className="rounded-2xl bg-cyan-400/15 p-3">
            <Globe2 className="h-6 w-6 text-cyan-300" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Veespatial Global
            </p>
            <h2 className="mt-1 text-2xl font-bold">The studio now has its own home</h2>
            <p className="mt-2 max-w-xl text-sm text-slate-300">
              Registered business, live tools, and the product platform live at
              app.veespatial.com — starting with DocuCraft, the in-browser PDF editor.
            </p>
          </div>
        </div>
        <span className="inline-flex items-center gap-2 self-start rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 md:self-center">
          Open the studio
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </motion.a>
    </section>
  );
}
