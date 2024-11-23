export default function ExploreCards({
    className,
    headline
  }:{
    className?:string,
    headline:string
}) {

  const cardClasses = "xl:w-1/3 md:w-1/2 w-full rounded-lg px-2 py-6 hover:cursor-pointer scale-95 hover:scale-100 transition-custom bg-gradient-to-r from-yellow-200 to-yellow-200 via-yellow-100 after:!w-0 hover:!text-black"
  const cardHeadlineClasses = "text-center mb-2"
  const cardCaptionClasses = "text-center"

  return (
    <div className={className}>

      <h2 className="w-full mb-6">{headline}</h2>

      <div className="w-full flex flex-wrap justify-center gap-y-3">

        <a className={cardClasses} href="/buchung">
          <h3 className={cardHeadlineClasses}>Buchung</h3>
          <p className={cardCaptionClasses}>Workshops, Shop & mehr - Jetzt buchen!</p>
        </a>
        <a className={cardClasses} href="/galerie">
          <h3 className={cardHeadlineClasses}>Galerie</h3>
          <p className={cardCaptionClasses}>Entdecke unsere Bilderwelten!</p>
        </a>
        <a className={cardClasses} href="/galerie/referenzen">
          <h3 className={cardHeadlineClasses}>Referenzen</h3>
          <p className={cardCaptionClasses}>lorem ipsum</p>
        </a>
        <a className={cardClasses} href="/ueber-uns">
          <h3 className={cardHeadlineClasses}>Über uns</h3>
          <p className={cardCaptionClasses}>Wer steckt dahinter? Lerne uns kennen!</p>
        </a>
        <a className={cardClasses} href="/ueber-uns/neuigkeiten">
          <h3 className={cardHeadlineClasses}>Neuigkeiten</h3>
          <p className={cardCaptionClasses}>Immer up-to-date: News & Events</p>
        </a>
        <a className={cardClasses} href="/kontakt">
          <h3 className={cardHeadlineClasses}>Kontakt</h3>
          <p className={cardCaptionClasses}>Fragen? Wir sind für Sie da!</p>
        </a>

      </div>

    </div>
  )
}