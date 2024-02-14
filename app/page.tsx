// page.tsx (home page)

import About from "@/components/About";
import Hero from "@/components/Hero";
import MarqueeBlack from "@/components/MarqueeBlack";
import MarqueeWhite from "@/components/MarqueeWhite";
import Samples from "@/components/Samples";
import Services from "@/components/Services";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main id="home">
      <Hero />
      <About />
      {/* <Work /> */}
      {/* <Services /> */}
      {/* <MarqueeWhite /> */}
      <Samples />
    </main>
  );
}
