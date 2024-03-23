import { Card } from "../components/Card";
import { Section } from "../components/Section";

export function MyPath() {
  return (
    <Section className="py-0 pb-12 lg:pt-0">
      <h3 className="font-sans text-lg text-center mb-8">
        I’ve walked this path myself. <br /> Now I want to walk it with you.
      </h3>
      <div className="flex justify-center rounded-[69px] overflow-hidden mx-6">
        <video
          width="350"
          loop
          autoPlay
          // onFocus={(e) => e.target.play()}
        >
          <source src="/video/Transformation.webm" type="video/webm" />
          Sorry, your browser does not support embedded videos.
        </video>
      </div>
    </Section>
  );
}
