import Image from "next/image";
import { Container } from "../components/Container";
import { Section } from "../components/Section";
import { cn } from "../utils";

export function IncludedInPlans() {
  return (
    <Section className="flex justify-center items-center py-0">
      <Container className="w-full space-y-8 px-2 lg:max-w-[800px]">
        {/* <h2>Plans include</h2> */}
        {/* <div className="grid grid-cols-4 gap-4"> */}
        {/* <RowItem
          text="I will setup your personalized calorie & macro goals"
          premium={true}
          innerCircle={true}
        /> */}
        <RowsHeader />
        {/* <RowItem
          text="MyLuck-appen (iOS & Android)"
          premium={true}
          innerCircle={true}
        /> */}
        <MapRows />
        {/* </div> */}
      </Container>
    </Section>
  );
}

function RowsHeader() {
  return (
    <div className="grid grid-cols-5 items-baseline">
      <h3 className="col-span-3 text-black/80 font-sans text-[20px] font-medium">
        Pakkene inneholder
      </h3>
      <p className="col-span-1 text-black/80 font-sans text-[14px] font-light">
        Premium
      </p>
      <p className="col-span-1 text-black/80 font-sans text-[14px] font-light">
        Inner circle
      </p>
    </div>
  );
}

function MapRows() {
  return (
    <div className="">
      {data.map((group) => (
        <div key={group.title} className="my-8">
          {/* <h3 className="text-black/80 font-sans text-[18px] leading-[24px] font-semibold mb-[26px]">
            {group.title}
          </h3> */}
          <div className="mb-6">
            <RowItem
              text="MyLuck-appen (iOS & Android)"
              premium={true}
              innerCircle={true}
            />
          </div>
          <div className="space-y-6">
            {group.rows.map((row) => (
              <RowItem key={row.text} {...row} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function RowItem({ text, premium, innerCircle }: Row) {
  return (
    <div className="grid grid-cols-5 items-start">
      <p
        className={cn(
          "col-span-3 text-black/80 font-sans text-[18px] font-light",
          !premium && "font-bold"
        )}
      >
        {text}
      </p>
      <div className="col-span-1 mt-[5px] flex justify-center">
        <CheckMark checked={premium} />
      </div>
      <div className="col-span-1 mt-[5px] flex justify-center">
        <CheckMark checked={innerCircle} />
      </div>
    </div>
  );
}

function CheckMark({ checked }: { checked: boolean }) {
  if (checked) {
    // return <div className="w-4 h-4 bg-black rounded-full"></div>;
    return (
      <Image
        // className="absolute bottom-[26px] w-1/2 lg:w-2/5"
        width={19}
        height={19}
        src="/checkmark.svg"
        alt="Included in plan"
      />
    );
  }

  return (
    <Image
      width={19}
      height={19}
      src="/not-included.svg"
      alt="Not included in plan"
    />
  );
}

type Row = {
  text: string;
  premium: boolean;
  innerCircle: boolean;
};

type Group = {
  title: string;
  rows: Row[];
};

const data: Group[] = [
  {
    title: "Ernæring",
    rows: [
      {
        text: "Jeg setter opp dine personlige kalori- og makro-mål",
        premium: true,
        innerCircle: true,
      },
      {
        text: "21 unike, daglige måltidsplaner tilpasset dine kalorimål",
        premium: true,
        innerCircle: true,
      },
      {
        text: "8-ukers treningsprogram",
        premium: true,
        innerCircle: true,
      },

      {
        text: "Veiledede hjemmetreningsøkter",
        premium: true,
        innerCircle: true,
      },

      {
        text: "Habit tracker for å forbedre din fysiske og mentale helse",
        premium: true,
        innerCircle: true,
      },

      {
        text: "Liveseminarer og Q&A med meg annenhver uke",
        premium: true,
        innerCircle: true,
      },
      {
        text: "Støttende og motiverende fellesskap i private Instagram-grupper",
        premium: true,
        innerCircle: true,
      },
      {
        text: "Check-ins fra meg i DM hver uke",
        premium: false,
        innerCircle: true,
      },
      {
        text: "Tilbakemelding på fremgangsbildene dine i DM",
        premium: false,
        innerCircle: true,
      },
      {
        text: "Personlig motivasjon i DM",
        premium: false,
        innerCircle: true,
      },
      {
        text: "Jeg er der for deg hele veien og svarer på alle spørsmålene dine 1-til-1",
        premium: false,
        innerCircle: true,
      },

      {
        text: "Alle treningsspørsmålene dine svarer jeg på 1-til-1 i DM",
        premium: false,
        innerCircle: true,
      },
    ],
  },
];
// const data: Group[] = [
//   {
//     title: "Ernæring",
//     rows: [
//       {
//         text: "Jeg setter opp dine personlige kalori- og makro-mål",
//         premium: true,
//         innerCircle: true,
//       },
//       {
//         text: "21 unike, daglige måltidsplaner tilpasset dine kalorimål",
//         premium: true,
//         innerCircle: true,
//       },
//       {
//         text: "Liveseminar om kaloritelling",
//         premium: true,
//         innerCircle: true,
//       },
//       {
//         text: "Liveseminar om overspising",
//         premium: true,
//         innerCircle: true,
//       },
//       {
//         text: "Handleliste så du aldri må tenke på hva du skal handle",
//         premium: true,
//         innerCircle: true,
//       },
//       {
//         text: "Lær hvordan du lager sunne og næringsrike frokoster, lunsjer og middager.",
//         premium: true,
//         innerCircle: true,
//       },
//       {
//         text: "Lær hvordan du kan lage sunn og næringsrik mat i en hektisk hverdag",
//         premium: true,
//         innerCircle: true,
//       },
//     ],
//   },
//   {
//     title: "Trening",
//     rows: [
//       {
//         text: "6-ukers treningsprogram",
//         premium: true,
//         innerCircle: true,
//       },

//       {
//         text: "Veiledede hjemmetreningsøkter",
//         premium: true,
//         innerCircle: true,
//       },
//       {
//         text: "PMS-treningsøkter",
//         premium: true,
//         innerCircle: true,
//       },
//       {
//         text: "Over 75 minutter med tøyevideoer",
//         premium: true,
//         innerCircle: true,
//       },
//       {
//         text: "Tilpass treningsøktene etter din uke og timeplan",
//         premium: true,
//         innerCircle: true,
//       },
//       {
//         text: "Tilgang til appen",
//         premium: true,
//         innerCircle: true,
//       },
//       {
//         text: "Habit tracker",
//         premium: true,
//         innerCircle: true,
//       },
//       {
//         text: "Alle treningsspørsmålene dine svarer jeg på 1-til-1 i DM",
//         premium: false,
//         innerCircle: true,
//       },
//     ],
//   },
//   {
//     title: "Fellesskapet",
//     rows: [
//       {
//         text: "Liveseminarer og Q&A med meg annenhver uke",
//         premium: true,
//         innerCircle: true,
//       },
//       {
//         text: "Støttende og motiverende fellesskap i private Instagram-grupper",
//         premium: true,
//         innerCircle: true,
//       },
//       {
//         text: "Motivasjonsvideoer fra meg i private Instagram-grupper",
//         premium: true,
//         innerCircle: true,
//       },
//       {
//         text: "Check-ins fra meg i DM hver uke",
//         premium: false,
//         innerCircle: true,
//       },
//       {
//         text: "Tilbakemelding på fremgangsbildene dine i DM",
//         premium: false,
//         innerCircle: true,
//       },
//       {
//         text: "Personlig motivasjon i DM",
//         premium: false,
//         innerCircle: true,
//       },
//       {
//         text: "Jeg er der for deg hele veien og svarer på alle spørsmålene dine 1-til-1",
//         premium: false,
//         innerCircle: true,
//       },
//     ],
//   },
//   {
//     title: "Vaner",
//     rows: [
//       {
//         text: "Habit tracker for å forbedre din fysiske og mentale helse",
//         premium: true,
//         innerCircle: true,
//       },
//       {
//         text: "Loggføring av mat",
//         premium: true,
//         innerCircle: true,
//       },
//     ],
//   },
// ];
