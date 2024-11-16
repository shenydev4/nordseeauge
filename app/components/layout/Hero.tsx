import React from 'react'
import Image  from 'next/image'

export default function Hero({
  imgSrc,
  imgAlt,
  captionIntro,
  captionText,
  imgXShift = "0",
  imgYShift = "0",
  isLarge = false,
}: {
  imgSrc:string,
  imgAlt:string,
  captionIntro:string,
  captionText:string,
  imgXShift?:string,
  imgYShift?:string,
  isLarge?:boolean,
}
) {

  return (
    <div 
      id='Hero' 
      className={`${isLarge ? 'xl:min-h-[520px] min-h-[420px] max-h-[calc(100vh/(5 /3))] h-[calc(100vh/(5/3))]':'xl:h-[520px] h-[420px]'} relative overflow-hidden max-w-dvw min-w-dvw`}
    >
      <div className='relative overflow-hidden w-full h-full'>
        <div className='absolute w-full h-full z-0'> 
          <div className="w-full h-full relative"> 
            <div className='absolute h-1/2 top-0 left-0 w-full bg-gradient-to-b from-orange-400/[0.2] to-transparent'></div>
            <img 
              src={imgSrc} 
              alt={imgAlt} 
              className={`object-cover h-full w-full object-[${imgXShift}_${imgYShift}]`} 
            />
            <div className="absolute top-0 left-0 w-full h-full backdrop-blur-sm" /> 
          </div>
        </div>
        <span className='bg-black w-full h-full absolute top-0 opacity-20 z-10'></span>
      </div>

      <div className={`w-full absolute z-10 ${isLarge ? 'top-1/2 xl:-translate-y-1/2 md:-translate-y-1/3 -translate-y-1/4':'xl:top-[280px] md:top-[240px] top-[270px] -translate-y-1/2'}`}>
        <div className="container">
          <h1 className={`text-blue-900 [text-shadow:_1px_-1px_6px_rgb(255_255_255_/_80%)] ${isLarge ? 'xl:text-[64px] md:text-[54px] text-[34px]':'xl:text-[64px] md:text-[48px] text-[34px]'}`}>NordseeAuge Agentur</h1>
          <p className='text-neutral-900 font-bold [text-shadow:_1px_-1px_5px_rgb(255_255_255_/_80%)] text-font-bebas'>{captionIntro}</p>
          <p className='text-neutral-900 font-bold [text-shadow:_1px_-1px_5px_rgb(255_255_255_/_80%)] text-font-bebas'>{captionText}</p>
        </div>
      </div>
    </div>
  )
}
