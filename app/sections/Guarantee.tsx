import Link from "next/link";
import { Card } from "../components/Card";
import { Section } from "../components/Section";
import Image from "next/image";

export function Guarantee() {
  return (
    <Section className="py-0 pb-8">
      <Card className="px-8 py-8">
        <div className="border-[1px] rounded-[24px] border-black/10 px-4 py-8 space-y-5">
          <h3 className="font-sans text-black/80 text-[20px]">
            100% Money-Back Guarantee
          </h3>
          <p className="text-[14px]">
            I’m confident in the quality of my service quality and it&apos;s
            results — hundreds of women have reached their goals with me. So, if
            you&apos;re ready to reach your goals, it&apos;s a risk-free offer.
            I guarantee you&apos;ll see visible results, or you&apos;ll receive
            a full refund within 30 days of your enquiry. You will need to
            demonstrate that you have followed the program.
          </p>
          <div className="flex justify-between">
            <div className="mr-4">
              <p className="text-[14px]">
                Find more about the applicable limitations in my{" "}
              </p>
              <Link href={"/warrenty"} className="text-blue-600 text-[14px]">
                money-back guarantee policy.
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
    </Section>
  );
}
