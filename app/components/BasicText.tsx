export default function BasicText({
  className
}:{
  className?:string
}) {
  return (
    <div className={className}>

      <p className="mb-4">Entdecken Sie die Nordsee mit uns! Wir halten die magischen Momente an der Küste fest - vom rauen Charme des Wattenmeers bis zum goldenen Glanz der Abendsonne.</p>
      
      <p>Unsere Reisen und Erlebnisse teilen wir auch auf unseren <a href="#footer-socials" className="link-intext">Social-Media-Kanälen</a> - lassen Sie sich inspirieren!</p>

    </div>
  )
}
