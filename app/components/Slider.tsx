'use client'

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import Instagram from "@/app/components/icons/Instagram";
import Shop from "@/app/components/icons/Shop";
import '@/app/galerie/swiper.css'
import ExternalLink from '@/app/components/typo/ExternalLink'

export default function Slider({
  className
}:{
  className?:string
}) {

  return (
    <div className={`${className} overflow-hidden flex md:flex-row flex-col justify-between md:items-center xl:gap-0 md:gap-12 gap-6`}>

      <div className='xl:w-3/5 md:w-1-2'>
        <h2 className='mb-6'>
          Ein paar Highlights
        </h2>
        <p className='mb-4'>Sehen Sie sich gerne Videos und Bilder von der Nordsee an.</p>
        <p className='mb-4'>Wenn Sie mehr sehen möchten besuchen Sie gerne meine Socials, außerdem können Sie eingerahmte Bilder von uns im Shop kaufen.</p>
        <div className='flex gap-10'>
          <ExternalLink href="https://www.instagram.com/nordseeauge/" className="flex items-center gap-3 after:!w-0">
            <span className="block w-6 h-6 mt-1.5">
              <Instagram />
            </span>
            <p className='underline'>nordseeauge</p>
          </ExternalLink>
          <ExternalLink href="https://shop.nordseeauge.de/?l=de" className="flex items-center gap-3 after:!w-0">
            <span className="block w-6 h-6 mt-1.5">
              <Shop />
            </span>
            <p className='underline'>shop</p>
          </ExternalLink>
        </div>
      </div>
      
      <div className='xl:w-2/5 md:w-1-2 xl:ml-[50px] pt-[72px] overflow-hidden'>
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
          <SwiperSlide className='w-full aspect-[0.8] my-auto rounded overflow-hidden'>
            <span className='absolute w-full h-full flex items-center justify-center'>
              <span className='swiper-loading-placeholder'></span>
            </span>
            <div className='aspect-[0.8]'>
              <Image 
                src='/swiper-image-1.jpeg'
                alt='image'
                fill
                className='object-contain'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className='w-full aspect-[0.8] my-auto rounded overflow-hidden'>
            <span className='absolute w-full h-full flex items-center justify-center'>
              <span className='swiper-loading-placeholder'></span>
            </span>
            <div className='aspect-[0.8]'>
              <Image 
                src='/swiper-image-2.jpg'
                alt='image'
                fill
                className='object-contain'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className='w-full aspect-[0.8] my-auto rounded overflow-hidden'>
            <span className='absolute w-full h-full flex items-center justify-center'>
              <span className='swiper-loading-placeholder'></span>
            </span>
            <div className='aspect-[0.8]'>
              <Image 
                src='/swiper-image-3.jpg'
                alt='image'
                fill
                className='object-contain'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className='w-full aspect-[0.8] my-auto rounded overflow-hidden'>
            <span className='absolute w-full h-full flex items-center justify-center'>
              <span className='swiper-loading-placeholder'></span>
            </span>
            <div className='aspect-[0.8]'>
              <Image 
                src='/swiper-image-4.jpg'
                alt='image'
                fill
                className='object-contain'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className='w-full aspect-[0.8] my-auto rounded overflow-hidden'>
            <span className='absolute w-full h-full flex items-center justify-center'>
              <span className='swiper-loading-placeholder'></span>
            </span>
            <div className='aspect-[0.8]'>
              <Image 
                src='/swiper-image-5.jpg'
                alt='image'
                fill
                className='object-contain'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className='w-full aspect-[0.8] my-auto rounded overflow-hidden'>
            <span className='absolute w-full h-full flex items-center justify-center'>
              <span className='swiper-loading-placeholder'></span>
            </span>
            <div className='aspect-[0.8]'>
              <Image 
                src='/swiper-image-6.jpeg'
                alt='image'
                fill
                className='object-contain'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className='w-full aspect-[0.8] my-auto rounded overflow-hidden'>
            <span className='absolute w-full h-full flex items-center justify-center'>
              <span className='swiper-loading-placeholder'></span>
            </span>
            <div className='aspect-[0.8]'>
              <Image 
                src='/swiper-image-7.jpeg'
                alt='image'
                fill
                className='object-contain'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className='w-full aspect-[0.8] my-auto rounded overflow-hidden'>
            <span className='absolute w-full h-full flex items-center justify-center'>
              <span className='swiper-loading-placeholder'></span>
            </span>
            <div className='aspect-[0.8]'>
              <Image 
                src='/swiper-image-8.jpeg'
                alt='image'
                fill
                className='object-contain'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className='w-full aspect-[0.8] my-auto rounded overflow-hidden'>
            <span className='absolute w-full h-full flex items-center justify-center'>
              <span className='swiper-loading-placeholder'></span>
            </span>
            <div className='aspect-[0.8]'>
              <Image 
                src='/swiper-image-9.jpeg'
                alt='image'
                fill
                className='object-contain'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className='w-full aspect-[0.8] my-auto rounded overflow-hidden'>
            <span className='absolute w-full h-full flex items-center justify-center'>
              <span className='swiper-loading-placeholder'></span>
            </span>
            <div className='aspect-[0.8]'>
              <Image 
                src='/swiper-image-10.jpg'
                alt='image'
                fill
                className='object-contain'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className='w-full aspect-[0.8] my-auto rounded overflow-hidden'>
            <span className='absolute w-full h-full flex items-center justify-center'>
              <span className='swiper-loading-placeholder'></span>
            </span>
            <div className='aspect-[0.8]'>
              <Image 
                src='/swiper-image-11.jpg'
                alt='image'
                fill
                className='object-contain'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className='w-full aspect-[0.8] my-auto rounded overflow-hidden'>
            <span className='absolute w-full h-full flex items-center justify-center'>
              <span className='swiper-loading-placeholder'></span>
            </span>
            <div className='aspect-[0.8]'>
              <Image 
                src='/swiper-image-12.jpg'
                alt='image'
                fill
                className='object-contain'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className='w-full aspect-[0.8] my-auto rounded overflow-hidden'>
            <span className='absolute w-full h-full flex items-center justify-center'>
              <span className='swiper-loading-placeholder'></span>
            </span>
            <div className='aspect-[0.8]'>
              <Image 
                src='/swiper-image-13.jpg'
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
