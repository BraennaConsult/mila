import Image from "next/image";
import { Container } from "../components/Container";
import { Section } from "../components/Section";
import { cn } from "../utils";

export function IncludedInPlans({ className }: { className?: string }) {
  return (
    <Section className={cn("flex justify-center items-center py-0", className)}>
      <Container className="w-full space-y-8 px-2 lg:max-w-[800px]">
        <div className="grid grid-cols-5 items-baseline">
          <h3 className="col-span-3 text-black/80 font-sans text-[20px] font-medium">
            Planene inkluderer
          </h3>
          <p className="col-span-1 text-black/80 font-sans text-[14px] font-light">
            Premium
          </p>
          <p className="col-span-1 text-black/80 font-sans text-[14px] font-light">
            Inner circle
          </p>
        </div>
        <div className="">
          {data.map((group) => (
            <div key={group.title} className="my-8">
              <div className="space-y-6">
                {group.rows.map((row) => (
                  <RowItem key={row.text} {...row} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
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
    return (
      <Image
        width={19}
        height={19}
        src="/checkmark.svg"
        alt="Inkludert i planen"
      />
    );
  }

  return (
    <Image
      width={19}
      height={19}
      src="/not-included.svg"
      alt="Ikke inkludert i planen"
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
    title: "Planer",
    rows: [
      {
        text: "MyLuck treningsapp (iOS og Android)",
        premium: true,
        innerCircle: true,
      },
      {
        text: "Personlige kalori- og makromål",
        premium: true,
        innerCircle: true,
      },
      {
        text: "21 unike daglige måltidsplaner tilpasset dine kalorimål",
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
        text: "Tilgang til treningsappen",
        premium: true,
        innerCircle: true,
      },
      {
        text: "Tracker for sunne vaner",
        premium: true,
        innerCircle: true,
      },
      {
        text: "Annenhver uke live seminarer og spørsmål og svar med meg",
        premium: true,
        innerCircle: true,
      },
      {
        text: "Hyggelig fellesskap i private Instagram-grupper",
        premium: true,
        innerCircle: true,
      },
      {
        text: "Ukentlig innsjekk i DM",
        premium: false,
        innerCircle: true,
      },
      {
        text: "Gjennomgang av fremgangsbilder med deg i DM",
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
        text: "Alle treningsspørsmål besvart 1-til-1 i DM",
        premium: false,
        innerCircle: true,
      },
    ],
  },
];
