import Image from "next/image";
import { Card } from "../components/Card";
import { Section } from "../components/Section";
import { Container } from "@/app/components/Container";

export function BenefitsCard() {
  return (
    <Section className="py-9 lg:flex lg:justify-center">
      <Container>
        <Card className="lg:max-w-[550px]">
          <Image
            src="/benefit-card.png"
            height={530}
            width={371}
            alt="benefit card"
          />
          {/* <div className="space-y-7">
            <BenefitRow
              iconPath="/benefits/benefit-icon-1.svg"
              text="Se synlige resultater før sommeren og få mer energi"
            />
            <BenefitRow
              iconPath="/benefits/benefit-icon-2.svg"
              text="Få bedre resultater med en matplan som er lett å følge"
            />
            <BenefitRow
              iconPath="/benefits/benefit-icon-3.svg"
              text="Hold oppe motivasjonen gjennom maratonet med damer som har samme mål som deg"
            />
            <Image
              src="/benefits/benefit-graph.svg"
              alt="icon"
              width={317}
              height={215}
              className="mt-1"
            />
          </div>
          <div className="mt-9">
            <h3 className="text-center font-sans text-[20px] leading-[24px] text-black/80 font-medium">
              Få synlige resultater <br /> innen 19. mai
            </h3>
          </div> */}
        </Card>
      </Container>
    </Section>
  );
}

interface BenefitRowProps {
  iconPath: string;
  text: string;
}

function BenefitRow({ iconPath, text }: BenefitRowProps) {
  return (
    <div className="flex items-start">
      <Image
        src={iconPath}
        alt="icon"
        width={32}
        height={32}
        className="mt-1"
      />
      <p className="font-sans text-black/70 text-base ml-5">{text}</p>
    </div>
  );
}
