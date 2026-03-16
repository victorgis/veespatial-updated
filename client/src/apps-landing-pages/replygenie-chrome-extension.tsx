import React, { useEffect } from "react";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import { 
  MessageSquare, 
  Zap, 
  Image as ImageIcon, 
  Youtube,
  Chrome, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  FileText,
  ShieldCheck
} from "lucide-react";

function ReplyGenie() {

  // Add this effect to handle the initial hash load
  useEffect(() => {
    // Check if there is a hash in the URL (e.g., #privacy)
    if (window.location.hash) {
      const id = window.location.hash.substring(1); // remove the '#'
      const element = document.getElementById(id);
      if (element) {
        // Add a tiny delay to ensure the DOM is fully painted
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            <Sparkles size={16} />
            <span>AI-Powered Social Media Growth</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
            Write Smarter Replies <br /> on X & LinkedIn
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10">
            REPLY TWITTER & LINKEDIN (ReplyGenie) helps you craft thoughtful, context-aware responses instantly. 
            Engage with your audience, build authority, and save hours of manual typing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center gap-2 bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105">
              <Chrome size={20} />
              Add to Chrome — It's Free
            </button>
            <button className="flex items-center justify-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
              <Youtube size={20} />See How it Works
            </button>
          </div>
          <div className="mt-12 flex items-center justify-center gap-8 opacity-60 grayscale">
            <span className="font-bold text-xl tracking-tighter">X / TWITTER</span>
            <span className="font-bold text-xl tracking-tighter italic">LinkedIn</span>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 px-6 bg-white dark:bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Power Users</h2>
            <p className="text-slate-500">Everything you need to dominate social media conversations.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Smart AI Replies</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Context-aware responses that sound natural and human. The AI reads the post so you don't have to overthink.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-2xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 rounded-lg flex items-center justify-center mb-6">
                <MessageSquare size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Multiple Tones</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Switch between Professional, Casual, Humorous, or Supportive tones with a single click to match the vibe.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-2xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 shadow-sm">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 rounded-lg flex items-center justify-center mb-6">
                <ImageIcon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Image Replies</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Stand out in a sea of text. Generate or attach visual responses to boost your engagement rate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Native Workflow Integration</h2>
            <ul className="space-y-4">
              {[
                "Works directly inside X and LinkedIn comment boxes",
                "No more switching tabs or copy-pasting",
                "Built specifically for the Chrome browser",
                "Lightweight and doesn't slow down your feed"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span className="text-lg text-slate-600 dark:text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 bg-slate-200 dark:bg-slate-800 rounded-2xl aspect-video flex items-center justify-center border-4 border-slate-300 dark:border-slate-700 shadow-2xl relative overflow-hidden">
             {/* Placeholder for a Demo Video/Screenshot */}
             <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
             <p className="text-sm font-mono text-slate-500">Demo Video/Screenshot</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-blue-600 rounded-3xl p-12 text-center text-white shadow-xl shadow-blue-500/20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to scale your social presence?</h2>
          <p className="text-blue-100 text-xl mb-8">
            Join founders, marketers, and creators who save 5+ hours a week with ReplyGenie.
          </p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors flex items-center gap-2 mx-auto">
            Get Started for Free
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* --- LEGAL SECTIONS --- */}
      <section className="py-24 px-6 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto space-y-24">
          
          {/* Privacy Policy */}
          <div id="privacy" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-lg">
                <ShieldCheck size={24} />
              </div>
              <h2 className="text-3xl font-bold">Privacy Policy</h2>
            </div>
            <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 space-y-4">
              <p>Last updated: October 2023</p>
              <p>
                At REPLY TWITTER & LINKEDIN (ReplyGenie), we take your privacy seriously. This policy outlines how we handle your data when you use our Chrome Extension and associated services.
              </p>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">1. Data Collection</h3>
              <p>
                We do not store your social media passwords. Our extension only accesses the content of the post you are currently viewing to generate relevant AI responses.
              </p>
              {/* <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">2. Google Drive Integration</h3>
              <p>
                If you use our receipt syncing features, we request access to your Google Drive to save files. We only access the specific folders created by ReplyGenie and do not read other files in your Drive.
              </p> */}
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">2. AI Processing</h3>
              <p>
                Text snippets are processed via encrypted channels to our AI models to generate replies. This data is not used for training global models and is deleted after processing.
              </p>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div id="terms" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 rounded-lg">
                <FileText size={24} />
              </div>
              <h2 className="text-3xl font-bold">Terms & Conditions</h2>
            </div>
            <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 space-y-4">
              <p>
                By installing the REPLY TWITTER & LINKEDIN (ReplyGenie) Chrome Extension, you agree to the following terms:
              </p>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">1. Usage License</h3>
              <p>
                We grant you a personal, non-transferable license to use ReplyGenie for personal or professional social media management.
              </p>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">2. Free Tier Limitations</h3>
              <p>
                Free users are limited to 2 receipt uploads or a set number of AI replies per month. Attempting to bypass these limits via multiple accounts is a violation of our terms.
              </p>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">3. Responsible AI Use</h3>
              <p>
                You are responsible for the content you post. ReplyGenie is a tool to assist you, but you should review all AI-generated content to ensure it complies with the community guidelines of X (Twitter) and LinkedIn.
              </p>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">4. Termination</h3>
              <p>
                We reserve the right to terminate access to users who use the tool for spamming, harassment, or automated botting behaviors.
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

export default ReplyGenie;