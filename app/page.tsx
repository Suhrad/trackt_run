import { Background } from "@/components/background";
import { Footer } from "@/components/footer";
import { Newsletter } from "@/components/newsletter";

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
        <Newsletter />
        <Footer />
      </div>
    </main>
  );
}
