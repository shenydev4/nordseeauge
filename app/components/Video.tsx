'use client'

import YouTube from "react-youtube";

export default function Video({
  className
}:{
  className?:string
}) {

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className={`${className}`}>

      <YouTube videoId="QF0EkWvoB74" opts={opts} className='aspect-video' iframeClassName='h-full w-full' />
      
    </div>
  )
}