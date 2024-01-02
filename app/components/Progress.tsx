import { AnimatedNumber } from "@/app/components/AnimatedNumber";
import { DotsProgressBar } from "@/app/components/DotsProgressBar";
import { SPOTS_AVAILABLE, SPOTS_LEFT } from "@/constants";

interface Props {
  progress: number;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
}

export function Progress({ progress, setProgress }: Props) {
  const spotsFilled = ((SPOTS_AVAILABLE - SPOTS_LEFT) / SPOTS_AVAILABLE) * 100;

  return (
    <div className="flex flex-col">
      <span className="text-mid-grey">Ledige plasser</span>
      <div className="space-x-6 text-[50px] font-serif flex items-start">
        <AnimatedNumber value={progress} />
        <div>
          <DotsProgressBar progressPercentage={spotsFilled} totalDots={30} />
        </div>
      </div>
    </div>
  );
}
