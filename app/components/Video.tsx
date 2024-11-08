'use client'

import YouTube from "react-youtube";
import { useState, useEffect } from 'react';
import Check from './icons/Check'; // Assuming you have this component

export default function Video({
  className
}:{
  className?:string
}) {

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  const [youtubeCookiesAccepted, setYoutubeCookiesAccepted] = useState(false);

  useEffect(() => {
    const hasAcceptedYoutubeCookies = localStorage.getItem('youtubeCookies');
    setYoutubeCookiesAccepted(hasAcceptedYoutubeCookies === 'true');
  }, []);

  const handleAccept = () => {
    localStorage.setItem('youtubeCookies', 'true');
    setYoutubeCookiesAccepted(true);
  };

  return (
    <div className={`relative shadow-[0_0_20px_-5px_rgba(0,0,0,0.3)] ${className}`}>
      {youtubeCookiesAccepted ? ( 
        <YouTube videoId="QF0EkWvoB74" opts={opts} className='aspect-video' iframeClassName='h-full w-full' />
      ) : (
        <div className='relative aspect-video w-full h-auto top-0 left-0 bg-black/[0.8] flex flex-col items-start justify-center'>
          <p className='xl:!text-[28px] md:!text-[18px] !text-[14px] text-white font-bold xl:px-20 md:px-14 px-8 w-full [text-shadow:_0_0_4px_rgb(0_0_0_/_100%)]'>
            Hier ist ein YouTube Video eingebunden. Durch die Nutzung von YouTube werden Daten an Google übertragen. Ihre Zustimmung ermöglicht die Anzeige des Videos.
          </p>
        
          <button
            className='border border-black py-1.5 px-3 font-bold rounded-sm flex items-center gap-2 duration-300 bg-green-300 hover:bg-yellow-100 md:text-base text-[14px] md:mt-4 mt-3 xl:ml-20 md:ml-14 ml-8' 
            onClick={handleAccept}
          >
            <span className='block mt-0.5 md:w-5 md:h-5 w-4 h-4'>
              <Check />
            </span>
            Ich akzeptiere
          </button>
          <a className='cursor-pointer text-white link-sm link-intext after:!bg-white hover:after:!bg-yellow-200 md:mt-3 mt-2 xl:ml-20 md:ml-14 ml-8'>
            direkt zu YouTube
          </a>
        </div>
      )}
    </div>
  )
}