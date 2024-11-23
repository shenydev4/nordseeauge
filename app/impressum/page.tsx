import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "@nordseeauge | Impressum",
  description: "Hier finden Sie die gesetzlich vorgeschriebenen Angaben zu unserem Unternehmen, wie Anbieterkennzeichnung, Kontaktinformationen und Verantwortlichkeiten gemäß Telemediengesetz (TMG).",
};

import Hero from '../components/layout/Hero';

export default function Home() {
  return (
    <>
      <Hero 
        imgSrc="/bg-grass-1.jpg"
        imgAlt="Hero Image"
        captionIntro="Moin und Herzlich Willkommen bei der NordseeAuge Agentur."
        captionText="Erlebe hier exklusive Hintergründe, Planungen und Angebote rund um die Nordsee."
        imgXShift="0"
        imgYShift="1"
      />

      <div className="fluid-container">
        <div className="container xl-space-before-3 space-before-2 xl-space-after-3 space-after-2">

          <h1 className="xl:mb-16 md:mb-12 mb-10">
            Impressum
          </h1>

          <h3 className="xl:mb-8 md:mb-6 mb-4 xl:mt-14 md:mt-12 mt-10">
            Angaben gemäß § 5 TMG
          </h3>

          <p className="">
            Nordseeauge Agentur<br/>
            Martina Kornfeld<br/>
            Social-Media-Manager, Digitaler Content Creator, Fotograf, Influencer<br/>
            Hochheider Weg 174<br/>
            26125 Oldenburg<br/>
          </p>

          <h3 className="xl:mb-8 md:mb-6 mb-4 xl:mt-14 md:mt-12 mt-10">
            Kontakt
          </h3>

          <p>
            Telefon: <a href="tel:4944194510673" className="link-intext">+49-441-94510673</a>
            <br/>
            E-Mail: <a href="mailto:info@nordseeauge.de" className="link-intext">info(at)nordseeauge(dot)de</a>
          </p>
          <p className="caption">Notiz: das (at)(dot) muss nicht, ist empholen wegen daten-crawlern, aber ich lass es mal bis wir live gehen aufjedenfall so</p>

          <h3 className="xl:mb-8 md:mb-6 mb-4 xl:mt-14 md:mt-12 mt-10">
            Redaktionell verantwortlich
          </h3>

          <p>
            Martina Kornfeld<br/>
            Hochheider Weg 174<br/>
            26125 Oldenburg<br/>
            <br/>
            Steuernummer 64/023/41200<br/>
            Finanzamt Oldenburg
          </p>

          <h3 className="xl:mb-8 md:mb-6 mb-4 xl:mt-14 md:mt-12 mt-10 hyphens-manual">
            Verbraucherstreitbei&shy;le&shy;gung/U&shy;ni&shy;ver&shy;sal&shy;schlicht&shy;ungs&shy;stelle
          </h3>

          <p className="hyphens-manual">
            Wir sind nicht bereit oder verpflichtet, an Streit&shy;bei&shy;le&shy;gungs&shy;ver&shy;fah&shy;ren vor einer Ver&shy;brau&shy;cher&shy;schlicht&shy;ungs&shy;stelle teilzunehmen.
          </p>

        </div>
      </div>
    </>
  );
}


/*
Angaben gemäß § 5 TMG










*/