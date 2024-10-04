'use client'

import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { useInView } from 'react-intersection-observer';

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
    triggerOnce: true, // Only load the map once it's in view
  });

  useEffect(() => {
    const loader = new Loader({
      apiKey: apiKey,
      version: 'weekly', // or 'quarterly'
      libraries: ['places'], // if you need places library
    });

    let map: google.maps.Map;

    if (inView && !mapLoaded) { // Load the map when in view and not already loaded
      loader.load().then(() => {
        if (mapRef.current) {
          map = new google.maps.Map(mapRef.current, {
            center: center,
            zoom: 8, // adjust as needed
          });

          markers.forEach((marker) => {
            new google.maps.Marker({ map, ...marker });
          });
        }
      });
      setMapLoaded(true); // Mark the map as loaded
    }

    // Clean up the listener when the component unmounts
    return () => {
      if (map) {
        google.maps.event.clearInstanceListeners(map);
      }
    };
  }, [apiKey, center, markers, inView, mapLoaded]);

  return (
    <div ref={ref} className={className}> {/* Use the ref from useInView */}
      <div className="h-[500px] w-full" ref={mapRef} />
    </div>
  );
};


export default Map;