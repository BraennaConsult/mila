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
                Vi introduserer vårt nye Lifestyle program!
              </h1>
              {/* <h2>Innledning</h2> */}
              <p>
                Hensikten med Lifestyle programmet er å gå litt tilabke til dem som størrer og deltar jevnlig
                på Maraton. Slik at når du oppnår ``Ascend`` vil du ha 85% rabatt på Maraton som om det var et abonnement.
              </p>
                
              <p>Maraton er en livsstil og det er mange tema som man går gjennom,
                derfor lønner det seg å bli med jevnlig og med hjelp av Lifestyle programmet kan du det.<br></br>
                Om man velger å ikke delta på et Maraton mister man 1,000 poeng, like mye som et Maraton er verd.
              </p>

              <p>
                Lifestyle programmet lanseres i Abs-olute maraton og kun de som er med i aktivt Maraton vil
                automatisk få beholde poengene sine da man må aktivt delta i Maraton for å beholde poeng.
                Om du har vært med på Maraton tre eller flere ganger når Lifestyle lanserer og mener du burde 
                ha rett på poeng når du skal kjøpe Maraton kan du sende mail til ask@myluck.no og de vil hjelpe deg
                med å finne ut om du kvalifiserer for en Lifestyle tier.
              </p>

              <p>
                ***
                <br></br>
                <br></br>
                Alle ekstra rabatter Mila er så snill å gir ut vil ikke bety at du tilhører en høyere tier.
                Om du har mottatt en høyere rabatt så er dette ekstra og utenom den rabatten du har gjennom Lifestyle
                programmet. 
                <br></br>
                Når du skal kjøpe Maraton ved hjelp av Lifestyle programmet må dette gjøres gjennom en spesiell
                link som tilhører deg og din tier, den vil du motta via Mail eller sms fra MyLuck Teamet.
                <br></br>
                Disse linkene blir ikke sendt ut via DMs så om du mangler din link må du først sjekke søppelposten din
                om du enda ikke finner linken kan du ta kontakt på ask@myluck.no<br></br>
                Disse linkene blir sendt ut når salget starter eller kampanjer er aktive.
              </p>
            </article>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
