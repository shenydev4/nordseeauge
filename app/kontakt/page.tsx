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
        captionIntro="Moin und Herzlich Willkommen bei der NordseeAuge Agentur."
        captionText="Erlebe hier exklusive Hintergründe, Planungen und Angebote rund um die Nordsee."
      />
      
      <div className="fluid-container">
        <div className="container space-before-1">

          <Contact

          />

        </div>
      </div>
    </>
  );
}
