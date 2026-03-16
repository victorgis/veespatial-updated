import React, { useEffect } from "react";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import { 
  Receipt, 
  Zap, 
  FolderOpen, 
  Youtube,
  Chrome, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  FileText,
  ShieldCheck,
  Download,
  Smartphone,
  FileImage,
  Save,
  Cloud
} from "lucide-react";

function ReceiptWalletChromeExtension() {

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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-medium mb-6">
            <Sparkles size={16} />
            <span>Automatic Receipt Organization</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
            Never Lose a Receipt <br /> Again
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10">
            Receipt Wallet automatically saves your online shopping receipts to Google Drive. 
            Shop online, and we'll handle the rest—organized, secure, and accessible anywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://chromewebstore.google.com/detail/ldlenndfbagaabopndhijodimjbliiil?utm_source=item-share-cb" target="_blank" rel="noopener noreferrer">
              <button className="flex items-center justify-center gap-2 bg-slate-900 dark:bg-green-600 hover:bg-slate-800 dark:hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105">
                <Chrome size={20} />
                Add to Chrome — It's Free
              </button>
            </a>
            
            <a href="https://play.google.com/store/apps/details?id=com.victorgis.receiptwallet" target="_blank" rel="noopener noreferrer">
              <button className="flex items-center justify-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                <Smartphone size={20} />
                Get Mobile App
              </button>
            </a>
          </div>
          
          <div className="mt-8">
            <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
              <Youtube size={20} />
              <span className="underline">Watch How It Works</span>
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 opacity-60 grayscale">
            <span className="font-bold text-xl tracking-tighter">Amazon</span>
            <span className="font-bold text-xl tracking-tighter">eBay</span>
            <span className="font-bold text-xl tracking-tighter">Shopify</span>
            <span className="font-bold text-xl tracking-tighter">& More</span>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 px-6 bg-white dark:bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Secure, Automatic</h2>
            <p className="text-slate-500">Everything you need to keep your receipts organized.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 shadow-sm">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 rounded-lg flex items-center justify-center mb-6">
                <Save size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Auto-Save Receipts</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Shop online and we automatically detect and save your receipts. No manual downloads or screenshots needed.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-2xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mb-6">
                <Cloud size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Google Drive Storage</h3>
              <p className="text-slate-600 dark:text-slate-400">
                All receipts are saved directly to your Google Drive in a dedicated folder. Access them anywhere, anytime.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-2xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 rounded-lg flex items-center justify-center mb-6">
                <FileImage size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Multiple Formats</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Each receipt is saved in both PNG and PDF formats, giving you flexibility for any use case.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Receipt Wallet Works</h2>
            <p className="text-slate-500">Three simple steps to organized receipts</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Install Extension</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Add Receipt Wallet to Chrome and connect your Google Drive account. One-time setup takes less than a minute.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Shop Online</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Continue shopping normally on your favorite sites. Receipt Wallet works in the background automatically.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Access Anytime</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Open your Google Drive and find all your receipts organized in the Receipt Wallet folder. Simple as that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 px-6 bg-white dark:bg-slate-800/50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Complete Privacy & Control</h2>
            <ul className="space-y-4">
              {[
                "Your receipts go directly to YOUR Google Drive",
                "We never see, store, or access your receipt data",
                "All files are saved in a dedicated Receipt Wallet folder",
                "Available on both Chrome Extension and Mobile App",
                "Works with major shopping sites automatically",
                "Both PNG and PDF formats for maximum compatibility"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />
                  <span className="text-lg text-slate-600 dark:text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 bg-slate-200 dark:bg-slate-800 rounded-2xl aspect-video flex items-center justify-center border-4 border-slate-300 dark:border-slate-700 shadow-2xl relative overflow-hidden">
             {/* Placeholder for a Demo Video/Screenshot */}
             <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent"></div>
             <FolderOpen className="w-24 h-24 text-slate-400" />
          </div>
        </div>
      </section>

      {/* Mobile App CTA */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <Smartphone size={16} />
                  <span>Also Available on Mobile</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Take Receipt Wallet Anywhere
                </h2>
                <p className="text-blue-100 text-lg mb-6">
                  Scan physical receipts, save digital ones, and access everything from your phone. Available for iOS and Android.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                    <Download size={20} />
                    App Store
                  </button> */}
                  <a href="https://play.google.com/store/apps/details?id=com.victorgis.receiptwallet" target="_blank" rel="noopener noreferrer">
                    <button className="bg-white text-purple-600 px-6 py-3 rounded-xl font-bold hover:bg-purple-50 transition-colors flex items-center justify-center gap-2">
                      <Download size={20} />
                      Play Store
                    </button>
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-64 h-64 bg-white/10 rounded-3xl backdrop-blur-sm flex items-center justify-center">
                  <Smartphone className="w-32 h-32 text-white/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-green-600 rounded-3xl p-12 text-center text-white shadow-xl shadow-green-500/20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to organize your receipts?</h2>
          <p className="text-green-100 text-xl mb-8">
            Join thousands of shoppers who never lose a receipt. Free to install, easy to use.
          </p>
          <a href="https://chromewebstore.google.com/detail/ldlenndfbagaabopndhijodimjbliiil?utm_source=item-share-cb">
            <button className="bg-white text-green-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-colors flex items-center gap-2 mx-auto">
              Get Started for Free
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
              <div className="p-2 bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 rounded-lg">
                <ShieldCheck size={24} />
              </div>
              <h2 className="text-3xl font-bold">Privacy Policy</h2>
            </div>
            <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 space-y-4">
              <p>Last updated: March 2026</p>
              <p>
                At Receipt Wallet, your privacy is our highest priority. This policy explains how we handle your data when you use our Chrome Extension and Mobile App.
              </p>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">1. Data Collection</h3>
              <p>
                We do not collect, store, or view your receipt data. All receipts are saved directly to YOUR Google Drive account. Receipt Wallet only has permission to create and write files to the dedicated Receipt Wallet folder in your Drive.
              </p>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">2. Google Drive Integration</h3>
              <p>
                When you connect your Google Drive, we request limited access to create a Receipt Wallet folder and save receipt files. We do not read, access, or modify any other files in your Google Drive. Your receipts remain completely private and under your control.
              </p>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">3. Receipt Processing</h3>
              <p>
                Receipt detection happens locally in your browser. We only process the receipt image or PDF to save it in both PNG and PDF formats to your Google Drive. No receipt data is transmitted to our servers or stored anywhere except your personal Google Drive.
              </p>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">4. Mobile App</h3>
              <p>
                Our mobile app follows the same privacy principles. Scanned receipts are processed on your device and uploaded directly to your Google Drive. We never have access to your receipt content.
              </p>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">5. Third-Party Services</h3>
              <p>
                We use Google Drive API for storage. Your use of Google Drive is subject to Google's Privacy Policy. We do not share your data with any other third parties.
              </p>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div id="terms" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-lg">
                <FileText size={24} />
              </div>
              <h2 className="text-3xl font-bold">Terms & Conditions</h2>
            </div>
            <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 space-y-4">
              <p>
                By installing and using Receipt Wallet (Chrome Extension or Mobile App), you agree to the following terms:
              </p>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">1. Usage License</h3>
              <p>
                We grant you a personal, non-transferable license to use Receipt Wallet for organizing and storing your online shopping receipts. The service is provided free of charge for personal use.
              </p>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">2. Google Drive Requirements</h3>
              <p>
                Receipt Wallet requires a Google Drive account to function. You are responsible for your Google Drive storage limits and any associated costs from Google. Receipt files count toward your Google Drive storage quota.
              </p>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">3. Supported Platforms</h3>
              <p>
                The Chrome Extension works with major online shopping platforms. While we strive to support all retailers, we cannot guarantee compatibility with every website. The Mobile App supports receipt scanning and manual uploads.
              </p>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">4. Service Availability</h3>
              <p>
                Receipt Wallet is provided "as is" without warranties. While we work to ensure reliable service, we are not liable for any data loss, missed receipts, or service interruptions. We recommend keeping important receipts in multiple locations.
              </p>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">5. User Responsibilities</h3>
              <p>
                You are responsible for maintaining the security of your Google account. Receipt Wallet does not store your Google credentials. If you revoke Receipt Wallet's access to your Google Drive, the extension will stop functioning until you reconnect.
              </p>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">6. Termination</h3>
              <p>
                You may stop using Receipt Wallet at any time by uninstalling the extension or app. Your saved receipts will remain in your Google Drive. We reserve the right to discontinue the service with reasonable notice.
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

export default ReceiptWalletChromeExtension;