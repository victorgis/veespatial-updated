import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Smartphone, Globe, Chrome, Download } from "lucide-react";
import releaf from "../../assets/images/releaf.png";
import flexxy from "../../assets/images/flexxy.png";
import replygenie from "../../assets/images/replygenieIcon.png";
import regimenbible from "../../assets/images/rb-dak.png"
import receiptWallet from "../../assets/images/ReceiptWallet.png"
import subscriptionTracker from "../../assets/images/SubscriptionApp.png"
import nersappIcon from "../../assets/images/nersapp_500.png"
import breics from "../../assets/images/Breics.png";
import cocDevotional from "../../assets/images/COC.png";
import queueMarshalIcon from "../../assets/images/queuemarshal.png";
import { QuickFixCTA } from "@/components/whatsapp-section";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact-section";
import { useEffect } from "react";
// import crossSafe from "../../assets/images/crossSafe.png";
// import eoc from "../../assets/images/eoc.png";

const liveApps = {
    chrome: [
    {
      title: "ReplyGenie",
      description: "This Chrome extension helps you craft thoughtful responses to posts on X (formerly Twitter) and LinkedIn.",
      image: replygenie,
      technologies: ["AI", "TypeScript", "Chrome API", "Local Storage", "Supabase"],
      chromeStoreLink: "https://chromewebstore.google.com/detail/fbiahimcnacfnbiefnopkchegbkpbhke?utm_source=item-share-cb",
    //   users: "5K+ users",
    },
    {
      title: "Receipt Wallet",
      description: "Saves your online shopping receipts directly from your browser into your Google Drive. Mobile App version also available.",
      image: receiptWallet,
      technologies: ["TypeScript", "Chrome API", "Google Drive", "Supabase"],
      chromeStoreLink: "https://chromewebstore.google.com/detail/ldlenndfbagaabopndhijodimjbliiil?utm_source=item-share-cb",
      webpage: "/receiptwallet",
    //   users: "3K+ users",
    },
  ],
  mobile: [
    // {
    //   title: "CrossSafe",
    //   description:
    //     "Safe road crossing and geofencing mobile app with real-time alerts and integrated mapping services.",
    //   image: crossSafe,
    //   technologies: ["React Native", "Expo", "Google Maps", "Firebase", "TypeScript"],
    //   appStoreLink: "#",
    //   playStoreLink: "#",
    //   downloads: "10K+",
    // },
    {
      title: "FlexxyDrive",
      description:
        "Smart ride-sharing platform making mobility sustainable and community-driven.",
      image: flexxy,
      technologies: ["React Native", "Google Maps", "Socket.io", "Redux", "Django"],
      appStoreLink: "https://apps.apple.com/app/id6747836375",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.flexxydrive.android",
      downloads: "25K+",
    },
    {
      title: "COC Devotional & Hymns",
      description:
        "Mobile app for the Christ Of Church (COC) community, providing daily devotionals, and hymns.",
      image: cocDevotional,
      technologies: ["React Native", "Expo", "Firebase", "TypeScript"],
    //   appStoreLink: "#",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.coc.coc_devotional_and_hymn",
      downloads: "3K+",
    },
    {
      title: "Nersapp",
      description:
        "Manage your academic institution with Nersapp - your all-in-one app for schedules, grades, and results.",
      image: nersappIcon,
      technologies: ["React Native", "Expo", "TypeScript"],
    //   appStoreLink: "#",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.victorgis.nersapp",
      downloads: "200+",
    },
    {
      title: "Subscription Tracker",
      description:
        "Tracks the expiration dates of your online subscriptions and sends you timely reminders to avoid unexpected charges.",
      image: subscriptionTracker,
      technologies: ["React Native", "Expo", "Supabase", "Firebase", "TypeScript"],
    //   appStoreLink: "#",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.victorgis.subscriptiontrackerapp",
      downloads: "20+",
    },
    
    {
      title: "Receipt Wallet",
      description:
        "Stores your online shopping receipts in Google Drive, accessible from both mobile and desktop.",
      image: receiptWallet,
      technologies: ["React Native", "Expo", "Supabase", "Firebase", "TypeScript"],
    //   appStoreLink: "#",
      playStoreLink: "", //"https://play.google.com/store/apps/details?id=com.victorgis.receiptwallet",
      downloads: "Join Mobile Testers (Android)", // Placeholder until we have actual download numbers  
    },

    {
      title: "Bible Regimen",
      description:
        "Build a consistent relationship with God through structured reading regimens, heartfelt devotionals, and a prayer life.",
      image: regimenbible,
      technologies: ["React Native", "Expo", "Supabase", "Firebase", "TypeScript"],
    //   appStoreLink: "#",
      playStoreLink: "", //"https://play.google.com/store/apps/details?id=com.victorgis.bibleregimen",
      downloads: "Join Mobile Testers (Android)", // Placeholder until we have actual download numbers
    },
    
  ],
  web: [
    {
      title: "SITE",
      description: "Enterprise geospatial factory positioning system with advanced analytics",
      image: releaf,
      technologies: ["Vue.js", "Esri Maps", "ArcGIS JS API", "Python", "SQL"],
      liveLink: "https://www.wereleaf.earth/site",
      users: "500+ active users",
    },
    // {
    //   title: "COVID-19 City Dashboard",
    //   description: "Real-time analytics dashboard for COVID-19 Case Response Centre",
    //   image: eoc,
    //   technologies: ["ArcGISPro", "ArcGIS Online", "D3.js", "Esri Maps", "MongoDB"],
    //   liveLink: "#",
    //   users: "Government deployment",
    // },
    // {
    //   title: "SmartFollowPro",
    //   description:
    //     "Automated follow-up tool for small businesses and solopreneurs with AI-powered personalization.",
    //   image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    //   technologies: ["Next.js", "AI", "PostgreSQL", "Gmail Integration", "Calendar Integration"],
    //   liveLink: "https://smartfollowpro.netlify.app/",
    //   users: "1K+ businesses",
    // },
    // {
    //   title: "Breics",
    //   description:
    //     "Real estate wealth management platform providing secure investment access to everyone.",
    //   image: breics,
    //   technologies: ["Nuxt.js", "PHP", "Google Maps", "Vuex"],
    //   liveLink: "https://breics.com",
    //   users: "1K+",
    // },
    {
      title: "Queue Marshal",
      description:
        "Access smart, free online tools that streamline your logistics workflow and boost productivity effortlessly.",
      image: queueMarshalIcon,
      technologies: ["Angular.js", "Supabase", "Google Maps"],
      liveLink: "https://queue-marshal-develop.netlify.app/",
      users: "1K+",
    },
  ],
  
};

