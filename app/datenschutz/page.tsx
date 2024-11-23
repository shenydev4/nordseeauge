import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "@nordseeauge | Datenschutz",
  description: "Diese Seite informiert Sie über unsere Datenschutzrichtlinien, den Umgang mit Ihren personenbezogenen Daten und Ihre Rechte im Rahmen der Datenschutzgrundverordnung (DSGVO).",
};

import Hero from '../components/layout/Hero';
import ExternalLink from '@/app/components/typo/ExternalLink'
import '@/app/datenschutz/datenschutz.css'
import EncodeMail from "../components/typo/EncodeMail";

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
        <div className="container xl-space-before-3 space-before-1 xl-space-after-3 space-after-2 flex flex-col" id="Datenschutz">

          <p className="caption">
            // Falls nachher ein anderer Host verwendet wird, dann muss "2. Hosting" geupdatet werden<br/>
          </p>

          <h1 className="xl:mb-16 md:mb-12 mb-10">
            Datenschutz
          </h1>
          
          <h2 className="!mt-0">1. Datenschutz auf einen Blick</h2>

          <h3 className="!mt-0">Allgemeine Hinweise</h3>
          
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
            wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
            werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten 
            Datenschutzerklärung.
          </p>

          <h3>Datenerfassung auf dieser Website</h3>

          <h4 className="!mt-0">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
          
          <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem 
            Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.
          </p>
          
          <h4>Wie erfassen wir Ihre Daten?</h4>
          
          <p>
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.&nbsp;B. um 
            Daten handeln, die Sie in ein Kontaktformular eingeben.
          </p><br/>

          <p>Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. 
            Das sind vor allem technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die 
            Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
          </p>
          
          <h4>Wofür nutzen wir Ihre Daten?</h4>
          
          <p>
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten 
            können zur Analyse Ihres Nutzerverhaltens verwendet werden.
          </p>

          <h4>Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
          
          <p>
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten 
            personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu 
            verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit 
            für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der 
            Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der 
            zuständigen Aufsichtsbehörde zu.
          </p><br/>
          
          <p>
            Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
          </p>
          
          <h3>Analyse-Tools und Tools von Dritt&shy;anbietern</h3>
          
          <p>
            Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit 
            sogenannten Analyseprogrammen.
          </p><br/>
          
          <p>
            Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.
          </p>
          
          <h2>2. Hosting</h2>

          <p>
            Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
          </p>

          <h3>All-Inkl</h3>
          
          <p>
            Anbieter ist die ALL-INKL.COM - Neue Medien Münnich, Inh. René Münnich, Hauptstraße 68, 02742 Friedersdorf 
            (nachfolgend All-Inkl). Details entnehmen Sie der Datenschutzerklärung von 
            All-Inkl: <ExternalLink href='https://all-inkl.com/datenschutzinformationen/'>
            https://all-inkl.com/datenschutzinformationen/
            </ExternalLink>.
          </p><br/>
          
          <p>
            Die Verwendung von All-Inkl erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse 
            an einer möglichst zuverlässigen Darstellung unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde, 
            erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die 
            Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers 
            (z.&nbsp;B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
          </p>

          <h2>3. Allgemeine Hinweise und Pflicht&shy;informationen</h2>

          <h3 className="!mt-0">Datenschutz</h3>

          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen 
            Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p><br/>
          
          <p>
            Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, 
            mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir 
            erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
          </p><br/>
          
          <p>
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z.&nbsp;B. bei der Kommunikation per E-Mail) Sicherheitslücken 
            aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
          </p>

          <h3>Hinweis zur verantwortlichen Stelle</h3>
          
          <p>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
          </p><br/>
          
          <p>
            Nordseeauge<br/>
            Martina Kornfeld<br/>
            Hochheider Weg 174<br/>
            26125 Oldenburg
          </p><br/>

          <p>
            {/* TODO: Im Datenschutz ganz raus?? sonst Festnetznummer */}
            Telefon: <a href="tel:+4901752147984">+49 0 175 2147984</a><br/>
            E-Mail: <EncodeMail mail='info@nordseeauge.de'/>
          </p><br/>

          <p>
            Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die 
            Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.&nbsp;B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
          </p>

          <h3>Speicherdauer</h3>
          
          <p>
            Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre 
            personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen 
            geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine 
            anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z.&nbsp;B. steuer- oder 
            handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
          </p>

          <h3>
            Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website
          </h3>
          
          <p>
            Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage 
            von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO 
            verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten 
            erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von 
            Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z.&nbsp;B. via Device-Fingerprinting) eingewilligt haben, 
            erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar. 
            Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre 
            Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer 
            rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner 
            auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall 
            einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutzerklärung informiert.
          </p>

          <h3>Empfänger von personenbezogenen Daten</h3>
          
          <p>
            Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise 
            auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben personenbezogene 
            Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn wir gesetzlich 
            hierzu verpflichtet sind (z.&nbsp;B. Weitergabe von Daten an Steuerbehörden), wenn wir ein berechtigtes Interesse 
            nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe 
            erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines 
            gültigen Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über 
            gemeinsame Verarbeitung geschlossen.
          </p>

          <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
          
          <p>
            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits 
            erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung 
            bleibt vom Widerruf unberührt.
          </p>

          <h3>Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3>
          
          <p>
            WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, 
            AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN 
            WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, 
            AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR 
            IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE 
            FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER 
            GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
          </p><br/>
          
          <p>
            WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH 
            GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS 
            PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN 
            ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
          </p>

          <h3>Beschwerde&shy;recht bei der zuständigen Aufsichts&shy;behörde</h3>
          
          <p>
            Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in 
            dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das 
            Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
          </p>

          <h3>Recht auf Daten&shy;übertrag&shy;barkeit</h3>
          
          <p>
            Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, 
            an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte 
            Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
          </p>

          <h3>Auskunft, Berichtigung und Löschung</h3>
          
          <p>
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre 
            gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein 
            Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können 
            Sie sich jederzeit an uns wenden.
          </p>

          <h3>Recht auf Einschränkung der Verarbeitung</h3>
          
          <p>
            Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich 
            jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:
          </p>
          
          <ul>
            <li>
              Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, 
              um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer 
              personenbezogenen Daten zu verlangen.
            </li>
            <li>
              Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die 
              Einschränkung der Datenverarbeitung verlangen.
            </li>
            <li>
              Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung 
              von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer 
              personenbezogenen Daten zu verlangen.
            </li>
            <li>
              Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren 
              Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die 
              Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
            </li>
          </ul>
          
          <p>
            Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten - von ihrer Speicherung abgesehen - 
            nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer 
            anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder 
            eines Mitgliedstaats verarbeitet werden.
          </p>

          <h3>Widerspruch gegen Werbe-E-Mails</h3>
          
          <p>
            Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich 
            angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich 
            ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
          </p>

          <h2>4. Datenerfassung auf dieser Website</h2>

          <h3 className="!mt-0">Cookies</h3>
          
          <p>
            Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät 
            keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft 
            (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. 
            Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung 
            durch Ihren Webbrowser erfolgt.
          </p><br/>
          
          <p>
            Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen (sog. Third-Party-Cookies). Third-Party-Cookies 
            ermöglichen die Einbindung bestimmter Dienstleistungen von Drittunternehmen innerhalb von Webseiten 
            (z.&nbsp;B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
          </p>
          
          <p>
            Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Webseitenfunktionen ohne 
            diese nicht funktionieren würden (z.&nbsp;B. die Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies können zur 
            Auswertung des Nutzerverhaltens oder zu Werbezwecken verwendet werden.
          </p><br/>

          <p>
            Cookies, die zur Durchführung des elektronischen 
            Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z.&nbsp;B. für die Warenkorbfunktion) 
            oder zur Optimierung der Website (z.&nbsp;B. Cookies zur Messung des Webpublikums) erforderlich sind (notwendige Cookies), 
            werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der 
            Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von notwendigen Cookies zur technisch fehlerfreien und 
            optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung zur Speicherung von Cookies und vergleichbaren 
            Wiedererkennungstechnologien abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage dieser Einwilligung 
            (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG); die Einwilligung ist jederzeit widerrufbar.
          </p><br/>

          <p>
            Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall 
            erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies 
            beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt 
            sein.
          </p><br/>
          
          <p>
            Welche Cookies und Dienste auf dieser Website eingesetzt werden, können Sie dieser Datenschutzerklärung entnehmen.
          </p>
          
          <h3>Kontaktformular</h3>
          
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen 
            dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. 
            Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p><br/>
          
          <p>
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung 
            eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen 
            beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen 
            (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die 
            Einwilligung ist jederzeit widerrufbar.
          </p><br/>
          
          <p>
            Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung 
            zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.&nbsp;B. nach abgeschlossener 
            Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen - insbesondere Aufbewahrungsfristen - bleiben unberührt.
          </p>
          
          <h3>Anfrage per E-Mail, Telefon oder Telefax</h3>
          
          <p>
            Wenn Sie uns per E-Mail, Telefon ontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten 
            (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne 
            Ihre Einwilligung weiter.
          </p><br/>

          <p>
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern 
            Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich 
            ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an 
            uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese 
            abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
          </p><br/>
          
          <p>
            Die von Ihnen an uns per Kontaktanfragen übersandten 
            Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck 
            für die Datenspeicherung entfällt (z.&nbsp;B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche 
            Bestimmungen - insbesondere gesetzliche Aufbewahrungsfristen - bleiben unberührt.
          </p>
          
          <h2>5. Soziale Medien</h2>
          
          <h3 className="!mt-0">Facebook</h3>
          
          <p>
            Auf dieser Website sind Elemente des sozialen Netzwerks Facebook integriert. Anbieter dieses Dienstes ist die Meta Platforms 
            Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland. Die erfassten Daten werden nach Aussage von Facebook jedoch auch 
            in die USA und in andere Drittländer übertragen.
          </p><br/>
          
          <p>
            Eine Übersicht über die Facebook Social-Media-Elemente finden Sie hier:&nbsp;
            <ExternalLink href='https://developers.facebook.com/docs/plugins/?locale=de_DE'>
            https://developers.facebook.com/docs/plugins/?locale=de_DE
            </ExternalLink>.
          </p><br/>
          
          <p>
            Wenn das Social-Media-Element aktiv ist, wird eine direkte Verbindung zwischen Ihrem Endgerät und dem Facebook-Server 
            hergestellt. Facebook erhält dadurch die Information, dass Sie mit Ihrer IP-Adresse diese Website besucht haben. Wenn Sie den 
            Facebook „Like-Button“ anklicken, während Sie in Ihrem Facebook-Account eingeloggt sind, können Sie die Inhalte dieser Website 
            auf Ihrem Facebook-Profil verlinken. Dadurch kann Facebook den Besuch dieser Website Ihrem Benutzerkonto zuordnen. Wir weisen 
            darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch 
            Facebook erhalten. Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von Facebook unter:&nbsp;
            <ExternalLink href='https://de-de.facebook.com/privacy/explanation'>
            https://de-de.facebook.com/privacy/explanation
            </ExternalLink>.
          </p><br/>
          
          <p>
            Soweit eine Einwilligung (Consent) eingeholt wurde, erfolgt der Einsatz des o.&nbsp;g. Dienstes auf Grundlage von Art. 6 Abs. 
            1 lit. a DSGVO und § 25 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Soweit keine Einwilligung eingeholt wurde, erfolgt 
            die Verwendung des Dienstes auf Grundlage unseres berechtigten Interesses an einer möglichst umfassenden Sichtbarkeit in den 
            Sozialen Medien.
          </p><br/>
          
          <p>
            Soweit mit Hilfe des hier beschriebenen Tools personenbezogene Daten auf unserer Website erfasst und an Facebook weitergeleitet 
            werden, sind wir und die Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland gemeinsam 
            für diese Datenverarbeitung verantwortlich (Art. 26 DSGVO). Die gemeinsame Verantwortlichkeit beschränkt sich dabei ausschließlich 
            auf die Erfassung der Daten und deren Weitergabe an Facebook. Die nach der Weiterleitung erfolgende Verarbeitung durch Facebook 
            ist nicht Teil der gemeinsamen Verantwortung. Die uns gemeinsam obliegenden Verpflichtungen wurden in einer Vereinbarung über 
            gemeinsame Verarbeitung festgehalten. Den Wortlaut der Vereinbarung finden Sie unter:&nbsp;
            <ExternalLink href='https://www.facebook.com/legal/controller_addendum' className="hyphen-auto">
            https://www.facebook.com/legal/controller_addendum
            </ExternalLink>. Laut dieser Vereinbarung sind wir für die Erteilung der Datenschutzinformationen beim Einsatz des Facebook-Tools und für die 
            datenschutzrechtlich sichere Implementierung des Tools auf unserer Website verantwortlich. Für die Datensicherheit der 
            Facebook-Produkte ist Facebook verantwortlich. Betroffenenrechte (z.&nbsp;B. Auskunftsersuchen) hinsichtlich der bei Facebook 
            verarbeiteten Daten können Sie direkt bei Facebook geltend machen. Wenn Sie die Betroffenenrechte bei uns geltend machen, sind 
            wir verpflichtet, diese an Facebook weiterzuleiten.
          </p><br/>
          
          <p>
            Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier:&nbsp;
            <ExternalLink href='https://www.facebook.com/legal/EU_data_transfer_addendum' className="hyphens-auto">
            https://www.facebook.com/legal/EU_data_transfer_addendum
            </ExternalLink>,&nbsp;<ExternalLink href='https://de-de.facebook.com/help/566994660333381'>
            https://de-de.facebook.com/help/566994660333381&nbsp;
            </ExternalLink>und&nbsp;<ExternalLink href='https://www.facebook.com/policy.php'>
            https://www.facebook.com/policy.php
            </ExternalLink>.
          </p><br/>
          
          <p>
            Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework“ (DPF). Der DPF ist ein Übereinkommen 
            zwischen der Europäischen Union und den USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in den 
            USA gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. 
            Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link:&nbsp;
            <ExternalLink href='https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&amp;id=a2zt0000000GnywAAC&amp;status=Active'>
            https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&amp;id=a2zt0000000GnywAAC&amp;status=Active
            </ExternalLink>
          </p>
          
          <h3>Instagram</h3>
          
          <p>
            Auf dieser Website sind Funktionen des Dienstes Instagram eingebunden. Diese Funktionen werden angeboten durch die Meta Platforms 
            Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland.
          </p><br/>
          
          <p>
            Wenn das Social-Media-Element aktiv ist, wird eine direkte Verbindung zwischen Ihrem Endgerät und dem Instagram-Server hergestellt. 
            Instagram erhält dadurch Informationen über den Besuch dieser Website durch Sie.
          </p><br/>
          
          <p>
            Wenn Sie in Ihrem Instagram-Account eingeloggt sind, können Sie durch Anklicken des Instagram-Buttons die Inhalte dieser Website mit 
            Ihrem Instagram-Profil verlinken. Dadurch kann Instagram den Besuch dieser Website Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, 
            dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Instagram erhalten.
          </p><br/>
          
          <p>
            Soweit eine Einwilligung (Consent) eingeholt wurde, erfolgt der Einsatz des o.&nbsp;g. Dienstes auf Grundlage von Art. 6 Abs. 1 lit. a 
            DSGVO und § 25 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Soweit keine Einwilligung eingeholt wurde, erfolgt die Verwendung des 
            Dienstes auf Grundlage unseres berechtigten Interesses an einer möglichst umfassenden Sichtbarkeit in den Sozialen Medien.
          </p><br/>
          
          <p>
            Soweit mit Hilfe des hier beschriebenen Tools personenbezogene Daten auf unserer Website erfasst und an Facebook bzw. Instagram 
            weitergeleitet werden, sind wir und die Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, 
            Irland gemeinsam für diese Datenverarbeitung verantwortlich (Art. 26 DSGVO). Die gemeinsame Verantwortlichkeit beschränkt sich 
            dabei ausschließlich auf die Erfassung der Daten und deren Weitergabe an Facebook bzw. Instagram. Die nach der Weiterleitung 
            erfolgende Verarbeitung durch Facebook bzw. Instagram ist nicht Teil der gemeinsamen Verantwortung. Die uns gemeinsam obliegenden 
            Verpflichtungen wurden in einer Vereinbarung über gemeinsame Verarbeitung festgehalten. Den Wortlaut der Vereinbarung finden Sie 
            unter:&nbsp;
            <ExternalLink href='https://www.facebook.com/legal/controller_addendum'>
            https://www.facebook.com/legal/controller_addendum
            </ExternalLink>. Laut dieser Vereinbarung sind wir für die Erteilung der Datenschutzinformationen beim Einsatz des Facebook- bzw. 
            Instagram-Tools und für die datenschutzrechtlich sichere Implementierung des Tools auf unserer Website verantwortlich. 
            Für die Datensicherheit der Facebook bzw. Instagram-Produkte ist Facebook verantwortlich. Betroffenenrechte (z.&nbsp;B. 
            Auskunftsersuchen) hinsichtlich der bei Facebook bzw. Instagram verarbeiteten Daten können Sie direkt bei Facebook geltend 
            machen. Wenn Sie die Betroffenenrechte bei uns geltend machen, sind wir verpflichtet, diese an Facebook weiterzuleiten.
          </p><br/>
          
          <p>
            Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier:&nbsp;
            <ExternalLink href='https://www.facebook.com/legal/EU_data_transfer_addendum'>
            https://www.facebook.com/legal/EU_data_transfer_addendum
            </ExternalLink>, <ExternalLink href='https://privacycenter.instagram.com/policy/'>
            https://privacycenter.instagram.com/policy/
            </ExternalLink>
            &nbsp;und&nbsp;<ExternalLink href='https://de-de.facebook.com/help/566994660333381'>
            https://de-de.facebook.com/help/566994660333381
            </ExternalLink>.
          </p><br/>
          
          <p>
            Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von Instagram:&nbsp;
            <ExternalLink href='https://privacycenter.instagram.com/policy/'>
            https://privacycenter.instagram.com/policy/
            </ExternalLink>.
          </p><br/>
          
          <p>
            Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework“ (DPF). Der DPF ist ein Übereinkommen 
            zwischen der Europäischen Union und den USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in den 
            USA gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. 
            Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link:&nbsp;
            <ExternalLink href='https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&amp;id=a2zt0000000GnywAAC&amp;status=Active'>
            https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&amp;id=a2zt0000000GnywAAC&amp;status=Active
            </ExternalLink>
          </p>
          
          <h2>6. Newsletter</h2>
          
          <h3 className="!mt-0">Newsletter&shy;daten</h3>
          
          <p>
            Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, 
            welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters 
            einverstanden sind. Weitere Daten werden nicht bzw. nur auf freiwilliger Basis erhoben. Diese Daten verwenden wir ausschließlich 
            für den Versand der angeforderten Informationen und geben diese nicht an Dritte weiter.
          </p><br/>
          
          <p>
            Die Verarbeitung der in das Newsletteranmeldeformular eingegebenen Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung 
            (Art. 6 Abs. 1 lit. a DSGVO). Die erteilte Einwilligung zur Speicherung der Daten, der E-Mail-Adresse sowie deren Nutzung zum Versand 
            des Newsletters können Sie jederzeit widerrufen, etwa über den „Austragen“-Link im Newsletter. Die Rechtmäßigkeit der bereits erfolgten 
            Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
          </p><br/>

          <p>
            Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns hinterlegten Daten werden von uns bis zu Ihrer Austragung aus dem Newsletter 
            bei uns bzw. dem Newsletterdiensteanbieter gespeichert und nach der Abbestellung des Newsletters oder nach Zweckfortfall aus der 
            Newsletterverteilerliste gelöscht. Wir behalten uns vor, E-Mail-Adressen aus unserem Newsletterverteiler nach eigenem Ermessen im 
            Rahmen unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO zu löschen oder zu sperren.
          </p><br/>
          
          <p>
            Daten, die zu anderen Zwecken bei uns gespeichert wurden, bleiben hiervon unberührt.
          </p><br/>
          
          <p>
            Nach Ihrer Austragung aus der Newsletterverteilerliste wird Ihre E-Mail-Adresse bei uns bzw. dem Newsletterdiensteanbieter ggf. in einer 
            Blacklist gespeichert, sofern dies zur Verhinderung künftiger Mailings erforderlich ist. Die Daten aus der Blacklist werden nur für 
            diesen Zweck verwendet und nicht mit anderen Daten zusammengeführt. Dies dient sowohl Ihrem Interesse als auch unserem Interesse an 
            der Einhaltung der gesetzlichen Vorgaben beim Versand von Newslettern (berechtigtes Interesse im Sinne des Art. 6 Abs. 1 lit. f DSGVO). 
            Die Speicherung in der Blacklist ist zeitlich nicht befristet.
            &nbsp;<br/><strong>Sie können der Speicherung widersprechen, sofern Ihre Interessen unser berechtigtes Interesse überwiegen.</strong>
          </p>
          
          <h2>7. Plugins und Tools</h2>
          
          <h3 className="!mt-0">YouTube</h3>
          
          <p>
            Diese Website bindet Videos der Website YouTube ein. Betreiber der Website ist die Google Ireland Limited („Google“), Gordon House, 
            Barrow Street, Dublin 4, Irland.
          </p><br/>
          
          <p>
            Wenn Sie eine unserer Webseiten besuchen, auf denen YouTube eingebunden ist, wird eine Verbindung zu den Servern von YouTube 
            hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche unserer Seiten Sie besucht haben.
          </p><br/>
          
          <p>
            Des Weiteren kann YouTube verschiedene Cookies auf Ihrem Endgerät speichern oder vergleichbare Technologien zur Wiedererkennung 
            verwenden (z.&nbsp;B. Device-Fingerprinting). Auf diese Weise kann YouTube Informationen über Besucher dieser Website erhalten. 
            Diese Informationen werden u.&nbsp;a. verwendet, um Videostatistiken zu erfassen, die Anwenderfreundlichkeit zu verbessern und 
            Betrugsversuchen vorzubeugen.
          </p><br/>
          
          <p>
            Wenn Sie in Ihrem YouTube-Account eingeloggt sind, ermöglichen Sie YouTube, Ihr Surfverhalten direkt Ihrem persönlichen Profil 
            zuzuordnen. Dies können Sie verhindern, indem Sie sich aus Ihrem YouTube-Account ausloggen.
          </p><br/>
          
          <p>
            Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes 
            Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung 
            ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies 
            oder den Zugriff auf Informationen im Endgerät des Nutzers (z.&nbsp;B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die 
            Einwilligung ist jederzeit widerrufbar.
          </p><br/>
          
          <p>
            Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von YouTube unter:&nbsp;
            <ExternalLink href='https://policies.google.com/privacy?hl=de'>
            https://policies.google.com/privacy?hl=de
            </ExternalLink>.
          </p><br/>
          
          <p>
            Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework“ (DPF). Der DPF ist ein Übereinkommen zwischen 
            der Europäischen Union und den USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten 
            soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere Informationen 
            hierzu erhalten Sie vom Anbieter unter folgendem Link:&nbsp;
            <ExternalLink href='https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&amp;id=a2zt000000001L5AAI&amp;status=Active'>
            https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&amp;id=a2zt000000001L5AAI&amp;status=Active
            </ExternalLink>
          </p>
          
          <h3>Google Maps</h3>
          
          <p>
            Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, 
            Dublin 4, Irland.
          </p><br/>
          
          <p>
            Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel 
            an einen Server von Google in den USA übertragen und dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese 
            Datenübertragung. Wenn Google Maps aktiviert ist, kann Google zum Zwecke der einheitlichen Darstellung der Schriftarten Google 
            Fonts verwenden. Beim Aufruf von Google Maps lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und 
            Schriftarten korrekt anzuzeigen.
          </p><br/>
          
          <p>
            Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote und an einer leichten 
            Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. 
            f DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 
            6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen 
            im Endgerät des Nutzers (z.&nbsp;B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
          </p><br/>
          
          <p>
            Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier:&nbsp;
            <ExternalLink href='https://privacy.google.com/businesses/gdprcontrollerterms/'>
            https://privacy.google.com/businesses/gdprcontrollerterms/
            </ExternalLink>&nbsp;und&nbsp;<ExternalLink href='https://privacy.google.com/businesses/gdprcontrollerterms/sccs/'>
            https://privacy.google.com/businesses/gdprcontrollerterms/sccs/
            </ExternalLink>.
          </p><br/>
          
          <p>
            Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google:&nbsp;
            <ExternalLink href='https://policies.google.com/privacy?hl=de'>
            https://policies.google.com/privacy?hl=de
            </ExternalLink>.
          </p><br/>
        
          <p>
            Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework“ (DPF). Der DPF ist ein Übereinkommen 
            zwischen der Europäischen Union und den USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in den 
            USA gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. 
            Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link:&nbsp;
            <ExternalLink href='https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&amp;id=a2zt000000001L5AAI&amp;status=Active'>
            https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&amp;id=a2zt000000001L5AAI&amp;status=Active
            </ExternalLink>
          </p><br/>
          
          <p>
            Quelle:&nbsp;<ExternalLink href='https://www.e-recht24.de'>
            https://www.e-recht24.de
            </ExternalLink>
          </p><br/>

          <p>
            Technische Umsetzung der Website: <EncodeMail mail='Alexander.Dretvic@proton.me'/>
          </p>
        
        </div>
      </div>
    </>
  );
}