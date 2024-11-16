import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "@nordseeauge | Neuigkeiten",
  description: "description",
};

import Hero from '@/app/components/layout/Hero';
import BasicText from '@/app/components/BasicText';
import BasicList from '@/app/components/BasicList';

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

          <BasicText
            className="xl-space-after-3 space-after-1"
          />

          {/* give array, if array length is 1 do 1 else double, array contains item > headline:string, listdots{boldtext?:string, normaltext?:string}[] */}
          <BasicList 
            className="xl-space-after-3 space-after-1"
            // array
          />

        </div>
      </div>
    </>
  );
}