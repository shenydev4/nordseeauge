import React from 'react'
import Image  from 'next/image'

export default function Hero({
  imgSrc,
  imgAlt,
  captionIntro,
  captionText,
  imgSize = "center",
  isLarge = false,
}: {
  imgSrc:string,
  imgAlt:string,
  captionIntro:string,
  captionText:string,
  imgSize?:string,
  isLarge?:boolean,
}
) {

  return (
    <div 
      id='Hero' 
      className={`${isLarge ? 'min-h-[420px] max-h-[calc(100vh/(5 /3))] h-[calc(100vh/(5/3))]':'h-[420px]'} relative overflow-hidden max-w-dvw min-w-dvw`}
    >
      <div className='relative overflow-hidden w-full h-full'>
        <div className='absolute w-full h-full z-0'> 
          <div className="w-full h-full relative"> 
            <img 
              src={imgSrc} 
              alt={imgAlt} 
              className={`object-cover h-full w-full object-[0_${imgSize}%]`} 
            />
            <div className="absolute top-0 left-0 w-full h-full backdrop-blur-sm" /> 
          </div>
        </div>
        <span className='bg-black w-full h-full absolute top-0 opacity-20 z-10'></span>
      </div>

      <div className={`w-full absolute -translate-y-1/2 ${isLarge ? 'top-[280px]':'top-[250px]'}`}>
        <div className="container">
          <h1 className={`text-blue-900 mb-4 [text-shadow:_1px_-1px_6px_rgb(255_255_255_/_80%)] ${isLarge ? 'xl:text-[58px] md:text-[54px] text-[28px]':'xl:text-[58px] md:text-[38px] text-[28px]'}`}>NordseeAuge Agentur</h1>
          <p className='text-neutral-900 font-bold [text-shadow:_1px_-1px_5px_rgb(255_255_255_/_80%)] text-font-bebas'>{captionIntro}</p>
          <p className='text-neutral-900 font-bold [text-shadow:_1px_-1px_5px_rgb(255_255_255_/_80%)] text-font-bebas'>{captionText}</p>
        </div>
      </div>
    </div>
  )
}
