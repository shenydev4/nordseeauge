'use client'

import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Cross from '../icons/Cross'
import Menu from '../icons/Menu'
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

  const pathname = usePathname()

  return (
    <div id="Header" className='absolute z-50 w-full bg-gradient-to-b from-white/[0.3] to-transparent'>
      <div className='container flex items-center justify-between py-6'>

        <div>
          <a href="/" className='block after:!w-0 hover:scale-110 relative w-[100px] h-[100px]'>
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
          <a href="/angebot" className={`link-sm ${pathname == '/angebot' && 'text-yellow-200 after:!w-0'}`}>Angebot</a>
          <a href="/neuigkeiten" className={`link-sm ${pathname == '/neuigkeiten' && 'text-yellow-200 after:!w-0'}`}>Neuigkeiten</a>
          <a href="/galerie" className={`link-sm ${pathname == '/galerie' && 'text-yellow-200 after:!w-0'}`}>Galerie</a>
          <a href="/ueber-uns" className={`link-sm ${pathname == '/ueber-uns' && 'text-yellow-200 after:!w-0'}`}>Über uns</a>
          <a href="/kontakt" className={`link-sm ${pathname == '/kontakt' && 'text-yellow-200 after:!w-0'}`}>Kontakt</a>
        </div>

        <div className='md:hidden h-10'>
          <button onClick={() => handleMobileMenu(true)} className='w-10 h-10 text-gray-900'>
            <Menu />
          </button>
        </div>

        <div className={`absolute left-0 top-0 w-full h-dvh bg-red-500 duration-700 flex-col gap-16 p-8 ${isMobileMenu ? 'flex':'hidden'} ${mobileMenuOpacity ? 'opacity-100':'opacity-0'}`}>
          <div className='flex justify-between items-center'>
            <a href="/" className='block after:!w-0 relative w-[120px] h-[120px]'>
              <Image 
                src='/logo.webp'
                alt='NordseeAuge Logo'
                fill
                sizes='(max-width: 1399px) 120px, 180px'
                className='w-full h-full top-0 left-0 object-cover'
              />
            </a>
            <button onClick={() => handleMobileMenu(false)} className='w-10 h-10 ml-auto'>
              <Cross />
            </button>
          </div>
          <div className='flex flex-col gap-6'>
            <a href="/angebot" className='!text-[42px] after:!w-0 font-bold'>Angebot</a>
            <a href="/neuigkeiten" className='!text-[42px] after:!w-0 font-bold'>Neuigkeiten</a>
            <a href="/galerie" className='!text-[42px] after:!w-0 font-bold'>Galerie</a>
            <a href="/ueber-uns" className='!text-[42px] after:!w-0 font-bold'>Über uns</a>
            <a href="/kontakt" className='!text-[42px] after:!w-0 font-bold'>Kontakt</a>
          </div>
          <div className='flex xl:gap-10 gap-6 mt-auto'>
            <a href="/datenschutz">Datenschutz</a>
            <a href="/impressum">Impressum</a>
          </div>
        </div>

      </div>
    </div>
  )
}