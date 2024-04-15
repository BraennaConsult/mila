import ReactMarkdown from "react-markdown";
import { BlackHeader } from "@/app/components/BlackHeader";
import { Container } from "@/app/components/Container";
import { Footer } from "@/app/components/Footer";
import { Section } from "@/app/components/Section";
import {
  COMPANY_ADDRESS,
  COMPANY_NAME,
  COMPANY_NUMBER,
  CONTACT_EMAIL,
  PHONE_NUMBER,
} from "@/constants";
// import content from "@/app/terms-of-service/content.md";

export default function Page() {
  return (
    <>
      <BlackHeader />
      <main>
        <Section>
          <Container className="lg:max-w-2xl">
            {/* <ReactMarkdown>{content}</ReactMarkdown> */}
            <article className="prose lg:prose-xl">
              <h1>
                Standard salgsbetingelser for forbrukerkjøp av varer over
                Internett
              </h1>

              <h2>Innledning</h2>
              <p>
                Dette kjøpet er regulert av de nedenstående standard
                salgsbetingelser for forbrukerkjøp av varer over Internett.
                Forbrukerkjøp over internett reguleres hovedsakelig av
                avtaleloven, forbrukerkjøpsloven, markedsføringsloven,
                angrerettloven og ehandelsloven, og disse lovene gir forbrukeren
                ufravikelige rettigheter. Lovene er tilgjengelig på{" "}
                <a href="http://www.lovdata.no">www.lovdata.no</a>. Vilkårene i
                denne avtalen skal ikke forstås som noen begrensning i de
                lovbestemte rettighetene, men oppstiller partenes viktigste
                rettigheter og plikter for handelen.
              </p>

              <p>
                Salgsbetingelsene er utarbeidet og anbefalt av
                Forbrukertilsynet. For en bedre forståelse av disse
                salgsbetingelsene, se Forbrukertilsynets veileder{" "}
                <a href="#">her</a>.
              </p>

              <h2>1. Avtalen</h2>
              <p>
                Avtalen består av disse salgsbetingelsene, opplysninger gitt i
                bestillingsløsningen og eventuelt særskilt avtalte vilkår. Ved
                eventuell motstrid mellom opplysningene, går det som særskilt er
                avtalt mellom partene foran, så fremt det ikke strider mot
                ufravikelig lovgivning.
              </p>

              <p>
                Avtalen vil i tillegg bli utfylt av relevante lovbestemmelser
                som regulerer kjøp av varer mellom næringsdrivende og
                forbrukere.
              </p>

              <h2>2. Partene</h2>
              <p>
                Selger er {COMPANY_NAME}, Orgnr. {COMPANY_NUMBER},{" "}
                {COMPANY_ADDRESS},{" "}
                <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>,{" "}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </p>

              <p>og betegnes i det følgende som selger/selgeren.</p>

              <p>
                Kjøper er den forbrukeren som foretar bestillingen, og betegnes
                i det følgende som kjøper/kjøperen.
              </p>

              <h2>Pris</h2>
              <p>
                Den oppgitte prisen for varen og tjenester er den totale prisen
                kjøper skal betale. Denne prisen inkluderer alle avgifter og
                tilleggskostnader. Ytterligere kostnader som selger før kjøpet
                ikke har informert om, skal kjøper ikke bære.
              </p>

              <h2>Avtaleinngåelse</h2>
              <p>
                Avtalen er bindende for begge parter når kjøperen har sendt sin
                bestilling til selgeren.
              </p>

              <p>
                Avtalen er likevel ikke bindende hvis det har forekommet skrive-
                eller tastefeil i tilbudet fra selgeren i bestillingsløsningen i
                nettbutikken eller i kjøperens bestilling, og den annen part
                innså eller burde ha innsett at det forelå en slik feil.
              </p>

              <h2>Betalingen</h2>
              <p>
                Selgeren kan kreve betaling for varen fra det tidspunkt den blir
                sendt fra selgeren til kjøperen.
              </p>

              <p>
                Dersom kjøperen bruker kredittkort eller debetkort ved betaling,
                kan selgeren reservere kjøpesummen på kortet ved bestilling.
                Kortet blir belastet samme dag som varen sendes.
              </p>

              <p>
                Ved betaling med faktura, blir fakturaen til kjøperen utstedt
                ved forsendelse av varen. Betalingsfristen fremgår av fakturaen
                og er på minimum 14 dager fra mottak.
              </p>

              <p>
                Kjøpere under 18 år kan ikke betale med etterfølgende faktura.
              </p>

              <h2>Levering</h2>
              <p>
                Levering er skjedd når kjøperen, eller hans representant, har
                overtatt tingen.
              </p>
            </article>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
