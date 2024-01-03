import { Container } from "@/app/components/Container";
import { Section } from "@/app/components/Section";
import Link from "next/link";

export default function Page() {
  return (
    <Section>
      <Container className="lg:max-w-xl">
        <h1 className="text-2xl lg:text-3xl mb-10">Terms of service</h1>
        <p>
          Terms and conditions containing shipping information, expected
          delivery time, shipping policy and a return policy aligned with the
          Distance Contracts Act with information about 14 day right to return.
          If shipping fees are added, the price needs to be clearly specified.{" "}
          <Link
            className="font-bold underline text-pink-loud"
            target="blank"
            href="https://gymfluence.notion.site/Term-and-Conditions-351bbb33f17047f2ab1dfbd3a610913f?pvs=4](https://www.notion.so/Term-and-Conditions-351bbb33f17047f2ab1dfbd3a610913f?pvs=21"
          >
            Read our detailed terms and conditions here.
          </Link>
        </p>
      </Container>
    </Section>
  );
}
