import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "@nordseeauge | Kontakt",
  description: "description",
};

import Hero from '../components/layout/Hero';
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero 
        imgSrc="/bg-grass-1.jpg"
        imgAlt="Hero Image"
        captionIntro="Moin und Herzlich Willkommen bei der NordseeAuge Agentur."
        captionText="Erlebe hier exklusive Hintergründe, Planungen und Angebote rund um die Nordsee."
        imgSize="70"
      />
      
      <div className="fluid-container">
        <div className="container xl-space-before-3 space-before-1">

          <Contact
            className="xl-space-after-3 space-after-1"
          />

        </div>
      </div>
    </>
  );
}
