import { BlackHeader } from "@/app/components/BlackHeader";
import { Container } from "@/app/components/Container";
import { Footer } from "@/app/components/Footer";
import { Section } from "@/app/components/Section";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <BlackHeader />
      <main>
        <Section>
          <Container className="lg:max-w-xl">
            <h1 className="text-2xl lg:text-3xl mb-10">Kontaktinformasjon</h1>
            <ul className="list-disc list-inside space-y-1">
              <li>Gymfluence OÜ</li>
              <li className="space-y-1">
                <span>jk@gymfluence.io</span>
                <ul className="list-disc list-inside ml-5 space-y-1">
                  <li>Paepargi tn 43-28, 11417 Tallinn, Estonia</li>
                  <li>16864978</li>
                </ul>
              </li>
              <li>+37255574987</li>
            </ul>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
