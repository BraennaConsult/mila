import Image from "next/image";
import { Card } from "../components/Card";
import { Section } from "../components/Section";
import { Container } from "../components/Container";

export function WhatYouGet() {
  return (
    <Section className="py-0">
      <Container className="flex flex-col lg:flex-row gap-3">
        <Card className="flex flex-col items-center">
          <div className="w-[182px] h-[372px] relative">
            <Image
              src="/m4/workouts.png"
              alt="workouts"
              fill
              sizes="500px"
              className="object-contain"
            />
          </div>
          <span className="text-[20px] leading-[24px] text-center px-8 pt-8">
            Raske enkle treningsøkter som passer til en hektisk hverdag
          </span>
        </Card>
        <Card className="flex flex-col items-center">
          <div className="w-[182px] h-[372px] relative">
            <Image
              src="/m4/recipes.png"
              alt="workouts"
              fill
              sizes="500px"
              className="object-contain"
            />
          </div>
          <span className="text-[20px] leading-[24px] text-center px-8 pt-8">
            Over 200 utskiftbare oppskrifter, som passer perfekt inn i din
            matplan
          </span>
        </Card>
      </Container>
    </Section>
  );
}

// {
//   /* <h2 className="lg:max-w-l text-pretty mb-[40px] md:mb-32 text-[28px] lg:text-2xl text-black/80 text-center font-sans ">
//           Hva du får
//         </h2> */
// }
// {
//   /* <div className="gap-2 space-y-3 lg:gap-5 lg:space-y-0 lg:grid lg:grid-cols-2">
//           {cardData.map((data) => (
//             <BenefitCard key={data.alt} data={data} />
//           ))}
//           <BenefitCardWintPills />
//         </div> */
// }

// function BenefitCard({ data }: { data: CardDataSchema }) {
//   return (
//     <Card className="">
//       <div className="flex flex-col items-center space-y-8">
//         {data.type === "video" && (
//           <video
//             autoPlay
//             width="245"
//             loop
//             muted
//             playsInline
//             preload="auto"
//             controls={false}
//             id={data.src}
//           >
//             <source src={data.src} type="video/mp4" />
//             Sorry, your browser does not support embedded videos.
//           </video>
//         )}
//         {data.type === "image" && (
//           <Image src={data.src} alt={data.alt} width={245} height={382} />
//         )}
//         <p className="text-[20px] leading-[24px] text-center px-8">
//           {data.title}
//         </p>
//       </div>
//     </Card>
//   );
// }

// export function BenefitCardWintPills() {
//   return (
//     <Card className="overflow-hidden relative">
//       <div className="absolute inset-0 z-0">
//         <Image
//           src={"/radiant-background.svg"}
//           alt="cta background"
//           layout="fill"
//           objectFit="cover"
//         />
//       </div>
//       <div className="flex flex-col items-center space-y-2 z-10 relative">
//         {benefitPerkData2.map((data) => (
//           <BenefitPill key={data.title} title={data.title} />
//         ))}
//       </div>
//       <p className="text-[20px] leading-[24px] text-center px-8 mt-8">
//         Noen av temaene vi skal snakke om under webinar er
//       </p>
//     </Card>
//   );
// }

// function BenefitPill({ title }: { title: string }) {
//   return (
//     <div className="shadow-brand px-2 py-2 rounded-[24px] flex items-center bg-white">
//       <Image
//         src={"/radiant-checkmark.svg"}
//         alt={"Checkmark"}
//         width={34}
//         height={34}
//       />
//       <p className="text-[14px] mx-3">{title}</p>
//     </div>
//   );
// }

// interface CardDataSchema {
//   type: "video" | "image";
//   src: string;
//   alt: string;
//   title: string;
// }

// const cardData: CardDataSchema[] = [
//   {
//     // src: "/what-you-get/pro-in-gym.png",
//     type: "video",
//     src: "/video/pro-in-gym.mp4",
//     alt: "What you get",
//     title: "Raske enkle treningsøkter som passer til en hektisk hverdag",
//   },
//   {
//     type: "video",
//     src: "/video/meal-plan.mp4",
//     alt: "What you get",
//     title:
//       "Over 200 utskiftbare oppskrifter, som passer perfekt inn i din matplan",
//   },
//   {
//     type: "image",
//     src: "/what-you-get/instagram-group.png",
//     alt: "What you get",
//     title: "Gruppechat med andre deltakere for støtte, og delta i konkuranser",
//   },
//   // {
//   //   type: "video",
//   //   src: "/video/habbit-tracker.mp4",
//   //   alt: "What you get",
//   //   title: "Hold styr på de sunne vanene dine og redusér stress",
//   // },
// ];

// const benefitPerkData = [
//   {
//     title: "Veldefinert mage",
//   },
//   {
//     title: "Mindre fettprosent",
//   },
//   {
//     title: "Mindre hevelser og smerter",
//   },
//   {
//     title: "Veldefinerte glutes",
//   },
//   {
//     title: "Mer muskelmasse og styrke",
//   },
//   {
//     title: "Mer energi",
//   },
// ];

// const benefitPerkData2 = [
//   {
//     title: "Vakuum- og magetrening",
//   },
//   {
//     title: "Psykologi for suksess og å skape nye vaner",
//   },
//   {
//     title: "Live trening med Mila",
//   },
//   {
//     title: "Drøm stort og elsk deg selv",
//   },
//   {
//     title: "Takle en hektisk livsstil",
//   },
//   {
//     title: "Ha mer energi",
//   },
// ];
