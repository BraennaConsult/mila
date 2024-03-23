import Image from "next/image";
import { Card } from "../components/Card";
import { Section } from "../components/Section";
import { Container } from "../components/Container";

interface Props {
  className?: string;
}

export function WhatYouGet({ className }: Props) {
  return (
    <Section>
      <Container>
        <h2 className="lg:max-w-l text-pretty mb-[40px] md:mb-32 text-[28px] lg:text-2xl text-black/80 text-center font-sans ">
          Hva du får
        </h2>
        <div className="gap-3 lg:gap-5 lg:space-y-0 lg:grid lg:grid-cols-2">
          {cardData.map((data) => (
            <BenefitCard key={data.alt} data={data} />
          ))}
          <BenefitCardWintPills />
        </div>
      </Container>
    </Section>
  );
}

function BenefitCard({ data }: { data: CardDataSchema }) {
  return (
    <Card className="">
      <div className="flex flex-col items-center space-y-8">
        {data.type === "video" && (
          <video autoPlay width="245" loop>
            <source src={data.src} type="video/mp4" />
            Sorry, your browser does not support embedded videos.
          </video>
        )}
        {data.type === "image" && (
          <Image src={data.src} alt={data.alt} width={245} height={382} />
        )}
        <p className="text-[20px] max-w-[245px] text-center">{data.title}</p>
      </div>
    </Card>
  );
}

function BenefitCardWintPills() {
  return (
    <Card className="overflow-hidden relative">
      <div className="absolute inset-0 z-0">
        <Image
          src={"/radiant-background.svg"}
          alt="cta background"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col items-center space-y-2 z-10 relative">
        {benefitPerkData.map((data) => (
          <BenefitPill key={data.title} title={data.title} />
        ))}
      </div>
      <div className="flex flex-col items-center mt-12 z-10 relative">
        <p className="text-[20px] max-w-[245px] text-center text-black/80 font-sans leading-6">
          Bli med over 100+ damer som har fått resultater
        </p>
      </div>
    </Card>
  );
}

function BenefitPill({ title }: { title: string }) {
  return (
    <div className="shadow-brand px-2 py-2 rounded-[24px] flex items-center bg-white">
      <Image
        src={"/radiant-checkmark.svg"}
        alt={"Checkmark"}
        width={34}
        height={34}
      />
      <p className="text-[14px] mx-3">{title}</p>
    </div>
  );
}

interface CardDataSchema {
  type: "video" | "image";
  src: string;
  alt: string;
  title: string;
}

const cardData: CardDataSchema[] = [
  {
    // src: "/what-you-get/pro-in-gym.png",
    type: "video",
    src: "/video/pro-in-gym.mp4",
    alt: "What you get",
    title: "Bli trygg på treningssenteret",
  },
  {
    type: "video",
    src: "/video/meal-plan.mp4",
    alt: "What you get",
    title: "Personlige måltidsplaner som hjelper deg nå målene dine",
  },
  {
    type: "image",
    src: "/what-you-get/instagram-group.png",
    alt: "What you get",
    title: "Instagram-gruppe for støtte og motivasjon",
  },
  {
    type: "video",
    src: "/video/habbit-tracker.mp4",
    alt: "What you get",
    title: "Hold styr på de sunne vanene dine og redusér stress",
  },
];

const benefitPerkData = [
  {
    title: "Veldefinert mage",
  },
  {
    title: "Mindre fettprosent",
  },
  {
    title: "Mindre oppblåst og smerter",
  },
  {
    title: "Veldefinerte glutes",
  },
  {
    title: "Mer muskelmasse og styrke",
  },
  {
    title: "Mer energi",
  },
];
