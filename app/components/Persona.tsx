import Image from "next/image"

export interface PersonaProps {
  className?:string,
  headline:string,
}

export default function Persona({
  className,
  headline,
}:PersonaProps) {
  return (
    <div className={className}>

      <div className={`flex md:flex-row flex-col md:gap-16 gap-6 mb-10`}>

        <div className="basis-1/3 flex flex-col xl:gap-8 items-center">
          <h2 className="mb-8 xl:text-[42px] md:text-[28px] text-[36px]">{headline}</h2>
          <div className="relative xl:w-[318px] md:w-[212px] w-[300px] xl:h-[440px] md:h-[293px] h-[415px] mx-auto">
            <Image 
              src='/portrait.webp'
              alt="Portrait Martina Kornfeld"
              fill
            />
          </div>
        </div>

        <div className="basis-2/3 pt-3">
          <p className="xl:mb-6">
            Moin aus dem hohen Norden. Mein Name ist Martina Kornfeld. Ich bin Influencer SocialMedia-Manager/Digital Creator an der Nordsee. Bekannt wurde ich im Social Media als das NordseeAuge. 
            <br /><br />
            <b>2023 gründete ich die  Nordsee-Agentur , wir begleiten spezielle Events an der Nordsee und zeigen Ihnen die schönsten Highlights für Ihren Urlaub. Ich erstelle mit meinem kleinen Team Imagefilme, Fotos , Social Media Content für Ihr Unternehmen. Auch private Shootings sind möglich.</b>
          </p>
          <p className="xl:block hidden">
            Mein Gebiet reicht von Großraum Oldenburg bis rund um den Jadebusen, Wilhelmshaven, Friesland, Ostfriesland, Wangerland, die Nordsee Inseln und oft auch darüber hinaus.
          </p>
        </div>

      </div>

      <p className="mb-6 xl:hidden block">
        Mein Gebiet reicht von Großraum Oldenburg bis rund um den Jadebusen, Wilhelmshaven, Friesland, Ostfriesland, Wangerland, die Nordsee Inseln und oft auch darüber hinaus.
      </p>
      <p>
        Ich bin ein absoluter Nordsee Liebhaber. Ich habe mit meinen Bildern und Videos im Social Media die letzten Jahren tausende Menschen begeistern und inspirieren können und habe eine große Community 10 K Followers auf Instagram.  Immer wieder findest du bei mir eher unbekannte und exklusive Ziele, Örtlichkeiten und Events, die ich selbst besucht habe und empfehlen kann. Ich kenne die Nordsee und ihre Umgebung sehr genau. In der Galerie finden Sie meine Einsatzgebiete, Kooperationen und Referenzen)
      </p>

    </div>
  )
}