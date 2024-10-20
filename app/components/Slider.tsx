'use client'

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import Instagram from "@/app/components/icons/Instagram";
import Shop from "@/app/components/icons/Shop";
import '@/app/galerie/swiper.css'

export default function Slider({
  className
}:{
  className?:string
}) {

  return (
    <div className={`${className} overflow-hidden flex xl:flex-row flex-col justify-between xl:gap-0 md:gap-12 gap-6`}>

      <div className='xl:w-[450px]'>
        <h2 className='mb-6'>
          Ein paar Highlights
        </h2>
        <p className='mb-4'>Sehen Sie sich gerne Videos und Bilder von der Nordsee an.</p>
        <p className='mb-4'>Wenn Sie mehr sehen möchten besuchen Sie gerne meine Socials, außerdem können Sie eingerahmte Bilder von uns im Shop kaufen.</p>
        <div className='flex gap-10'>
          <a className="flex items-center gap-3 after:!w-0" href='https://www.instagram.com/nordseeauge/' target="_blank">
            <span className="block w-6 h-6 mt-1.5">
              <Instagram />
            </span>
            <p>nordseeauge</p>
          </a>
          <a className="flex items-center gap-3 after:!w-0" href='https://shop.nordseeauge.de/?l=de' target="_blank">
            <span className="block w-6 h-6 mt-1.5">
              <Shop />
            </span>
            <p>shop</p>
          </a>
        </div>
      </div>
      
      <div className='xl:w-[800px] xl:ml-[50px] py-[72px] overflow-hidden'>
        <Swiper
          className='!overflow-visible'
          modules={[Navigation, Pagination]}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          keyboard={{ enabled: true, }}
        >
          <SwiperSlide className='w-full aspect-video my-auto'>
            <div className='aspect-video'>
              <Image 
                src='/slider-2.jpg'
                alt='image'
                fill
                className='object-contain'
              />
            </div>
          </SwiperSlide>

          <SwiperSlide className='w-full aspect-video my-auto'>
            <div className='aspect-video'>
              <Image 
                src='/slider-1.jpg'
                alt='image'
                fill
                className='object-contain'
              />
            </div>
          </SwiperSlide>

          <SwiperSlide className='w-full aspect-video my-auto'>
            <div className='aspect-video'>
              <Image 
                src='/slider-3.jpg'
                alt='image'
                fill
                className='object-contain'
              />
            </div>
          </SwiperSlide>

        </Swiper>
      </div>

    </div>
  )
}
