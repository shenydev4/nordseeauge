'use client'

import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Cross from '../icons/Cross'
import Menu from '../icons/Menu'
import Arrow from '../icons/Arrow'
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
      <div className='container flex justify-between md:py-6 pt-2 pb-4'>

        <div className='flex items-center justify-between md:w-fit w-full'>
          <a href="/" className={`block after:!w-0 hover:scale-110 relative md:w-[100px] xl:h-[130px] xl:w-[130px] md:h-[100px] w-[150px] h-[150px] duration-500 ${mobileMenuOpacity ? 'opacity-0':'opacity-100'}`} style={{ background: 'radial-gradient(rgba(255, 255, 255, 0.4), transparent 70%)' }}>
            <Image
              src='/logo.webp'
              alt='NordseeAuge Logo'
              fill
              sizes='(max-width: 1399px) 78px, 102px'
              className='w-full h-full top-0 left-0 object-cover'
            />
          </a>
          <div className='md:hidden h-10'>
            <button onClick={() => handleMobileMenu(true)} className={`w-10 h-10 text-gray-900 duration-700 ${mobileMenuOpacity ? 'opacity-0':'opacity-100'}`}>
              <Menu />
            </button>
          </div>
        </div>

        <div className='xl:gap-12 md:gap-4 uppercase md:flex hidden mt-6'>
          <a href="/buchung" className={`h-fit ${pathname === '/buchung' && 'text-yellow-200 after:!w-0'}`}>
            Buchung
          </a>

          <div className="group relative h-fit hover:h-auto">
            <div className='flex items-center xl:gap-3 gap-2'>
              <a href="/referenzen" className={`h-fit ${pathname === '/referenzen' && 'text-yellow-200 after:!w-0'}`}>
                Referenzen
              </a>
              <span className='group-hover:rotate-0 rotate-180 duration-300 block w-5 h-5 mt-0.5'>
                <Arrow />
              </span>
            </div>
            <div className="mt-2 duration-300 absolute top-10 left-0 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
              <a href="/galerie" className={`${pathname === '/galerie' && 'text-yellow-200 after:!w-0'}`}>
                Galerie
              </a>
            </div>
          </div>

          <div className="group relative h-fit hover:h-auto">
            <div className='flex items-center xl:gap-3 gap-2'>
              <a href="/ueber-uns" className={`h-fit ${pathname === '/ueber-uns' && 'text-yellow-200 after:!w-0'}`}>
                Über uns
              </a>
              <span className='group-hover:rotate-0 rotate-180 duration-300 block w-5 h-5 mt-0.5'>
                <Arrow />
              </span>
            </div>
            <div className="mt-2 duration-300 absolute top-10 left-0 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
              <a href="/ueber-uns/neuigkeiten" className={`${pathname === '/ueber-uns/neuigkeiten' && 'text-yellow-200 after:!w-0'}`}>
                Neuigkeiten
              </a>
            </div>
          </div>

          <a href="/kontakt" className={`h-fit ${pathname === '/kontakt' && 'text-yellow-200 after:!w-0'}`}>
            Kontakt
          </a>
        </div>

        <div className={`absolute left-0 top-0 w-full min-h-dvh h-dvh transition-opacity duration-500 pt-2 pb-4 ${isMobileMenu ? 'block':'hidden'} ${mobileMenuOpacity ? 'opacity-100':'opacity-0'}`}>
          <div className='absolute h-1/2 top-0 left-0 w-full bg-gradient-to-b from-orange-400/[0.3] to-transparent'></div>
          <div className='absolute w-full h-full top-0 left-0 -z-10'>
            <img src="/bg-grass-1.jpg" alt="" className='object-cover h-full w-full scale-105 brightness-75 object-[100%_0]'/>
            <div className="absolute top-0 left-0 w-full h-full backdrop-blur-sm" />
          </div>
          <div className="container relative h-full flex flex-col">
            <div className='flex justify-between items-center'>
              <a href="/" className='block after:!w-0 hover:scale-110 relative w-[150px] h-[150px]' style={{ background: 'radial-gradient(rgba(255, 255, 255, 0.4), transparent 70%)' }}>
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
            <div className='h-full overflow-y-auto relative mt-6'>
              <div className='flex flex-col h-full pt-4'>
                <a href="/buchung" className={`text-font-bebas !text-[42px] after:!w-0 font-bold [text-shadow:_1px_-1px_6px_rgb(255_255_255_/_60%)] ${pathname == '/buchung' && 'text-yellow-200'}`}>Buchung</a>
                <a href="/referenzen" className={`text-font-bebas !text-[42px] after:!w-0 font-bold [text-shadow:_1px_-1px_6px_rgb(255_255_255_/_60%)] ${pathname == '/galerie/referenzen' && 'text-yellow-200'}`}>Referenzen</a>
                <a href="/galerie" className={`text-font-bebas !text-[42px] after:!w-0 font-bold [text-shadow:_1px_-1px_6px_rgb(255_255_255_/_60%)] ${pathname == '/galerie' && 'text-yellow-200'}`}>Galerie</a>
                <a href="/ueber-uns" className={`text-font-bebas !text-[42px] after:!w-0 font-bold [text-shadow:_1px_-1px_6px_rgb(255_255_255_/_60%)] ${pathname == '/ueber-uns' && 'text-yellow-200'}`}>Über uns</a>
                <a href="/ueber-uns/neuigkeiten" className={`text-font-bebas !text-[42px] after:!w-0 font-bold [text-shadow:_1px_-1px_6px_rgb(255_255_255_/_60%)] ${pathname == '/neuigkeiten' && 'text-yellow-200'}`}>Neuigkeiten</a>
                <a href="/kontakt" className={`text-font-bebas !text-[42px] after:!w-0 font-bold [text-shadow:_1px_-1px_6px_rgb(255_255_255_/_60%)] ${pathname == '/kontakt' && 'text-yellow-200'}`}>Kontakt</a>
              </div>
            </div>
              <div className='flex xl:gap-10 gap-5 mt-auto'>
                <a href="/datenschutz" className={`text-gray-300 [text-shadow:_1px_-1px_6px_rgb(0_0_0_/_60%)] ${pathname === '/datenschutz' && 'text-yellow-200 after:!w-0'}`}>Datenschutz</a>
                <a href="/impressum" className={`text-gray-300 [text-shadow:_1px_-1px_6px_rgb(0_0_0_/_60%)] ${pathname === '/impressum' && 'text-yellow-200 after:!w-0'}`}>Impressum</a>
              </div>
          </div>
        </div>

      </div>
    </div>
  )
}