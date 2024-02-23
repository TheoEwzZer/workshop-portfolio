import HeaderSection from "@/components/HeaderSection";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto px-12 py-24">
        <HeaderSection />
        <AboutSection />
      </div>
    </main>
  );
}
