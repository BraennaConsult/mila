import { AppPreview } from "@/app/sections/AppPreview";
import { CTA } from "@/app/sections/CTA";
import { Hero } from "@/app/sections/Hero";
import { MyLuck } from "@/app/sections/MyLuck";
import { Testimonials } from "@/app/sections/Testimonials";

export default function Home() {
  return (
    <main className="">
      <Hero />
      {/* <div className="bg-radial-pink bg-left"> */}
      <MyLuck />
      <AppPreview />
      <CTA className="pt-0 md:pt-0 lg:pt-0" />
      {/* </div> */}
      <Testimonials />
      {/* <div className="bg-radial-pink [--position:90%]"> */}
      <CTA />
      {/* <FAQ /> */}
      {/* <CTA /> */}
      {/* </div> */}
    </main>
  );
}
