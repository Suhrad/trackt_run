import Link from "next/link";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

export const metadata = {
  title: "Terms & Conditions | Trackt",
  description: "Terms and Conditions governing your use of the TRACKT running and gamified fitness platform.",
};

export default function TermsAndConditions() {
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
            Terms & Conditions
          </h1>
          <p className="text-xs text-foreground/40 font-medium uppercase tracking-wider">
            Last Updated: June 2026
          </p>
        </header>

        {/* Content Container */}
        <div className="space-y-10 text-foreground/80 leading-relaxed font-sans text-base md:text-lg">
          <section className="bg-primary/5 border border-border/10 rounded-2xl p-6 md:p-8 backdrop-blur-md">
            <p className="text-foreground/90 font-medium">
              These Terms and Conditions {"(\"Terms\")"} govern your use of <span className="font-serif italic text-2xl text-foreground font-normal inline-block ml-1">TRACKT</span>.
            </p>
            <p className="mt-4 text-xs text-foreground/60">
              By using the Services, you agree to these Terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl md:text-3xl italic text-foreground border-b border-border/5 pb-2">
              1. Account Registration
            </h2>
            <p className="text-sm md:text-base">
              You agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
              <li>Provide accurate information</li>
              <li>Maintain account security</li>
              <li>Be responsible for all activity under your account</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl md:text-3xl italic text-foreground border-b border-border/5 pb-2">
              2. Description of Services
            </h2>
            <p className="text-sm md:text-base">
              TRACKT provides:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
              <li>Activity tracking for running</li>
              <li>Territory-based gameplay features</li>
              <li>Club-based competitions and social interactions</li>
              <li>Gamified rewards, achievements, and leaderboards</li>
            </ul>
            <p className="text-sm md:text-base">
              TRACKT may modify or discontinue features at any time.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl md:text-3xl italic text-foreground border-b border-border/5 pb-2">
              3. User Conduct
            </h2>
            <p className="text-sm md:text-base">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
              <li>Provide false or misleading data</li>
              <li>Manipulate GPS or activity tracking</li>
              <li>Harass or harm other users</li>
              <li>Use the platform for unlawful purposes</li>
              <li>Exploit or abuse game mechanics</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl md:text-3xl italic text-foreground border-b border-border/5 pb-2">
              4. Territory and Game Mechanics
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
              <li>Territory ownership is virtual and has no real-world legal claim</li>
              <li>Gameplay elements may change at any time</li>
              <li>TRACKT reserves the right to modify rewards and mechanics</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl md:text-3xl italic text-foreground border-b border-border/5 pb-2">
              5. Content Ownership
            </h2>
            <p className="text-sm md:text-base">
              Users retain ownership of their content.
            </p>
            <p className="text-sm md:text-base">
              By posting content, you grant TRACKT a worldwide, non-exclusive license to use, display, and distribute it for platform purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl md:text-3xl italic text-foreground border-b border-border/5 pb-2">
              6. Intellectual Property
            </h2>
            <p className="text-sm md:text-base">
              All TRACKT branding, software, and content are owned by TRACKT and protected by applicable laws.
            </p>
            <p className="text-sm md:text-base">
              You may not copy, distribute, or exploit any part of the platform without permission.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl md:text-3xl italic text-foreground border-b border-border/5 pb-2">
              7. Termination
            </h2>
            <p className="text-sm md:text-base">
              We may suspend or terminate accounts for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
              <li>Violations of these Terms</li>
              <li>Fraudulent or abusive behavior</li>
            </ul>
            <p className="text-sm md:text-base">
              Users may delete their accounts at any time.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl md:text-3xl italic text-foreground border-b border-border/5 pb-2">
              8. Limitation of Liability
            </h2>
            <p className="text-sm md:text-base font-semibold text-foreground/90">
              TRACKT is provided {"\"as is.\""} We are not liable for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
              <li>Data inaccuracies</li>
              <li>Service interruptions</li>
              <li>Injuries or damages resulting from use</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl md:text-3xl italic text-foreground border-b border-border/5 pb-2">
              9. Indemnification
            </h2>
            <p className="text-sm md:text-base">
              You agree to indemnify TRACKT against claims arising from:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
              <li>Your use of the Services</li>
              <li>Violation of these Terms</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl md:text-3xl italic text-foreground border-b border-border/5 pb-2">
              10. Governing Law
            </h2>
            <p className="text-sm md:text-base">
              These Terms are governed by the applicable laws.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl md:text-3xl italic text-foreground border-b border-border/5 pb-2">
              11. Changes to Terms
            </h2>
            <p className="text-sm md:text-base">
              We may update these Terms at any time. Continued use constitutes acceptance.
            </p>
          </section>

          <section className="space-y-3 border-t border-border/10 pt-8">
            <h2 className="font-serif text-2xl md:text-3xl italic text-foreground border-b border-border/5 pb-2">
              12. Contact
            </h2>
            <p className="text-sm md:text-base">
              For questions regarding these Terms:
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
