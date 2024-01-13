"use client";

import { Container } from "@/app/components/Container";
import { Section } from "@/app/components/Section";
import { Disclosure, Transition } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

export function FAQ() {
  return (
    <Section className="bg-light-grey">
      <Container className="">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2>Ofte stilte spørsmål</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left">
                        <span className="text-md">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Transition
                      enter="transition duration-300 ease-out"
                      enterFrom="transform opacity-0"
                      enterTo="transform opacity-100"
                      leave="transition duration-300 ease-out"
                      leaveFrom="transform opacity-100"
                      leaveTo="transform opacity-0"
                    >
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-md text-light">{faq.answer}</p>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </Container>
    </Section>
  );
}
const faqs = [
  {
    question: "Hvem er dette for?",
    answer:
      "For deg som ønsker å ta kontrollen tilbake og nå de målene du alltid har hatt lyst til! Jeg vet hvor vanskelig det kan være å prioritere seg selv i en hektisk hverdag, men jeg klarte det - og nå vil jeg vise deg hvordan! Det skal være litt utfordrende, men skikkelig gøy og så utrolig lærerikt på veien!",
  },
  {
    question: "Hvordan fungerer det?",
    answer:
      "Dette er min helt egen app hvor dere får tilgang til maratonet. 12 uker med treningsprogram som gjør at du aldri er i tvil om hva du skal gjøre, alle mine oppskrifter som vil hjelpe deg og få energien du trenger i hverdagen og ikke føle du går på diett.",
  },
  {
    question: "Hva er lengden på programmet?",
    answer:
      "Det nye maratonet er utvidet til hele 3 måneder! Grunnen til dette er fordi det tar fra 21 til 66 dager for å bygge gode vaner som faktisk varer! Derfor ønsker jeg å ta med damene mine på en reise som faktisk kan være en langvarig endring i livet ditt!",
  },
  {
    question: "Er det binding?",
    answer:
      "Når du melder deg på varer maratonet i 3 måneder - målet mitt er å sikre deg at selv når det blir tungt og vanskelig er jeg og hele jentegjengen her for å heie deg fremover!",
  },
  {
    question: "Hvordan kommer jeg i gang?",
    answer:
      "Hvis du har sikret deg en plass blir du lagt til en gruppe med andre likesinnede damer og der vil du får mer informasjon om oppstart.",
  },
  {
    question: "Får jeg tett oppfølging?",
    answer:
      "Det som er vakkert med vår gjeng er at her støtter alle hverandre og jobber sammen mot målet! Jeg kommer også til å se hver enkelt og gi personlige justeringer, mål og ekstra vaner som bare er for deg slik at du kommer lengst mulig og føler deg sett på veien!",
  },
  {
    question: "Kan jeg være med selv om jeg har allergier?",
    answer:
      "I oppskriftssamlingen inne på appen er det en rekke forskjellige retter hvor jeg har prøvd og ta høyde for alle folks forskjellige preferanser og eventuelle allergier - du kan også spørre om råd fra meg og resten av gjengen i gruppen om tips for hvordan du kan tilpasse de ulike rettene dine allergier!",
  },
  // {
  //   question: "Er det mulig med delbetaling?",
  //   answer: "Ja, du kan delbetale med Klarna!",
  // },
];
