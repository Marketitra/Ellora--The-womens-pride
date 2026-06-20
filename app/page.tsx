import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import DestinationBanner from "@/components/sections/DestinationBanner";
import TravelWellBanner from "@/components/sections/TravelWellBanner";
import Gallery from "@/components/sections/Gallery";
import WhyUs from "@/components/sections/Whyus";

import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import StackSection from "@/components/ui/StackSection";

const SECTIONS = [
  { id: "hero", Component: Hero },
  { id: "about", Component: About },
  { id: "services", Component: Services },
  { id: "destination-events", Component: DestinationBanner },
  { id: "travelwell", Component: TravelWellBanner },
  { id: "gallery", Component: Gallery },
  { id: "why-us", Component: WhyUs },

  { id: "contact", Component: Contact },
];

export default function Home() {
  return (
    <main style={{ overflowX: "hidden" }}>
      <Navbar />

      <div style={{ position: "relative" }}>
        {SECTIONS.map(({ id, Component }, i) => (
          <StackSection
            key={id}
            index={i}
            total={SECTIONS.length}
            zIndex={i + 2}
          >
            <div
              style={{
                borderRadius: i === 0 ? 0 : "16px 16px 0 0",
                overflow: "hidden",
                boxShadow: i === 0 ? "none" : "0 -4px 32px rgba(0,0,0,0.07)",
              }}
            >
              <Component />
            </div>
          </StackSection>
        ))}
      </div>

      <Footer />
    </main>
  );
}
