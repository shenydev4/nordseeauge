import ExternalLink from '@/app/components/typo/ExternalLink'

export default function BasicList({
  className,
}:{
  className?:string,
}) {

    return (
      <>
        <div className='space-after-0'>

          <h2 className="mb-8">Aktuell in 2024:</h2>
          
          <ul>
            <li><b>Top-Info: Nordseeauge ist offizieller Partner der Sail Bremerhaven '25.</b> Sie wünschen für Ihr Schiff, Unternehmen eine Promotion, dann schicken Sie mir gerne <a href="/kontakt" className="link-intext link-sm">Ihre Anfrage</a>. Die Promotions laufen über unseren Kanal, ggf. in Kollaboration mit <ExternalLink href="https://www.instagram.com/sailbremerhaven_official/" className="link-intext link-sm">@sailbremerhaven_official</ExternalLink>, nur nach Absprache mit Bremerhaven.</li>
            <li><b>Seit August 2024 biete ich <a href="https://workshop.nordseeauge.de" target="_blank" className="link-intext link-sm">Smartphone Kreativ Workshops</a> an der Nordsee an.</b></li>
            <li><b>September:</b> Beachbowl Tunier der Top Football-Teams aus ganz Deutschland, Sail Wilhelmshaven.</li>
            <li><b>August:</b> Maritime Tage Bremerhaven. Nordseeauge on Board der Gulden Leeuw., Seehundauswilderung vor der Insel Juist</li>
            <li><b>Juli:</b> Zu Besuch in der Seehundstation Friedrichskroog, unterwegs im Wangerland, Friesland und Butjadingen, Kooperation mit "Thandsome - die Tür"</li>
            <li><b>Juni:</b> DelfSail in Delfzijl, Holland, Nordseeauge auf der ElGalion Andalucia (Collaboration Post), Seehundstation Norddeich</li>
            <li><b>Mai:</b> Nordseeauge unterwegs in Nordjütland, Dänemark, Matjesfest Emden</li>
            <li><b>April:</b> Helgoland Düne</li>
          </ul>

        </div>



        <div className='space-after-1 flex md:flex-row flex-col xl:gap-0 md:gap-6 gap-12'>

          <div className="basis-1/2">
            <h3 className="mb-10">Planungen 2024</h3>
            <ul>
              <li>Winter an der Nordsee</li>
              <li>Geburtstag mal anders, Centerpark Nordsee</li>
              <li>Helgoland, Düne ganz exklusiv</li>
              <li>Nordjütland kompakt</li>
              <li>Seehundstation Norddeich </li>
              <li>Seehundstation Friedrichskoog</li>
              <li>Auswilderungsfahrt der Heuler</li>
              <li>Tag der Seenotretter</li>
              <li>Maritime Tage Bremerhaven</li>
              <li>Sail Wilhemshaven</li>
              <li>Nordseeinsel Langeoog /Juist (geplant)</li>
              <li>auf zur Insel Baltrum (geplant)</li>
              <li>Ist Borkum der größte Sandhaufen der Welt?</li>
              <li>Niederlande Nordsee Ferienpark (Kooperation geplant)</li>
              <li>diverse Events im Großraum der Nordseeküste</li>
            </ul>
          </div>

          <div className="basis-1/2">
            <h3 className="mb-10">Highlights 2023</h3>
            <ul>
              <li>Nordseeinsel Norderney</li>
              <li>Nordseeinsel Wangerooge</li>
              <li>unterwegs mit dem Inselflieger</li>
              <li>besondere Geheimecken rund um den Jadebusen</li>
              <li>Wilhelmshaven Sailing Cup</li>
              <li>Ebbe und Flut an der Nordsee, exklusive Einblicke</li>
              <li>Bad Zwischenahner Meer, Rederei, Park der Gärten</li>
              <li>auf zum Kramermarkt Oldenburg</li>
              <li>Nordseeauge Privat- Urlaub in Lara/Türkei</li>
              <li>Sturmflut an der Nordsee</li>
              <li>Küstenorte in Ostfriesland</li>
            </ul>
          </div>

        </div>
      </>
    )
}