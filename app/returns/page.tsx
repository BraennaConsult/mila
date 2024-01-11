import ReactMarkdown from "react-markdown";
import { BlackHeader } from "@/app/components/BlackHeader";
import { Container } from "@/app/components/Container";
import { Footer } from "@/app/components/Footer";
import { Section } from "@/app/components/Section";
import { CONTACT_EMAIL, PHONE_NUMBER } from "@/constants";
// import content from "@/app/terms-of-service/content.md";

export default function Page() {
  return (
    <>
      <BlackHeader />
      <main>
        <Section>
          <Container className="lg:max-w-2xl">
            <article className="prose lg:prose-xl">
              <h1>Angrerett</h1>

              <p>Opplysninger om angre- og returrett</p>
              <p>
                Du har rett til å gå fra denne avtalen innen 14 dager uten å
                oppgi noen grunn for dette. Angrefristen utløper 14 dager etter
                den dag du eller en annen tredjemann enn transportøren, som du
                har utpekt, får varene i fysisk besittelse.
              </p>

              <p>For å kunne bruke angreretten må du underrette oss:</p>
              <address>
                Tifra AS
                <br />
                Hamrevegen 25 G, 5229 Kalandseidet
                <br />
                <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
                <br />
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </address>
              <p>
                på en utvetydig måte om din beslutning om å gå fra avtalen
                (f.eks. i et brev sendt med post eller e-post).
              </p>
              <p>
                For å overholde angrefristen er det tilstrekkelig at du sender
                meldingen om at du vil bruke angreretten før angrefristen
                utløper.
              </p>
              <p>
                Du må selv bære de direkte kostnadene ved å returnere varene.
              </p>

              <p>Virkningene av at angreretten brukes</p>
              <p>
                Dersom du går fra denne avtalen, skal vi tilbakebetale alle
                betalinger vi har mottatt fra deg med unntak av
                leveringskostnadene, uten unødig opphold og i alle tilfeller
                senest 14 dager etter den dag vi mottar melding om din
                beslutning om å gå fra denne avtalen.
              </p>
              <p>
                Vi foretar tilbakebetalingen med samme betalingsmiddel som du
                benyttet ved den opprinnelige transaksjonen, med mindre du
                uttrykkelig har avtalt noe annet med oss. Frakt vil bli trukket
                fra refusjonsbeløpet.
              </p>
              <p>
                I alle tilfeller vil du ikke bli pålagt noe gebyr som følge av
                tilbakebetalingen.
              </p>
              <p>
                Du er ansvarlig bare for en eventuell reduksjon i varenes verdi
                som skyldes en annen håndtering av varene enn den som er
                nødvendig for å fastslå deres art, egenskaper og funksjon.
              </p>
            </article>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
