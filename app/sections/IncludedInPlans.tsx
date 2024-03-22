import Image from "next/image";
import { Container } from "../components/Container";
import { Section } from "../components/Section";

export function IncludedInPlans() {
  return (
    <Section className="flex justify-center items-center py-0">
      <Container className="w-full space-y-8 px-2">
        {/* <h2>Plans include</h2> */}
        {/* <div className="grid grid-cols-4 gap-4"> */}
        {/* <RowItem
          text="I will setup your personalized calorie & macro goals"
          premium={true}
          innerCircle={true}
        /> */}
        <RowsHeader />
        <RowItem
          text="Myluck fitness app (iOS & Android)"
          premium={true}
          innerCircle={true}
        />
        <MapRows />
        {/* </div> */}
      </Container>
    </Section>
  );
}

function RowsHeader() {
  return (
    <div className="grid grid-cols-5 items-baseline">
      <h3 className="col-span-3 text-black/80 font-sans text-[28px] font-medium">
        Plans include
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
        <div key={group.title} className="my-16">
          <h3 className="text-black/80 font-sans text-[18px] leading-[24px] font-medium mb-[26px]">
            {group.title}
          </h3>
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
      <p className="col-span-3 text-black/80 font-sans text-[18px] font-light">
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
    title: "Nutrition",
    rows: [
      {
        text: "I will setup your personalized calorie & macro goals",
        premium: true,
        innerCircle: true,
      },
      {
        text: "21 unique daily meal plans tailored for your calorie goals",
        premium: true,
        innerCircle: true,
      },
      {
        text: "Calorie counting lecture",
        premium: true,
        innerCircle: true,
      },
      {
        text: "Psychology of over-eating lecture",
        premium: true,
        innerCircle: true,
      },
      {
        text: "Grocery shopping lists",
        premium: true,
        innerCircle: true,
      },
      {
        text: "Learn more about breakfast, lunch and dinner",
        premium: true,
        innerCircle: true,
      },
      {
        text: "Learn how you can meal prep to eat healthy in a hectic everyday life",
        premium: true,
        innerCircle: true,
      },
    ],
  },
  {
    title: "Training",
    rows: [
      {
        text: "6-weeks gym training program",
        premium: true,
        innerCircle: true,
      },

      {
        text: "Guided home workouts",
        premium: true,
        innerCircle: true,
      },
      {
        text: "PMS workouts",
        premium: true,
        innerCircle: true,
      },
      {
        text: "Over 75 minutes of guided stretching videos",
        premium: true,
        innerCircle: true,
      },
      {
        text: "Adjust the workouts to fit your week",
        premium: true,
        innerCircle: true,
      },
      {
        text: "Access to fitness app",
        premium: true,
        innerCircle: true,
      },
      {
        text: "Healthy habbits tracker",
        premium: true,
        innerCircle: true,
      },
      {
        text: "All questions about training answered 1 to 1 in DMs",
        premium: false,
        innerCircle: true,
      },
    ],
  },
  {
    title: "Community",
    rows: [
      {
        text: "Bi-weekly live seminars and QAs with me",
        premium: true,
        innerCircle: true,
      },
      {
        text: "Cosy community in Private Instagram groups",
        premium: true,
        innerCircle: true,
      },
      {
        text: "Motivational videos from me in Private Instagram groups",
        premium: true,
        innerCircle: true,
      },
      {
        text: "Weekly check-in in DM",
        premium: false,
        innerCircle: true,
      },
      {
        text: "Progress photo review with you in DM",
        premium: false,
        innerCircle: true,
      },
      {
        text: "Personal motivation in your DM",
        premium: false,
        innerCircle: true,
      },
      {
        text: "I am there for you all the way and answer all your questions 1 to 1",
        premium: false,
        innerCircle: true,
      },
    ],
  },
  {
    title: "Habbits",
    rows: [
      {
        text: "Habbit tracker to improve your physical & mental health",
        premium: true,
        innerCircle: true,
      },
      {
        text: "Food log",
        premium: true,
        innerCircle: true,
      },
    ],
  },
];