const techColors = {
  "React Native": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
  Expo: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
  ArcGISPro: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
  Firebase: "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
  "Gmail Integration": "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
  Redux: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
  TypeScript: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
  JavaScript: "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
  "Vue.js": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
  Python: "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
  AI: "bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200",
  "Calendar Integration": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
  PostgreSQL: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
  "Next.js": "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
  "D3.js": "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
  "Socket.io": "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
  MongoDB: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
  "Google Maps": "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
  "Esri Maps": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
  Django: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
  "Nuxt.js": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
  "ArcGIS JS API": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
  "Chrome API": "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
  "Local Storage": "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
  "Google Drive": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
  PHP: "bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200",
  Vuex: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
  SQL: "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
  ArcGIS: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
  "ArcGIS Online": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
};

const categoryIcons = {
  mobile: Smartphone,
  web: Globe,
  chrome: Chrome,
};

const categoryTitles = {
  mobile: "Mobile Apps",
  web: "Web Applications",
  chrome: "Chrome Extensions",
};

export default function LiveAppsSection() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto", // changes to "smooth" if you want a smooth scroll to the top
    });
  }, []);
  return (
    <>
      <section id="live-apps" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mt-20 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Live Applications
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
          >
            Production applications serving real users across mobile, web, and browser platforms
          </motion.p>
        </div>

        {/* Categories */}
        {Object.entries(liveApps).map(([category, apps], categoryIndex) => {
          const Icon = categoryIcons[category as keyof typeof categoryIcons];
          return (
            <div key={category} className="mb-16">
              {/* Category Header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <Icon className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100">
                  {categoryTitles[category as keyof typeof categoryTitles]}
                </h3>
                <div className="flex-grow h-px bg-slate-200 dark:bg-slate-700 ml-4"></div>
              </motion.div>

              {/* Apps Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {apps.map((app: any, index: number) => (
                  <motion.div
                    key={app.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="bg-slate-50 dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl overflow-hidden h-full transition-all duration-300 hover:-translate-y-1">
                      <div className="aspect-video overflow-hidden relative">
                        <img
                          src={app.image}
                          alt={app.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                        {/* Live Badge */}
                        <div className="absolute top-3 right-3">
                          <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                            LIVE
                          </span>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex flex-col h-full">
                          <h4 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-100">
                            {app.title}
                          </h4>
                          <p className="text-slate-600 dark:text-slate-400 mb-4 flex-grow">
                            {app.description}
                          </p>

                          {/* Stats */}
                          {(app.downloads || app.users) && (
                            <div className="mb-4 px-3 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                              <p className="text-sm font-medium text-blue-700 dark:text-blue-300">
                                {app.downloads || app.users}
                              </p>
                            </div>
                          )}

                          {/* Technologies */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {app.technologies?.map((tech: string) => (
                              <span
                                key={tech}
                                className={`px-3 py-1 text-xs rounded-full font-medium ${
                                  techColors[tech as keyof typeof techColors] ||
                                  "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                                }`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Action Buttons */}
                          <div className="flex flex-wrap gap-2 mt-auto">
                            {app.appStoreLink && (
                              <Button variant="outline" size="sm" asChild className="flex-1">
                                <a
                                  href={app.appStoreLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center gap-2"
                                >
                                  <Download className="w-4 h-4" />
                                  App Store
                                </a>
                              </Button>
                            )}
                            {app.playStoreLink && (
                              <Button variant="outline" size="sm" asChild className="flex-1">
                                <a
                                  href={app.playStoreLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center gap-2"
                                >
                                  <Download className="w-4 h-4" />
                                  Play Store
                                </a>
                              </Button>
                            )}
                            {app.liveLink && (
                              <Button variant="default" size="sm" asChild className="flex-1">
                                <a
                                  href={app.liveLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center gap-2"
                                >
                                  <ExternalLink className="w-4 h-4" />
                                  Visit Site
                                </a>
                              </Button>
                            )}
                            {app.chromeStoreLink && (
                              <Button variant="outline" size="sm" asChild className="flex-1">
                                <a
                                  href={app.chromeStoreLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center gap-2"
                                >
                                  <Chrome className="w-4 h-4" />
                                  Add to Chrome
                                </a>
                              </Button>
                            )}
                            {app.webpage && (
                              <Button variant="default" size="sm" asChild className="flex-1">
                                <a
                                  href={app.webpage}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center gap-2"
                                >
                                  <Chrome className="w-4 h-4" />
                                  Visit Page
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
        <QuickFixCTA />
        
      </div>
    </section>
    <ContactSection />
    <Footer />
    </>
    
  );
}