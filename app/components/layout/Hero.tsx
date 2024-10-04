import React from 'react'
import Image  from 'next/image'

export default function Hero({
  isLarge = false,
  captionIntro,
  captionText,
}: {
  isLarge?:boolean,
  captionIntro:string,
  captionText:string,
}
) {

  return (
    <div id='Hero' className={`${isLarge ? 'min-h-dvh max-h-dvh h-1':'h-[420px]'} relative overflow-hidden max-w-dvw min-w-dvw`}>
        
      <div className='relative overflow-hidden w-full h-full'>
        <div className='absolute w-full h-full z-0'>
          <img src="/bg-placeholder.jpg" alt="" className='object-cover blur-sm h-full w-full'/>
        </div>
        <span className='bg-black w-full h-full absolute top-0 opacity-20 z-10'></span>
      </div>

      <div className={`w-full absolute -translate-y-1/2 ${isLarge ? 'top-1/2':'top-[240px]'}`}>
        <div className="container">
          <h1 className={`mb-4 [text-shadow:_1px_-1px_6px_rgb(255_255_255_/_80%)] ${isLarge ? 'xl:text-[58px] md:text-[54px] text-[28px]':'md:text-[38px] text-[28px]'}`}>Nordsee.Auge Agentur</h1>
          <p className='font-bold [text-shadow:_1px_-1px_6px_rgb(255_255_255_/_80%)]'>{captionIntro}</p>
          <p className='font-bold [text-shadow:_1px_-1px_6px_rgb(255_255_255_/_80%)]'>{captionText}</p>
        </div>
      </div>
    </div>
  )
}
