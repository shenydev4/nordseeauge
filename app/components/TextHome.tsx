export default function TextHome({
    className
  }:{
    className?:string
}) {
  return (
    <div className={className}>

      <p className="mb-4">
        Die Nordsee ist unsere Leidenschaft! Nordseeauge steht für die Liebe zur Nordsee, für Nachhaltigkeit und den Erhalt des einzigartigen Wattenmeers.
      </p>
      <p className="xl:mb-4 md:mb-6 mb-8">
        Als Digital Creator Team halten wir die Schönheit der Nordsee in Bildern fest:
      </p>
      <ul className="mb-14">
        <li><b>Atemberaubende Momente:</b> Wir filmen besondere Augenblicke, faszinierende Landschaften und spannende Events.</li>
        <li><b>Imagefilme und Drohnenaufnahmen:</b> Wir erstellen professionelle Aufnahmen aus der Luft und am Boden.</li>
        <li><b>Veranstaltungsbegleitung:</b> Wir begleiten und berichten über Events rund um die Nordsee.</li>
      </ul>

      <h3 className="mb-4">Sie möchten ein Stück Nordsee für sich?</h3>
      <p>Jedes Bild, das Sie von uns aus den sozialen Medien kennen (@nordseeauge), können Sie hier in unserem <a target='_blank' href='https://shop.nordseeauge.de/?l=de' className='link-intext'>Onlineshop</a> erwerben.</p>
      <p className="mb-14">Ist Ihr Wunschmotiv nicht dabei? <a href='./kontakt' className='link-intext'>Kontaktieren</a> Sie uns gerne!</p>

      <h3>Wir bieten Ihnen außerdem:</h3>
      <ul className="mb-14">
        <li>Private Fotoshootings</li>
        <li>Imagefilme</li>
        <li>Drohnenaufnahmen</li>
        <li>Eventbegleitung</li>
        <li>Content Erstellung für Social Media Kanäle</li>
      </ul>

      <h3 className="mb-4">Gemeinsam für die Nordsee:</h3>
      <p>Wir unterstützen und fördern gemeinnützige Projekte und Unternehmen rund um die Nordsee. Durch gezielte Vernetzung und Collaboration helfen wir, ihre Reichweite – auch in den sozialen Medien – zu erhöhen.</p>

    </div>
  )
}