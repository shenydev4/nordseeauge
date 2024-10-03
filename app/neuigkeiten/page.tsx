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
        captionIntro="Moin und Herzlich Willkommen bei der NordseeAuge Agentur."
        captionText="Erlebe hier exklusive Hintergründe, Planungen und Angebote rund um die Nordsee."
      />
      <div className="fluid-container">
        <div className="container space-before-0">

          <BasicText
            className="space-after-0"
          />

          {/* give array, if array length is 1 do 1 else double, array contains item > headline:string, listdots{boldtext?:string, normaltext?:string}[] */}
          <BasicList 
            className="space-after-0"
            // array
          />

          {/* 
          <BasicList 
            className="space-after-1"
            // array
          /> 
          */}

        </div>
      </div>
    </>
  );
}