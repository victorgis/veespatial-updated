import React, { useEffect } from "react";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import { 
  BellRing, 
  Zap, 
  PieChart, 
  Smartphone, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  FileText,
  ShieldCheck,
  CreditCard,
  Clock
} from "lucide-react";

function SubscriptionTracker() {

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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-6">
            <Sparkles size={16} />
            <span>Smart Financial Management</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            Stop Losing Money to <br /> Forgotten Subscriptions
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10">
            Track all your paid services in one place. Get alerts before trials end, 
            monitor your monthly burn rate, and take control of your digital spending.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://play.google.com/store/apps/details?id=com.victorgis.subscriptiontrackerapp" target="_blank" rel="noopener noreferrer">
              <button className="flex items-center justify-center gap-2 bg-slate-900 dark:bg-emerald-600 hover:bg-slate-800 dark:hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/20">
                <Smartphone size={20} />
                Get the Mobile App
              </button>
            </a>
            
            {/* <button className="flex items-center justify-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
               View All Features
            </button> */}
          </div>
          <div className="mt-12 flex items-center justify-center gap-8 opacity-60 grayscale">
            <span className="font-bold text-xl tracking-tighter">NETFLIX</span>
            <span className="font-bold text-xl tracking-tighter italic">Spotify</span>
            <span className="font-bold text-xl tracking-tighter">ICLOUD</span>
            <span className="font-bold text-xl tracking-tighter">ADOBE</span>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 px-6 bg-white dark:bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Never Be Surprised by a Charge Again</h2>
            <p className="text-slate-500">Powerful tools to keep your bank account healthy and your budget on track.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 rounded-lg flex items-center justify-center mb-6">
                <BellRing size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Trial Expiry Alerts</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Love free trials? Get a notification 24 hours before your card is charged so you can cancel in time.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-2xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mb-6">
                <PieChart size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Spending Analytics</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Visualize where your money goes. See a clear breakdown of entertainment, utility, and software costs.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-2xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 shadow-sm">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 rounded-lg flex items-center justify-center mb-6">
                <CreditCard size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Card Mapping</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Organize which subscriptions are tied to which debit or credit card to avoid failed payments and overdrafts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Automate Your Savings</h2>
            <ul className="space-y-4">
              {[
                "Calculate total yearly spending automatically",
                "Receive weekly budget summaries",
                "Track price hikes on your favorite services",
                "History log of all your digital recurring costs"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-emerald-500" size={20} />
                  <span className="text-lg text-slate-600 dark:text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 bg-slate-200 dark:bg-slate-800 rounded-3xl aspect-[9/16] max-w-[280px] flex items-center justify-center border-4 border-slate-300 dark:border-slate-700 shadow-2xl relative overflow-hidden mx-auto">
             <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent"></div>
             <p className="text-sm font-mono text-slate-500">App Dashboard Preview</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-emerald-600 rounded-3xl p-12 text-center text-white shadow-xl shadow-emerald-500/20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to trim your monthly bills?</h2>
          <p className="text-emerald-100 text-xl mb-8">
            Join thousands of users saving an average of $300/year by cutting unused subscriptions.
          </p>
          <a href="https://play.google.com/store/apps/details?id=com.victorgis.subscriptiontrackerapp" target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-emerald-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-colors flex items-center gap-2 mx-auto">
              Download for Free
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
              <div className="p-2 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 rounded-lg">
                <ShieldCheck size={24} />
              </div>
              <h2 className="text-3xl font-bold">Privacy Policy</h2>
            </div>
            <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 space-y-4">
              <p>Last updated: January 2024</p>
              <p>
                We value your financial privacy. This policy outlines how your data is handled within the Subscription Tracker app.
              </p>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">1. Data Security</h3>
              <p>
                We do not ask for your bank login credentials. All subscription data is entered manually or via receipt scanning that happens locally on your device where possible.
              </p>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">2. Cloud Syncing</h3>
              <p>
                Your subscription list is encrypted and synced to your private account so you can access it across multiple devices. We never share your spending habits with third parties.
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
                By using the Subscription Tracker app, you agree to the following:
              </p>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">1. Information Accuracy</h3>
              <p>
                The app provides reminders based on user input. We are not responsible for bank charges or missed cancellations due to incorrect dates or notification settings on your device.
              </p>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">2. Premium Features</h3>
              <p>
                Certain analytics and bulk-export features may require a one-time upgrade or a pro-tier status.
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

export default SubscriptionTracker;