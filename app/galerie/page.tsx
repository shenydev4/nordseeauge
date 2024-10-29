import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "@nordseeauge | Galerie",
  description: "description",
};

import Hero from '../components/layout/Hero';
import Map from '../components/Map';
import Slider from '@/app/components/Slider';
import Video from '@/app/components/Video';

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

          <Slider 
            className="xl-space-after-3 space-after-1"
          />

          <Map 
            className="xl-space-after-3 space-after-1" 
          />

          <Video 
            className="xl-space-after-3 space-after-1"
          />

        </div>
      </div>
    </>
  );
}