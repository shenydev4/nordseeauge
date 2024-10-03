import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "@nordseeauge",
  description: "description",
};

import Hero from '@/app/components/layout/Hero';
import TextHome from '@/app/components/TextHome';
import ExploreCards from '@/app/components/ExploreCards';

export default function Home() {
  return (
    <>
      <Hero 
        isLarge 
        captionIntro="Moin und Herzlich Willkommen bei der NordseeAuge Agentur."
        captionText="Erlebe hier exklusive Hintergründe, Planungen und Angebote rund um die Nordsee."
      />

      <div className="fluid-container">
        <div className='container space-before-0 flex flex-wrap'>

          <TextHome 
            className="space-after-0"
          />
          <ExploreCards 
            className="space-after-1"
            headline="Entdecken Sie Nordsee.Auge"
          />

        </div>
      </div>
    </>
  );
}
