'use client'

import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { useInView } from 'react-intersection-observer';
import Check from './icons/Check'; // Assuming you have this component

interface MapProps {
  className?: string;
  apiKey: string;
  center: google.maps.LatLngLiteral;
  markers: google.maps.MarkerOptions[];
}

const Map: React.FC<MapProps> = ({ className, apiKey, center, markers }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const [googleCookiesAccepted, setGoogleCookiesAccepted] = useState(false);

  useEffect(() => {
    const hasAcceptedGoogleCookies = localStorage.getItem('googleCookies');
    setGoogleCookiesAccepted(hasAcceptedGoogleCookies === 'true');
  }, []);

  useEffect(() => {
    const loader = new Loader({
      apiKey: apiKey,
      version: 'weekly',
      libraries: ['places'],
    });

    let map: google.maps.Map;

    if (inView && !mapLoaded && googleCookiesAccepted) { 
      loader.load().then(() => {
        if (mapRef.current) {
          map = new google.maps.Map(mapRef.current, {
            center: center,
            zoom: 8,
          });

          markers.forEach((marker) => {
            new google.maps.Marker({ map, ...marker });
          });
        }
      });
      setMapLoaded(true);
    }

    return () => {
      if (map) {
        google.maps.event.clearInstanceListeners(map);
      }
    };
  }, [apiKey, center, markers, inView, mapLoaded, googleCookiesAccepted]);

  const handleAccept = () => {
    localStorage.setItem('googleCookies', 'true');
    setGoogleCookiesAccepted(true);
  };

  return (
    <div ref={ref} className={`relative ${className}`}>
      
      {googleCookiesAccepted ? (
        <div className="aspect-video w-full h-full" ref={mapRef} />
      ):(
        <div className='relative aspect-video w-full h-auto  top-0 left-0 bg-black/[0.8] flex flex-col items-start justify-center'>
          <p className='p-large text-white font-bold px-20 w-full [text-shadow:_0_0_4px_rgb(0_0_0_/_100%)]'>
            Für die Benutzung der Google Maps Karte müssen Sie mit Googles Datenschutzbedingungen einverstanden sein.
          </p>
          <p className='text-white px-20 w-full mt-3 [text-shadow:_0_0_4px_rgb(0_0_0_/_100%)]'>
            Auf Dieser Karte sehen Sie die genauen Standorte, an denen Nordseeauge bereits aktiv war.
          </p>
          <button 
            className='border border-black py-1.5 px-3 font-bold rounded-sm flex items-center gap-2 duration-300 bg-green-300 hover:bg-yellow-100 text-base mt-4 ml-20' 
            onClick={handleAccept}
          >
            <span className='block w-5 h-5'>
              <Check />
            </span>
            Ich akzeptiere
          </button>
        </div>
      )}
    </div>
  );
};

export default Map;