'use client'

import React, { useState, useEffect } from 'react';
import Check from '../icons/Check';
import Cross from '../icons/Cross';
import Arrow from '../icons/Arrow';

interface CookieBannerProps {
  calledFromFooter?: boolean;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ calledFromFooter }) => {
  const [showBanner, setShowBanner] = useState(false);
  const [googleCookies, setGoogleCookies] = useState(false);
  const [youtubeCookies, setYoutubeCookies] = useState(false);

  useEffect(() => {
    const hasAcceptedNecessaryCookies = localStorage.getItem('necessaryCookies');
    const hasAcceptedGoogleCookies = localStorage.getItem('googleCookies');
    const hasAcceptedYoutubeCookies = localStorage.getItem('youtubeCookies');

    if (!hasAcceptedNecessaryCookies) {
      document.body.classList.add('no-scroll');
      setShowBanner(true);
    }

    setGoogleCookies(hasAcceptedGoogleCookies === 'true');
    setYoutubeCookies(hasAcceptedYoutubeCookies === 'true');
    
    if (calledFromFooter) {
      setShowBanner(true);
    }
  }, [calledFromFooter]); 

  const handleAcceptAll = () => {
    localStorage.setItem('necessaryCookies', 'true');
    localStorage.setItem('googleCookies', 'true');
    localStorage.setItem('youtubeCookies', 'true');
    setShowBanner(false);
    document.body.classList.remove('no-scroll');
    window.location.reload(); // Reload the page
  };

  const handleSelectionAccept = () => {
    localStorage.setItem('necessaryCookies', 'true');
    localStorage.setItem('googleCookies', googleCookies.toString());
    localStorage.setItem('youtubeCookies', youtubeCookies.toString());
    setShowBanner(false);
    document.body.classList.remove('no-scroll');
    window.location.reload(); // Reload the page
  };

  const handleRejectAll = () => {
    localStorage.setItem('necessaryCookies', 'true');
    localStorage.setItem('googleCookies', 'false');
    localStorage.setItem('youtubeCookies', 'false');
    setShowBanner(false);
    document.body.classList.remove('no-scroll');
    window.location.reload(); // Reload the page
  };

  // accordion

  const [necessaryOpen, setNecessaryOpen] = useState(false);
  const [googleOpen, setGoogleOpen] = useState(false);
  const [youtubeOpen, setYoutubeOpen] = useState(false);

  const toggleSetOpen = (
    currentValue: boolean, 
    setterFunction: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setterFunction(!currentValue);
  };

  return (
    showBanner && ( 
      <div className='w-full h-full fixed top-0 left-0 z-[1000] bg-black/[0.5] overflow-clip'>
        <div className="max-h-[90%] overflow-y-auto md:w-[650px] w-[90%] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded shadow-[0_0_12px_-2px_rgba(0,0,0,0.4)] bg-yellow-200 xl:p-10 md:p-8 p-6">
          
          <p>
            Diese Website verwendet Cookies, um Ihr Surferlebnis zu verbessern. Wenn Sie auf „akzeptieren“ klicken, erklären Sie sich mit der Verwendung von Cookies einverstanden.
          </p>

          <div className="mt-8 text-2xl space-y-2">

            <div className='flex gap-3 items-center'>
              <input
                className='cursor-pointer w-5 h-5'
                type="checkbox" 
                checked={true}
                disabled
              />
              <label className='cursor-pointer' onClick={() => toggleSetOpen(necessaryOpen, setNecessaryOpen)}>
                Notwendige Cookies
              </label>
              <span className={`w-5 h-5 duration-300 mt-1.5 ${necessaryOpen ? 'rotate-0':'rotate-180'}`}>
                <Arrow />
              </span>
            </div>
            <div className={`${necessaryOpen ? 'pb-4 max-h-20':'pb-0 max-h-0'} h-fit pl-8 overflow-hidden duration-500`}>
              Hier müssen kurze genauere Erklärungen stehen
            </div>

            <div className='flex gap-3 items-center'>
              <input
                className='cursor-pointer w-5 h-5'
                type="checkbox" 
                checked={googleCookies} 
                onChange={() => setGoogleCookies(!googleCookies)} 
              />
              <label className='cursor-pointer' onClick={() => toggleSetOpen(googleOpen, setGoogleOpen)}>
                Google Maps
              </label>
              <span className={`w-5 h-5 duration-300 mt-1.5 ${googleOpen ? 'rotate-0':'rotate-180'}`}>
                <Arrow />
              </span>
            </div>
            <div className={`${googleOpen ? 'pb-4 max-h-20':'pb-0 max-h-0'} h-fit pl-8 overflow-hidden duration-500`}>
              Hier müssen kurze genauere Erklärungen stehen
            </div>

            <div className='flex gap-3 items-center'>
              <input 
                className='cursor-pointer w-5 h-5'
                type="checkbox" 
                checked={youtubeCookies} 
                onChange={() => setYoutubeCookies(!youtubeCookies)} 
              />
              <label className='cursor-pointer' onClick={() => toggleSetOpen(youtubeOpen, setYoutubeOpen)}>
                YouTube
              </label>
              <span className={`w-5 h-5 duration-300 mt-1.5 ${youtubeOpen ? 'rotate-0':'rotate-180'}`}>
                <Arrow />
              </span>
            </div>
            <div className={`${youtubeOpen ? 'pb-4 max-h-20':'pb-0 max-h-0'} h-fit pl-8 overflow-hidden duration-500`}>
              Hier müssen kurze genauere Erklärungen stehen
            </div>

          </div>

          <div className='mt-8 flex flex-col gap-2'>

            <div className='flex md:flex-row flex-col md:gap-5 gap-2'>
              <button className='md:w-[calc(50%-10px)] w-2/3 border border-black py-1.5 px-3 font-bold rounded-sm flex items-center gap-2 duration-300 bg-green-300 hover:bg-yellow-100 text-base' onClick={handleAcceptAll}>
                <span className='block w-5 h-5'>
                  <Check />
                </span>
                Alles akzeptieren
              </button>
              <button className='md:w-[calc(50%-10px)] w-2/3 border border-black py-1.5 px-3 font-bold rounded-sm flex items-center gap-2 duration-300 bg-green-200 hover:bg-yellow-100 text-base' onClick={handleSelectionAccept}>
                <span className='block w-5 h-5'>
                  <Check />
                </span>
                Auswahl akzeptieren
              </button>
            </div>
            
            <button className='md:w-[calc(50%-10px)] w-2/3 border border-black py-1.5 px-3 font-bold rounded-sm flex items-center gap-2 duration-300 bg-red-300 hover:bg-yellow-100 text-base' onClick={handleRejectAll}>
              <span className='block w-5 h-5'>
                <Cross />
              </span>
              Alles ablehnen
            </button>

          </div>

          <p className="caption mt-2">
            Sie können Ihr Einverständnis jederzeit ändern.
          </p>
          {/* <div className='space-x-5'>
            <a href="/datenschutz" className='hover:!text-[#4b5563] hover:after:!bg-[#4b5563] after:!w-full hover:after:!w-[90%]'>Datenschutz</a>
            <a href="/impressum" className='hover:!text-[#4b5563] hover:after:!bg-[#4b5563] after:!w-full hover:after:!w-[90%]'>Impressum</a>
          </div> */}

        </div>
      </div>
    )
  );
};

export default CookieBanner;