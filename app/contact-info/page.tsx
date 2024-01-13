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
              <li>
                {COMPANY_NAME}, {COMPANY_NUMBER}
              </li>
              <li className="space-y-1">
                <Link className="underline" href={`mailto:${CONTACT_EMAIL}`}>
                  {CONTACT_EMAIL}
                </Link>
              </li>
              <li>{COMPANY_ADDRESS}</li>
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
