import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "@nordseeauge | Buchung",
  description: "description",
};

import Hero from '@/app/components/layout/Hero';
import CardsExtern from '@/app/components/CardsExtern';
import Bookings from '@/app/components/Bookings';

export default function Home() {
  return (
    <>
      <Hero 
        imgSrc="/hero-bg-1.jpg"
        imgAlt="Hero Image"
        captionIntro="Moin und Herzlich Willkommen bei der NordseeAuge Agentur."
        captionText="Erlebe hier exklusive Hintergründe, Planungen und Angebote rund um die Nordsee."
      />

      <div className="fluid-container">
        <div className="container xl-space-before-3 space-before-1">

          <CardsExtern
            className="xl-space-after-2 space-after-1"
          />

          <Bookings
            className="xl-space-after-3 space-after-1"
            headline="Buchungen"
          />

        </div>
      </div>
    </>
  );
}