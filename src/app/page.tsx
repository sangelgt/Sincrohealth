import Features from "@/components/sections/Features";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Metrics from "@/components/sections/Metrics";
import Registration from "@/components/sections/Registration";
import Solution from "@/components/sections/Solution";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Solution />
      <Metrics />
      <Features />
      <Registration />
      <Footer />
    </main>
  );
}
