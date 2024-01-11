import ReactMarkdown from "react-markdown";
import { BlackHeader } from "@/app/components/BlackHeader";
import { Container } from "@/app/components/Container";
import { Footer } from "@/app/components/Footer";
import { Section } from "@/app/components/Section";
// import content from "@/app/terms-of-service/content.md";

export default function Page() {
  return (
    <>
      <BlackHeader />
      <main>
        <Section>
          <Container className="lg:max-w-2xl">
            <article className="prose lg:prose-xl">
              <h1>Personvern og cookies</h1>
              <p>
                Denne personvernerklæringen forteller hvordan vi samler inn og
                behandler personopplysninger.
              </p>

              <h2>Hvilken data samler vi inn?</h2>
              <p>
                De eneste personlige dataene vi samler inn om deg er de
                personlige dataene du valgfritt sender inn til oss via
                eksempelvis felter i et kontaktskjema på hjemmesiden eller ved å
                abonnere på nyhetsbrev.
              </p>
              <p>
                Vi samler også inn data med analyseverktøyet Google Analytics,
                men ingen av dataene vi samler inn via dette verktøyet kan
                personlig identifisere deg eller knyttes til deg. Les mer om
                dette lengre ned.
              </p>

              <h2>Hvorfor samler vi inn denne dataen?</h2>
              <p>
                De personlige dataene samler vi inn fra kontaktskjemaet for å
                behandle forespørselen din på best mulig måte og for å kunne ta
                kontakt når vi skal gi deg svar. Vi samler kun inn denne dataen
                hvis vi får samtykke fra deg.
              </p>

              <h2>Hvem deler vi dataen med?</h2>
              <p>
                Dataen du sender oss via kontaktskjema mottar vi på epost. I
                tillegg lagres de i en database som administreres av våre
                webutviklere. Dataene ligger fysisk på serverene til
                serveradministratorene våre i Norge. Det eneste formålet med
                denne lagringen er sikkerhetskopi av dine forespørsler i
                tilfelle eposten ikke når frem.
              </p>
              <p>
                Analytisk data som ikke kan identifisere deg deles med våre
                webutviklere via Google Analytics for å forbedre våre
                hjemmesider.
              </p>

              <h2>Hvor lenge beholder vi dataene dine?</h2>
              <p>
                Hvis du sender oss data via hjemmesiden som vi mottar på epost,
                blir dette beholdt av oss på ubestemt tid. Dette er for å kunne
                hjelpe deg bedre og mer effektivt i fremtiden. Denne typen data
                slettes på forespørsel fra deg.
              </p>
              <p>
                Infoen du sender inn gjennom våre kontaktskjema, lagres i vår
                database og blir beholdt i opptil 18 måneder. Deretter slettes
                denne dataen.
              </p>

              <h2>Hvilke rettigheter har du over dine data?</h2>
              <p>Du har alle rettigheter over dine data.</p>

              <h3>Trekke tilbake samtykke når som helst.</h3>
              <p>
                Du har rett til å trekke tilbake samtykke der du tidligere har
                gitt ditt samtykke til behandling av personopplysninger.
              </p>

              <h3>Få tilgang til din data.</h3>
              <p>
                Du har rett til å få en kopi av dataene som behandles av oss.
              </p>

              <h3>Bekreft og søk rettelse av data.</h3>
              <p>
                Du har rett til å bekrefte nøyaktigheten av din data og be om at
                den skal oppdateres eller korrigeres.
              </p>

              <h3>
                Få din personlige data slettet eller på annen måte fjernet.
              </h3>
              <p>
                Du har rett til, under visse omstendigheter, å få slettet din
                data. Dette inkluderer ikke data vi er forpliktet til å beholde
                for administrative, juridiske eller sikkerhetsmessige formål.
              </p>

              <h2>Slik utøver du disse rettighetene</h2>
              <p>
                Eventuelle forespørsler om å utøve din rettigheter kan rettes
                til oss gjennom kontaktopplysningene det linkes til i dette
                dokumentet. Disse forespørslene kan utøves gratis og vil bli
                adressert av oss så tidlig som mulig og alltid innen en måned.
              </p>

              <h2>Hvor sendes dine data?</h2>
              <p>
                Informasjon som fylles inn i kontaktskjema blir sendt til oss på
                epost. Før vi mottar eposten sjekkes innholdet av et system for
                spam-bekjempelse. Dette er en tredjepart, og dataen kan sendes
                ut av landet i denne sammenheng. Dataen lagres i vår database i
                Norge hos våre serveradministratorer, administrert av våre
                webutviklere.
              </p>

              <h2>Analysedata</h2>
              <p>
                Vi samler inn data med analyseverktøyet Google Analytics, men
                ingen av dataene vi samler inn via dette verktøyet kan personlig
                identifisere deg, eller knyttes til deg. Din IP-adresse blir
                anonymisert før noe data sendes til Google Analytics. Dataen som
                samles inn kan inkludere:
              </p>
              <ul>
                <li>Hvilken nettleser du bruker</li>
                <li>Hvilken enhet du bruker</li>
                <li>Hvilken by/område du besøker nettsiden fra</li>
                <li>Hvor lenge du er inne på siden</li>
                <li>Hvilke sider du går inn på</li>
              </ul>
              <p>
                Analysedataen brukes kun til å analysere generelle trender på
                hjemmesiden, for å utføre tilpasninger og forbedringer. Disse
                kan ikke knyttes til deg, og regnes ikke som personlig data.
              </p>
              <p>
                Hvis du ikke ønsker at Google Analytics skal samle inn data om
                deg kan du installere denne nettleserutvidelsen fra Google:{" "}
                <a href="https://tools.google.com/dlpage/gaoptout">
                  https://tools.google.com/dlpage/gaoptout
                </a>
              </p>
              <p>
                Vår serveradministratorene samler inn liknende data, men heller
                ikke denne inneholder personlig data som kan knyttes til deg på
                noe vis.
              </p>

              <h2>Innebygd innhold fra andre nettsteder</h2>
              <p>
                Vår hjemmeside kan inneholde innebygd innhold (for eksempel
                videoer, bilder, artikler, facebook widget etc.). Innebygd
                innhold fra andre nettsteder oppfører seg på akkurat samme måte
                som om du besøker dems nettsted.
              </p>
              <p>
                Disse nettstedene kan samle inn data om deg, bruke
                informasjonskapsler, legge inn ekstra sporing fra tredjeparter
                og overvåke samspillet ditt med det innebygde innholdet,
                inkludert sporing av samspillet ditt med det innebygde innholdet
                hvis du har en konto og er logget på den nettsiden.
              </p>
              <p>
                Hvis det er en Facebook widget på undersiden du besøker, kan
                denne widgeten samle inn din IP-adresse, nettleserens
                brukeragent, lagre og hente informasjonskapsler i nettleseren
                din, legge inn ekstra sporing og overvåke samspillet ditt med
                widgeten, inkludert å korrelere Facebook-kontoen din med hvilken
                handling du tar innenfor widgeten (for eksempel «like» vår
                Facebook-side), hvis du er logget inn på Facebook.
              </p>

              <h2>Cookies og lignende teknologier</h2>
              <p>
                Vi bruker cookies (informasjonskapsler) og lignende teknologier
                (i fellesskap referert til som «cookies»), for å forbedre din
                erfaring med våre nettsider. Denne erklæringen om cookies
                forklarer hvordan vi bruker cookies og valgene dine angående
                bruken av dem.
              </p>

              <h3>Hva er cookies?</h3>
              <p>
                Cookies er små tekstfiler bestående av bokstaver og tall. Disse
                sendes fra vår eller våre partnernes webservere og lagres på
                enheten som beskrevet nedenfor. Denne hjemmesiden kan bruke
                flere typer cookies:
              </p>
              <ul>
                <li>
                  Session cookies er midlertidige cookies som utløper når du
                  lukker nettleseren eller appen din
                </li>
                <li>
                  Vedvarende cookies er cookies som forblir til du sletter dem
                  eller de utløper
                </li>
                <li>
                  Førsteparts-cookies er cookies angitt av nettstedet du besøker
                </li>
                <li>
                  Tredjeparts cookies er cookies som er angitt av et tredjeparts
                  nettsted
                </li>
              </ul>
              <p>
                Lignende teknologier er teknologier som lagrer informasjon i
                nettleseren din, eller på enheten din, på en måte som ligner på
                cookies.
              </p>

              <h3>Hvorfor bruker vi cookies?</h3>
              <p>
                Cookies som vi bruker, forbedrer vanligvis våre tjenester til
                deg. Noen ganger trengs cookies for å få funksjoner til fungere.
                Andre ganger gjør de bare våre tjenester enda mer smidige for
                deg. Generelt kategoriserer vi våre cookies og deres funksjon
                som følger:
              </p>
              <ul>
                <li>
                  Kjernefunksjonalitet cookies er absolutt nødvendige for å
                  kunne tilby våre grunnleggende tjenester.
                </li>
                <li>
                  Optimalisering cookies gir analytisk informasjon om din bruk
                  av tjenestene våre. De tillater oss å kontinuerlig forbedre
                  våre produkter og er som sådan nødvendige. Våre produkter vil
                  ikke fungere like smidig uten disse cookies.
                </li>
                <li>
                  Preferanse cookies gjør det mulig å lagre innstillinger, som
                  for eksempel valgfritt språk eller om du vil forhåndsdefinere
                  dataene dine eller ikke. Uten disse typer cookies ville det
                  ikke være mulig å tilpasse våre tjenester i henhold til dine
                  preferanser.
                </li>
              </ul>

              <h3>Piksler</h3>
              <p>
                I enkelte perioder kan vi benytte oss av piksler til
                konverteringssporing. Konverteringssporing hjelper oss med å
                måle avkastningen på investering av annonser ved å rapportere om
                handlingene folk foretar seg etter å ha sett disse annonsene. Vi
                lager piksler som sporer konverteringer, legger dem til sidene
                på hjemmesiden der konverteringen skal skje, og sporer deretter
                konverteringen tilbake til annonsene der de kjører på andre
                nettsteder som Facebook og Twitter.
              </p>
              <p>
                Ingen personlige opplysninger blir samlet som med disse
                informasjonskapslene eller pikslene.
              </p>

              <h3>Cookies på denne siden</h3>
              <table>
                <thead>
                  <tr>
                    <th>Navn</th>
                    <th>Levetid</th>
                    <th>Beskrivelse</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>_ga</td>
                    <td>2 år</td>
                    <td>Brukes til å skille brukere i Google Analytics</td>
                  </tr>
                  <tr>
                    <td>_gid</td>
                    <td>24 timer</td>
                    <td>Brukes til å skille brukere i Google Analytics</td>
                  </tr>
                  <tr>
                    <td>_gat</td>
                    <td>1 minutt</td>
                    <td>
                      Brukes til å begrense antall forespørsler som må gjøres
                      til doubleclick.net
                    </td>
                  </tr>
                </tbody>
              </table>

              <h3>Hvordan kan du kontrollere bruk av cookies?</h3>
              <p>
                Din nettleser eller enhet vil vanligvis tilby innstillinger
                angående bruk og omfang av cookies. Vennligst se nettleserens
                eller enhetens referansedata for å lære hvordan du justerer
                innstillingene dine. Du kan for eksempel blokkere alle cookies,
                kun godta førstepart cookies, eller slette alle cookies når du
                avslutter nettleseren din.
              </p>
              <p>
                Vær oppmerksom på at noen av tjenestene som vi tilbyr, kan
                slutte å fungere hvis du blokkerer eller sletter cookies.
              </p>

              <h2>Kontakt oss</h2>
              <p>All vår kontaktinformasjon finner du på vår kontaktside.</p>
            </article>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
