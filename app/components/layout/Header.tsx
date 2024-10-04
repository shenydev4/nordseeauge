'use client'

import { useEffect, useState } from 'react'
import Cross from '../icons/Cross'
import Image from 'next/image'

export default function Header() {

  const [isMobileMenu, setIsMobileMenu] = useState(false)
  const [mobileMenuOpacity, setMobileMenuOpacity] = useState(false)

  function handleMobileMenu(bool:boolean) {
    let body = document.querySelector('body') as HTMLBodyElement;
    
    if (bool == true) {
      body.style.overflow = 'hidden'; 
      setIsMobileMenu(bool)
      setTimeout(() => {
        setMobileMenuOpacity(bool)
      }, 100)

    } else {
      body.style.overflow = 'visible'; 
      setMobileMenuOpacity(bool)
      setTimeout(() => {
        setIsMobileMenu(bool)
      }, 700)
    }

    
  }

  return (
    <div id="Header" className='absolute z-50 w-full bg-gradient-to-b from-black/[0.6] to-transparent'>
      <div className='container flex items-center justify-between py-6'>

        <div>
          <a href="/" className='block after:!w-0 hover:scale-110 relative xl:w-[102px] xl:h-[102px] w-[78px] h-[78px]'>
            <Image
              src='/logo.webp'
              alt='NordseeAuge Logo'
              fill
              sizes='(max-width: 1399px) 78px, 102px'
              className='w-full h-full top-0 left-0 object-cover'
            />
          </a>
        </div>
        <div className='xl:gap-12 md:gap-5 uppercase md:flex hidden'>
          <a href="/angebot" className='link-sm'>Angebot</a>
          <a href="/neuigkeiten" className='link-sm'>Neuigkeiten</a>
          <a href="/galerie" className='link-sm'>Galerie</a>
          <a href="/ueber-uns" className='link-sm'>Über uns</a>
          <a href="/kontakt" className='link-sm'>Kontakt</a>
        </div>

        <div className='md:hidden'>
          <button onClick={() => handleMobileMenu(true)}>
            btn
          </button>
        </div>

        <div className={`absolute left-0 top-0 w-full h-dvh bg-red-500 duration-700 flex-col justify-between p-8 ${isMobileMenu ? 'flex':'hidden'} ${mobileMenuOpacity ? 'opacity-100':'opacity-0'}`}>
          <div className='flex justify-between items-center'>
            <a href="">LOGO</a>
            <button onClick={() => handleMobileMenu(false)} className='w-10 h-10 ml-auto'>
              <Cross />
            </button>
          </div>
          <p className='caption !text-[42px] !text-black'>NordseeAuge.Agentur</p>
          <div className='flex flex-col gap-6'>
            <a href="/angebot" className='!text-[42px] after:!w-0 font-bold'>Angebot</a>
            <a href="/neuigkeiten" className='!text-[42px] after:!w-0 font-bold'>Neuigkeiten</a>
            <a href="/galerie" className='!text-[42px] after:!w-0 font-bold'>Galerie</a>
            <a href="/ueber-uns" className='!text-[42px] after:!w-0 font-bold'>Über uns</a>
            <a href="/kontakt" className='!text-[42px] after:!w-0 font-bold'>Kontakt</a>
          </div>
          <div className='flex xl:gap-10 gap-6'>
            <a href="/datenschutz">Datenschutz</a>
            <a href="/impressum">Impressum</a>
          </div>
        </div>

      </div>
    </div>
  )
}