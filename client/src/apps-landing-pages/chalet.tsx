import { useEffect } from "react";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import Seo from "@/components/seo";
import mark from "../../assets/images/chalet.png";
import {
  Home,
  Users,
  MapPinned,
  Smartphone,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  FileText,
  ShieldCheck,
  KeyRound,
} from "lucide-react";

const PLAY_STORE = "https://play.google.com/store/apps/details?id=com.victorgis.chalet";
const BRAND_PAGE = "https://app.veespatial.com/chalet";

function Chalet() {
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
        title="Chalet App"
        description="Chalet connects property owners, real estate agents, tenants, and caretakers so the people around a home can manage it together."
        keywords="Chalet app, property management, landlords, real estate agents, tenants, caretakers, Android"
      />

      <section className="px-6 pb-20 pt-32">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
            <Sparkles size={16} />
            <span>Property relationships, in one app</span>
          </div>
          <img
            src={mark}
            alt="Chalet mark"
            className="mx-auto mb-8 h-28 w-28 rounded-3xl object-cover shadow-lg"
          />
          <h1 className="mb-6 bg-gradient-to-r from-emerald-700 to-lime-600 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-7xl">
            Everyone around <br /> the property, together
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-slate-600 dark:text-slate-400">
            Chalet connects property owners, real estate agents, tenants, and
            caretakers. The people who look after a home finally share one place
            to do it, instead of a trail of chats and loose notes.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a href={PLAY_STORE} target="_blank" rel="noopener noreferrer">
              <button className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 hover:bg-slate-800 dark:bg-emerald-600 dark:hover:bg-emerald-700">
                <Smartphone size={20} />
                Get it on Google Play
              </button>
            </a>
            <a href={BRAND_PAGE}>
              <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-8 py-4 text-lg font-bold transition-all hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700">
                See it on Veespatial Global
              </button>
            </a>
          </div>
          <p className="mt-8 text-sm text-slate-500">200+ downloads on Google Play.</p>
        </div>
      </section>

      <section className="bg-white px-6 py-24 dark:bg-slate-800/50">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Four roles. One property.</h2>
            <p className="text-slate-500">
              A home has more than one person responsible for it. Chalet is built
              around that fact.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">
                <Users size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold">The right people</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Owners, agents, tenants, and caretakers each have a place in the
                relationship, so updates are not stuck with whoever last held the keys.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-lime-100 text-lime-700 dark:bg-lime-900/50 dark:text-lime-300">
                <Home size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold">The property record</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Keep the home, and the work around it, in a shared record instead
                of reconstructing the story from old messages.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 text-teal-700 dark:bg-teal-900/50 dark:text-teal-300">
                <MapPinned size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold">The place itself</h3>
              <p className="text-slate-600 dark:text-slate-400">
                The property stays on the map, so the conversation is about a real
                address and not an unnamed thread.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 md:flex-row">
          <div className="flex-1">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Built for the people who look after a home</h2>
            <ul className="space-y-4">
              {[
                "Owners see the property they are responsible for",
                "Agents keep the client relationship next to the listing work",
                "Tenants and caretakers stay in the same loop",
                "An Android app you can hand to the next person on the property",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="shrink-0 text-emerald-600" size={20} />
                  <span className="text-lg text-slate-600 dark:text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 inline-flex items-center gap-2 text-sm text-slate-500">
              <KeyRound size={16} />
              Roles stay distinct. The property stays shared.
            </p>
          </div>
          <div className="relative mx-auto flex aspect-[9/16] w-full max-w-[280px] items-center justify-center overflow-hidden rounded-[2rem] border-8 border-slate-900 bg-emerald-50 shadow-2xl dark:border-slate-700">
            <img src={mark} alt="" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-emerald-700 p-12 text-center text-white shadow-xl shadow-emerald-700/20">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">Put the property team in one app.</h2>
          <p className="mb-8 text-xl text-emerald-50">
            Chalet is live on Google Play for owners, agents, tenants, and caretakers.
          </p>
          <a href={PLAY_STORE} target="_blank" rel="noopener noreferrer">
            <button className="mx-auto flex items-center gap-2 rounded-xl bg-white px-10 py-4 text-lg font-bold text-emerald-800 transition-colors hover:bg-emerald-50">
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
              <div className="rounded-lg bg-emerald-100 p-2 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">
                <ShieldCheck size={24} />
              </div>
              <h2 className="text-3xl font-bold">Privacy</h2>
            </div>
            <div className="space-y-4 text-slate-600 dark:text-slate-400">
              <p>
                Chalet uses the account and property details you provide so the
                people responsible for a home can work together. That information
                is for running the relationship inside the app. It is not sold as
                a marketing list.
              </p>
              <p>
                Questions about your data can go through the contact form on this
                site, or to contact@veespatial.com.
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
                Chalet is a coordination tool. It does not replace a tenancy
                agreement, an agency mandate, or the law that applies to a
                property. Confirm the important facts with the people who have
                authority over the home.
              </p>
              <p>
                You are responsible for inviting only the people who should see a
                given property, and for keeping your login to yourself.
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

export default Chalet;
