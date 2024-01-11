import { BlackHeader } from "@/app/components/BlackHeader";
import { Container } from "@/app/components/Container";
import { Footer } from "@/app/components/Footer";
import { Section } from "@/app/components/Section";
import { CONTACT_EMAIL, PHONE_NUMBER } from "@/constants";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <BlackHeader />
      <main>
        <Section>
          <Container className="lg:max-w-xl">
            <h1 className="text-2xl lg:text-3xl mb-10">Kontaktinformasjon</h1>
            <ul className="list-disc list-inside space-y-2">
              <li>Tifra AS, 926 756 435</li>
              <li className="space-y-1">
                <Link className="underline" href={`mailto:${CONTACT_EMAIL}`}>
                  {CONTACT_EMAIL}
                </Link>
              </li>
              <li>Hamrevegen 25 G, 5229 Kalandseidet, Norway</li>
              <li>
                <Link className="underline" href={`tel:${PHONE_NUMBER}`}>
                  {PHONE_NUMBER}
                </Link>
              </li>
            </ul>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
