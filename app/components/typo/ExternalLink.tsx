'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Cross from '../icons/Cross';
import Check from '../icons/Check';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children, className }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [disablePopup, setDisablePopup] = useState(false);

  const handleLinkClick = (event: React.MouseEvent) => {
    if (href.startsWith('http')) {
      event.preventDefault();

      const storedDisablePopup = localStorage.getItem('disableExternalLinkPopup');
      if (storedDisablePopup == 'true') {
        setShowPopup(false);
        window.open(href, '_blank');
      } else {
        setShowPopup(true);
      }
    }
  };

  const handleConfirmClick = () => {
    window.open(href, '_blank');
    setShowPopup(false);
  };

  const handleCancelClick = () => {
    setShowPopup(false);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDisablePopup(event.target.checked);
    localStorage.setItem('disableExternalLinkPopup', JSON.stringify(event.target.checked));
  };

  return (
    <>
      <Link className={className} href={href} onClick={handleLinkClick}>
        {children}
      </Link>
      {showPopup && (
        <div className="md:w-[600px] w-[90%] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1000] rounded shadow-[0_0_12px_-2px_rgba(0,0,0,0.4)] bg-yellow-200 xl:p-10 md:p-8 p-6">
          <div>
            <p>Dieser Link führt auf eine Seite von Dritten. Sind Sie sich sicher?</p>
            <p className="xl:!text-[16px] caption break-words">{href}</p>
            <div className='mt-6 mb-3 flex items-center gap-2'>
              <input 
                className='cursor-pointer w-5 h-5'
                id="disablePopup"
                type="checkbox"
                checked={disablePopup} 
                onChange={handleCheckboxChange} />
              <label htmlFor="disablePopup" className='text-xl mb-0.5'>Nicht nochmal fragen</label>
            </div>
            <div className='flex gap-5'>
              <button className='w-[calc(50%-10px)] border border-black py-1.5 px-3 font-bold rounded-sm flex items-center gap-2 duration-300 bg-green-300 hover:bg-green-400 text-base' onClick={handleConfirmClick}>
                <span className='block w-5 h-5'>
                  <Check />
                </span>
                Bestätigen
              </button>
              <button className='w-[calc(50%-10px)] border border-black py-1.5 px-3 font-bold rounded-sm flex items-center gap-2 duration-300 bg-red-300 hover:bg-red-400 text-base' onClick={handleCancelClick}>
                <span className='block w-5 h-5'>
                  <Cross />
                </span>
                Abbrechen
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ExternalLink;