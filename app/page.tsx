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
        imgSrc="/bg-grass-1.jpg"
        imgAlt="Hero Image"
        captionIntro="Moin und Herzlich Willkommen bei der NordseeAuge Agentur."
        captionText="Erlebe hier exklusive Hintergründe, Planungen und Angebote rund um die Nordsee."
        imgXShift="0"
        imgYShift="1"
        isLarge
      />

      <div className="fluid-container">
        <div className='container xl-space-before-3 space-before-1 flex flex-wrap'>

          <TextHome 
            className="xl-space-after-3 space-after-1"
          />

          <ExploreCards 
            className="xl-space-after-3 space-after-1"
            headline="Entdecken Sie NordseeAuge"
          />

        </div>
      </div>
    </>
  );
}
