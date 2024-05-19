import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { AppPreview } from "@/app/sections/AppPreview";
import { CTA } from "@/app/sections/CTA";
import { FAQ } from "@/app/sections/FAQ";
import { Hero } from "@/app/sections/Hero";
import { MyLuck } from "@/app/sections/MyLuck";
import { Testimonials } from "@/app/sections/Testimonials";
import { MarathonBenefits } from "./sections/MarathonBenefits";
import { WhyMyLuck } from "./sections/WhyMyLuck";
import { ParticipantsReview } from "./sections/ParticipantsReview";
import { WhatYouGet } from "./sections/WhatYouGet";
import { NavigationalCTA } from "@/app/sections/NavigationalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-[#F7F6F6]">
        <Hero />
        <NavigationalCTA className="pt-12 md:pt-0 lg:pt-20" />
        <MarathonBenefits />
        <WhyMyLuck />
        <ParticipantsReview />
        <WhatYouGet />
        <NavigationalCTA className="pt-0 md:pt-0 lg:pt-0" />
        <Testimonials />
        <NavigationalCTA className="pt-0 md:pt-0 lg:pt-0" />
        {/* <FAQ /> */}

        {/* <MyLuck /> */}
        {/* <AppPreview /> */}
        {/* <CTA /> */}
      </main>
      <Footer />
    </>
  );
}
