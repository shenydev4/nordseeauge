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
    <div className={`relative ${className}`}>
      {youtubeCookiesAccepted ? ( 
        <YouTube videoId="QF0EkWvoB74" opts={opts} className='aspect-video' iframeClassName='h-full w-full' />
      ) : (
        <div className='relative aspect-video w-full h-auto top-0 left-0 bg-black/[0.8] flex flex-col items-start justify-center'>
          <p className='xl:!text-[32px] md:!text-[18px] !text-[14px] text-white font-bold px-20 w-full [text-shadow:_0_0_4px_rgb(0_0_0_/_100%)]'>
            Für das Ansehen von YouTube Videos müssen Sie mit YouTubes Datenschutzbedingungen einverstanden sein.
          </p>
          <a href="/datenschutz" className='[text-shadow:_0_0_4px_rgb(0_0_0_/_100%)] text-white underline md:!text-[22px] !text-[16px] after:!w-0 px-20 mt-1'>zum Datenschutz</a>
          <button
            className='border border-black py-1.5 px-3 font-bold rounded-sm flex items-center gap-2 duration-300 bg-green-300 hover:bg-yellow-100 md:text-base text-[14px] md:mt-4 mt-3  ml-20' 
            onClick={handleAccept}
          >
            <span className='block mt-0.5 md:w-5 md:h-5 w-4 h-4'>
              <Check />
            </span>
            Ich akzeptiere
          </button>
        </div>
      )}
    </div>
  )
}