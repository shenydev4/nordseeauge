import Instagram from '@/app/components/icons/Instagram'
import Youtube from '@/app/components/icons/Youtube'
import Facebook from '@/app/components/icons/Facebook'
import X from '@/app/components/icons/X'

export default function Footer() {
  return (
    <div id='Footer' className='mt-auto relative overflow-hidden bg-sky-500/[0.4]'>

      <div className='pt-10 pb-20 z-10'>
        <div className='container flex xl:flex-row flex-col'>

          <div className='xl:w-4/5 w-full'>
            <p className='p-large font-bold mb-12'>Sie haben ein gemeinnütziges Projekt oder Unternehmen?</p>
            <p>Reichweite erweitern - für gemeinnützige Projekte/Unternehmen rund um die Nordsee, durch gezielte Vernetzung und Promotion in unserem Netzwerk. Unser Beitrag ist es unter anderem, dieses kostenlos für Sie umzusetzen (Nach Verfügbarkeit) und so derartige Projekte bekannter zu machen und zu unterstützen.
              <br/><br/>Wenn Sie Fragen haben oder etwas buchen möchten, nehmen Sie  gerne <a href='./kontakt' className='link-intext'>Kontakt</a> zu mir auf oder besuchen meinen <a target='_blank' href='https://shop.nordseeauge.de/?l=de' className='link-intext'>Shop</a>.
            </p>
          </div> 
          <div className='xl:w-1/5 w-full flex xl:flex-col xl:items-end xl:justify-center md:gap-10 gap-6 xl:mt-0 mt-8'>
            <a href="./angebot" className="btn">Angebot</ a>
            <a href="./kontakt" className="btn">Kontakt</a>
          </div>

        </div>
      </div>

      <div className='z-0 relative' id='footer-socials'>
        <img src="/bg-footer-2.jpg" alt="" className='z-0 w-full h-full absolute top-0 left-0 object-cover grayscale opacity-50 blur-[3px]'/>

        <div className="container z-10 relative flex xl:justify-around justify-center py-10 flex-wrap gap-y-8">
          <a className='group flex flex-col gap-4 justify-center xl:basis-0 basis-1/3 after:!w-0' href='https://www.instagram.com/nordseeauge' target='_blank'>
            <div className='xl:w-10 xl:h-10 w-8 h-8 mx-auto'>
              <Instagram />
            </div>
            <p className='text-center caption transition-custom !text-gray-800 group-hover:!text-yellow-200'>@nordseeauge</p>
          </a>
          <a className='group flex flex-col gap-4 justify-center xl:basis-0 basis-1/3 after:!w-0' href='https://www.instagram.com/martina_k_reels' target='_blank'>
            <div className='xl:w-10 xl:h-10 w-8 h-8 mx-auto'>
              <Instagram />
            </div>
            <p className='text-center caption transition-custom !text-gray-800 group-hover:!text-yellow-200'>@martina_k_reels</p>
          </a>
          <a className='group flex flex-col gap-4 justify-center xl:basis-0 basis-1/3 after:!w-0' href='https://www.youtube.com/@nordseeauge' target='_blank'>
            <div className='xl:w-10 xl:h-10 w-8 h-8 mx-auto'>
              <Youtube />
            </div>
            <p className='text-center caption transition-custom !text-gray-800 group-hover:!text-yellow-200'>@nordseeauge</p>
          </a>
          <a className='group flex flex-col gap-4 justify-center xl:basis-0 basis-1/3 after:!w-0' href='https://www.facebook.com/nordseeauge' target='_blank'>
            <div className='xl:w-10 xl:h-10 w-8 h-8 mx-auto'>
              <Facebook />
            </div>
            <p className='text-center caption transition-custom !text-gray-800 group-hover:!text-yellow-200'>@nordseeauge</p>
          </a>
          <a className='group flex flex-col gap-4 justify-center xl:basis-0 basis-1/3 after:!w-0' href='https://x.com/nordseeauge' target='_blank'>
            <div className='xl:w-10 xl:h-10 w-8 h-8 mx-auto'>
              <X />
            </div>
            <p className='text-center caption transition-custom !text-gray-800 group-hover:!text-yellow-200'>@nordseeauge</p>
          </a>
        </div>

        <div className="container z-10 relative py-6 flex flex-col">
          <div className='flex xl:justify-around md:items-center md:flex-row flex-row md:flex-nowrap flex-wrap xl:gap-0 md:gap-0 gap-y-8'>
            <div className='xl:w-1/4 flex flex-col xl:basis-none xl:basis-1/4 md:basis-1/3 w-1/2 md:order-1 order-2'>
              <a href="/angebot" className='link-sm w-fit md:mx-auto'>Angebot</a>
              <a href="/neuigkeiten" className='link-sm w-fit md:mx-auto'>Neuigkeiten</a>
              <a href="/galerie" className='link-sm w-fit md:mx-auto'>Galerie</a>
              <a href="/ueber-uns" className='link-sm w-fit md:mx-auto'>Über uns</a>
              <a href="/kontakt" className='link-sm w-fit md:mx-auto'>Kontakt</a>
            </div>
            <div className='xl:w-1/4 flex justify-center items-center xl:basis-1/4 md:basis-1/3 w-full md:order-2 order-1'>
              <a href="/" className='h-fit'>LOGO</a>
            </div>
            <div className='xl:w-1/4 flex flex-col justify-center xl:basis-1/4 md:basis-1/3 w-1/2 md:order-3 order-3'>
              <p className='mx-auto'>26125 Oldenburg</p>
              <a className='mx-auto' href='MAILTO:info@nordseeauge.de'>info@nordseeauge.de</a>
            </div>
          </div>
          <div className='flex md:flex-row flex-col md:items-center md:justify-between pt-10 md:gap-0 gap-2'>
            <div>
              <p className=''>Copyright © {new Date().getFullYear()} NordseeAuge</p>
            </div>
            <div className='flex xl:gap-10 gap-6'>
              <a href="/datenschutz">Datenschutz</a>
              <a href="/impressum">Impressum</a>
            </div>
          </div>
        </div>

      </div>
      
    </div>
  )
}