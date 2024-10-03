export default function ExploreCards({
    className,
    headline
  }:{
    className?:string,
    headline:string
}) {

  const cardClasses = "xl:w-1/3 md:w-1/2 w-full rounded-lg px-2 py-6 hover:cursor-pointer scale-95 hover:scale-100 transition-custom bg-gradient-to-r"
  const cardHeadlineClasses = "text-center mb-2"
  const cardCaptionClasses = "text-center"

  return (
    <div className={className}>

      <h2 className="w-full mb-6">{headline}</h2>

      <div className="w-full flex flex-wrap justify-center gap-y-3">

        <div className={`${cardClasses} from-yellow-200 to-yellow-100`}>
          <h3 className={cardHeadlineClasses}>Angebot</h3>
          <p className={cardCaptionClasses}>Unser Onlineshop, Smartphone Workshops und Buchungen</p>
        </div>
        <div className={`${cardClasses} from-yellow-100 to-yellow-100 via-yellow-100`}>
          <h3 className={cardHeadlineClasses}>Neuigkeiten</h3>
          <p className={cardCaptionClasses}>Unsere Planungen für 2024 und vergangene Highlights</p>
        </div>
        <div className={`${cardClasses} from-yellow-100 to-yellow-200`}>
          <h3 className={cardHeadlineClasses}>Galerie</h3>
          <p className={cardCaptionClasses}>Von uns bereits besuchte Orte</p>
        </div>
        <div className={`${cardClasses} from-yellow-200 to-yellow-100`}>
          <h3 className={cardHeadlineClasses}>Über uns</h3>
          <p className={cardCaptionClasses}>Kooperationen, Equipment & zu meiner Person</p>
        </div>
        <div className={`${cardClasses} from-yellow-100 to-yellow-200`}>
          <h3 className={cardHeadlineClasses}>Kontakt</h3>
          <p className={cardCaptionClasses}>Nehmen Sie einfach und schnell Kontakt zu uns auf</p>
        </div>

      </div>

    </div>
  )
}