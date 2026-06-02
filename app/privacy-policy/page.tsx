import Link from "next/link";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

export const metadata = {
  title: "Privacy Policy | Trackt",
  description: "Privacy Policy for TRACKT running and gamified fitness platform.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen w-full bg-[#0a0a0c] text-foreground p-6 sm:p-12 md:p-24 flex flex-col items-center relative overflow-hidden">
      {/* Decorative background glow spots */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-3xl z-10">
        {/* Navigation / Back Button */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors group"
          >
            <ArrowLeftIcon className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12 border-b border-border/10 pb-8">
          <h1 className="font-serif text-5xl sm:text-6xl italic text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-xs text-foreground/40 font-medium uppercase tracking-wider">
            Last Updated: June 2026
          </p>
        </header>

        {/* Content Container */}
        <div className="space-y-10 text-foreground/80 leading-relaxed font-sans text-base md:text-lg">
          <section className="bg-primary/5 border border-border/10 rounded-2xl p-6 md:p-8 backdrop-blur-md">
            <p className="text-foreground/90 font-medium">
              <span className="font-serif italic text-2xl text-foreground font-normal block mb-2">TRACKT</span>
              {"we,"} {"our,"} or {"us"} operates a running and gamified fitness platform. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our mobile application and related services.
            </p>
            <p className="mt-4 text-xs text-foreground/60">
              By accessing or using TRACKT, you agree to this Privacy Policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl italic text-foreground border-b border-border/5 pb-2">
              1. Information We Collect
            </h2>
            <div className="space-y-4 pl-1">
              <div>
                <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base">1.1 Personal Information</h3>
                <ul className="list-disc pl-5 space-y-1 text-foreground/75 text-sm md:text-base">
                  <li>Name, username, and profile details</li>
                  <li>Profile images and bio</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base">1.2 Activity and Fitness Data</h3>
                <ul className="list-disc pl-5 space-y-1 text-foreground/75 text-sm md:text-base">
                  <li>Running routes and distance</li>
                  <li>GPS and location data</li>
                  <li>Activity metrics (pace, duration, calories, elevation)</li>
                  <li>Territory capture and gameplay data</li>
                  <li>App usage and interaction data</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl md:text-3xl italic text-foreground border-b border-border/5 pb-2">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
              <li>Provide and improve the Services</li>
              <li>Enable territory-based gameplay and competition</li>
              <li>Facilitate club features and social interactions</li>
              <li>Personalize user experience</li>
              <li>Analyze usage and performance</li>
              <li>Communicate updates, promotions, and support</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl md:text-3xl italic text-foreground border-b border-border/5 pb-2">
              3. Location Data
            </h2>
            <p className="text-sm md:text-base">
              TRACKT relies on precise location data to track runs and activities, enable territory capture features, and display routes and map-based interactions.
            </p>
            <p className="text-sm md:text-base">
              Location data is collected only when the app is actively in use or as permitted by your device settings.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl md:text-3xl italic text-foreground border-b border-border/5 pb-2">
              4. Data Sharing and Disclosure
            </h2>
            <p className="text-sm md:text-base">
              We do not sell your personal data.
            </p>
            <p className="text-sm md:text-base">
              We may share data with:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm md:text-base">
              <li>Service providers (hosting, analytics, infrastructure)</li>
              <li>Partners supporting platform functionality</li>
              <li>In the event of a merger, acquisition, or sale</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl md:text-3xl italic text-foreground border-b border-border/5 pb-2">
              5. User Content
            </h2>
            <p className="text-sm md:text-base">
              Users may share content such as runs, achievements, and posts. This content may be visible to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm md:text-base">
              <li>Other users</li>
              <li>Club members</li>
              <li>Public audiences depending on privacy settings</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl md:text-3xl italic text-foreground border-b border-border/5 pb-2">
              6. Data Security
            </h2>
            <p className="text-sm md:text-base">
              We implement reasonable technical and organizational safeguards to protect your data.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl md:text-3xl italic text-foreground border-b border-border/5 pb-2">
              7. Data Retention
            </h2>
            <p className="text-sm md:text-base">
              We retain your data:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm md:text-base">
              <li>As long as your account is active</li>
              <li>As necessary for legal and operational purposes</li>
            </ul>
            <p className="text-sm md:text-base">
              You may request deletion of your account and associated data.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl md:text-3xl italic text-foreground border-b border-border/5 pb-2">
              8. Your Rights
            </h2>
            <p className="text-sm md:text-base">
              Depending on your jurisdiction, you may have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm md:text-base">
              <li>Access your data</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion</li>
              <li>Withdraw consent</li>
            </ul>
            <p className="text-sm md:text-base">
              Requests can be made at: <a href="mailto:contact@trackt.run" className="text-foreground hover:underline transition-all">contact@trackt.run</a>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl md:text-3xl italic text-foreground border-b border-border/5 pb-2">
              9. Changes to This Policy
            </h2>
            <p className="text-sm md:text-base">
              We may update this Privacy Policy from time to time. Continued use of the Services constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="space-y-3 border-t border-border/10 pt-8">
            <h2 className="font-serif text-2xl md:text-3xl italic text-foreground border-b border-border/5 pb-2">
              10. Contact
            </h2>
            <p className="text-sm md:text-base">
              For questions regarding this Privacy Policy:
            </p>
            <p className="text-sm md:text-base">
              Email: <a href="mailto:contact@trackt.run" className="text-foreground hover:underline font-semibold transition-all">contact@trackt.run</a>
            </p>
          </section>
        </div>

        {/* Footer info */}
        <footer className="mt-20 pt-8 border-t border-border/10 text-center text-xs text-foreground/30 font-sans">
          &copy; {new Date().getFullYear()} TRACKT. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
