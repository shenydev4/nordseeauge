import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "@nordseeauge | Kontakt",
  description: "Sie haben Fragen oder möchten ein Angebot anfordern? Kontaktieren Sie uns einfach und schnell über unser Kontaktformular. Wir freuen uns auf Ihre Nachricht!",
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
        imgXShift="0"
        imgYShift="1"
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
