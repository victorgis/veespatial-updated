import { useEffect } from "react";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import Seo from "@/components/seo";
import mark from "../../assets/images/heraldsnation.png";
import {
  BookOpen,
  Headphones,
  Bell,
  Smartphone,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  FileText,
  ShieldCheck,
  Languages,
  Download,
} from "lucide-react";

const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.victorgis.heraldsnation";
const BRAND_PAGE = "https://app.veespatial.com/heraldsnation";

function HeraldsNation() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-900 dark:text-slate-100">
      <Seo
        title="HeraldsNation App"
        description="The official HeraldsNation Ministries app for teachings, e-books, songs, and ministry updates. Available on Google Play."
        keywords="HeraldsNation, ministry app, sermons, e-books, christian teachings, HeraldsNation Ministries"
      />

      <section className="px-6 pb-20 pt-32">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
            <Sparkles size={16} />
            <span>Official HeraldsNation Ministries app</span>
          </div>
          <img
            src={mark}
            alt="HeraldsNation mark"
            className="mx-auto mb-8 h-28 w-28 rounded-3xl object-cover shadow-lg"
          />
          <h1 className="mb-6 bg-gradient-to-r from-orange-600 to-indigo-600 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-7xl">
            Grow in faith with <br /> HeraldsNation
          </h1>
          <p className="mx-auto mb-4 max-w-2xl text-xl text-slate-600 dark:text-slate-400">
            A digital home for transformational teachings, spiritual growth, and
            kingdom resources. Stream sermons, read e-books, and stay with the
            ministry wherever you go.
          </p>
          <p className="mx-auto mb-10 max-w-2xl text-base text-slate-500 dark:text-slate-400">
            Vision: heralding the life of God in Christ in all things. Mission:
            raising the total man in Christ, in things both spiritual and natural.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a href={PLAY_STORE} target="_blank" rel="noopener noreferrer">
              <button className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-orange-500/20 transition-all hover:scale-105 hover:bg-slate-800 dark:bg-orange-600 dark:hover:bg-orange-700">
                <Smartphone size={20} />
                Get it on Google Play
              </button>
            </a>
            <a href="https://heraldsnation.org" target="_blank" rel="noopener noreferrer">
              <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-8 py-4 text-lg font-bold transition-all hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700">
                Visit heraldsnation.org
              </button>
            </a>
          </div>
          <p className="mt-8 text-sm text-slate-500">
            Also listed on the Veespatial Global platform at{" "}
            <a href={BRAND_PAGE} className="font-semibold text-orange-600 underline-offset-4 hover:underline">
              app.veespatial.com/heraldsnation
            </a>
            .
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-24 dark:bg-slate-800/50">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">What you can do in the app</h2>
            <p className="text-slate-500">
              Teachings, publications, and ministry news in one place. Open to the
              HeraldsNation community and to anyone who wants the resources.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600 dark:bg-orange-900/50 dark:text-orange-300">
                <Headphones size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold">Audio teachings</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Stream message series, sermons, and spiritual teachings. Download
                the ones you want and keep listening when you are offline.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300">
                <BookOpen size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold">e-Books and publications</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Read books, devotionals, and study materials on the device. Save
                them for later so the library travels with you.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-300">
                <Bell size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold">Ministry updates</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Hear about live events, new messages, and releases without hunting
                for the announcement in a group chat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 md:flex-row">
          <div className="flex-1">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Made for a global community</h2>
            <ul className="space-y-4">
              {[
                "Multi-language support for listeners beyond one congregation",
                "Offline downloads for messages and e-books",
                "A clean path between the player, the library, and reading",
                "Live on Google Play, with 100+ downloads and a 5.0 rating",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-orange-500" size={20} />
                  <span className="text-lg text-slate-600 dark:text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">
                <Languages size={14} /> Multiple languages
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">
                <Download size={14} /> Offline library
              </span>
            </div>
          </div>
          <div className="relative mx-auto flex aspect-[9/16] w-full max-w-[280px] items-center justify-center overflow-hidden rounded-[2rem] border-8 border-slate-900 bg-indigo-950 shadow-2xl dark:border-slate-700">
            <img src={mark} alt="" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-orange-600 p-12 text-center text-white shadow-xl shadow-orange-500/20">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">Step into the life of God in Christ.</h2>
          <p className="mb-8 text-xl text-orange-50">
            Download the official HeraldsNation Ministries app and keep the teachings with you.
          </p>
          <a href={PLAY_STORE} target="_blank" rel="noopener noreferrer">
            <button className="mx-auto flex items-center gap-2 rounded-xl bg-white px-10 py-4 text-lg font-bold text-orange-600 transition-colors hover:bg-orange-50">
              Download on Google Play
              <ArrowRight size={20} />
            </button>
          </a>
        </div>
      </section>

      <section className="border-t border-slate-200 px-6 py-24 dark:border-slate-800">
        <div className="mx-auto max-w-4xl space-y-24">
          <div id="privacy" className="scroll-mt-24">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-orange-100 p-2 text-orange-600 dark:bg-orange-900/50 dark:text-orange-300">
                <ShieldCheck size={24} />
              </div>
              <h2 className="text-3xl font-bold">Privacy</h2>
            </div>
            <div className="space-y-4 text-slate-600 dark:text-slate-400">
              <p>
                The Play listing for HeraldsNation states that data is encrypted in
                transit and that you can request deletion. The developer has also
                declared that personal information may be shared with third parties.
                Read the full policy on the ministry site before you install.
              </p>
              <p>
                <a
                  href="https://heraldsnation.org/heraldsmobileapp#privacy"
                  className="font-semibold text-orange-600 underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  HeraldsNation privacy policy
                </a>
              </p>
            </div>
          </div>

          <div id="terms" className="scroll-mt-24">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-slate-100 p-2 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                <FileText size={24} />
              </div>
              <h2 className="text-3xl font-bold">Using the app</h2>
            </div>
            <div className="space-y-4 text-slate-600 dark:text-slate-400">
              <p>
                Teachings, books, and songs in the app belong to HeraldsNation
                Ministries and the people who produced them. The app is a way to
                receive those resources. It is not a substitute for the local church
                or for the ministry&apos;s own gatherings.
              </p>
              <p>
                Support for the product goes through the ministry: info@heraldsnation.org.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}

export default HeraldsNation;
