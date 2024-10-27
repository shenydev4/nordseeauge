import ExternalLink from '@/app/components/typo/ExternalLink'

export default function CardsExtern({
  className
}:{
  className?:string
}) {
  return (
    <div className={`${className} flex md:flex-row flex-col xl:justify-around md:justify-between`}>

      <ExternalLink href="https://shop.nordseeauge.de/?l=de" className="card xl:w-[500px] md:w-[350px] w-full rounded xl:px-10 xl:py-8 px-6 py-6 hover:cursor-pointer scale-95 hover:scale-100 bg-gradient-to-r from-yellow-100 to-yellow-100 via-yellow-200">
        <h3 className="mb-4 text-center">Shop</h3>
        <p className="text-center">Hier könnte ein teaser text für den shop sein.</p>
      </ExternalLink>
      <ExternalLink href="https://workshop.nordseeauge.de/" className="card xl:w-[500px] md:w-[350px] w-full rounded xl:px-10 xl:py-8 px-6 py-6 hover:cursor-pointer scale-95 hover:scale-100 bg-gradient-to-r from-yellow-100 to-yellow-100 via-yellow-200">
        <h3 className="mb-4 text-center">Smartphone Workshop</h3>
        <p className="text-center">Hier könnte ein teaser text für den workshop sein.</p>
      </ExternalLink>
      
    </div>
  )
}
