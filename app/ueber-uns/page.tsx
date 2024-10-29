import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "@nordseeauge | über uns",
  description: "description",
};

import Hero from '../components/layout/Hero';
import Corporations, { CorporationsProps } from '@/app/components/Corporations';
import Accordion from '@/app/components/Accordion';
import Persona from '@/app/components/Persona';


const content_corporations_array: CorporationsProps["corporations"] = [
  {
    organization: "offizieller Partner der Sail Bremerhaven'25   ",
    website: "www.bremerhaven.de ",
    socials: [
      { 
        platform: 'Instagram',
        name: "sailbremerhaven_official",
        link: "https://www.instagram.com/sailbremerhaven_official",
      },
      { 
        platform: 'Facebook',
        name: "sailbhv ",
        link: "https://www.facebook.com/sailbhv",
      }
    ]
  },
  {
    organization: "Seehundstation Friedrichkoog",
    website: "www.seehundstation-friedrichskoog.de",
  },
  {
    organization: "Ravlygte die Bernsteins-Suchlampe",
    website: "www.haufwerk.com/de/ravlygte",
  },
];

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

          <Persona
            className="xl-space-after-3 space-after-1"
            headline="Zu meiner Person"
            
          />

          <Corporations 
            className="xl-space-after-3 space-after-1"
            headline="Kooperationen"
            introText="Ich bin ich offen für Nordsee orientierte Kooperation und begleite Events."
            caption="bisherige Kooperationen:"
            corporations={content_corporations_array}
          />

          <Accordion
            className="xl-space-after-3 space-after-1"
          />

        </div>
      </div>
    </>
  );
}
