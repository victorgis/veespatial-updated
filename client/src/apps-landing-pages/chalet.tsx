import { useEffect, useState } from "react";
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
  Trash2,
  AlertTriangle,
  Mail,
  Database,
  Clock,
  Building2,
  ExternalLink,
  ShieldAlert,
} from "lucide-react";

const PLAY_STORE = "https://play.google.com/store/apps/details?id=com.victorgis.chalet";
const BRAND_PAGE = "https://veespatial.com/chalet";
const APP_NAME = "Chalet";
const DEVELOPER_NAME = "Victor Essang (Precise GIS Limited)";
const PACKAGE_NAME = "com.victorgis.chalet";
const SUPPORT_EMAIL = "contact@precisegislabs.com";

function Chalet() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "tenant",
    reason: "",
    confirmed: false,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    const handleHashScroll = () => {
      if (window.location.hash) {
        const hash = window.location.hash.substring(1).toLowerCase();
        let targetId = hash;
        if (
          hash === "delete-account" ||
          hash === "data-deletion" ||
          hash === "deletion" ||
          hash === "delete"
        ) {
          targetId = "account-deletion";
        }
        const element =
          document.getElementById(targetId) || document.getElementById(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 150);
        }
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
    };

    handleHashScroll();
    window.addEventListener("hashchange", handleHashScroll);
    return () => window.removeEventListener("hashchange", handleHashScroll);
  }, []);

  const handleDeletionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email.trim()) {
      setFormError("Please enter your registered email address.");
      return;
    }
    if (!formData.confirmed) {
      setFormError("Please check the confirmation box to proceed.");
      return;
    }
    setFormError("");
    setFormSubmitted(true);
  };

  const mailtoBody = encodeURIComponent(
    `Dear Chalet Support / Victor Essang,\n\nPlease process the permanent deletion of my Chalet account and all associated personal data from your systems.\n\nAccount Details:\n- App Name: Chalet (com.victorgis.chalet)\n- Registered Email: ${formData.email || "[Your Email]"}\n- Full Name: ${formData.fullName || "[Your Name]"}\n- User Role: ${formData.role}\n- Reason (Optional): ${formData.reason || "N/A"}\n\nI confirm that I understand this deletion request will permanently remove my profile, property associations, messages, and account credentials.\n\nThank you.`
  );
  const mailtoLink = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
    `Chalet App - Account and Data Deletion Request (${formData.email || "User"})`
  )}&body=${mailtoBody}`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-900 dark:text-slate-100">
      <Seo
        title="Chalet App | Property Management & Account Data Deletion"
        description="Chalet connects property owners, real estate agents, tenants, and caretakers so the people around a home can manage it together. Official app landing page, privacy policy, and account data deletion instructions by Victor Essang (Veespatial Global)."
        keywords="Chalet app, property management, landlords, real estate agents, tenants, caretakers, Android, account deletion, data deletion, Victor Essang, Veespatial"
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

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-500 dark:text-slate-400">
            <span>200+ downloads on Google Play</span>
            <span>•</span>
            <a
              href="#privacy"
              className="underline-offset-4 hover:underline hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              Privacy Policy
            </a>
            <span>•</span>
            <a
              href="#terms"
              className="underline-offset-4 hover:underline hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              Terms of Use
            </a>
            <span>•</span>
            <a
              href="#account-deletion"
              className="font-medium text-emerald-700 underline-offset-4 hover:underline dark:text-emerald-400"
            >
              Account &amp; Data Deletion
            </a>
          </div>
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

      {/* Legal, Privacy & Account Deletion Section */}
      <section className="border-t border-slate-200 px-6 py-24 dark:border-slate-800">
        <div className="mx-auto max-w-4xl space-y-20">
          {/* Quick Anchor Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-3 border-b border-slate-200 pb-8 dark:border-slate-800">
            <a
              href="#account-deletion"
              className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-1.5 text-sm font-semibold text-rose-700 transition hover:bg-rose-200 dark:bg-rose-950/60 dark:text-rose-300 dark:hover:bg-rose-900/80"
            >
              <Trash2 size={16} />
              Account &amp; Data Deletion
            </a>
            <a
              href="#privacy"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-800 transition hover:bg-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:hover:bg-emerald-900/80"
            >
              <ShieldCheck size={16} />
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="inline-flex items-center gap-2 rounded-full bg-slate-200/80 px-4 py-1.5 text-sm font-medium text-slate-800 transition hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            >
              <FileText size={16} />
              Terms of Use
            </a>
          </div>

          {/* =========================================================================
              ACCOUNT & DATA DELETION SECTION
              (Complies with Google Play User Data - Account Deletion Requirement)
             ========================================================================= */}
          <div id="account-deletion" className="scroll-mt-24 space-y-8">
            <span id="delete-account" className="scroll-mt-24" />
            <span id="data-deletion" className="scroll-mt-24" />

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-rose-100 p-3 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300">
                  <Trash2 size={28} />
                </div>
                <div>
                  <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 md:text-4xl">
                    Chalet Account &amp; Data Deletion
                  </h2>
                  <p className="text-sm font-medium text-rose-700 dark:text-rose-400">
                    Google Play User Data Policy &amp; Data Safety Compliance
                  </p>
                </div>
              </div>
            </div>

            {/* Official Entity & App Identification Banner */}
            <div className="rounded-2xl border-2 border-emerald-300/80 bg-emerald-50/70 p-6 shadow-sm dark:border-emerald-800/80 dark:bg-emerald-950/30">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-emerald-600 p-2.5 text-white shadow-md">
                  <Building2 size={24} />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                      Application &amp; Developer Reference
                    </h3>
                    <span className="rounded-full bg-emerald-200/80 px-2.5 py-0.5 text-xs font-semibold text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
                      Official Play Store Entity
                    </span>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    This official data safety and account deletion policy applies to all registered users of the <strong>{APP_NAME}</strong> mobile application listed on Google Play, published and maintained by <strong>{DEVELOPER_NAME}</strong>.
                  </p>
                  <div className="grid gap-2 pt-2 text-sm sm:grid-cols-2">
                    <div className="rounded-lg bg-white/80 p-2.5 dark:bg-slate-900/60">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">Application Name: </span>
                      <span className="font-bold text-emerald-800 dark:text-emerald-300">{APP_NAME}</span>
                    </div>
                    <div className="rounded-lg bg-white/80 p-2.5 dark:bg-slate-900/60">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">Google Play Package ID: </span>
                      <code className="font-mono text-xs font-bold text-slate-800 dark:text-slate-200">
                        {PACKAGE_NAME}
                      </code>
                    </div>
                    <div className="rounded-lg bg-white/80 p-2.5 dark:bg-slate-900/60">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">Developer / Organization: </span>
                      <span className="text-slate-800 dark:text-slate-200">{DEVELOPER_NAME}</span>
                    </div>
                    <div className="rounded-lg bg-white/80 p-2.5 dark:bg-slate-900/60">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">Official Contact &amp; Support: </span>
                      <a
                        href={`mailto:${SUPPORT_EMAIL}`}
                        className="font-medium text-emerald-700 underline hover:text-emerald-800 dark:text-emerald-400"
                      >
                        {SUPPORT_EMAIL}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Overview Statement */}
            <div className="space-y-4 text-slate-600 dark:text-slate-400">
              <p className="text-base leading-relaxed">
                We believe in full transparency and control over your personal information. In accordance with <strong>Google Play&apos;s Account Deletion Policy</strong> and global privacy frameworks (including GDPR, CCPA, and LGPD), users of <strong>Chalet</strong> have the unconditional right to request the permanent deletion of their account and all associated personal data.
              </p>
              <p className="text-base leading-relaxed">
                You do <strong>not</strong> need to have the Chalet application installed on your device to submit an account deletion request. You can initiate deletion through method described below:
                {/* either of the two approved methods described below: */}
              </p>
            </div>

            {/* Step-by-Step Deletion Methods (In-App vs Web) */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Method 1: In-App */}
              {/* <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                <div>
                  <div className="mb-4 flex items-center gap-2.5 text-lg font-bold text-slate-900 dark:text-slate-100">
                    <div className="rounded-lg bg-emerald-100 p-2 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">
                      <Smartphone size={20} />
                    </div>
                    <span>Method 1: In-App Deletion</span>
                  </div>
                  <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">
                    If you currently have access to the Chalet mobile application on your Android phone:
                  </p>
                  <ol className="list-inside list-decimal space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
                    <li>
                      Open the <strong>Chalet</strong> app on your Android device.
                    </li>
                    <li>
                      Log in to your account with your registered credentials.
                    </li>
                    <li>
                      Navigate to the <strong>Profile / Settings</strong> screen (tap your profile avatar).
                    </li>
                    <li>
                      Select <strong>Account &amp; Security</strong> &rarr; tap <strong>Delete Account</strong>.
                    </li>
                    <li>
                      Read the warning prompt and tap <strong>Confirm Deletion</strong>.
                    </li>
                    <li>
                      Your account will immediately be signed out and queued for complete permanent deletion.
                    </li>
                  </ol>
                </div>
                <div className="mt-6 rounded-lg bg-slate-50 p-3 text-xs text-slate-500 dark:bg-slate-800/60 dark:text-slate-400">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Instant Access Revocation: </span>
                  Sessions are terminated immediately once confirmed inside the app.
                </div>
              </div> */}

              {/* Method 2: Online Web Request */}
              <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                <div>
                  <div className="mb-4 flex items-center gap-2.5 text-lg font-bold text-slate-900 dark:text-slate-100">
                    <div className="rounded-lg bg-rose-100 p-2 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300">
                      <Mail size={20} />
                    </div>
                    <span>Web / Online Request</span>
                    {/* <span>Method 2: Web / Online Request</span> */}
                  </div>
                  <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">
                    If you have uninstalled the Chalet app, lost your device, or prefer requesting online:
                  </p>
                  <ul className="list-inside list-disc space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
                    <li>
                      Submit the <strong>Online Deletion Request Form</strong> below directly on this web page.
                    </li>
                    <li>
                      Alternatively, send an email directly to{" "}
                      <a
                        href={mailtoLink}
                        className="font-semibold text-emerald-700 underline hover:text-emerald-800 dark:text-emerald-400"
                      >
                        {SUPPORT_EMAIL}
                      </a>{" "}
                      with the subject <em>&ldquo;Chalet - Account Deletion Request&rdquo;</em>.
                    </li>
                    <li>
                      Specify your <strong>registered email address</strong> and your role in Chalet (e.g. Owner, Agent, Tenant, or Caretaker).
                    </li>
                    <li>
                      Our data safety team will verify your ownership and process the permanent deletion within <strong>30 calendar days</strong>.
                    </li>
                  </ul>
                </div>
                <div className="mt-6 rounded-lg bg-slate-50 p-3 text-xs text-slate-500 dark:bg-slate-800/60 dark:text-slate-400">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">No Reinstall Needed: </span>
                  This web link enables complete account deletion without having to reinstall the app.
                </div>
              </div>
            </div>

            {/* Interactive Online Request Form */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900 md:p-8">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  Online Account Deletion Request Form
                </h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Fill in your registered Chalet details below to submit an online deletion ticket directly to our compliance team.
                </p>
              </div>

              {formSubmitted ? (
                <div className="rounded-2xl border border-emerald-300 bg-emerald-50/80 p-6 dark:border-emerald-800 dark:bg-emerald-950/40">
                  <div className="mb-3 flex items-center gap-3">
                    <CheckCircle2 className="text-emerald-600 dark:text-emerald-400" size={24} />
                    <h4 className="text-lg font-bold text-emerald-900 dark:text-emerald-200">
                      Account Deletion Request Initiated
                    </h4>
                  </div>
                  <p className="text-sm text-emerald-800 dark:text-emerald-300">
                    Thank you. We have recorded your account deletion request for{" "}
                    <strong>{formData.email}</strong> under the <strong>Chalet</strong> app ({PACKAGE_NAME}).
                  </p>
                  <p className="mt-2 text-sm text-emerald-800/90 dark:text-emerald-300/90">
                    Our compliance team will verify your account and execute the permanent deletion of your profile, properties, messages, and authentication data within <strong>30 calendar days</strong>.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <a
                      href={mailtoLink}
                      className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white shadow transition hover:bg-emerald-700"
                    >
                      <Mail size={16} />
                      Send Email Record to Support
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({
                          fullName: "",
                          email: "",
                          role: "tenant",
                          reason: "",
                          confirmed: false,
                        });
                      }}
                      className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleDeletionSubmit} className="space-y-5">
                  {formError && (
                    <div className="flex items-center gap-2 rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm font-medium text-rose-700 dark:border-rose-900/50 dark:bg-rose-950/40 dark:text-rose-300">
                      <AlertTriangle size={18} className="shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="e.g. John Doe"
                        className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-900 transition focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-100 dark:focus:bg-slate-800"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                        Registered Chalet Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-900 transition focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-100 dark:focus:bg-slate-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Primary Role in Chalet
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) =>
                        setFormData({ ...formData, role: e.target.value })
                      }
                      className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-900 transition focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-100 dark:focus:bg-slate-800"
                    >
                      <option value="tenant">Tenant / Client</option>
                      <option value="owner">Property Owner / Landlord</option>
                      <option value="agent">Real Estate Agent</option>
                      <option value="caretaker">Caretaker / Property Manager</option>
                      <option value="other">Other / Former User</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Reason for Deletion (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.reason}
                      onChange={(e) =>
                        setFormData({ ...formData, reason: e.target.value })
                      }
                      placeholder="Help us improve Chalet by sharing why you are deleting your account..."
                      className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-900 transition focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-100 dark:focus:bg-slate-800"
                    />
                  </div>

                  <div className="rounded-xl border border-rose-200 bg-rose-50/50 p-4 dark:border-rose-900/40 dark:bg-rose-950/20">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="confirm-delete"
                        checked={formData.confirmed}
                        onChange={(e) =>
                          setFormData({ ...formData, confirmed: e.target.checked })
                        }
                        className="mt-1 h-4 w-4 rounded border-slate-300 text-rose-600 focus:ring-rose-500 dark:border-slate-700"
                      />
                      <label
                        htmlFor="confirm-delete"
                        className="text-xs leading-relaxed text-slate-700 dark:text-slate-300"
                      >
                        <strong>Permanent Action:</strong> I understand and confirm that deleting my <strong>Chalet</strong> account will permanently and irreversibly erase my profile, linked property records, messages, and uploaded files. This action cannot be reversed once processed.
                      </label>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-rose-600 px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-rose-600/20 transition hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500"
                    >
                      <Trash2 size={18} />
                      Submit Account Deletion Request
                    </button>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      Or email us directly at{" "}
                      <a
                        href={mailtoLink}
                        className="font-medium text-emerald-700 underline dark:text-emerald-400"
                      >
                        {SUPPORT_EMAIL}
                      </a>
                    </span>
                  </div>
                </form>
              )}
            </div>

            {/* Scope of Data Deletion: What is Deleted vs Retained */}
            <div className="space-y-4 pt-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                Data Scope: What Gets Deleted vs. What Is Retained
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                To satisfy Google Play&apos;s Data safety guidelines, the breakdown below outlines exactly how your personal and operational data in <strong>Chalet</strong> is handled upon deletion:
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                {/* Permanently Deleted */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                  <div className="mb-4 flex items-center gap-2.5 font-bold text-rose-700 dark:text-rose-400">
                    <div className="rounded-lg bg-rose-100 p-1.5 dark:bg-rose-950/60">
                      <Database size={18} />
                    </div>
                    <h4 className="text-base">Data Permanently Deleted</h4>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400"
                      />
                      <span>
                        <strong>Personal Profile &amp; Identity:</strong> Your full name, registered email address, phone number, profile photo, and hashed login passwords.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400"
                      />
                      <span>
                        <strong>Property &amp; Relationship Links:</strong> Your associations with properties, tenant rosters, landlord portfolios, and caretaker assignments.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400"
                      />
                      <span>
                        <strong>Chat &amp; Communications:</strong> All in-app conversations, messages, status notes, and uploaded attachments.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400"
                      />
                      <span>
                        <strong>Device &amp; Session Tokens:</strong> FCM push notification tokens, active authentication sessions, and local app preferences.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Retained & Retention Timelines */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                  <div className="mb-4 flex items-center gap-2.5 font-bold text-amber-700 dark:text-amber-400">
                    <div className="rounded-lg bg-amber-100 p-1.5 dark:bg-amber-950/60">
                      <Clock size={18} />
                    </div>
                    <h4 className="text-base">Data Retained &amp; Retention Periods</h4>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                      <span>
                        <strong>Financial &amp; Statutory Records:</strong> Where required by applicable taxation, accounting, or real estate tenancy statutes, transactional billing history is retained strictly for the statutory retention period mandated by law.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                      <span>
                        <strong>Security &amp; Fraud Prevention Logs:</strong> An anonymized log of the deletion request (timestamp and request ID) is stored for up to 30 days to defend against fraudulent takeover attacks, after which it is expunged.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                      <span>
                        <strong>Processing Timeline:</strong> Primary database records are deleted within <strong>30 calendar days</strong> of receiving your verified request. System backups are purged within 90 days following standard archive rotation.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================================
              PRIVACY POLICY SECTION
             ========================================================================= */}
          <div id="privacy" className="scroll-mt-24">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-emerald-100 p-2 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">
                <ShieldCheck size={24} />
              </div>
              <h2 className="text-3xl font-bold">Privacy Policy</h2>
            </div>
            <div className="space-y-4 text-slate-600 dark:text-slate-400">
              <p>
                <strong>Chalet</strong> (developed and published by Victor Essang / Veespatial Global) uses the account and property details you provide so the people responsible for a home can work together. That information is used solely for facilitating property management workflows inside the app. It is never sold to third-party data brokers or marketing networks.
              </p>
              <p>
                <strong>Data Protection:</strong> All communication between the Chalet mobile client and our servers is encrypted in transit using industry-standard TLS encryption. Sensitive credentials and authentication tokens are securely hashed and stored.
              </p>
              <p>
                <strong>Your Data Rights &amp; Deletion:</strong> You retain complete ownership of your personal data. You can inspect, modify, or permanently delete your account and associated records at any time. To exercise your right to account and data erasure, visit the{" "}
                <a
                  href="#account-deletion"
                  className="font-semibold text-emerald-700 underline dark:text-emerald-400"
                >
                  Chalet Account &amp; Data Deletion section
                </a>{" "}
                above.
              </p>
              <p>
                Questions regarding privacy or data handling can be directed to our data protection contact at{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="font-semibold text-emerald-700 underline dark:text-emerald-400"
                >
                  {SUPPORT_EMAIL}
                </a>
                .
              </p>
            </div>
          </div>

          {/* =========================================================================
              TERMS OF USE SECTION
             ========================================================================= */}
          <div id="terms" className="scroll-mt-24">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-slate-100 p-2 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                <FileText size={24} />
              </div>
              <h2 className="text-3xl font-bold">Using the App (Terms of Service)</h2>
            </div>
            <div className="space-y-4 text-slate-600 dark:text-slate-400">
              <p>
                Chalet is a coordination and property relationship tool. It does not replace a tenancy agreement, an agency mandate, or the statutory laws that govern landlord-tenant relationships in your jurisdiction. Users should always confirm formal legal and contractual matters with authorized property representatives.
              </p>
              <p>
                You are responsible for inviting only the individuals who are legitimately authorized to view or manage a given property, and for maintaining the confidentiality of your login credentials.
              </p>
              <p>
                You may terminate your account at any time using the in-app deletion feature or via our{" "}
                <a
                  href="#account-deletion"
                  className="font-semibold text-emerald-700 underline dark:text-emerald-400"
                >
                  online account deletion request
                </a>
                .
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
