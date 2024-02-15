// page.tsx (home page)

import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Samples from "@/components/Samples";

export default function Home() {
  return (
    <main id="home">
      <Hero />
      <About />
      <Services />
      <Samples />
    </main>
  );
}
