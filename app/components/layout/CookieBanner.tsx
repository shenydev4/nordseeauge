'use client'

import React, { useState, useEffect } from 'react';
import Check from '../icons/Check';
import Cross from '../icons/Cross';

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
      localStorage.setItem('necessaryCookies', 'true'); // Set necessary cookies to true immediately
    }

    setGoogleCookies(hasAcceptedGoogleCookies === 'true');
    setYoutubeCookies(hasAcceptedYoutubeCookies === 'true');
    
    if (calledFromFooter) {
      setShowBanner(true);
    }
  }, [calledFromFooter]);

  const handleAcceptAll = () => {
    localStorage.setItem('googleCookies', 'true');
    localStorage.setItem('youtubeCookies', 'true');
    setShowBanner(false);
    document.body.classList.remove('no-scroll');
    window.location.reload(); // Reload the page
  };

  const handleSelectionAccept = () => {
    localStorage.setItem('googleCookies', googleCookies.toString());
    localStorage.setItem('youtubeCookies', youtubeCookies.toString());
    setShowBanner(false);
    document.body.classList.remove('no-scroll');
    window.location.reload(); // Reload the page
  };

  const handleRejectAll = () => {
    localStorage.setItem('googleCookies', 'false');
    localStorage.setItem('youtubeCookies', 'false');
    setShowBanner(false);
    document.body.classList.remove('no-scroll');
    window.location.reload(); // Reload the page
  };

  return (
    showBanner && ( 
      <div className='w-full h-full fixed top-0 left-0 z-[1000] bg-black/[0.5] overflow-clip'>
        <div className="md:w-[650px] w-[90%] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded shadow-[0_0_12px_-2px_rgba(0,0,0,0.4)] bg-yellow-200 xl:p-10 md:p-8 p-6">
          
          <p>
            Diese Website verwendet Cookies, um Ihr Surferlebnis zu verbessern. Wenn Sie auf „akzeptieren“ klicken, erklären Sie sich mit der Verwendung von Cookies einverstanden.
          </p>
          <ul className="mt-4">
            <li>Notwendige Cookies</li>
            <li>
              <label>
                <input 
                  type="checkbox" 
                  checked={googleCookies} 
                  onChange={() => setGoogleCookies(!googleCookies)} 
                /> Google Maps
              </label>
            </li>
            <li>
              <label>
                <input 
                  type="checkbox" 
                  checked={youtubeCookies} 
                  onChange={() => setYoutubeCookies(!youtubeCookies)} 
                /> YouTube
              </label>
            </li>
          </ul>

          <div className='mt-8 flex flex-col gap-2'>

            <div className='flex gap-5'>
              <button className='w-[calc(50%-10px)] border border-black py-1.5 px-3 font-bold rounded-sm flex items-center gap-2 duration-300 bg-green-300 hover:bg-yellow-100 text-base' onClick={handleAcceptAll}>
                <span className='block w-5 h-5'>
                  <Check />
                </span>
                Alles akzeptieren
              </button>
              <button className='w-[calc(50%-10px)] border border-black py-1.5 px-3 font-bold rounded-sm flex items-center gap-2 duration-300 bg-green-200 hover:bg-yellow-100 text-base' onClick={handleSelectionAccept}>
                <span className='block w-5 h-5'>
                  <Check />
                </span>
                Auswahl akzeptieren
              </button>
            </div>
            
            <button className='w-[calc(50%-10px)] border border-black py-1.5 px-3 font-bold rounded-sm flex items-center gap-2 duration-300 bg-red-300 hover:bg-yellow-100 text-base' onClick={handleRejectAll}>
              <span className='block w-5 h-5'>
                <Cross />
              </span>
              Alles ablehnen
            </button>

          </div>

          <p className="caption mt-2">
            Sie können Ihr Einverständnis jederzeit ändern.
          </p>

        </div>
      </div>
    )
  );
};

export default CookieBanner;