import Link from "next/link";
import { Card } from "../components/Card";
import { Section } from "../components/Section";
import Image from "next/image";
import { ROUTES } from "@/constants";
import { Container } from "@/app/components/Container";

export function Guarantee() {
  return (
    <Section className="py-0 pb-8 lg:flex lg:justify-center lg:pt-0">
      <Container>
        <Card className="px-8 py-8 mx-0 lg:max-w-[550px]">
          <div className="rounded-[24px] space-y-5">
            {/* <div className="border-[1px] rounded-[24px] border-black/10 px-4 py-8 space-y-5"> */}
            <h3 className="font-sans text-black/80 text-[20px] font-semibold">
              Får du ikke resultater, får du pengene dine tilbake.
            </h3>
            <p className="text-[14px]">
              Jeg er trygg på kvaliteten av maratonet og resultatene det gir.
              Hundrevis av flotte damer har oppnåd resultater med meg. Hvis du
              er klar for nå målene dine en gang for alle, så er dette et
              risikofritt tilbud til deg. Jeg garanterer at du vil få synlige
              resultater. Følger du programmet og ikke får resultater, så får du
              pengene dine tilbake innen 30 dager etter at du tar kontakt. Du må
              kunne vise at du har fulgt programmet.
            </p>
            <div className="flex justify-between">
              <div className="mr-4">
                <p className="text-[14px]">Les mer om mine</p>
                <Link
                  href={ROUTES.WARRANTY}
                  className="text-blue-600 text-[14px]"
                >
                  betingelser for pengene-tilbake-garantien.
                </Link>
              </div>
              <Image
                src={"/warranty.svg"}
                alt="warrenty"
                width={71}
                height={51}
              />
            </div>
          </div>
        </Card>
      </Container>
    </Section>
  );
}
