import { Card } from "../components/Card";
import { Section } from "../components/Section";

export function MyPath() {
  return (
    <Section className="py-0 pb-12 lg:pt-0">
      <h3 className="font-sans text-lg text-center mb-8">
        Jeg har gjort dette selv. <br /> Nå vil jeg at vi skal gjøre det sammen.
      </h3>
      <div className="flex justify-center rounded-[69px] overflow-hidden mx-6">
        <video
          muted
          loop
          autoPlay
          playsInline
          preload="auto"
          controls={false}
          id={"transformation"}
          // onFocus={(e) => e.target.play()}
        >
          <source src="/video/Transformation.mp4" type="video/mp4" />
          Sorry, your browser does not support embedded videos.
        </video>
      </div>
    </Section>
  );
}
