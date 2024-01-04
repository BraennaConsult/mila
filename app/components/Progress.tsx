import { AnimatedNumber } from "@/app/components/AnimatedNumber";
import { DotsProgressBar } from "@/app/components/DotsProgressBar";
import { cn } from "@/app/utils";
import { SPOTS_AVAILABLE, SPOTS_LEFT } from "@/constants";

interface Props {
  progress: number;
  className?: string;
}

export function Progress({ progress, className }: Props) {
  const spotsFilled = ((SPOTS_AVAILABLE - SPOTS_LEFT) / SPOTS_AVAILABLE) * 100;

  return (
    <div className={cn("flex flex-col space-y-2", className)}>
      <span className="text-mid-grey">Ledige plasser</span>
      <div className="space-x-6 text-[50px] lg:text-[60px] font-serif flex items-start">
        <AnimatedNumber value={progress} />
        <DotsProgressBar progressPercentage={spotsFilled} totalDots={30} />
      </div>
    </div>
  );
}
