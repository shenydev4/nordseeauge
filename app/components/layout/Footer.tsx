'use client'

import { useState } from 'react';
import { usePathname } from 'next/navigation'
import CookieBanner from './CookieBanner';

import Instagram from '@/app/components/icons/Instagram'
import Youtube from '@/app/components/icons/Youtube'
import Facebook from '@/app/components/icons/Facebook'
import LinkedIn from '@/app/components/icons/LinkedIn'
import Image from 'next/image'
import ExternalLink from '@/app/components/typo/ExternalLink'

export default function Footer() {

  const [showCookieBanner, setShowCookieBanner] = useState(false);

  const handleShowCookieBanner = () => {
    setShowCookieBanner(true);
  };

  const pathname = usePathname()

  return (
    <div id='Footer' className='mt-auto relative overflow-hidden bg-gradient-to-b from-blue-400 to-blue-600'>

      <div className='pt-10 pb-20 z-10'>
        <div className='container flex xl:flex-row flex-col'>

          <div className='xl:w-4/5 w-full'>
            <p className='p-large font-bold xl:mb-12 mb-6'>Sie haben ein gemeinnütziges Projekt oder Unternehmen?</p>
            <p>Erweitern Sie Ihre Reichweite! Wir unterstützen gemeinnützige Projekte und Unternehmen rund um die Nordsee durch gezielte Vernetzung und Promotion in unserem Netzwerk.  Wir helfen Ihnen dabei, Ihre Projekte bekannter zu machen und setzen uns dafür ein, dass Ihre wertvolle Arbeit die Aufmerksamkeit erhält, die sie verdient.
              <br/><br/>Wenn Sie Fragen haben oder mehr über unsere Leistungen erfahren möchten, nehmen Sie gerne <a href='./kontakt' className='link-intext'>Kontakt</a> zu mir auf oder besuchen Sie unseren <ExternalLink href="https://shop.nordseeauge.de/?l=de" className="link-intext">Shop</ExternalLink>.
            </p>
          </div> 
          <div className='xl:w-1/5 w-full flex xl:flex-col xl:items-end xl:justify-center md:gap-10 gap-6 xl:mt-0 mt-8'>
            <a href="./buchung" className="btn">Buchung</ a>
            <a href="./kontakt" className="btn">Kontakt</a>
          </div>

        </div>
      </div>

      <div className='relative' id='footer-socials'>
        <img src="/bg-footer-original.jpg" alt="" className='z-0 w-full h-full absolute top-0 left-0 object-cover grayscale opacity-50 blur-[3px] object-[100%_1]'/>

        <div className="container z-20 relative flex md:gap-20 gap-12 justify-center xl:py-10 pt-10 pb-4">
          <ExternalLink href="https://www.instagram.com/nordseeauge" className="group flex flex-col gap-4 justify-center after:!w-0 hover:scale-110 md:hover:!text-yellow-200 hover:!text-black">
            <div className='xl:w-12 xl:h-12 w-9 h-9'>
              <Instagram />
            </div>
          </ExternalLink>
          <ExternalLink href="https://www.youtube.com/@nordseeauge" className="group flex flex-col gap-4 justify-center after:!w-0 hover:scale-110">
            <div className='xl:w-12 xl:h-12 w-9 h-9'>
              <Youtube />
            </div>
          </ExternalLink>
          <ExternalLink href="https://www.facebook.com/nordseeauge" className="group flex flex-col gap-4 justify-center after:!w-0 hover:scale-110">
            <div className='xl:w-12 xl:h-12 w-9 h-9'>
              <Facebook />
            </div>
          </ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/martina-kornfeld-a16972256/" className="group flex flex-col gap-4 justify-center after:!w-0 hover:scale-110">
            <div className='xl:w-12 xl:h-12 w-9 h-9'>
              <LinkedIn />
            </div>
          </ExternalLink>
        </div>

        <div className="container z-20 relative py-6 flex flex-col">
          <div className='flex xl:justify-around md:items-center md:flex-row flex-row md:flex-nowrap flex-wrap xl:gap-0 md:gap-0 gap-y-2'>
            <div className='xl:w-1/4 flex flex-col xl:basis-none xl:basis-1/4 md:basis-1/3 w-1/3 md:order-1 order-2'>
              <a href="/buchung" className={`link-sm w-fit md:mx-auto ${pathname === '/buchung' && 'text-yellow-200 after:!w-0'}`}>Buchung</a>
              <a href="/referenzen" className={`link-sm w-fit md:mx-auto ${pathname === '/referenzen' && 'text-yellow-200 after:!w-0'}`}>Referenzen</a>
              <a href="/galerie" className={`link-sm w-fit md:mx-auto ${pathname === '/galerie' && 'text-yellow-200 after:!w-0'}`}>Galerie</a>
              <a href="/ueber-uns" className={`link-sm w-fit md:mx-auto ${pathname === '/ueber-uns' && 'text-yellow-200 after:!w-0'}`}>Über uns</a>
              <a href="/ueber-uns/neuigkeiten" className={`link-sm w-fit md:mx-auto ${pathname === '/ueber-uns/neuigkeiten' && 'text-yellow-200 after:!w-0'}`}>Neuigkeiten</a>
              <a href="/kontakt" className={`link-sm w-fit md:mx-auto ${pathname === '/kontakt' && 'text-yellow-200 after:!w-0'}`}>Kontakt</a>
            </div>
            <div className='xl:w-1/4 flex justify-center items-center xl:basis-1/4 md:basis-1/3 w-full md:order-2 order-1'>
              <a href="/" className='block after:!w-0 hover:scale-110 relative xl:w-[180px] xl:h-[180px] w-[120px] h-[120px]'>
                <Image
                  src='/logo.webp'
                  alt='NordseeAuge Logo'
                  fill
                  sizes='(max-width: 1399px) 120px, 180px'
                  className='w-full h-full top-0 left-0 object-cover'
                />
              </a>
            </div>
            <div className='xl:w-1/4 flex flex-col justify-center xl:basis-1/4 md:basis-1/3 w-2/3 md:order-3 order-3'>
              <p className='mx-auto'>@nordseeauge</p>
              <p className='mx-auto'>26125 Oldenburg</p>
              <a className='mx-auto' href='MAILTO:info@nordseeauge.de'>info@nordseeauge.de</a>
            </div>
          </div>
          <div className='flex md:flex-row flex-col md:items-center md:justify-between pt-10 md:gap-0 gap-2'>
            <div>
              <p className='!text-[20px]'>Copyright © {new Date().getFullYear()} NordseeAuge</p>
            </div>
            <div className='flex xl:gap-10 md:gap-4 gap-2'>
              <button onClick={handleShowCookieBanner}>
                <a className='xl:!text-[24px] !text-[20px]'>Cookies</a>
              </button>
              {showCookieBanner && <CookieBanner calledFromFooter />}
              <a href="/datenschutz" className={`xl:!text-[24px] !text-[20px] ${pathname === '/datenschutz' && 'text-yellow-200 after:!w-0'}`}>Datenschutz</a>
              <a href="/impressum" className={`xl:!text-[24px] !text-[20px] ${pathname === '/impressum' && 'text-yellow-200 after:!w-0'}`}>Impressum</a>
            </div>
          </div>
        </div>

      </div>
      
    </div>
  )
}
