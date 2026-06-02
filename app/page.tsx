import { Background } from "@/components/background";
import { Footer } from "@/components/footer";
import { Newsletter } from "@/components/newsletter";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-inset h-[100dvh] w-full">
      <div className="relative h-full w-full">
        <Background 
          videos={[
            "https://res.cloudinary.com/daf0wwgle/video/upload/v1759590929/3126564-uhd_3840_2160_24fps_yda5hx.mp4",
            "https://res.cloudinary.com/daf0wwgle/video/upload/v1759590914/3127017-uhd_3840_2160_24fps_zohu6f.mp4"
          ]}
          placeholder="/landscape.png"
        />

        {/* Top-Right Navigation */}
        <nav className="absolute top-6 right-6 md:top-8 md:right-8 z-20 flex gap-4 md:gap-6 items-center">
          <Link 
            href="/privacy-policy" 
            className="text-[10px] md:text-xs text-foreground/50 hover:text-foreground transition-colors uppercase tracking-wider font-semibold"
          >
            Privacy Policy
          </Link>
          <Link 
            href="/terms-and-conditions" 
            className="text-[10px] md:text-xs text-foreground/50 hover:text-foreground transition-colors uppercase tracking-wider font-semibold"
          >
            Terms & Conditions
          </Link>
        </nav>

        <Newsletter />
        <Footer />
      </div>
    </main>
  );
}
