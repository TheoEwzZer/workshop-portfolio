import HeaderSection from "@/components/HeaderSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto px-12 py-24">
        <HeaderSection />
      </div>
    </main>
  );
}
