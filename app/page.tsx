import { Container } from "@/app/components/Container";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { MarathonIncludes } from "@/app/components/pages/M4PricingPage/marathon-includes";
import { BenefitsCard } from "@/app/sections/BenefitsCard";
import { Hero } from "@/app/sections/Hero";
import { NavigationalCTA } from "@/app/sections/NavigationalCTA";
import { Testimonials } from "@/app/sections/Testimonials";
import { MarathonBenefits } from "./sections/MarathonBenefits";
import { ParticipantsReview } from "./sections/ParticipantsReview";
import { WhatYouGet } from "./sections/WhatYouGet";
import { WhyMyLuck } from "./sections/WhyMyLuck";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-[#F7F6F6]">
        <Hero />
        <NavigationalCTA className="pt-12 md:pt-0 lg:pt-20 pb-3 lg:pb-3" />
        <MarathonBenefits />
        <WhyMyLuck />
        <Container className="!max-w-[800px] mb-3">
          <MarathonIncludes className="max-w-[800px]" />
        </Container>
        <WhatYouGet />
        <ParticipantsReview />
        <NavigationalCTA className="pt-0 md:pt-0 lg:pt-0" />
        <Testimonials />
        <BenefitsCard />
        <NavigationalCTA className="pt-10 md:pt-10 lg:pt-10" />
        {/* <FAQ /> */}

        {/* <MyLuck /> */}
        {/* <AppPreview /> */}
        {/* <CTA /> */}
      </main>
      <Footer />
    </>
  );
}
