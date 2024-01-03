import { AppPreview } from "@/app/sections/AppPreview";
import { CTA } from "@/app/sections/CTA";
import { FAQ } from "@/app/sections/FAQ";
import { Hero } from "@/app/sections/Hero";
import { MyLuck } from "@/app/sections/MyLuck";
import { Testimonials } from "@/app/sections/Testimonials";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <MyLuck />
      <AppPreview />
      <CTA className="pt-0 md:pt-0 lg:pt-0" />
      <Testimonials />
      <CTA />
      <FAQ />
      <CTA />
    </main>
  );
}
