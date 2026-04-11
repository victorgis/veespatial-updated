import React, { useEffect } from "react";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import { 
  BookOpen, 
  Zap, 
  Heart, 
  PlayCircle,
  Smartphone, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  FileText,
  ShieldCheck,
  Calendar,
  // Pray
} from "lucide-react";

function BibleRegimen() {

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);
  
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6">
            <Sparkles size={16} />
            <span>Transform Your Spiritual Discipline</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-indigo-600 to-slate-500 bg-clip-text text-transparent">
            Your Daily Spiritual <br /> Growth Companion
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10">
            Build a consistent relationship with God through structured reading regimens, 
            heartfelt devotionals, and a focused prayer life. All in one mobile experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <button className="flex items-center justify-center gap-2 bg-slate-900 dark:bg-indigo-600 hover:bg-slate-800 dark:hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105">
                <Smartphone size={20} />
                {/* Download for Android */}
                Join Mobile Testers (Android)
              </button>
            </a>
            
            {/* <a href="#" target="_blank" rel="noopener noreferrer">
              <button  className="flex items-center justify-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                <PlayCircle size={20} />Watch Demo
              </button>
            </a> */}
          </div>
          <div className="mt-12 flex items-center justify-center gap-8 opacity-60 grayscale">
            <span className="font-bold text-xl tracking-tighter">DAILY BREAD</span>
            <span className="font-bold text-xl tracking-tighter italic">REGIMEN</span>
            <span className="font-bold text-xl tracking-tighter">PRAYER VIGIL</span>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 px-6 bg-white dark:bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Pillars of Your Regimen</h2>
            <p className="text-slate-500">Tools designed to keep you edified, consistent, and connected.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-lg flex items-center justify-center mb-6">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Reading Regimens</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Customized plans to help you read through the Bible systematically. Track your progress and stay on course daily.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-2xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 shadow-sm">
              <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-400 rounded-lg flex items-center justify-center mb-6">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Daily Devotionals</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Fresh, edifying content delivered to your phone every morning to jumpstart your day with the Word of God.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-2xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 shadow-sm">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 rounded-lg flex items-center justify-center mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Prayer Points</h3>
              <p className="text-slate-600 dark:text-slate-400">
                A dedicated space to document and track your prayer requests, vigils, and testimonies of answered prayers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Designed for Consistency</h2>
            <ul className="space-y-4">
              {[
                "Smart notifications to keep your streak alive",
                "Offline access to your reading plans",
                "Clean, distraction-free reading interface",
                "Built specifically for the Android ecosystem"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-indigo-500" size={20} />
                  <span className="text-lg text-slate-600 dark:text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 bg-slate-200 dark:bg-slate-800 rounded-3xl aspect-[9/16] max-w-[300px] flex items-center justify-center border-8 border-slate-900 dark:border-slate-700 shadow-2xl relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent"></div>
             <p className="text-sm font-mono text-slate-500">App Interface Screenshot</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-indigo-600 rounded-3xl p-12 text-center text-white shadow-xl shadow-indigo-500/20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to start your regimen?</h2>
          <p className="text-indigo-100 text-xl mb-8">
            Join thousands of believers who have streamlined their study and prayer lives.
          </p>
          <a href="#">
            <button className="bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-colors flex items-center gap-2 mx-auto">
              {/* Download from Play Store */}
              Join Mobile Testers (Android)
              <ArrowRight size={20} />
            </button>
          </a>
        </div>
      </section>

      {/* --- LEGAL SECTIONS --- */}
      <section className="py-24 px-6 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto space-y-24">
          
          {/* Privacy Policy */}
          <div id="privacy" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-lg">
                <ShieldCheck size={24} />
              </div>
              <h2 className="text-3xl font-bold">Privacy Policy</h2>
            </div>
            <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 space-y-4">
              <p>Last updated: April 2024</p>
              <p>
                At Bible Regimen, your spiritual journey is personal. We are committed to protecting the privacy of our users.
              </p>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">1. Data Storage</h3>
              <p>
                Your prayer points and personal notes are stored securely. We do not sell your personal spiritual data to third-party advertisers.
              </p>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">2. Account Information</h3>
              <p>
                We collect minimal data required to synchronize your reading progress across your Android devices, typically limited to your email and basic profile information.
              </p>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div id="terms" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 rounded-lg">
                <FileText size={24} />
              </div>
              <h2 className="text-3xl font-bold">Terms & Conditions</h2>
            </div>
            <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 space-y-4">
              <p>
                By using the Bible Regimen mobile app, you agree to:
              </p>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">1. Usage</h3>
              <p>
                The app is provided for personal spiritual growth. Any use for commercial broadcasting of devotional content must be attributed to the Bible Regimen platform.
              </p>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">2. Content Integrity</h3>
              <p>
                While we strive for accuracy in our devotionals and regimens, we encourage users to always cross-reference content with their physical Bibles.
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

export default BibleRegimen;