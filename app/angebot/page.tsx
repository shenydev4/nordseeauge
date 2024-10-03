import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "@nordseeauge | Angebot",
  description: "description",
};

import Hero from '@/app/components/layout/Hero';
import CardsExtern from '@/app/components/CardsExtern';
import Bookings from '@/app/components/Bookings';

export default function Home() {
  return (
    <>
      <Hero 
        captionIntro="Moin und Herzlich Willkommen bei der NordseeAuge Agentur."
        captionText="Erlebe hier exklusive Hintergründe, Planungen und Angebote rund um die Nordsee."
      />

      <div className="fluid-container">
        <div className="container space-before-0">

          <CardsExtern
            className="space-after-0"
          />

          <Bookings
            className="space-after-1"
            headline="Buchungen"
          />

        </div>
      </div>
    </>
  );
}