'use client'

import React, { useState, useEffect } from 'react';
import Check from '../icons/Check';
import Cross from '../icons/Cross';
import Arrow from '../icons/Arrow';
import Image from 'next/image';

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
          
          <span className='flex md:flex-row flex-col-reverse md:items-center md:gap-3 gap-2'>
            <h3 className='xl:text-[36px] md:text-[28px] text-[20px]'>
              Mit Cookies die See genießen
            </h3>
            <Image 
              src='/cookies.png'
              alt='Cookie Icon'
              width={52}
              height={52}
              className='xl:w-14 xl:h-14 md:w-11 md:h-11 w-8 h-8'
            />
          </span>

          <div className="mt-8 text-2xl space-y-2">

            <div className='flex items-center gap-3'>
              <input
                className='cursor-pointer w-5 h-5'
                type="checkbox" 
                checked={true}
                disabled
              />
              <label className='cursor-pointer flex items-center gap-3' onClick={() => toggleSetOpen(necessaryOpen, setNecessaryOpen)}>
                Notwendige Cookies
                <span className={`w-5 h-5 duration-300 mt-1.5 ${necessaryOpen ? 'rotate-0':'rotate-180'}`}>
                  <Arrow />
                </span>
              </label>
            </div>
            <div className={`${necessaryOpen ? 'pb-4 max-h-24':'pb-0 max-h-0'} xl:text-[20px] md:text-[18px] text-[16px]/[1.5] h-fit pl-8 overflow-hidden duration-500`}>
              Die Speicherung Ihrer Cookie-Einstellungen müssen lokal in Ihrem Browser gespeichert werden.
            </div>

            <div className='flex items-center gap-3'>
              <input
                className='cursor-pointer w-5 h-5'
                type="checkbox" 
                checked={googleCookies} 
                onChange={() => setGoogleCookies(!googleCookies)} 
              />
              <label className='cursor-pointer flex items-center gap-3' onClick={() => toggleSetOpen(googleOpen, setGoogleOpen)}>
                Google Maps
                <span className={`w-5 h-5 duration-300 mt-1.5 ${googleOpen ? 'rotate-0':'rotate-180'}`}>
                  <Arrow />
                </span>
              </label>
            </div>
            <div className={`${googleOpen ? 'pb-4 max-h-32':'pb-0 max-h-0'} xl:text-[20px] md:text-[18px] text-[16px]/[1.5] h-fit pl-8 overflow-hidden duration-500`}>
              Diese Website bindet eine Karte von Google Maps ein. Durch die Nutzung von Google Maps werden Daten an Google übertragen. Ihre Zustimmung ermöglicht die Anzeige dieser Karte.
            </div>

            <div className='flex items-center gap-3'>
              <input 
                className='cursor-pointer w-5 h-5'
                type="checkbox" 
                checked={youtubeCookies} 
                onChange={() => setYoutubeCookies(!youtubeCookies)} 
              />
              <label className='cursor-pointer flex items-center gap-3' onClick={() => toggleSetOpen(youtubeOpen, setYoutubeOpen)}>
                YouTube
                <span className={`w-5 h-5 duration-300 mt-1.5 ${youtubeOpen ? 'rotate-0':'rotate-180'}`}>
                  <Arrow />
                </span>
              </label>
            </div>
            <div className={`${youtubeOpen ? 'pb-4 max-h-32':'pb-0 max-h-0'} xl:text-[20px] md:text-[18px] text-[16px]/[1.5] h-fit pl-8 overflow-hidden duration-500`}>
              Diese Website bindet Videos von YouTube ein. Durch die Nutzung von YouTube werden Daten an Google übertragen. Ihre Zustimmung ermöglicht die Anzeige von Videos.
            </div>

          </div>

          <div className='mt-8 flex flex-col gap-2'>

            <div className='flex md:flex-row flex-col md:gap-5 gap-2'>
              <button className='md:w-[calc(50%-10px)] w-full border border-green-800 py-1.5 px-3 font-bold rounded-[3px] flex items-center gap-2 duration-300 bg-green-300 hover:bg-green-400 text-base' onClick={handleAcceptAll}>
                <span className='block w-5 h-5'>
                  <Check />
                </span>
                Alles akzeptieren
              </button>
              <button className='md:w-[calc(50%-10px)] w-full border border-teal-800 py-1.5 px-3 font-bold rounded-[3px] flex items-center gap-2 duration-300 bg-teal-200 hover:bg-teal-300 text-base' onClick={handleSelectionAccept}>
                <span className='block w-5 h-5'>
                  <Check />
                </span>
                Auswahl akzeptieren
              </button>
            </div>
            
            <button className='md:w-[calc(50%-10px)] w-full border border-red-800 py-1.5 px-3 font-bold rounded-[3px] flex items-center gap-2 duration-300 bg-red-300 hover:bg-red-400 text-base' onClick={handleRejectAll}>
              <span className='block w-5 h-5'>
                <Cross />
              </span>
              Alles ablehnen
            </button>

          </div>

          <p className="caption mt-2">
            Sie können Ihre Einwilligung jederzeit ändern.
          </p>
          <div className='space-x-5'>
            <a href="/datenschutz" className='hover:!text-[#4b5563] hover:after:!bg-[#4b5563] after:!w-full hover:after:!w-[90%] !text-base'>Datenschutz</a>
            <a href="/impressum" className='hover:!text-[#4b5563] hover:after:!bg-[#4b5563] after:!w-full hover:after:!w-[90%] !text-base'>Impressum</a>
          </div>

        </div>
      </div>
    )
  );
};

export default CookieBanner;