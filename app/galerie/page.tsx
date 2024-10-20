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

  // clean these up with Props
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
  const center: google.maps.LatLngLiteral = { lat: 53.5511, lng: 8.5833 }; // Bremerhaven coordinates
  const markers: google.maps.MarkerOptions[] = [
    {
      position: { lat: 53.5511, lng: 8.5833 },
      title: 'Bremerhaven',
    },
    {
      position: { lat: 53.7333, lng: 7.7333 },
      title: 'Norden',
    },
  ];

  return (
    <>
      <Hero 
        captionIntro="Moin und Herzlich Willkommen bei der NordseeAuge Agentur."
        captionText="Erlebe hier exklusive Hintergründe, Planungen und Angebote rund um die Nordsee."
      />

      <div className="fluid-container">
        <div className="container xl-space-before-3 space-before-1">

          <Map 
            className="xl-space-after-3 space-after-1"
            apiKey={apiKey}
            center={center}
            markers={markers}
          />

          <Slider 
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