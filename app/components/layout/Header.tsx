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
          <a href="/" className={`block after:!w-0 hover:scale-110 relative w-[100px] h-[100px] duration-700 ${mobileMenuOpacity ? 'opacity-0':'opacity-100'}`}>
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
          <button onClick={() => handleMobileMenu(true)} className={`w-10 h-10 text-gray-900 duration-700 ${mobileMenuOpacity ? 'opacity-0':'opacity-100'}`}>
            <Menu />
          </button>
        </div>

        <div className={`absolute left-0 top-0 w-full min-h-dvh h-dvh bg-black/[0.2] duration-700 p-8 ${isMobileMenu ? 'block':'hidden'} ${mobileMenuOpacity ? 'opacity-100':'opacity-0'}`}>
          <div className='absolute w-full h-full top-0 left-0 -z-10'>
            <img src="/bg-placeholder2.jpg" alt="" className='object-cover blur-sm h-full w-full scale-105'/>
          </div>
          <div className="container relative h-full flex flex-col">
            <div className='flex justify-between items-center'>
              <a href="/" className='block after:!w-0 hover:scale-110 relative w-[170px] h-[170px]'>
                <Image
                  src='/logo.webp'
                  alt='NordseeAuge Logo'
                  fill
                  sizes='(max-width: 1399px) 78px, 102px'
                  className='w-full h-full top-0 left-0 object-cover'
                />
              </a>
              <button onClick={() => handleMobileMenu(false)} className='w-14 h-14 text-gray-900'>
                <Cross />
              </button>
            </div>
            <div className='flex flex-col gap-6 absolute top-1/2 -translate-y-1/2 mt-10'>
              <a href="/angebot" className={`!text-[42px] after:!w-0 font-bold [text-shadow:_1px_-1px_6px_rgb(255_255_255_/_60%)] ${pathname == '/angebot' && 'text-yellow-200'}`}>Angebot</a>
              <a href="/neuigkeiten" className={`!text-[42px] after:!w-0 font-bold [text-shadow:_1px_-1px_6px_rgb(255_255_255_/_60%)] ${pathname == '/neuigkeiten' && 'text-yellow-200'}`}>Neuigkeiten</a>
              <a href="/galerie" className={`!text-[42px] after:!w-0 font-bold [text-shadow:_1px_-1px_6px_rgb(255_255_255_/_60%)] ${pathname == '/galerie' && 'text-yellow-200'}`}>Galerie</a>
              <a href="/ueber-uns" className={`!text-[42px] after:!w-0 font-bold [text-shadow:_1px_-1px_6px_rgb(255_255_255_/_60%)] ${pathname == '/ueber-uns' && 'text-yellow-200'}`}>Über uns</a>
              <a href="/kontakt" className={`!text-[42px] after:!w-0 font-bold [text-shadow:_1px_-1px_6px_rgb(255_255_255_/_60%)] ${pathname == '/kontakt' && 'text-yellow-200'}`}>Kontakt</a>
            </div>
            <div className='flex xl:gap-10 gap-6 mt-auto'>
              <a href="/datenschutz" className='[text-shadow:_1px_-1px_6px_rgb(255_255_255_/_60%)]'>Datenschutz</a>
              <a href="/impressum" className='[text-shadow:_1px_-1px_6px_rgb(255_255_255_/_60%)]'>Impressum</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}