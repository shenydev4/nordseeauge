export default function Bookings({
  className,
  headline
}:{
  className?:string,
  headline:string
}) {
  return (
    <div className={className}>

      <h2 className="mb-10">{headline}</h2>

      <ul className="mb-16">
        <li><b>privates Fotoshooting</b> an der Nordsee</li>
        <li><b>Contenterstellung</b> für Social Media Kanäle (Fotos, Reels, Videos, Storytelling)</li>
        <li><b>Imagefilm</b> Fotos, Videos für Küstenregionen, Agenturen, Events, Ferienwohnung- Anbieter , Pensionen und Hotels und Privatanfragen</li>
        <li><b>Drohnenaufnahmen</b> (Voraussetzung Drohnenflug am Standort erlaubt)</li>
        <li><b>Rundflug</b> über dem Jadebusen für bis zu 6 Personen , nur bei NordseeAuge zum Exklusiv Preis</li>
        <li><b>Produktwerbung auf unserem Social Media Kanal</b> mit über 10K Follower und großer Community (nur nordseebezogene Produkte) auf Anfrage</li>
      </ul>

      <p>Sie möchten eines der Angebote buchen oder haben Fragen? Dann nehmen Sie gerne <a href="/kontakt" className="link-intext">Kontakt</a> zu uns auf!</p>
      
    </div>
  )
}
